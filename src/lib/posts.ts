import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postUrl(id: string) {
  return `/blog/${encodeURIComponent(id.replace(/\.md$/, ""))}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function legacyPostUrl(id: string) {
  const match = id.replace(/\.md$/, "").match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (!match) return null;
  const [, year, month, day, title] = match;
  return `/${year}/${month}/${day}/${title.replace(/\s+/g, "-")}/`;
}
