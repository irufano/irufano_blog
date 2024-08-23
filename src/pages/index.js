import SearchComponent from "@/components/SearchComponent";
import { getPostBySlug } from "@/utils/getPostBySlug";
import { getPostSlugs } from "@/utils/getPostSlugs";
import Link from "next/link";

export default function HomePage({ posts }) {
  return (
    <div className="container mx-auto p-4 py-16">
      <h1 className="text-4xl font-extrabold text-emerald-500">IRUFANO INSIGHT</h1>
      <SearchComponent posts={posts} />
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.meta.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  
  return {
    props: {
      posts,
    },
  };
}
