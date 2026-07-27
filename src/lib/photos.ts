import { readdir } from "node:fs/promises";
import { join } from "node:path";

const photoDirectory = join(process.cwd(), "public", "photos");
const supportedExtensions = new Set([".avif", ".jpg", ".jpeg", ".png", ".webp"]);

const files = await readdir(photoDirectory);

export const photos = files
  .filter((file) => supportedExtensions.has(file.slice(file.lastIndexOf(".")).toLowerCase()))
  .sort((a, b) => a.localeCompare(b))
  .map((file) => ({ src: `/photos/${encodeURIComponent(file)}` }));
