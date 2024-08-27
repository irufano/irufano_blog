import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllPostsByTag, getAllTags } from "@/utils/posts";
import SEOInsight from "../../../../insight-next-seo.config";
import SEO from "@/components/Core/SEO";
import Layout, { LayoutType } from "@/components/Core/Layout";

export async function getStaticPaths() {
  const tags = getAllTags();

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
  const posts = getAllPostsByTag(tag);

  return {
    props: {
      posts,
      tag,
    },
  };
}

export default function TagPage({ posts, tag }) {
  const router = useRouter();
  const { query: routerQuery } = router;
  const [currentPage, setCurrentPage] = useState(
    parseInt(routerQuery.page, 10) || 1
  );
  const postsPerPage = 5;

  useEffect(() => {
    // if (currentPage !== 1) {
    //   //   const { paginatedPosts } = getPostsByTag(tag, currentPage, postsPerPage);
    //   setPosts(paginatedPosts);
    // }
    if (routerQuery.page && parseInt(routerQuery.page, 10) !== currentPage) {
      setCurrentPage(parseInt(routerQuery.page, 10) || 1);
    }
  }, [routerQuery.page]);

  // Pagination logic

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/insight/tags/${tag}?page=${page}`);
  };

  return (
    <Layout type={LayoutType.INSIGHT}>
      <SEO
        title={SEOInsight.title}
        description={SEOInsight.description}
        ogSiteName={SEOInsight.openGraph.site_name}
        url={SEOInsight.openGraph.url}
        images={SEOInsight.openGraph.images}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Posts Tagged: {tag}</h1>
        <ul>
          {paginatedPosts.map((post) => (
            <li key={post.slug} className="mb-4">
              <Link href={`/insight/posts/${post.slug}`}>
                <p className="text-blue-500">{post.meta?.title}</p>
              </Link>
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-emerald-500 text-gray-800 px-4 py-2 rounded disabled:bg-gray-300"
            >
              Previous
            </button>

            <div className="flex items-center">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-emerald-500 text-gray-800 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
