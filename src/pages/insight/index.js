import SEO from "@/components/Core/SEO";
import { getPosts } from "@/utils/posts";
import Link from "next/link";
import SEOInsight from "../../../insight-next-seo.config";
import Layout, { LayoutType } from "@/components/Core/Layout";
import Image from "next/image";
import FeatherIcon from "feather-icons-react";

export async function getStaticProps() {
  const page = 1; // Start with the first page
  const postsPerPage = 6;
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
    <Layout type={LayoutType.INSIGHT}>
      <SEO
        title={SEOInsight.title}
        description={SEOInsight.description}
        ogSiteName={SEOInsight.openGraph.site_name}
        url={SEOInsight.openGraph.url}
        images={SEOInsight.openGraph.images}
      />

      <div className="container mx-auto p-4 pt-20 md:pt-24">
        <h1 className="text-4xl font-bold mb-8 text-text dark:text-text-dark">
          Insights
        </h1>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className={`border rounded-lg overflow-hidden border-gray-200 dark:border-gray-800 shadow-sm bg-surface dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-gray-800 ${
                index < 2 ? "lg:col-span-2" : ""
              }`}
            >
              <Link href={`/insight/post/${post.slug}`}>
                <div
                  className={`relative w-full 
                 ${index < 2 ? "h-48" : "h-48"}
                `}
                >
                  <Image
                    src={post.meta.image ?? "/images/insight-default-2.svg"}
                    alt={post.meta.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold text-text dark:text-text-dark">
                    {post.meta.title}
                  </h2>
                  <div className="flex space-x-4 mt-2">
                    <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm flex items-center">
                      <span>
                        <FeatherIcon
                          icon="calendar"
                          size={14}
                          className="mr-2"
                        />
                      </span>
                      {post.meta.date}
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm flex items-center">
                      <span>
                        <FeatherIcon icon="clock" size={14} className="mr-2" />
                      </span>
                      {post.readingTime}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-between items-center mb-10">
          {currentPage > 1 ? (
            <Link href={`/insight/${currentPage - 1}`}>
              <div className="p-2 px-4 rounded-md text-sm md:text-base bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:dark:bg-primary text-primary hover:text-white ">
                <p>Previous</p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          <div>
            <p className="text-sm md:text-base text-text dark:text-text-dark">
              {currentPage} of {totalPages}
            </p>
          </div>
          {currentPage < totalPages ? (
            <Link href={`/insight/${currentPage + 1}`}>
              <div className="p-2 px-4 rounded-md text-sm md:text-base bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:dark:bg-primary text-primary hover:text-white ">
                <p>Next</p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Layout>
  );
}
