import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { nodeArticlesTeaser } from "~/graphql/queries.server";
import NodeArticleTeaser from "~/components/node/NodeArticleTeaser";

export const loader: LoaderFunction = async () => {
  const nodeArticles = await nodeArticlesTeaser();

  return json({ nodes: nodeArticles.nodes }, { status: 200 });
};

export default function Index() {
  const { nodes } = useLoaderData();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
      {nodes.map((node:any) => (
        <NodeArticleTeaser key={node.id} {...node} />
      ))}
    </div>
  );
}
