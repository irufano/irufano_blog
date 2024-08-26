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

    // handle copy code
    document.addEventListener("click", function (e) {
      if (e.target.closest(".copy-code")) {
        const button = e.target.closest(".copy-code");
        const codeId = button.getAttribute("data-code-id");
        const codeToCopy = document.getElementById(codeId).textContent;
        navigator.clipboard.writeText(codeToCopy).then(() => {
          button.innerHTML = button.innerHTML =
            '<svg class="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';
          setTimeout(() => {
            button.innerHTML =
              '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Copy"><path id="Vector" d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></g></svg>';
          }, 2000);
        });
      }
    });
  }, []);

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
