
import type { MetadataRoute } from "next";

/* =====================================
   천안 아이파크 시티 3·4단지
   검색엔진 robots.txt 설정
===================================== */

const SITE_URL =
  "https://cheonaniparkcity34.com";

/* =====================================
   네이버 · 구글 검색로봇 허용
===================================== */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}
