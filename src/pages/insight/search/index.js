import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getPosts } from "@/utils/posts";
import SEOInsight from "../../../../insight-next-seo.config";
import SEO from "@/components/Core/SEO";
import Layout, { LayoutType } from "@/components/Core/Layout";
import FeatherIcon from "feather-icons-react";

export async function getStaticProps() {
  const posts = getPosts(1, Infinity).paginatedPosts;

  return {
    props: {
      posts,
    },
  };
}

export default function SearchPage({ posts }) {
  const router = useRouter();
  const { query: routerQuery } = router;
  const [searchQuery, setSearchQuery] = useState(routerQuery.query || "");
  const [currentPage, setCurrentPage] = useState(
    parseInt(routerQuery.page, 10) || 1
  );
  const postsPerPage = 10;

  useEffect(() => {
    if (routerQuery.query !== searchQuery) {
      setSearchQuery(routerQuery.query || "");
    }
    if (routerQuery.page && parseInt(routerQuery.page, 10) !== currentPage) {
      setCurrentPage(parseInt(routerQuery.page, 10) || 1);
    }
  }, [routerQuery.query, routerQuery.page]);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) => {
    return (
      post.meta?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.rawContent?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    router.push(
      `/insight/search?query=${encodeURIComponent(searchQuery)}&page=1`
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(
      `/insight/search?query=${encodeURIComponent(searchQuery)}&page=${page}`
    );
  };

  function extractSubstring(paragraph, keyword) {
    const cleanedParagraph = paragraph
      .replace(/[#!,\[\]\-`\{\}\=\;\(\)]/g, "")
      .trim()
      .toLowerCase();

    // Find the index of the keyword in the cleaned paragraph
    const keywordIndex = cleanedParagraph
      .toLowerCase()
      .indexOf(keyword.toLowerCase());

    if (keywordIndex === -1) {
      return "";
    }

    // Calculate the start index to get a substring of 36 characters
    let startIndex = Math.max(
      0,
      keywordIndex - Math.floor((36 - keyword.length) / 2)
    );

    // Adjust startIndex if substring goes beyond the paragraph's length
    if (startIndex + 36 > cleanedParagraph.length) {
      startIndex = cleanedParagraph.length - 36;
    }

    // Extract the substring
    let substring = cleanedParagraph.substr(startIndex, 36);

    // Replace the keyword in the substring with its uppercase version
    // const keywordRegex = new RegExp(keyword, "gi");
    substring = highlightText(substring, keyword);

    return `...${substring}...`;
  }

  function highlightText(text, keyword) {
    const keywordRegex = new RegExp(keyword, "gi");
    return text.replace(
      keywordRegex,
      (match) =>
        `<span style="background-color: yellow; color: black;">${match}</span>`
    );
  }

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
              icon="search"
              size={24}
              strokeWidth={4}
              className="text-white"
            />
          </div>
          <h1 className="text-2xl ml-4 font-bold text-text dark:text-text-dark">
            Search Insight Posts
          </h1>
        </div>

        <form onSubmit={handleSearch} className="mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              e.preventDefault();
              setCurrentPage(1);
              setSearchQuery(e.target.value);
            }}
            placeholder="Search posts..."
            className="px-4 py-2 text-text dark:text-text-dark border-2 rounded-md w-full bg-surface dark:bg-surface-dark border-gray-200 dark:border-gray-800 focus:border-emerald-600 dark:focus:border-emerald-600"
          />
          {/* <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r"
          >
            Search
          </button> */}
        </form>

        {searchQuery && (
          <p className="mb-4 text-text dark:text-text-dark">
            Results for: <span className="font-semibold">{searchQuery}</span>
          </p>
        )}

        {paginatedPosts.length > 0 ? (
          <ul className="divide-y divide-gray-200 dark:divide-gray-800">
            {paginatedPosts.map((post) => (
              <Link href={`/insight/post/${post.slug}`}>
                <li
                  key={post.slug}
                  className="p-4 hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-md"
                >
                  <p className="text-xl md:text-2xl font-bold text-primary">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(
                          post.meta?.title,
                          searchQuery.toLowerCase()
                        ),
                      }}
                    />
                  </p>

                  <p className="text-sm font-semibold text-gray-500">
                    {post.meta?.date}
                  </p>
                  {searchQuery && (
                    <div className="text-sm">
                      <span
                        className="prose prose-lg dark:prose-dark"
                        dangerouslySetInnerHTML={{
                          __html: extractSubstring(
                            post.rawContent,
                            searchQuery.toLowerCase()
                          ),
                        }}
                      />
                      {/* {extractSubstring(
                      post.rawContent,
                      searchQuery.toLowerCase()
                    )} */}
                    </div>
                  )}
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
        {/* {totalPages > 1 && (
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Previous
            </button>

            <div className="flex items-center">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )} */}
      </div>
    </Layout>
  );
}
