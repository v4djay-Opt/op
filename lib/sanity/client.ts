import { createClient, type SanityClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn, isConfigured } from "./env";

function makeClient(): SanityClient | null {
  if (!isConfigured) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
}

const client = makeClient();

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}
