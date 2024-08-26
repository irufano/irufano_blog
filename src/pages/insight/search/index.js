// src/pages/search.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getPosts } from "@/utils/posts";
import Layout from "@/components/Layout";

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
  const postsPerPage = 5;

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
    <Layout>
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-3xl font-bold mb-4">Search Posts</h1>

        <form onSubmit={handleSearch} className="mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="px-4 py-2 border rounded-l w-64"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r"
          >
            Search
          </button>
        </form>

        {searchQuery && (
          <p className="mb-4">
            Results for: <span className="font-semibold">{searchQuery}</span>
          </p>
        )}

        {paginatedPosts.length > 0 ? (
          <ul>
            {paginatedPosts.map((post) => (
              <li key={post.slug} className="mb-4">
                <Link href={`/insight/posts/${post.slug}`}>
                  <p className="text-xl font-bold text-blue-500">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(
                          post.meta?.title,
                          searchQuery.toLowerCase()
                        ),
                      }}
                    />
                  </p>
                </Link>
                <p className="text-lg font-semibold">{post.meta?.date}</p>
                {searchQuery && (
                  <div className="text-base">
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
            ))}
          </ul>
        ) : (
          <p>No posts found.</p>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
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
        )}
      </div>
    </Layout>
  );
}
