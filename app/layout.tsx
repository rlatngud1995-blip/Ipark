
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://cheonaniparkcity34.com";

const SITE_NAME = "천안 아이파크 시티 3·4단지";

const SITE_DESCRIPTION =
  "천안 아이파크 시티 3단지·4단지 분양정보 안내. " +
  "성성 아이파크 시티 3·4단지 사업개요, " +
  "주택형별 평면도, 동호수 배치도, " +
  "모델하우스·견본주택 관련 정보와 방문 상담 안내. " +
  "미소부동산 운영 비공식 안내 사이트. " +
  "상담전화 041-556-0303.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "천안 아이파크 시티 3·4단지 | 분양정보·모델하우스·견본주택 안내",
    template: "%s | 천안 아이파크 시티",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  alternates: {
    canonical: "/",
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
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/IMG_2162.jpeg",
        width: 1200,
        height: 630,
        alt: "천안 아이파크 시티 3·4단지 안내",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/IMG_2162.jpeg"],
  },

  category: "real estate",
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
