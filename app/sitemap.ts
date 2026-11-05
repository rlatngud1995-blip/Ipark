
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = "https://cheonaniparkcity34.com";

  return [
    {
      url: site,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site}/complex/3`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site}/complex/4`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
