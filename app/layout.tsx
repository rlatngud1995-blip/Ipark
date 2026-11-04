
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "https://cheonaniparkcity34.com";
const PHONE = "041-556-0303";

const SITE_NAME = "천안 아이파크 시티 3·4단지 분양정보";

const DEFAULT_TITLE =
  "천안아이파크시티 3·4단지 | 모델하우스·견본주택·분양정보";

const DEFAULT_DESCRIPTION =
  "천안아이파크시티3단지·천안아이파크시티4단지 분양정보 안내. 성성아이파크시티 3·4단지 조감도, 단지 소개, 입지환경 및 모델하우스·견본주택 방문 상담. 미소부동산 운영 비공식 안내 홈페이지. 전화 041-556-0303.";

const OG_IMAGE = "/IMG_2192.jpeg";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17202a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),

  applicationName: SITE_NAME,

  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    "천안아이파크시티",
    "천안 아이파크 시티",
    "천안아이파크시티3단지",
    "천안아이파크시티4단지",
    "천안 아이파크 시티 3단지",
    "천안 아이파크 시티 4단지",
    "천안아이파크시티3단지 모델하우스",
    "천안아이파크시티4단지 모델하우스",
    "천안아이파크시티3단지 견본주택",
    "천안아이파크시티4단지 견본주택",
    "성성아이파크시티3단지",
    "성성아이파크시티4단지",
    "성성아이파크시티3단지 모델하우스",
    "성성아이파크시티4단지 모델하우스",
    "성성아이파크시티3단지 견본주택",
    "성성아이파크시티4단지 견본주택",
    "천안아이파크시티3단지 분양",
    "천안아이파크시티4단지 분양",
    "천안 아이파크 모델하우스",
    "천안 아이파크 견본주택",
    "천안 성성동 아파트 분양",
  ],

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

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: "천안 아이파크 시티 3·4단지 조감도",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },

  category: "real estate",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "ko-KR",
      publisher: {
        "@id": `${SITE}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "미소부동산",
      description:
        "천안 아이파크 시티 3·4단지 관련 비공식 분양 정보 및 방문 상담 안내",
      url: SITE,
      telephone: PHONE,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        availableLanguage: ["Korean"],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </body>
    </html>
  );
}
