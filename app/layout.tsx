
import type {
  Metadata,
  Viewport,
} from "next";

import "./globals.css";

/* =====================================
   기본 사이트 정보
===================================== */

const SITE_URL =
  "https://cheonaniparkcity34.com";

const SITE_NAME =
  "천안 아이파크 시티 3·4단지";

const PHONE = "041-556-0303";

const NAVER_VERIFICATION =
  "86e9ef5054ee634a071b3b47d354676071413d8a";

/* =====================================
   SEO 설명
===================================== */

const SITE_DESCRIPTION =
  "천안 아이파크 시티 3단지·4단지 분양정보 안내. " +
  "3단지 896세대, 4단지 818세대, 총 1,714세대. " +
  "단지별 평면도, 분양가, 사업개요, 입지환경, " +
  "모델하우스 및 견본주택 방문 상담 정보를 확인하세요. " +
  "비공식 정보 안내 사이트입니다.";

/* =====================================
   공통 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "천안 아이파크 시티 3·4단지 | 분양정보·평면도·모델하우스",
    template:
      "%s | 천안 아이파크 시티",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "천안 아이파크 시티",
    "천안 아이파크 시티 3단지",
    "천안 아이파크 시티 4단지",
    "천안 아이파크 시티 분양가",
    "천안 아이파크 시티 평면도",
    "천안 아이파크 시티 모델하우스",
    "천안 아이파크 시티 견본주택",
    "천안 아이파크 시티 3단지 4단지 비교",
    "성성 아이파크 시티",
    "천안 부대동 아이파크",
  ],

  verification: {
    other: {
      "naver-site-verification":
        NAVER_VERIFICATION,
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
      "천안 아이파크 시티 3·4단지 | 분양정보 안내",

    description: SITE_DESCRIPTION,

    images: [
      {
        url: "/IMG_2162.jpeg",
        width: 1200,
        height: 630,
        alt:
          "천안 아이파크 시티 3단지 4단지 조감도",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "천안 아이파크 시티 3·4단지",

    description: SITE_DESCRIPTION,

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
