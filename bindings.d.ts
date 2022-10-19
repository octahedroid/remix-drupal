export {}

// ENV values from wrangler.toml
declare global {
  const DRUPAL_URI: string;
  const DRUPAL_CLIENT_ID: string;
  const DRUPAL_CLIENT_SECRET: string;

  const ENVIRONMENT: string;
}