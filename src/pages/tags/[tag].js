import Link from "next/link";
import { getPostSlugs } from "@/utils/getPostSlugs";
import { getPostsByTag } from "@/utils/getPostsByTag";
import { getAllTags } from "@/utils/getAllTags";

export default function TagPage({ tag, posts }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts tagged with {tag}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post?.slug} className="mb-4">
            <Link href={`/posts/${post?.slug}`}>
              <h2 className="text-2xl font-bold">{post?.title}</h2>
            </Link>
            <p className="text-gray-500">{post?.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const tags = getAllTags(slugs);

  const paths = tags.map((tag) => ({
    params: { tag },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { tag } = params;
  const posts = getPostsByTag(tag);

  return {
    props: {
      tag,
      posts,
    },
  };
}
