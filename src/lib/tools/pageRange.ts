export function parsePageRange(input: string, totalPages: number): number[] {
  if (!input.trim()) {
    throw new Error("Enter at least one page or range, e.g. 1-3,5.");
  }
  const pages = new Set<number>();
  for (const raw of input.split(",")) {
    const part = raw.trim();
    if (!part) continue;
    const range = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if (range) {
      const start = Math.max(1, Number(range[1]));
      const end = Math.min(totalPages, Number(range[2]));
      if (start > end) continue;
      for (let p = start; p <= end; p++) pages.add(p);
      continue;
    }
    if (/^\d+$/.test(part)) {
      const n = Number(part);
      if (n >= 1 && n <= totalPages) pages.add(n);
      continue;
    }
    throw new Error(`"${part}" is not a valid page or range.`);
  }
  if (pages.size === 0) {
    throw new Error("No pages matched. Use values between 1 and " + totalPages + ".");
  }
  return [...pages].sort((a, b) => a - b);
}
