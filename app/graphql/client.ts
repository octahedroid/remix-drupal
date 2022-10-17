import { GraphQLClient } from "graphql-request";
const FormData = require("form-data");

interface OAuth {
  token_type: string;
  expires_in: number;
  access_token: string;
}

const fetchAuth = async (
  uri: string,
  clientId: string,
  clientSecret: string
) => {
  const formData = new FormData();
  formData.append("grant_type", "client_credentials");
  formData.append("client_id", clientId);
  formData.append("client_secret", clientSecret);
  const response = await fetch(`${uri}/oauth/token`, {
    method: "post",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (response.ok) {
    const json = (await response.json()) as OAuth;
    return json;
  }

  if (!response.ok) {
    const json = (await response.json()) as OAuth;
    return json;
  }

  return false;
};

const calculateAuthHeaders = async (
  uri: string,
  clientId: string,
  clientSecret: string
) => {
  const oauth = await fetchAuth(uri, clientId, clientSecret);

  if (oauth) {
    const { access_token, token_type } = oauth;

    return {
      Authorization: `${token_type} ${access_token}`,
    };
  }
};

export const drupalClient = async () => {
  const headers = await calculateAuthHeaders(DRUPAL_URI, DRUPAL_CLIENT_ID, DRUPAL_CLIENT_SECRET);

  if (!headers) {
    throw new Error("Unable to fetch auth headers");
  }

  const client = new GraphQLClient(`${DRUPAL_URI}/graphql`, {
    fetch,
    headers,
  });

  return client;
};
