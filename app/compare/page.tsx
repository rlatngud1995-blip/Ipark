
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://cheonaniparkcity34.com";
const PHONE = "041-556-0303";

export const metadata: Metadata = {
  title: {
    absolute:
      "천안 아이파크 시티 3단지 4단지 비교 | 세대수·평면도·분양정보",
  },
  description:
    "천안 아이파크 시티 3단지와 4단지 차이점 비교. " +
    "세대수, 위치, 건축 규모, 84㎡·102㎡·116㎡ 주택형과 " +
    "분양정보를 한눈에 확인하세요. 비공식 정보 안내 페이지입니다.",
  keywords: [
    "천안 아이파크 시티 3단지 4단지 비교",
    "천안 아이파크 시티 비교",
    "천안 아이파크 3단지 4단지 차이",
    "천안 아이파크 시티 분양정보",
    "천안 아이파크 시티 평면도",
    "천안 아이파크 시티 분양가",
    "성성 아이파크 시티",
  ],
  alternates: {
    canonical: `${SITE_URL}/compare`,
  },
  openGraph: {
    title: "천안 아이파크 시티 3·4단지 비교",
    description:
      "3단지 896세대, 4단지 818세대. 위치와 주택형, 단지별 정보를 비교하세요.",
    url: `${SITE_URL}/compare`,
    type: "article",
    images: ["/IMG_2162.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const complexes = [
  {
    name: "3단지",
    image: "/IMG_2162.jpeg",
    address: "충남 천안시 서북구 부대동 394-2",
    households: "896세대",
    supply: "851세대",
    buildings: "7개 동",
    floors: "지하 3층 ~ 지상 최고 35층",
    developer: "IPARK현대산업개발",
    builder: "IPARK현대산업개발",
    types: "84㎡ A·B / 102㎡ A·B / 116㎡",
    moveIn: "2029년 6월 예정",
    href: "/complex/3",
  },
  {
    name: "4단지",
    image: "/IMG_2166.jpeg",
    address: "충남 천안시 서북구 부대동 384-20",
    households: "818세대",
    supply: "777세대",
    buildings: "8개 동",
    floors: "지하 2층 ~ 지상 최고 35층",
    developer: "㈜하나자산신탁",
    builder: "IPARK현대산업개발",
    types: "84㎡ A·B / 102㎡ A·B / 116㎡",
    moveIn: "2029년 6월 예정",
    href: "/complex/4",
  },
];

const comparisons = [
  {
    label: "위치",
    values: complexes.map((c) => c.address),
  },
  {
    label: "총 세대수",
    values: complexes.map((c) => c.households),
  },
  {
    label: "공급 세대수",
    values: complexes.map((c) => c.supply),
  },
  {
    label: "동 수",
    values: complexes.map((c) => c.buildings),
  },
  {
    label: "건축 규모",
    values: complexes.map((c) => c.floors),
  },
  {
    label: "시행",
    values: complexes.map((c) => c.developer),
  },
  {
    label: "시공",
    values: complexes.map((c) => c.builder),
  },
  {
    label: "주택형",
    values: complexes.map((c) => c.types),
  },
  {
    label: "입주 예정",
    values: complexes.map((c) => c.moveIn),
  },
];

const faqs = [
  {
    question: "천안 아이파크 시티 3단지와 4단지는 몇 세대인가요?",
    answer:
      "3단지는 896세대, 4단지는 818세대로 두 단지를 합하면 총 1,714세대입니다.",
  },
  {
    question: "3단지와 4단지의 위치가 다른가요?",
    answer:
      "두 단지 모두 천안시 서북구 부대동에 있으며, 3단지는 부대동 394-2, 4단지는 부대동 384-20 일원입니다.",
  },
  {
    question: "3단지와 4단지 평면도는 어디에서 확인하나요?",
    answer:
      "각 단지 상세페이지에서 84㎡ A·B, 102㎡ A·B, 116㎡ 주택형의 평면도 안내를 확인할 수 있습니다. 정확한 평면 구성은 공식 자료를 확인해 주세요.",
  },
  {
    question: "3단지와 4단지 분양가는 같은가요?",
    answer:
      "단지와 주택형, 층수 등에 따라 공급금액이 다를 수 있습니다. 정확한 가격은 각 단지의 공식 입주자모집공고를 확인해 주세요.",
  },
];

export default function ComparePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "천안 아이파크 시티 3단지 4단지 비교",
        url: `${SITE_URL}/compare`,
        description:
          "천안 아이파크 시티 3단지와 4단지의 세대수, 위치, 주택형, 건축 규모 비교",
        inLanguage: "ko-KR",
      },
      {
        "@type": "BreadcrumbList",
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
            name: "3·4단지 비교",
            item: `${SITE_URL}/compare`,
          },
        ],
      },
    ],
  };

  return (
    <main className="compare-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <header className="compare-header">
        <Link href="/" className="compare-logo">
          IPARK CITY
          <small>CHEONAN 3 · 4</small>
        </Link>

        <nav>
          <Link href="/">홈</Link>
          <Link href="/complex/3">3단지</Link>
          <Link href="/complex/4">4단지</Link>
          <a href={`tel:${PHONE.replace(/-/g, "")}`}>
            전화상담
          </a>
        </nav>
      </header>

      <section className="compare-hero">
        <div className="compare-container">
          <span>COMPLEX COMPARISON</span>
          <h1>
            천안 아이파크 시티
            <br />
            <strong>3단지 · 4단지 비교</strong>
          </h1>
          <p>
            세대수부터 단지 위치, 주택형,
            건축 규모까지
            <br />
            두 단지의 차이점을 확인해 보세요.
          </p>
        </div>
      </section>

      <section className="compare-content">
        <div className="compare-container">
          <div className="compare-heading">
            <span>AT A GLANCE</span>
            <h2>두 단지 한눈에 보기</h2>
            <p>
              천안 아이파크 시티 3단지와 4단지의
              주요 정보를 비교했습니다.
            </p>
          </div>

          <div className="compare-images">
            {complexes.map((complex) => (
              <Link
                href={complex.href}
                className="compare-image-card"
                key={complex.name}
              >
                <Image
                  src={complex.image}
                  alt={`천안 아이파크 시티 ${complex.name} 조감도`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div>
                  <span>CHEONAN IPARK CITY</span>
                  <h3>{complex.name}</h3>
                  <p>{complex.households}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">비교 항목</th>
                  <th scope="col">3단지</th>
                  <th scope="col">4단지</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.values[0]}</td>
                    <td>{row.values[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="compare-notice">
            ※ 상기 정보는 안내용으로,
            실제 사업 내용과 공급 조건은
            공식 입주자모집공고를 우선합니다.
          </p>

          <div className="compare-links">
            <Link href="/complex/3">
              <span>COMPLEX 03</span>
              <strong>3단지 상세정보</strong>
              <small>평면도 · 분양가 · 단지안내 ↗</small>
            </Link>
            <Link href="/complex/4">
              <span>COMPLEX 04</span>
              <strong>4단지 상세정보</strong>
              <small>평면도 · 분양가 · 단지안내 ↗</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="compare-guide">
        <div className="compare-container">
          <div className="compare-heading">
            <span>COMPLEX GUIDE</span>
            <h2>어떤 점을 비교해야 할까요?</h2>
          </div>

          <div className="guide-grid">
            <article>
              <span>01</span>
              <h3>단지 규모</h3>
              <p>
                3단지는 896세대, 4단지는
                818세대입니다. 세대수뿐 아니라
                동 배치와 공용시설 구성도
                함께 살펴보세요.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>주택형과 평면도</h3>
              <p>
                84㎡, 102㎡, 116㎡ 주택형을
                비교하고 가족 구성과 생활 동선에
                적합한 구조인지 확인해 보세요.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>분양가격</h3>
              <p>
                같은 면적이라도 단지, 주택형,
                층수와 옵션에 따라 금액이
                달라질 수 있습니다.
                모집공고의 공급금액과 별도
                비용을 확인하세요.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="compare-faq">
        <div className="compare-container">
          <div className="compare-heading">
            <span>FAQ</span>
            <h2>자주 묻는 질문</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="compare-contact">
        <div className="compare-container">
          <span>CONTACT US</span>
          <h2>
            천안 아이파크 시티
            <br />
            3·4단지 방문 상담
          </h2>
          <p>단지별 상담은 전화로 문의해 주세요.</p>
          <a href={`tel:${PHONE.replace(/-/g, "")}`}>
            {PHONE}
          </a>
        </div>
      </section>

      <footer className="compare-footer">
        <div className="compare-container">
          <strong>IPARK CITY</strong>
          <p>
            
            
            사업 내용과 분양
            조건은 공식 입주자모집공고를
            확인하시기 바랍니다.
          </p>
          <Link href="/">메인으로 돌아가기</Link>
        </div>
      </footer>

      <div className="compare-mobile-call">
        <a href={`tel:${PHONE.replace(/-/g, "")}`}>
          ☎ 방문 상담 {PHONE}
        </a>
      </div>

      <style>{`
        .compare-page {
          background: #f7f5f0;
          color: #24282d;
          font-family: "Noto Sans KR", sans-serif;
        }
        .compare-page * { box-sizing: border-box; }
        .compare-page a { text-decoration: none; }
        .compare-container {
          width: min(1120px, calc(100% - 40px));
          margin: auto;
        }
        .compare-header {
          background: #101c2a;
          padding: 22px 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .compare-logo {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font: 24px Georgia, serif;
          letter-spacing: 2px;
          color: #fff;
        }
        .compare-logo small {
          font: 9px Arial, sans-serif;
          letter-spacing: 3px;
          color: #c9ab78;
        }
        .compare-header nav {
          display: flex;
          gap: 25px;
        }
        .compare-header nav a {
          color: #fff;
          font-size: 13px;
        }
        .compare-hero {
          background: linear-gradient(
            135deg, #101c2a, #263d53
          );
          padding: 110px 0;
          color: #fff;
        }
        .compare-hero span,
        .compare-heading span,
        .compare-contact span {
          font-size: 11px;
          letter-spacing: 3px;
          color: #c9ab78;
        }
        .compare-hero h1 {
          font-size: clamp(35px, 5vw, 60px);
          font-weight: 400;
          line-height: 1.4;
          margin: 25px 0;
          letter-spacing: -2px;
        }
        .compare-hero h1 strong {
          color: #e4d3b4;
          font-weight: 500;
        }
        .compare-hero p {
          font-size: 15px;
          line-height: 2;
          color: #d0d7de;
        }
        .compare-content,
        .compare-guide,
        .compare-faq {
          padding: 90px 0;
        }
        .compare-heading {
          text-align: center;
          margin-bottom: 40px;
        }
        .compare-heading h2 {
          font-size: clamp(28px, 4vw, 42px);
          margin: 15px 0;
          letter-spacing: -1px;
        }
        .compare-heading p {
          font-size: 14px;
          color: #777;
          line-height: 1.9;
        }
        .compare-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 35px;
        }
        .compare-image-card {
          position: relative;
          height: 340px;
          overflow: hidden;
          background: #101c2a;
          color: #fff;
        }
        .compare-image-card img {
          object-fit: cover;
          transition: transform .5s;
        }
        .compare-image-card:hover img {
          transform: scale(1.04);
        }
        .compare-image-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 30%, #101c2ae8
          );
        }
        .compare-image-card > div {
          position: absolute;
          z-index: 2;
          bottom: 25px;
          left: 30px;
        }
        .compare-image-card span {
          font-size: 10px;
          letter-spacing: 2px;
          color: #e4d3b4;
        }
        .compare-image-card h3 {
          font-size: 36px;
          margin: 8px 0;
        }
        .compare-image-card p { margin: 0; }
        .compare-table-wrap {
          overflow-x: auto;
          background: #fff;
        }
        .compare-table {
          border-collapse: collapse;
          width: 100%;
          min-width: 580px;
        }
        .compare-table th,
        .compare-table td {
          padding: 20px 15px;
          border-bottom: 1px solid #e7e2d9;
          text-align: center;
          font-size: 14px;
          line-height: 1.7;
        }
        .compare-table thead th {
          background: #17283a;
          color: #fff;
        }
        .compare-table tbody th {
          background: #f4f0e9;
          font-weight: 600;
          width: 22%;
        }
        .compare-table td { width: 39%; }
        .compare-notice {
          font-size: 11px;
          line-height: 1.8;
          color: #888;
          margin: 20px 0 35px;
        }
        .compare-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .compare-links a {
          background: #fff;
          border: 1px solid #e4ded4;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: #17283a;
        }
        .compare-links span {
          font-size: 10px;
          letter-spacing: 2px;
          color: #b59b77;
        }
        .compare-links strong { font-size: 23px; }
        .compare-links small {
          color: #777;
          font-size: 12px;
        }
        .compare-guide { background: #fff; }
        .guide-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .guide-grid article {
          padding: 35px;
          background: #f7f5f0;
        }
        .guide-grid article span {
          font: 28px Georgia, serif;
          color: #b59b77;
        }
        .guide-grid article h3 {
          margin: 25px 0 15px;
          font-size: 21px;
        }
        .guide-grid article p {
          color: #666;
          font-size: 13px;
          line-height: 2;
        }
        .compare-faq { background: #f7f5f0; }
        .faq-list {
          max-width: 850px;
          margin: auto;
        }
        .faq-list details {
          border-bottom: 1px solid #d8d0c3;
          padding: 22px 10px;
        }
        .faq-list summary {
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.7;
        }
        .faq-list p {
          color: #666;
          font-size: 13px;
          line-height: 2;
        }
        .compare-contact {
          text-align: center;
          padding: 90px 20px;
          background: #1b2b3d;
          color: #fff;
        }
        .compare-contact h2 {
          font-size: clamp(30px, 4vw, 43px);
          font-weight: 400;
          line-height: 1.5;
        }
        .compare-contact p { color: #c5cbd0; }
        .compare-contact a {
          display: inline-block;
          color: #e4d3b4;
          border: 1px solid #c9ab78;
          padding: 17px 35px;
          font-size: 22px;
          margin-top: 20px;
        }
        .compare-footer {
          background: #101820;
          padding: 45px 0 60px;
          color: #fff;
        }
        .compare-footer strong {
          font: 23px Georgia, serif;
        }
        .compare-footer p {
          font-size: 11px;
          color: #a5adb4;
          line-height: 2;
          max-width: 850px;
        }
        .compare-footer a {
          color: #e4d3b4;
          font-size: 12px;
        }
        .compare-mobile-call { display: none; }

        @media (max-width: 768px) {
          .compare-header {
            padding: 18px 20px;
          }
          .compare-logo { font-size: 18px; }
          .compare-header nav { gap: 12px; }
          .compare-header nav a { font-size: 11px; }
          .compare-hero { padding: 80px 0; }
          .compare-hero p { font-size: 13px; }
          .compare-content,
          .compare-guide,
          .compare-faq {
            padding: 65px 0;
          }
          .compare-images,
          .compare-links,
          .guide-grid {
            grid-template-columns: 1fr;
          }
          .compare-image-card { height: 260px; }
          .compare-table th,
          .compare-table td {
            padding: 15px 10px;
            font-size: 12px;
          }
          .compare-links a,
          .guide-grid article {
            padding: 25px;
          }
          .compare-footer { padding-bottom: 115px; }
          .compare-mobile-call {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px 15px;
            padding-bottom: calc(
              10px + env(safe-area-inset-bottom)
            );
            background: #101c2a;
            z-index: 100;
          }
          .compare-mobile-call a {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 52px;
            background: #c9ab78;
            color: #101c2a;
            font-size: 15px;
            font-weight: 700;
          }
        }
      `}</style>
    </main>
  );
}
