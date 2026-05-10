export function parsePriceToPaise(priceStr: string): number | null {
  if (!priceStr || priceStr.toLowerCase().includes("custom")) return null;
  const cleaned = priceStr
    .replace(/Rs\.?\s*/gi, "")
    .replace(/\/.*/, "")
    .replace(/,/g, "")
    .trim();
  const num = parseInt(cleaned, 10);
  if (isNaN(num)) return null;
  return num * 100; // convert to paise
}
