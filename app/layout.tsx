
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://cheonaniparkcity34.com";
const SITE_NAME = "천안 아이파크 시티 3·4단지";
const PHONE = "041-556-0303";

const NAVER_VERIFICATION =
  "86e9ef5054ee634a071b3b47d354676071413d8a";

const TITLE =
  "천안 아이파크 시티 3·4단지 | 분양가·평면도·모델하우스 안내";

const DESCRIPTION =
  "천안 아이파크 시티 3단지·4단지 분양정보 안내. " +
  "총 1,714세대, 84㎡·102㎡·116㎡ 평면도, 분양가, " +
  "단지 배치도, 입지환경, 모델하우스 및 방문 상담 정보. " +
  "공식 분양 홈페이지가 아닌 비공식 정보 안내 사이트입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s | 천안 아이파크 시티",
  },

  description: DESCRIPTION,
  applicationName: SITE_NAME,

  keywords: [
    "천안 아이파크 시티",
    "천안아이파크시티",
    "천안 아이파크 시티 3단지",
    "천안 아이파크 시티 4단지",
    "천안아이파크시티3단지",
    "천안아이파크시티4단지",
    "천안 아이파크 시티 모델하우스",
    "천안 아이파크 시티 견본주택",
    "천안 아이파크 시티 분양가",
    "천안 아이파크 시티 평면도",
    "천안 아이파크 시티 분양정보",
    "성성 아이파크 시티",
    "성성 아이파크 시티 3단지",
    "성성 아이파크 시티 4단지",
    "천안 부대동 아이파크",
    "천안 아이파크 시티 방문상담",
  ],

  alternates: {
    canonical: "/",
  },

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
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/IMG_2162.jpeg",
        width: 1200,
        height: 630,
        alt: "천안 아이파크 시티 단지 조감도",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
    inLanguage: "ko-KR",
    potentialAction: {
      "@type": "ReadAction",
      target: SITE_URL,
    },
  };

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
