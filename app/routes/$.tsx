import type { LoaderArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import type { NodePage, NodeArticle } from '~/@types/gen/schema';

import getToken from '~/drupal/auth.server'
import { getClient } from '~/drupal/client.server'
import { 
  MediaImageFragment, 
  ParagraphCodeBlockFragment,
  ParagraphHeroCtaFragment,
  ParagraphHeroTextFragment,
  ParagraphImageFragment,
  ParagraphTextFragment,
} from "~/drupal/fragments.server";

import NodeArticleComponent from "~/components/node/NodeArticle";
import NodePageComponent from "~/components/node/NodePage";

const NodeTypeComponents = new Map();
NodeTypeComponents.set('NodeArticle', NodeArticleComponent);
NodeTypeComponents.set('NodePage', NodePageComponent);

const isValidNode = (node: NodePage | NodeArticle | undefined) => {
  return node &&
    node !== undefined &&
    Array.from(NodeTypeComponents.keys()).includes(node.__typename);
}

export const loader = async ({ params }: LoaderArgs) => {
  const path = params["*"] as string;
  const token = await getToken();
  const drupalClient = getClient(token)

  const { nodeByPath : node } = await drupalClient.query({
    nodeByPath: {
      __args: {
        path: path,
      },
      __typename: true,
      on_NodeArticle: {
        id: true,
        title: true,
        path: true,
        created: true,
        image: {
          ...MediaImageFragment,
        },
        author: {
          displayName: true,
          picture: {
            ...MediaImageFragment,
          }
        },
        components: {
          __typename: true,
          on_ParagraphCodeBlock: {
            ...ParagraphCodeBlockFragment,
          },
          on_ParagraphHeroCta: {
             ...ParagraphHeroCtaFragment,
          },
          on_ParagraphHeroText: {
            ...ParagraphHeroTextFragment,
          },
          on_ParagraphText: {
            ...ParagraphTextFragment,
          },
          on_ParagraphImage: {
            ...ParagraphImageFragment,
          }
        }
      },
      on_NodePage: {
        id: true,
        title: true,
        path: true,
        showTitle: true,
        components: {
          __typename: true,
          on_ParagraphHeroCta: {
             ...ParagraphHeroCtaFragment,
          },
          on_ParagraphHeroText: {
            ...ParagraphHeroTextFragment,
          },
          on_ParagraphText: {
            ...ParagraphTextFragment,
          },
          on_ParagraphImage: {
            ...ParagraphImageFragment,
          }
        }
      }
    }
  })

  if (!isValidNode(node)) {
    return redirect("/404");
  }

  return json({ node }, { status: 200 });
};

export default function Index() {
  const { node } =  useLoaderData() as { node: NodePage | NodeArticle };
  const Component = NodeTypeComponents.get(node.__typename);

  if (!node || !Component) {
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      <Component node={node} />
    </div>
  );
}
