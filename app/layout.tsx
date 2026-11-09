
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://cheonaniparkcity34.com";

const SITE_NAME = "천안 아이파크 시티 3·4단지";

const DESCRIPTION =
  "천안 아이파크 시티 3·4단지 분양정보 안내. 단지별 분양가, 평면도, 입지환경과 방문 상담 정보를 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "천안 아이파크 시티 3·4단지 | 분양정보·평면도",
    template: "%s | 천안 아이파크 시티",
  },

  description: DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "천안 아이파크 시티",
    "천안 아이파크 시티 3단지",
    "천안 아이파크 시티 4단지",
    "천안 아이파크 시티 분양가",
    "천안 아이파크 시티 평면도",
    "천안 아이파크 시티 모델하우스",
    "천안 아이파크 시티 견본주택",
  ],

  verification: {
    other: {
      "naver-site-verification":
        "86e9ef5054ee634a071b3b47d354676071413d8a",
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
    siteName: SITE_NAME,
    title:
      "천안 아이파크 시티 3·4단지 | 분양정보",
    description: DESCRIPTION,
    images: [
      {
        url: "/IMG_2162.jpeg",
        width: 1200,
        height: 630,
        alt: "천안 아이파크 시티 3·4단지",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
