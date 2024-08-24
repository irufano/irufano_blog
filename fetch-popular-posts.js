// fetch-popular-posts.js
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const fs = require("fs");
require("dotenv").config();

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: "secrets/google-analytics-reporting-api_key.json",
});

const PROPERTY_ID = "455763186";

async function getPopularPosts() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [
      {
        // startDate: "30daysAgo",
        startDate: '2024-07-01',
        endDate: "today",
      },
    ],
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "screenPageViews" }],
    orderBys: [
      {
        desc: true,
        metric: { metricName: "screenPageViews" },
      },
    ],
    limit: 5, // Adjust the limit to fetch more popular posts if needed
  });

  const popularPosts = response.rows.map((row) => ({
    path: row.dimensionValues[0].value,
    pageviews: row.metricValues[0].value,
  }));

  fs.writeFileSync(
    "public/popular-posts.json",
    JSON.stringify(popularPosts, null, 2)
  );
}

getPopularPosts().catch(console.error);
