
import type { Metadata } from "next";

const SITE_URL =
  "https://cheonaniparkcity34.com";

const PAGE_URL =
  `${SITE_URL}/compare`;

const TITLE =
  "천안 아이파크 시티 3단지 4단지 비교";

const DESCRIPTION =
  "천안 아이파크 시티 3단지와 4단지의 " +
  "세대수, 위치, 건축 규모와 주택형을 " +
  "한눈에 비교해 보세요.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: PAGE_URL,
    siteName:
      "천안 아이파크 시티 3·4단지",
    title: TITLE,
    description: DESCRIPTION,

    images: [
      {
        url: "/IMG_2162.jpeg",
        alt:
          "천안 아이파크 시티 3단지 4단지 비교",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/IMG_2162.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
