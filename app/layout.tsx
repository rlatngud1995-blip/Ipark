
import type { Metadata, Viewport } from "next";
import "./globals.css";

/* =====================================
   천안 아이파크 시티 3·4단지
   기본 정보
===================================== */

const SITE_URL = "https://cheonaniparkcity34.com";

const SITE_NAME = "천안 아이파크 시티 3·4단지";

const PHONE = "041-556-0303";

/* =====================================
   네이버 서치어드바이저 인증
===================================== */

const NAVER_VERIFICATION =
  "86e9ef5054ee634a071b3b47d354676071413d8a";

/* =====================================
   네이버 검색 페이지 설명
===================================== */

const SITE_DESCRIPTION =
  "천안 아이파크 시티 3·4단지 분양정보, 평면도, " +
  "동호수 배치도와 방문 상담 안내. " +
  "미소부동산 운영 비공식 사이트.";

/* =====================================
   OpenGraph 공유 설명
===================================== */

const OG_DESCRIPTION =
  "천안 아이파크 시티 3단지·4단지 모델하우스, " +
  "견본주택 및 분양정보 안내. " +
  `상담 ${PHONE}.`;

/* =====================================
   SEO 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "천안 아이파크 시티 3·4단지 | 모델하우스·견본주택·분양정보",
    template: "%s | 천안 아이파크 시티",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  verification: {
    other: {
      "naver-site-verification": NAVER_VERIFICATION,
    },
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,

    title:
      "천안 아이파크 시티 3·4단지 | 분양정보 및 방문 상담",

    description: OG_DESCRIPTION,

    images: [
      {
        url: "/IMG_2162.jpeg",
        alt: "천안 아이파크 시티 3·4단지 조감도",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_NAME,

    description: OG_DESCRIPTION,

    images: ["/IMG_2162.jpeg"],
  },

  category: "real estate",
};

/* =====================================
   모바일 화면 설정
===================================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =====================================
   ROOT LAYOUT
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
