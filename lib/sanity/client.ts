import { createClient, type SanityClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "./env";

const client: SanityClient = createClient({
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
    return await client.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("[sanityFetch] error:", err);
    return null;
  }
}
