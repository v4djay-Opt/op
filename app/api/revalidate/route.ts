import { timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { WP_CACHE_TAG } from "@/lib/wordpress/client";

function isAuthorized(provided: string | null): boolean {
  const secret = process.env.WORDPRESS_REVALIDATE_SECRET;
  if (!secret || !provided) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Called by the WordPress mu-plugin after content is published, updated or unpublished. */
export async function POST(req: NextRequest) {
  if (!isAuthorized(req.headers.get("x-revalidate-secret"))) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as { path?: unknown };
  const path = typeof body.path === "string" && body.path.startsWith("/") ? body.path : undefined;

  revalidateTag(WP_CACHE_TAG, { expire: 0 });
  if (path) revalidatePath(path);
  revalidatePath("/sitemap.xml");

  return NextResponse.json({ ok: true, path: path ?? null });
}
