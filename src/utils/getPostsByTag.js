import { getPostBySlug } from "./getPostBySlug";
import { getPostSlugs } from "./getPostSlugs";

export function getPostsByTag(tag) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  const filteredPosts = posts.map((post) => {
    if (post?.meta?.tags && post?.meta?.tags.includes(tag)) {
      return {
        slug: post?.slug,
        title: post?.meta?.title,
        date: post?.meta?.date,
      };
    } else {
      return null;
    }
  });

  return filteredPosts;
}
