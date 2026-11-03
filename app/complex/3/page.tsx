
import type { Metadata } from "next";
import ComplexDetail from "../ComplexDetail";

export const metadata: Metadata = {
  title: "천안 아이파크 시티 3단지 | 사업개요·입지환경·분양안내",
  description:
    "천안 아이파크 시티 3단지. 천안시 서북구 부대동 394-2, 896세대. 사업개요, 입지환경, 프리미엄, 단지안내 및 분양 관련 정보. 미소부동산 041-556-0303.",
  alternates: {
    canonical:
      "https://cheonaniparkcity34.com/complex/3",
  },
};

export default function Page() {
  return <ComplexDetail complex={3} />;
}
