import type { LoaderFunction } from "@remix-run/cloudflare";
import type {
  Resolver
} from "remix-image/serverPure";
import {
  imageLoader,
  MemoryCache,
  kvResolver,
  fetchResolver
} from "remix-image/serverPure";
import { wasmTransformer } from "remix-image-wasm";

const SELF_URL = "http://localhost:8787";

export const myResolver: Resolver = async (asset, url, options, basePath) => {
  if (asset.startsWith("/") && (asset.length === 1 || asset[1] !== "/")) {
    return kvResolver(asset, url, options, basePath);
  } else {
    return fetchResolver(asset, url, options, basePath);
  }
};

const config = {
  selfUrl: SELF_URL,
  cache: new MemoryCache(),
  resolver: myResolver,
  transformer: wasmTransformer,
};

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(config, request);
};
