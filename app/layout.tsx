
import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://cheonaniparkcity34.com";

const SITE_NAME =
  "천안 아이파크 시티 3·4단지 분양정보";

const DEFAULT_TITLE =
  "천안아이파크시티 3·4단지 | 모델하우스·견본주택·분양정보";

const DEFAULT_DESCRIPTION =
  "천안아이파크시티3단지·천안아이파크시티4단지 분양정보 안내. 성성아이파크시티 3·4단지 사업개요, 입지환경, 평면도 및 모델하우스·견본주택 관련 상담정보. 미소부동산 운영 비공식 안내 홈페이지. 상담 041-556-0303.";

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
    "천안아이파크시티3단지",
    "천안아이파크시티4단지",
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
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },

  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
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
