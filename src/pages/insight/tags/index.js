import { getAllTags } from "@/utils/posts";
import Link from "next/link";
import SEOInsight from "../../../../insight-next-seo.config";
import SEO from "@/components/Core/SEO";
import Layout, { LayoutType } from "@/components/Core/Layout";
import FeatherIcon from "feather-icons-react";

export async function getStaticProps() {
  const tags = getAllTags();

  return {
    props: {
      tags,
    },
  };
}

export default function TagsPage({ tags }) {
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
            Tags
          </h1>
        </div>

        <ul className="flex flex-wrap gap-y-2 gap-x-4">
          {tags.map((tag) => (
            <li key={tag} className="mb-2">
              <div>
                <Link className="w-min" href={`/insight/tags/${tag}`}>
                  <div className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md hover:bg-gray-300 hover:dark:bg-gray-700">
                    <p className="text-text dark:text-text-dark">{tag}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
