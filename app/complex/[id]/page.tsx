
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComplexDetail from "../ComplexDetail";

const SITE_URL = "https://cheonaniparkcity34.com";

type ComplexNumber = 3 | 4;

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const COMPLEXES = {
  3: {
    name: "3단지",
    title:
      "천안 아이파크 시티 3단지 | 성성 아이파크 시티·모델하우스·견본주택 안내",
    description:
      "천안아이파크시티3단지, 성성아이파크시티3단지 분양정보 안내. " +
      "천안 아이파크 시티 3단지 사업개요, 동호수 배치도, " +
      "세대별 평면도, 모델하우스 및 견본주택 관련 정보, " +
      "방문 상담 안내. 미소부동산 운영 비공식 안내 사이트. " +
      "문의 041-556-0303.",
    image: "/IMG_2162.jpeg",
  },
  4: {
    name: "4단지",
    title:
      "천안 아이파크 시티 4단지 | 성성 아이파크 시티·모델하우스·견본주택 안내",
    description:
      "천안아이파크시티4단지, 성성아이파크시티4단지 분양정보 안내. " +
      "천안 아이파크 시티 4단지 사업개요, 동호수 배치도, " +
      "세대별 평면도, 모델하우스 및 견본주택 관련 정보, " +
      "방문 상담 안내. 미소부동산 운영 비공식 안내 사이트. " +
      "문의 041-556-0303.",
    image: "/IMG_2166.jpeg",
  },
} as const;

function getComplex(id: string): ComplexNumber | null {
  if (id === "3") return 3;
  if (id === "4") return 4;
  return null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const complex = getComplex(id);

  if (!complex) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const data = COMPLEXES[complex];
  const canonical = `${SITE_URL}/complex/${complex}`;

  return {
    title: {
      absolute: data.title,
    },

    description: data.description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: canonical,
      siteName: "천안 아이파크 시티 3·4단지",
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.image,
          alt: `천안 아이파크 시티 ${data.name} 조감도`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

export function generateStaticParams() {
  return [{ id: "3" }, { id: "4" }];
}

export default async function ComplexPage({
  params,
}: PageProps) {
  const { id } = await params;
  const complex = getComplex(id);

  if (!complex) {
    notFound();
  }

  return <ComplexDetail complex={complex} />;
}
