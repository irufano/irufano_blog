import Link from "next/link";
import Layout from "@/components/Layout";
import { getAllPosts } from "@/utils/posts";

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}

export default function Posts({ allPosts }) {
  return (
    <Layout>
      <div className="container mx-auto p-4 py-16">
        <h1 className="text-3xl font-extrabold py-4">Blog Posts</h1>
        <ul>
          {allPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/insight/${post.slug}`} className="p-6">
                <div>
                  <h2 className="text-xl font-semibold">{post.meta.title}</h2>
                  <p className="text-base">{post.meta.date}</p>
                  <p className="text-sm">{post.meta.tags.join(", ")}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
