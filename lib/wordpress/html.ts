const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  rarr: "→",
  larr: "←",
  copy: "©",
  reg: "®",
  trade: "™",
};

export function decodeEntities(input: string): string {
  return input.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isNaN(n) ? match : String.fromCodePoint(n);
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });
}

/** Plain text from WordPress rendered HTML (titles, excerpts). */
export function toPlainText(html: string | undefined): string {
  if (!html) return "";
  return decodeEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/\s*\[(?:…|&hellip;|\.\.\.)\]\s*$/, "…")
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Adds ids to <h2> tags (keeping existing ones) and returns them for a table of contents. */
export function withHeadingIds(html: string): { html: string; headings: { id: string; text: string }[] } {
  const headings: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_m, attrs: string, inner: string) => {
    const text = toPlainText(inner);
    const existing = attrs.match(/\sid=["']([^"']+)["']/i)?.[1];
    let id = existing || slugify(text) || "section";
    if (!existing) {
      for (let i = 2; used.has(id); i++) id = `${slugify(text)}-${i}`;
    }
    used.add(id);
    if (text) headings.push({ id, text });
    return existing ? `<h2${attrs}>${inner}</h2>` : `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  return { html: out, headings };
}

export function readingTimeMinutes(html: string): number {
  const words = toPlainText(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
