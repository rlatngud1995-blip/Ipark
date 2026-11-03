
import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://cheonaniparkcity34.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),

  title: {
    default:
      "천안 아이파크 시티 3·4단지 | 모델하우스·견본주택 분양안내",
    template: "%s | 천안 아이파크 시티 3·4단지",
  },

  description:
    "천안 아이파크 시티 3단지·4단지 분양정보, 성성 아이파크 시티 모델하우스 및 견본주택 방문 상담 안내. 미소부동산 운영 비공식 분양 안내 홈페이지. 상담 041-556-0303.",

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
  ],

  alternates: {
    canonical: SITE,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "천안 아이파크 시티 3·4단지 | 분양 및 모델하우스 안내",
    description:
      "천안 아이파크 시티 3·4단지 분양정보와 모델하우스 방문 상담. 미소부동산 운영 비공식 안내 사이트.",
    url: SITE,
    siteName: "천안 아이파크 시티 3·4단지 분양안내",
    locale: "ko_KR",
    type: "website",
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
