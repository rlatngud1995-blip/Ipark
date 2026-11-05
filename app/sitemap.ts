
import type { MetadataRoute } from "next";

const SITE_URL = "https://cheonaniparkcity34.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      path: "/",
      priority: 1,
    },
    {
      path: "/complex/3",
      priority: 0.9,
    },
    {
      path: "/complex/4",
      priority: 0.9,
    },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
