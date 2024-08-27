import SEO from "@/components/Core/SEO";
import { getPosts } from "@/utils/posts";
import Link from "next/link";
import SEOInsight from "../../../insight-next-seo.config";
import Layout from "@/components/Core/Layout";

export async function getStaticProps() {
  const page = 1; // Start with the first page
  const postsPerPage = 5;
  const { paginatedPosts, totalPosts } = getPosts(page, postsPerPage);

  return {
    props: {
      posts: paginatedPosts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / postsPerPage),
    },
  };
}

export default function Insights({ posts, currentPage, totalPages }) {
  return (
    <Layout>
      <SEO
        title={SEOInsight.title}
        description={SEOInsight.description}
        ogSiteName={SEOInsight.openGraph.site_name}
        url={SEOInsight.openGraph.url}
        images={SEOInsight.openGraph.images}
      />
      <div className="container mx-auto p-4 pt-32">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
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

        <div className="mt-8 flex justify-between">
          {currentPage > 1 && (
            <Link href={`/insight/${currentPage - 1}`}>
              <p className="text-blue-600 hover:underline">Previous</p>
            </Link>
          )}
          {currentPage < totalPages && (
            <Link href={`/insight/${currentPage + 1}`}>
              <p className="text-blue-600 hover:underline">Next</p>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
}
