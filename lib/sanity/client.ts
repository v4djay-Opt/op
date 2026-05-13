import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion, useCdn } from "./env";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params);
  } catch (err) {
    console.error("[sanityFetch] error:", err);
    return null;
  }
}
