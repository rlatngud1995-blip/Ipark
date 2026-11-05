
import type { Metadata, Viewport } from "next";
import "./globals.css";

/* =====================================
   기본 정보
===================================== */

const SITE_URL = "https://cheonaniparkcity34.com";

const SITE_NAME = "천안 아이파크 시티 3·4단지";

const DESCRIPTION =
  "천안 아이파크 시티 3단지·4단지 분양정보 안내. " +
  "성성 아이파크 시티 3단지·4단지 사업개요, " +
  "동호수 배치도, 평면도, 모델하우스 및 견본주택 관련 정보. " +
  "미소부동산 운영 비공식 분양 안내 사이트. " +
  "방문 상담 041-556-0303.";

/* =====================================
   검색엔진 SEO
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "천안 아이파크 시티 3·4단지 | 모델하우스·견본주택·분양정보",
    template: "%s | 천안 아이파크 시티",
  },

  description: DESCRIPTION,

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "천안 아이파크 시티 3·4단지 | 분양정보 안내",
    description: DESCRIPTION,
    images: [
      {
        url: "/IMG_2162.jpeg",
        alt: "천안 아이파크 시티 조감도",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ["/IMG_2162.jpeg"],
  },
};

/* =====================================
   모바일 화면
===================================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =====================================
   ROOT LAYOUT
   네이버 인증 태그 직접 삽입
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="46310dec7525b2c805e8bbc1fe5e917676b432da"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
