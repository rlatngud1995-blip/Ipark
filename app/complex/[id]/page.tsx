
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComplexDetail from "../ComplexDetail";

const SITE_URL =
  "https://cheonaniparkcity34.com";

type ComplexId = "3" | "4";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const COMPLEX_SEO: Record<
  ComplexId,
  {
    title: string;
    description: string;
    image: string;
  }
> = {
  "3": {
    title:
      "천안 아이파크 시티 3단지 분양정보·평면도",

    description:
      "천안 아이파크 시티 3단지 896세대. " +
      "분양가, 평면도, 사업개요와 " +
      "입지환경을 확인하세요.",

    image: "/IMG_2182.jpeg",
  },

  "4": {
    title:
      "천안 아이파크 시티 4단지 분양정보·평면도",

    description:
      "천안 아이파크 시티 4단지 818세대. " +
      "분양가, 평면도, 사업개요와 " +
      "입지환경을 확인하세요.",

    image: "/IMG_2183.jpeg",
  },
};

function isComplexId(
  id: string
): id is ComplexId {
  return id === "3" || id === "4";
}

export function generateStaticParams() {
  return [
    { id: "3" },
    { id: "4" },
  ];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  if (!isComplexId(id)) {
    return {
      title: "단지 정보를 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = COMPLEX_SEO[id];

  const canonical =
    `${SITE_URL}/complex/${id}`;

  return {
    title: {
      absolute: seo.title,
    },

    description: seo.description,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: canonical,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.image,
          alt: seo.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ComplexPage({
  params,
}: PageProps) {
  const { id } = await params;

  if (!isComplexId(id)) {
    notFound();
  }

  return (
    <ComplexDetail
      complexNumber={Number(id) as 3 | 4}
    />
  );
}
