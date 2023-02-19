import { createClient } from '~/@types/gen'

export const getClient = (token: string) => {
  return createClient({
    url: DRUPAL_GRAPHQL_URI,
    headers: {
      'Authorization': `${token}`,
    },
  })
}
