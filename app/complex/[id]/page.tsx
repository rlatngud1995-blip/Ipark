
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComplexDetail from "../ComplexDetail";

/* =====================================
   기본 사이트 설정
===================================== */

const SITE_URL = "https://cheonaniparkcity34.com";

const SITE_NAME = "천안 아이파크 시티 3·4단지";

type ComplexNumber = 3 | 4;

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

/* =====================================
   3단지 / 4단지 SEO 정보
===================================== */

const COMPLEXES = {
  3: {
    name: "3단지",

    address: "충청남도 천안시 서북구 부대동 394-2",

    households: 896,

    title:
      "천안 아이파크 시티 3단지 | 평면도·분양정보·모델하우스 안내",

    description:
      "천안 아이파크 시티 3단지 분양정보 안내. " +
      "천안시 서북구 부대동 394-2, 총 896세대. " +
      "84㎡·102㎡·116㎡ 평면도, 동호수 배치도, " +
      "사업개요, 입지환경, 모델하우스 및 견본주택 관련 정보와 " +
      "상담 안내를 확인하세요. 비공식 분양정보 안내 사이트.",

    image: "/IMG_2162.jpeg",

    keywords: [
      "천안 아이파크 시티 3단지",
      "천안아이파크시티3단지",
      "천안 아이파크 3단지",
      "성성 아이파크 시티 3단지",
      "성성아이파크시티3단지",
      "천안 아이파크 시티 3단지 분양",
      "천안 아이파크 시티 3단지 평면도",
      "천안 아이파크 시티 3단지 분양가",
      "천안 아이파크 3단지 모델하우스",
      "천안 아이파크 3단지 견본주택",
      "천안 부대동 아이파크",
      "천안 아이파크 84타입",
      "천안 아이파크 102타입",
      "천안 아이파크 116타입",
    ],
  },

  4: {
    name: "4단지",

    address: "충청남도 천안시 서북구 부대동 384-20",

    households: 818,

    title:
      "천안 아이파크 시티 4단지 | 평면도·분양정보·모델하우스 안내",

    description:
      "천안 아이파크 시티 4단지 분양정보 안내. " +
      "천안시 서북구 부대동 384-20, 총 818세대. " +
      "84㎡·102㎡·116㎡ 평면도, 동호수 배치도, " +
      "사업개요, 입지환경, 모델하우스 및 견본주택 관련 정보와 " +
      "상담 안내를 확인하세요. 비공식 분양정보 안내 사이트.",

    image: "/IMG_2166.jpeg",

    keywords: [
      "천안 아이파크 시티 4단지",
      "천안아이파크시티4단지",
      "천안 아이파크 4단지",
      "성성 아이파크 시티 4단지",
      "성성아이파크시티4단지",
      "천안 아이파크 시티 4단지 분양",
      "천안 아이파크 시티 4단지 평면도",
      "천안 아이파크 시티 4단지 분양가",
      "천안 아이파크 4단지 모델하우스",
      "천안 아이파크 4단지 견본주택",
      "천안 부대동 아이파크",
      "천안 아이파크 84타입",
      "천안 아이파크 102타입",
      "천안 아이파크 116타입",
    ],
  },
} as const;

/* =====================================
   단지 번호 확인
===================================== */

function getComplex(
  id: string
): ComplexNumber | null {
  if (id === "3") return 3;
  if (id === "4") return 4;

  return null;
}

/* =====================================
   정적 페이지 생성
===================================== */

export function generateStaticParams() {
  return [
    { id: "3" },
    { id: "4" },
  ];
}

/* =====================================
   네이버 / 구글 SEO 메타데이터
===================================== */

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

  const canonical =
    `${SITE_URL}/complex/${complex}`;

  const imageUrl =
    `${SITE_URL}${data.image}`;

  return {
    title: {
      absolute: data.title,
    },

    description: data.description,

    keywords: [...data.keywords],

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
        "max-snippet": -1,
      },
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",

      url: canonical,

      siteName: SITE_NAME,

      title: data.title,

      description: data.description,

      images: [
        {
          url: imageUrl,

          alt:
            `천안 아이파크 시티 ${data.name} 조감도`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: data.title,

      description: data.description,

      images: [imageUrl],
    },
  };
}

/* =====================================
   3단지 / 4단지 상세페이지
===================================== */

export default async function ComplexPage({
  params,
}: PageProps) {
  const { id } = await params;

  const complex = getComplex(id);

  if (!complex) {
    notFound();
  }

  const data = COMPLEXES[complex];

  const canonical =
    `${SITE_URL}/complex/${complex}`;

  /* =====================================
     WebPage 구조화 데이터
  ===================================== */

  const webpageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${canonical}#webpage`,

    url: canonical,

    name: data.title,

    description: data.description,

    inLanguage: "ko-KR",

    isPartOf: {
      "@type": "WebSite",

      "@id": `${SITE_URL}/#website`,

      name: SITE_NAME,

      url: SITE_URL,
    },

    about: {
      "@type": "Place",

      name:
        `천안 아이파크 시티 ${data.name}`,

      address: {
        "@type": "PostalAddress",

        streetAddress:
          data.address.replace(
            "충청남도 천안시 서북구 ",
            ""
          ),

        addressLocality: "천안시",

        addressRegion: "충청남도",

        addressCountry: "KR",
      },
    },
  };

  /* =====================================
     Breadcrumb 구조화 데이터
  ===================================== */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "천안 아이파크 시티 3·4단지",

        item: SITE_URL,
      },

      {
        "@type": "ListItem",

        position: 2,

        name:
          `천안 아이파크 시티 ${data.name}`,

        item: canonical,
      },
    ],
  };

  const structuredData = [
    webpageSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {/* 네이버 / 구글 / AI 검색 구조화 데이터 */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* 기존 3단지 / 4단지 상세페이지 */}

      <ComplexDetail complex={complex} />
    </>
  );
}
