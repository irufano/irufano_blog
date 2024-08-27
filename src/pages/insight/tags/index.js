import { getAllTags } from "@/utils/posts";
import Link from "next/link";
import SEOInsight from "../../../../insight-next-seo.config";
import SEO from "@/components/Core/SEO";
import Layout, { LayoutType } from "@/components/Core/Layout";

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
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold mb-4">Tags</h1>
        <ul>
          {tags.map((tag) => (
            <li key={tag} className="mb-2">
              <Link href={`/insight/tags/${tag}`}>
                <p className="text-blue-500">{tag}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
