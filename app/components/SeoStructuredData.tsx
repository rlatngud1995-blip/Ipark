
const SITE_URL =
  "https://cheonaniparkcity34.com";

const SITE_NAME =
  "천안 아이파크 시티 3·4단지";

const FAQS = [
  {
    question:
      "천안 아이파크 시티 3단지와 4단지는 어디에 있나요?",
    answer:
      "3단지는 충청남도 천안시 서북구 부대동 394-2, " +
      "4단지는 부대동 384-20 일원에 위치합니다.",
  },
  {
    question:
      "천안 아이파크 시티 3·4단지는 총 몇 세대인가요?",
    answer:
      "3단지 896세대, 4단지 818세대로 " +
      "총 1,714세대입니다.",
  },
  {
    question:
      "3단지와 4단지의 차이점은 무엇인가요?",
    answer:
      "두 단지는 세대수, 위치, 건축 규모와 " +
      "사업 주체 등에 차이가 있습니다. " +
      "비교페이지에서 주요 정보를 확인할 수 있습니다.",
  },
];

type PageType =
  | "home"
  | "complex3"
  | "complex4"
  | "compare";

type Props = {
  page: PageType;
};

function getPageData(page: PageType) {
  switch (page) {
    case "complex3":
      return {
        url: `${SITE_URL}/complex/3`,
        title:
          "천안 아이파크 시티 3단지 분양정보·평면도",
        description:
          "천안 아이파크 시티 3단지 896세대. " +
          "분양가, 평면도, 사업개요와 입지환경 안내.",
      };

    case "complex4":
      return {
        url: `${SITE_URL}/complex/4`,
        title:
          "천안 아이파크 시티 4단지 분양정보·평면도",
        description:
          "천안 아이파크 시티 4단지 818세대. " +
          "분양가, 평면도, 사업개요와 입지환경 안내.",
      };

    case "compare":
      return {
        url: `${SITE_URL}/compare`,
        title:
          "천안 아이파크 시티 3단지 4단지 비교",
        description:
          "천안 아이파크 시티 3단지와 4단지의 " +
          "세대수, 위치, 건축 규모 및 주택형 비교.",
      };

    default:
      return {
        url: SITE_URL,
        title:
          "천안 아이파크 시티 3·4단지 분양정보",
        description:
          "천안 아이파크 시티 3단지와 4단지의 " +
          "분양정보, 평면도 및 방문 상담 안내. " +
          "비공식 정보 제공 사이트.",
      };
  }
}

export default function SeoStructuredData({
  page,
}: Props) {
  const data = getPageData(page);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "천안 아이파크 시티 3·4단지 비공식 분양정보 안내",
      inLanguage: "ko-KR",
    },
    {
      "@type": "WebPage",
      "@id": `${data.url}#webpage`,
      url: data.url,
      name: data.title,
      description: data.description,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      inLanguage: "ko-KR",
    },
  ];

  if (page === "home") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (page !== "home") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${data.url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.title,
          item: data.url,
        },
      ],
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
