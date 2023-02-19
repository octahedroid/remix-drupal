import drupalAuthClient from "drupal-auth-client"

const getToken = async () => {
  const client = await drupalAuthClient(
    DRUPAL_AUTH_URI,
    "client_credentials",
    {
      clientId: DRUPAL_CLIENT_ID,
      clientSecret: DRUPAL_CLIENT_SECRET,
    },
    {
      fetcher: fetch,
    }
  )

  return `${client.token_type} ${client.access_token}`
}

export default getToken
