import type { MetaFunction, LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
  useLoaderData,
} from "@remix-run/react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles }
  ];
}

export const loader: LoaderFunction = async () => {
  return json(
    {
      environment: ENVIRONMENT,
    },
    { status: 200 }
  );
}

// @TODO: Relocate to a separate file.
const syncDrupalPreviewRoutes = (path:string) => {
  if (window && window.top !== window.self) {
    // @TODO: Pass the targetOrigin from the Drupal site as ENV.
    window.parent.postMessage(
      {
        type: "REMIX_DRUPAL_ROUTE_SYNC",
        path
      },
      "*"
    );
  }
}

export default function App() {
  const { environment } = useLoaderData() as { environment: string };
  // @TODO: Catch router change on remix router config file.
  const transition = useTransition();
  if (environment === 'staging' && transition.state === 'loading' ) {
    syncDrupalPreviewRoutes(transition.location.pathname);
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Container>
          <Header />
          <Outlet />
          <Footer />
        </Container>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
