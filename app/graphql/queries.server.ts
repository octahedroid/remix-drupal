import { drupalClient } from "./client";
import { nodeByPathQuery, nodeArticlesTeaserQuery } from "./queries";

export const nodeByPath = async (path: string) => {
  const client = await drupalClient();
  const {nodeByPath} = await client.request(nodeByPathQuery, { path });
  
  return nodeByPath;
};


export const nodeArticlesTeaser = async () => {
  const client = await drupalClient();
  const { nodeArticlesTeaser } = await client.request(nodeArticlesTeaserQuery);

  return nodeArticlesTeaser;
};
