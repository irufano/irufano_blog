import { getPostBySlug } from "./getPostBySlug";

export function getAllTags(slugs) {
  const posts = slugs.map((slug) => getPostBySlug(slug));
  let tags = [];
  posts.forEach((post) => {
    if (post?.meta?.tags) {
      tags = tags.concat(post?.meta?.tags);
    }
  });
  tags = [...new Set(tags)]; // Remove duplicates
  return tags;
}
