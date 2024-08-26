import Layout from "@/components/Layout";
import { getPosts } from "@/utils/posts";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const page = 1; // Start with the first page
  const postsPerPage = 5;
  const { paginatedPosts } = getPosts(page, postsPerPage);

  return {
    props: {
      posts: paginatedPosts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="container mx-auto p-4 pt-32">
        <h1 className="text-4xl font-bold mb-8">HOME</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/insight/posts/${post.slug}`}>
                <p className="text-2xl font-semibold text-blue-600 hover:underline">
                  {post.meta.title}
                </p>
              </Link>
              <p className="text-gray-600">{post.meta.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
