import { drupalClient } from "./client";
import { nodeByPathQuery, nodeArticlesTeaserQuery } from "./queries";

export const nodeByPath = async (path: string) => {
  const client = await drupalClient();
  const data = await client.request(nodeByPathQuery, { path });
  
  return data;
};


export const nodeArticlesTeaser = async () => {
  const client = await drupalClient();
  const { nodeArticlesTeaser } = await client.request(nodeArticlesTeaserQuery);

  return nodeArticlesTeaser;
};
