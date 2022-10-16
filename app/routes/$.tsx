import type { LoaderFunction } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import NodeArticle from "~/components/node/NodeArticle";
import NodePage from "~/components/node/NodePage";
import { nodeByPath } from "~/graphql/queries.server";

const NodeTypes = {
  NodeArticle: NodeArticle,
  NodePage: NodePage,
};

export const loader: LoaderFunction = async ({ params }) => {
  const path = params["*"] as string;
  const node = await nodeByPath(path);

  if (node === null) {
    return redirect("/404");
  }

  return json({ node }, { status: 200 });
};

export default function Index() {
  const { node } = useLoaderData() as { node: { __typename: 'NodeArticle' | 'NodePage' } };
  const Component = NodeTypes[node.__typename];
  return (
    <div>
      {NodeTypes[node.__typename] ? (
        <Component node={node} />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
}
