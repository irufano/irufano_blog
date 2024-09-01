import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllPostsByTag, getAllTags } from "@/utils/posts";
import SEOInsight from "../../../../insight-next-seo.config";
import SEO from "@/components/Core/SEO";
import Layout, { LayoutType } from "@/components/Core/Layout";
import FeatherIcon from "feather-icons-react";

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
  const postsPerPage = 10;

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
      <div className="container mx-auto px-4 pt-24">
        <div className="flex items-center mb-8">
          <div className="p-2 bg-primary rounded-md shadow-md">
            <FeatherIcon
              icon="tag"
              size={24}
              strokeWidth={2}
              className="text-white"
            />
          </div>
          <h1 className="text-xl md:text-2xl ml-4 font-bold text-text dark:text-text-dark">
            Posts Tagged : {tag}
          </h1>
        </div>

        {paginatedPosts.length > 0 ? (
          <ul className="divide-y divide-gray-200 dark:divide-gray-800">
            {paginatedPosts.map((post) => (
              <Link key={post.slug} href={`/insight/post/${post.slug}`}>
                <li
                  key={post.slug}
                  className="p-4 hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-md"
                >
                  <p className="text-xl md:text-2xl font-bold text-primary">
                    {post.meta?.title}
                  </p>

                  <p className="text-sm font-semibold text-gray-500">
                    {post.meta?.date}
                  </p>
                  <div className="mt-2">
                    <ul className="list-none flex space-x-3 mt-2">
                      {post?.meta?.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs bg-accent dark:bg-accent-dark text-white px-2 py-1 rounded-lg"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="py-8 text-text dark:text-text-dark">No posts found.</p>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-between items-center mb-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 px-4 rounded-md text-sm md:text-base bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:dark:bg-primary text-primary hover:text-white disabled:text-gray-300 dark:disabled:text-gray-700 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-800"
            >
              <div>
                <p>Previous</p>
              </div>
            </button>

            <div>
              <p className="px-2 text-sm md:text-base text-text dark:text-text-dark">
                Page {currentPage} of {totalPages}
              </p>
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 px-4 rounded-md text-sm md:text-base bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:dark:bg-primary text-primary hover:text-white disabled:text-gray-300 dark:disabled:text-gray-700 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-800"
            >
              <div>
                <p>Next</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
