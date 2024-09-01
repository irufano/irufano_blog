import { DefaultSeo } from "next-seo";
import DefaultSEOConfig from "../../next-seo.config";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import "highlight.js/styles/tomorrow-night-blue.min.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const analyticsId = "G-787PK2XJ06";

  useEffect(() => {
    // Check if the user has a stored preference for light or dark mode
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Register page view
      const handleRouteChange = (url) => {
        window.gtag("config", `"${analyticsId}"`, {
          page_path: url,
        });
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  });

  return (
    <>
      {process.env.NODE_ENV === "production" ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${analyticsId}');
              `,
            }}
          />{" "}
        </>
      ) : (
        <></>
      )}
      <DefaultSeo {...DefaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
