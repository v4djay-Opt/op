export const WORDPRESS_URL = (process.env.WORDPRESS_URL || "https://blog.optimaxstudio.com").replace(/\/+$/, "");

export const WP_CACHE_TAG = "wordpress";

const REVALIDATE_SECONDS = 300;
const TIMEOUT_MS = 10_000;

/**
 * GET a WordPress REST collection (wp/v2). Returns null when WordPress is
 * unreachable so callers can fall back to local content instead of failing.
 * The host intermittently answers 503 under burst load, so retry once.
 */
export async function wpFetch<T>(path: string): Promise<T | null> {
  const url = `${WORDPRESS_URL}/wp-json/wp/v2/${path}`;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        next: { revalidate: REVALIDATE_SECONDS, tags: [WP_CACHE_TAG] },
      });
      if (res.ok) return (await res.json()) as T;
      if (res.status !== 429 && res.status < 500) {
        console.error(`[wpFetch] ${res.status} ${url}`);
        return null;
      }
    } catch (err) {
      if (attempt === 1) console.error(`[wpFetch] ${url}`, err);
    }
    await new Promise((r) => setTimeout(r, 800));
  }
  return null;
}
