import { NextSeo } from "next-seo";

const SEO = ({
  title,
  description,
  url = "https://irufano.github.io",
  ogSiteName = "Irufano",
  ogImages = [
    {
      url: "https://irufano.github.io/images/insight-default.svg",
      width: 800,
      height: 600,
      alt: "Irufano",
      type: "image/svg",
    },
  ],
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      type="website"
      locale="en_US"
      openGraph={{
        title: title,
        description: description,
        url: url,
        siteName: ogSiteName,
        images: ogImages,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default SEO;
