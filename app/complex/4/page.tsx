
import type { Metadata } from "next";
import ComplexDetail from "../ComplexDetail";

const SITE = "https://cheonaniparkcity34.com";
const URL = `${SITE}/complex/4`;

const TITLE =
  "천안아이파크시티4단지 | 모델하우스·견본주택·분양정보";

const DESCRIPTION =
  "천안 아이파크 시티 4단지(성성아이파크시티4단지) 분양정보 안내. 천안시 서북구 부대동 384-20, 818세대. 단지개요, 입지환경, 평면도 및 모델하우스·견본주택 관련 상담 정보를 확인하세요. 미소부동산 041-556-0303.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: URL,
    siteName: "천안 아이파크 시티 3·4단지 분양정보",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <ComplexDetail complex={4} />;
}
