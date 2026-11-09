
import type { MetadataRoute } from "next";

/* =====================================
   천안 아이파크 시티 3·4단지
   SEO 사이트맵
===================================== */

const SITE_URL = "https://cheonaniparkcity34.com";

/* =====================================
   검색엔진 수집 대상 페이지
===================================== */

const PAGES = [
  {
    path: "/",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/complex/3",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/complex/4",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/compare",
    priority: 0.8,
    changeFrequency: "weekly",
  },
] as const;

/* =====================================
   사이트맵 생성
===================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
