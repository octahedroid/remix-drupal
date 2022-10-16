import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./styles/app.css";
import remixImageStyles from "remix-image/remix-image.css";

export function links() {
  return [
    { rel: "stylesheet", href: remixImageStyles },
    { rel: "stylesheet", href: styles }
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix App at Cloudflare Edge Workers using Drupal + GraphQL",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
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
