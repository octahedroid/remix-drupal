import drupalGraphQLClient from "drupal-graphql-client"

export const drupalClient = async () => {
  return await drupalGraphQLClient(
    DRUPAL_URI,
    "client_credentials",
    {
      clientId: DRUPAL_CLIENT_ID,
      clientSecret: DRUPAL_CLIENT_SECRET,
    },
    {
      fetcher: fetch,
    }
  );
}