
import type { Metadata, Viewport } from "next";
import "./globals.css";

/* =========================================
   천안 아이파크 시티 3·4단지
   기본 홈페이지 설정
========================================= */

const SITE_URL = "https://cheonaniparkcity34.com";

const SITE_NAME = "천안 아이파크 시티 3·4단지";

const PHONE = "041-556-0303";

/* =========================================
   네이버 서치어드바이저 인증번호
========================================= */

const NAVER_VERIFICATION =
  "46310dec7525b2c805e8bbc1fe5e917676b432da";

/* =========================================
   검색엔진 설명
========================================= */

const SITE_DESCRIPTION =
  "천안 아이파크 시티 3단지·4단지 분양정보 안내. " +
  "천안아이파크시티3단지, 천안아이파크시티4단지, " +
  "성성아이파크시티3단지, 성성아이파크시티4단지 " +
  "사업개요와 단지정보, 동호수 배치도, " +
  "주택형별 평면도, 모델하우스 및 견본주택 관련 정보, " +
  "방문 상담 안내. 미소부동산 운영 비공식 안내 사이트. " +
  `상담전화 ${PHONE}.`;

/* =========================================
   SEO 메타데이터
========================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "천안 아이파크 시티 3·4단지 | 분양정보·모델하우스·견본주택 안내",
    template: "%s | 천안 아이파크 시티",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  /* 네이버 소유확인 */
  verification: {
    other: {
      "naver-site-verification": NAVER_VERIFICATION,
    },
  },

  /* 검색엔진 색인 허용 */
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* SNS 및 카카오톡 공유 */
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,

    title:
      "천안 아이파크 시티 3·4단지 | 분양정보 및 방문 상담",

    description: SITE_DESCRIPTION,

    images: [
      {
        url: "/IMG_2162.jpeg",
        alt: "천안 아이파크 시티 3·4단지 조감도",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "천안 아이파크 시티 3·4단지 | 분양정보 안내",

    description: SITE_DESCRIPTION,

    images: ["/IMG_2162.jpeg"],
  },

  category: "real estate",
};

/* =========================================
   모바일 화면 설정
========================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =========================================
   ROOT LAYOUT
========================================= */

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
