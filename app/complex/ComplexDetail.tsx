
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ComplexNumber = 3 | 4;

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

const DATA = {
  3: {
    number: "03",
    name: "3단지",
    address: "충청남도 천안시 서북구 부대동 394-2",
    households: "896세대",
    developer: "IPARK현대산업개발",
    builder: "IPARK현대산업개발",
    other: 4,
    hero: "/IMG_2162.jpeg",
    exterior: "/IMG_2182.jpeg",
    overview: "/IMG_2162.jpeg",
    arrangement: "/IMG_2162.jpeg",
    buildingUnits: "/IMG_2218.webp",
  },
  4: {
    number: "04",
    name: "4단지",
    address: "충청남도 천안시 서북구 부대동 384-20",
    households: "818세대",
    developer: "㈜하나자산신탁",
    builder: "IPARK현대산업개발",
    other: 3,
    hero: "/IMG_2166.jpeg",
    exterior: "/IMG_2183.jpeg",
    overview: "/IMG_2166.jpeg",
    arrangement: "/IMG_2166.jpeg",
    buildingUnits: "/IMG_2219.webp",
  },
} as const;

const MENU = [
  ["overview", "사업개요"],
  ["location", "입지환경"],
  ["premium", "프리미엄"],
  ["complex", "단지안내"],
  ["sales", "분양안내"],
  ["contact", "상담안내"],
];

const LOCATION = [
  {
    num: "01",
    title: "자연환경",
    headline: "자연과 가까운 일상",
    text:
      "성성호수공원과 노태근린공원 등 주변 녹지와 휴식공간을 살펴볼 수 있습니다.",
    detail:
      "공원 접근 경로와 실제 이동거리는 출발 위치에 따라 달라질 수 있습니다.",
    image: "/IMG_2163.jpeg",
  },
  {
    num: "02",
    title: "교육환경",
    headline: "자녀를 위한 교육 여건",
    text:
      "주변 교육시설과 학교 신설 계획 등을 살펴보고 통학 여건을 확인할 수 있도록 안내합니다.",
    detail:
      "학교 신설·개교 및 통학구역은 관계기관의 최종 결정에 따릅니다.",
    image: "",
  },
  {
    num: "03",
    title: "생활환경",
    headline: "일상에 필요한 생활 인프라",
    text:
      "대형마트와 상업시설, 의료시설 등 천안 북부 생활권의 다양한 편의시설을 소개합니다.",
    detail:
      "시설별 운영 여부와 이동시간은 별도 확인이 필요합니다.",
    image: "/IMG_2186.jpeg",
  },
  {
    num: "04",
    title: "교통환경",
    headline: "광역 이동을 고려한 교통 여건",
    text:
      "천안IC와 경부고속도로 접근 여건, 부성역 신설 계획 등 주변 교통환경을 살펴봅니다.",
    detail:
      "예정된 교통사업의 일정과 세부 계획은 변경될 수 있습니다.",
    image: "",
  },
];

const PREMIUM = [
  {
    num: "01",
    title: "단지 설계",
    text:
      "동 배치와 주거동 사이 공간을 중심으로 단지 설계 정보를 안내합니다.",
    image: "/IMG_2189.jpeg",
  },
  {
    num: "02",
    title: "주거 평면",
    text:
      "주택형별 구조와 공간 활용 계획을 살펴봅니다.",
    image: "/IMG_2225.webp",
  },
  {
    num: "03",
    title: "조경 공간",
    text:
      "단지 내 조경과 휴식공간의 구성 및 적용 계획을 안내합니다.",
    image: "/IMG_2193.jpeg",
  },
  {
    num: "04",
    title: "커뮤니티 시설",
    text:
      "커뮤니티 및 공용시설의 구성과 적용 여부를 안내합니다.",
    image: "/IMG_2184.jpeg",
  },
  {
    num: "05",
    title: "생활 편의",
    text:
      "보행 동선과 단지 내 생활 편의 공간을 살펴봅니다.",
    image: "/IMG_2187.jpeg",
  },
];

const FLOOR_IMAGES = [
  {
    src: "/IMG_2225.webp",
    title: "주택형 평면도 01",
  },
  {
    src: "/IMG_2226.webp",
    title: "주택형 평면도 02",
  },
  {
    src: "/IMG_2227.webp",
    title: "주택형 평면도 03",
  },
  {
    src: "/IMG_2228.webp",
    title: "주택형 평면도 04",
  },
];

const SALES = [
  ["01", "공급안내", "주택형별 공급 세대수 및 공급 조건"],
  ["02", "분양일정", "입주자모집공고 및 청약 일정"],
  ["03", "분양가격", "공급금액과 납부 조건"],
  ["04", "청약안내", "청약 자격 및 신청 방법"],
  ["05", "계약안내", "계약 일정과 필요 서류"],
  ["06", "유의사항", "공식 공고 및 계약 조건 확인"],
];

function SectionTitle({
  index,
  english,
  title,
  description,
}: {
  index: string;
  english: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-title">
      <span className="section-index">
        {index} / {english}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Photo({
  src,
  alt,
  document = false,
  priority = false,
}: {
  src: string;
  alt: string;
  document?: boolean;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div className="photo-placeholder">
        <span>IPARK CITY</span>
        <p>관련 안내자료 확인 중</p>
      </div>
    );
  }

  if (document) {
    return (
      <div className="document-photo">
        <Image
          src={src}
          alt={alt}
          width={1800}
          height={2400}
          sizes="(max-width: 768px) 100vw, 1100px"
          className="document-image"
        />
      </div>
    );
  }

  return (
    <div className="photo">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 1100px"
        className="photo-image"
      />
    </div>
  );
}

export default function ComplexDetail({
  complex,
}: {
  complex: ComplexNumber;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = DATA[complex];

  return (
    <main className="ipark-detail">
      {/* HEADER */}
      <header className="site-header">
        <Link href="/" className="brand">
          <strong>IPARK CITY</strong>
          <small>CHEONAN · {data.number}</small>
        </Link>

        <nav className="desktop-menu">
          {MENU.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기 및 닫기"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <a className="header-call" href={TEL}>
          ☎ {PHONE}
        </a>
      </header>

      {menuOpen && (
        <nav className="mobile-menu">
          {MENU.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <span>↗</span>
            </a>
          ))}
        </nav>
      )}

      {/* 단지 전환 */}
      <div className="complex-switch">
        <Link
          href="/complex/3"
          className={complex === 3 ? "active" : ""}
        >
          3단지
        </Link>

        <Link
          href="/complex/4"
          className={complex === 4 ? "active" : ""}
        >
          4단지
        </Link>
      </div>

      {/* HERO */}
      <section className="detail-hero">
        <div className="hero-background">
          <Image
            src={data.hero}
            alt={`천안 아이파크 시티 ${data.name} 조감도`}
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>

        <div className="hero-shade" />

        <div className="hero-content container">
          <span>CHEONAN IPARK CITY</span>

          <h1>
            천안 아이파크 시티
            <br />
            <strong>{data.name}</strong>
          </h1>

          <p>
            새로운 주거 공간,
            <br />
            천안 아이파크 시티를 만나다.
          </p>

          <a href="#overview" className="hero-button">
            {data.name} 자세히 보기 ↗
          </a>
        </div>
      </section>

      {/* 사업개요 */}
      <section id="overview" className="detail-section">
        <div className="container">
          <SectionTitle
            index="01"
            english="PROJECT OVERVIEW"
            title="사업개요"
            description={`${data.name}의 주요 사업 정보를 소개합니다.`}
          />

          <Photo
            src={data.overview}
            alt={`천안 아이파크 시티 ${data.name} 사업 조감도`}
          />

          <div className="overview-heading">
            <span>Overview</span>
            <h3>천안 아이파크 시티 {data.name}</h3>
          </div>

          <div className="overview-grid">
            <div className="overview-item">
              <h4>위치</h4>
              <p>{data.address}</p>
            </div>

            <div className="overview-item">
              <h4>건축규모</h4>
              <p>
                3·4단지 합계 1,714세대
                <br />
                {data.name} {data.households}
              </p>
            </div>

            <div className="overview-item">
              <h4>전용면적</h4>
              <p>
                84㎡ A·B
                <br />
                102㎡ A·B
                <br />
                116㎡
              </p>
            </div>

            <div className="overview-item">
              <h4>시행·시공</h4>
              <p>
                시행 {data.developer}
                <br />
                시공 {data.builder}
              </p>
            </div>
          </div>

          <p className="disclaimer">
            ※ 사업 정보와 조감도는 안내자료를
            기준으로 작성되었습니다.
            실제 설계와 공급 내용은 변경될 수 있으며
            공식 자료를 우선하여 확인해 주세요.
          </p>
        </div>
      </section>

      {/* 입지환경 */}
      <section
        id="location"
        className="detail-section soft"
      >
        <div className="container">
          <SectionTitle
            index="02"
            english="LOCATION"
            title="입지환경"
            description="자연과 교육, 생활과 교통을 아우르는 주변 환경"
          />

          <div className="location-list">
            {LOCATION.map((item) => (
              <article
                className="location-item"
                key={item.num}
              >
                <Photo
                  src={item.image}
                  alt={`${item.title} 안내 이미지`}
                />

                <div className="location-copy">
                  <span>
                    {item.num} / LOCATION
                  </span>

                  <h3>{item.headline}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <small>{item.detail}</small>
                </div>
              </article>
            ))}
          </div>

          <p className="disclaimer">
            ※ 주변 개발계획, 학교 신설 및
            교통시설은 관계기관 사정에 따라
            변경되거나 지연될 수 있습니다.
          </p>
        </div>
      </section>

      {/* 프리미엄 */}
      <section
        id="premium"
        className="detail-section"
      >
        <div className="container">
          <SectionTitle
            index="03"
            english="PREMIUM"
            title="프리미엄"
            description="단지의 설계와 주거 편의 요소를 살펴보세요."
          />

          <div className="premium-intro">
            <span>PREMIUM LIVING</span>
            <h3>
              생활의 가치를 더하는
              <br />
              주거 공간
            </h3>
          </div>

          <div className="premium-grid">
            {PREMIUM.map((item) => (
              <article
                className="premium-card"
                key={item.num}
              >
                <div className="premium-photo">
                  <Photo
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="premium-copy">
                  <span>{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="disclaimer">
            ※ 커뮤니티 및 편의시설의 실제 설치
            여부와 운영 방식은 공식 설계도서와
            계약 관련 자료를 기준으로 확인해야 합니다.
          </p>
        </div>
      </section>

      {/* 단지안내 */}
      <section
        id="complex"
        className="detail-section soft"
      >
        <div className="container">
          <SectionTitle
            index="04"
            english="COMPLEX GUIDE"
            title="단지안내"
            description={`${data.name}의 단지 구성과 주택형별 평면도를 안내합니다.`}
          />

          {/* 단지 외관 */}
          <div className="guide-block">
            <h3>{data.name} 단지 외관</h3>

            <Photo
              src={data.exterior}
              alt={`천안 아이파크 시티 ${data.name} 외관`}
            />
          </div>

          {/* 단지 조감도 */}
          <div className="guide-block">
            <h3>단지 조감도</h3>

            <Photo
              src={data.arrangement}
              alt={`천안 아이파크 시티 ${data.name} 단지 조감도`}
            />
          </div>

          {/* 동호수 배치도 */}
          <div className="guide-block">
            <h3>동·호수 배치도</h3>

            <p className="guide-description">
              {data.name}의 동별 층수와 호수,
              주택형별 배치를 확인할 수 있습니다.
            </p>

            <Photo
              src={data.buildingUnits}
              alt={`천안 아이파크 시티 ${data.name} 동호수 배치도`}
              document
            />

            <a
              href={data.buildingUnits}
              target="_blank"
              rel="noopener noreferrer"
              className="document-link"
            >
              동·호수 배치도 크게 보기 ↗
            </a>
          </div>

          {/* 주택형 평면도 */}
          <div className="guide-block">
            <h3>주택형별 평면도</h3>

            <p className="guide-description">
              천안 아이파크 시티 {data.name}의
              주거 공간 구성을 확인해 보세요.
              아래 이미지는 3단지와 4단지에
              공통으로 제공된 평면도 자료입니다.
            </p>

            <div className="floor-grid">
              {FLOOR_IMAGES.map((floor) => (
                <article
                  className="floor-card"
                  key={floor.src}
                >
                  <div className="floor-image">
                    <Image
                      src={floor.src}
                      alt={`천안 아이파크 시티 ${data.name} ${floor.title}`}
                      width={1200}
                      height={1000}
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="floor-img"
                    />
                  </div>

                  <div className="floor-info">
                    <strong>{floor.title}</strong>

                    <a
                      href={floor.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      평면도 크게 보기 ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="disclaimer">
              ※ 평면도별 정확한 주택형 명칭과
              적용 단지는 공식 평면도 및
              분양 자료를 기준으로 확인해야 합니다.
              이미지는 공간 구성 이해를 위한
              참고자료입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 분양안내 */}
      <section
        id="sales"
        className="detail-section"
      >
        <div className="container">
          <SectionTitle
            index="05"
            english="SALES GUIDE"
            title="분양안내"
            description="공급 조건과 청약·계약 관련 정보를 확인하세요."
          />

          <div className="sales-grid">
            {SALES.map(([num, title, desc]) => (
              <article
                className="sales-card"
                key={num}
              >
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <small>공식 자료 기준 확인</small>
              </article>
            ))}
          </div>

          <p className="disclaimer">
            ※ 분양가, 청약 일정, 계약 조건 및
            공급 가능 여부는 시점에 따라
            달라질 수 있습니다.
            최신 입주자모집공고와 공식 안내를
            확인해 주세요.
          </p>
        </div>
      </section>

      {/* 상담 */}
      <section id="contact" className="contact">
        <div className="container">
          <span>CONTACT US</span>

          <h2>
            천안 아이파크 시티
            <br />
            {data.name} 상담안내
          </h2>

          <p>
            분양 및 방문 관련 상담은
            <br />
            미소부동산으로 문의해 주세요.
          </p>

          <a href={TEL} className="contact-call">
            ☎ {PHONE}
          </a>

          <Link
            href={`/complex/${data.other}`}
            className="other-complex"
          >
            {data.other}단지 살펴보기 ↗
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="detail-footer">
        <div className="container">
          <div className="footer-heading">
            <strong>미소부동산</strong>
            <Link href="/">
              메인으로 돌아가기 ↗
            </Link>
          </div>

          <p>
            본 홈페이지는 미소부동산이 운영하는
            부동산 정보 및 상담 안내 사이트입니다.
            시행사·시공사·공식 분양사무소의
            공식 홈페이지가 아닙니다.
          </p>

          <p>
            제공된 사업 및 분양 정보는 변경될 수
            있으므로 최신 공식 자료를 우선하여
            확인해 주세요.
          </p>
        </div>
      </footer>

      {/* STYLES */}
      <style jsx global>{`
        .ipark-detail {
          overflow-x: clip;
          background: #ffffff;
          color: #262c30;
          font-family: "Noto Sans KR", sans-serif;
        }

        .ipark-detail * {
          box-sizing: border-box;
        }

        .ipark-detail a {
          color: inherit;
          text-decoration: none;
        }

        .ipark-detail .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ipark-detail section[id] {
          scroll-margin-top: 110px;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 75px;
          padding: 0 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          background: #ffffff;
          border-bottom: 1px solid #eeeeee;
        }

        .brand {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex-shrink: 0;
        }

        .brand strong {
          font: 23px Georgia, serif;
          letter-spacing: 1px;
        }

        .brand small {
          color: #777777;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .desktop-menu {
          display: flex;
          gap: 22px;
        }

        .desktop-menu a {
          font-size: 13px;
          white-space: nowrap;
        }

        .header-call {
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .mobile-toggle {
          display: none;
          border: 0;
          background: transparent;
          font-size: 25px;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 75px;
          left: 0;
          right: 0;
          z-index: 99;
          padding: 15px 25px 25px;
          background: #ffffff;
          box-shadow: 0 15px 30px #0002;
        }

        .mobile-menu a {
          display: flex;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid #eeeeee;
          font-size: 15px;
        }

        .complex-switch {
          display: flex;
          max-width: 550px;
          margin: 20px auto;
          border: 1px solid #d8dcdf;
        }

        .complex-switch a {
          flex: 1;
          padding: 15px;
          text-align: center;
          font-size: 15px;
        }

        .complex-switch a.active {
          background: #303b42;
          color: #ffffff;
        }

        .detail-hero {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #283c4b;
          color: #ffffff;
        }

        .hero-background,
        .hero-shade {
          position: absolute;
          inset: 0;
        }

        .hero-image {
          object-fit: cover;
          object-position: center;
        }

        .hero-shade {
          background: linear-gradient(
            90deg,
            rgba(20, 35, 48, 0.91),
            rgba(20, 35, 48, 0.5),
            rgba(20, 35, 48, 0.12)
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 80px 0;
        }

        .hero-content > span {
          font-size: 11px;
          letter-spacing: 3px;
        }

        .hero-content h1 {
          margin: 24px 0;
          font-size: clamp(42px, 6vw, 75px);
          font-weight: 300;
          line-height: 1.3;
          letter-spacing: -2px;
        }

        .hero-content h1 strong {
          font-weight: 700;
        }

        .hero-content p {
          font-size: 17px;
          line-height: 1.9;
        }

        .hero-button {
          display: inline-flex;
          margin-top: 25px;
          padding: 17px 23px;
          background: #ffffff;
          color: #202c35 !important;
          font-size: 14px;
        }

        .detail-section {
          padding: 100px 0;
        }

        .detail-section.soft {
          background: #f5f6f6;
        }

        .section-title {
          margin-bottom: 45px;
          text-align: center;
        }

        .section-index {
          color: #89939a;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .section-title h2 {
          margin: 18px 0 13px;
          font-size: clamp(35px, 4vw, 51px);
          letter-spacing: -2px;
        }

        .section-title p {
          color: #777777;
          font-size: 15px;
          line-height: 1.8;
        }

        .photo {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #e7ebed;
        }

        .photo-image {
          object-fit: cover;
          object-position: center;
        }

        .photo-placeholder {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #e7ebed;
          color: #697984;
          text-align: center;
        }

        .photo-placeholder span {
          font: 28px Georgia, serif;
          letter-spacing: 2px;
        }

        .photo-placeholder p {
          font-size: 13px;
        }

        .overview-heading {
          margin: 40px 0 25px;
        }

        .overview-heading > span {
          color: #c1c6ca;
          font: 45px Georgia, serif;
        }

        .overview-heading h3 {
          margin: 15px 0;
          font-size: 26px;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .overview-item h4 {
          margin: 0 0 13px;
          padding-bottom: 14px;
          border-bottom: 2px solid #30383d;
          font-size: 20px;
        }

        .overview-item p {
          margin: 0;
          color: #747474;
          font-size: 17px;
          line-height: 1.9;
          overflow-wrap: anywhere;
        }

        .disclaimer {
          margin: 30px 0 0;
          color: #858b90;
          font-size: 11px;
          line-height: 2;
        }

        .location-list {
          display: flex;
          flex-direction: column;
          gap: 55px;
        }

        .location-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 45px;
        }

        .location-item:nth-child(even) .photo,
        .location-item:nth-child(even) .photo-placeholder {
          order: 2;
        }

        .location-copy > span {
          color: #81909c;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .location-copy h3 {
          margin: 15px 0;
          font-size: clamp(25px, 3vw, 35px);
          letter-spacing: -1px;
        }

        .location-copy h4 {
          margin: 15px 0;
          font-size: 17px;
        }

        .location-copy p {
          color: #6c747a;
          font-size: 14px;
          line-height: 2;
        }

        .location-copy small {
          color: #93999e;
          font-size: 11px;
          line-height: 1.8;
        }

        .premium-intro {
          margin-bottom: 40px;
          padding: 45px;
          background: #253745;
          color: #ffffff;
        }

        .premium-intro span {
          font-size: 11px;
          letter-spacing: 3px;
        }

        .premium-intro h3 {
          margin: 20px 0 0;
          font-size: clamp(29px, 4vw, 46px);
          font-weight: 400;
          line-height: 1.5;
        }

        .premium-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .premium-card {
          overflow: hidden;
          background: #f5f6f7;
        }

        .premium-photo .photo {
          aspect-ratio: 4 / 3;
        }

        .premium-copy {
          padding: 25px;
        }

        .premium-copy > span {
          color: #9daab3;
          font: 30px Georgia, serif;
        }

        .premium-copy h3 {
          margin: 18px 0 10px;
          font-size: 20px;
        }

        .premium-copy p {
          color: #777777;
          font-size: 13px;
          line-height: 1.9;
        }

        .guide-block {
          margin-bottom: 65px;
        }

        .guide-block > h3 {
          margin: 0 0 20px;
          font-size: 25px;
        }

        .guide-description {
          margin: 0 0 20px;
          color: #777777;
          font-size: 14px;
          line-height: 1.9;
        }

        .document-photo {
          width: 100%;
          padding: 15px;
          background: #ffffff;
          border: 1px solid #e3e6e8;
          overflow: hidden;
        }

        .document-image {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .document-link {
          display: inline-flex;
          margin-top: 18px;
          padding: 13px 20px;
          border: 1px solid #303b42;
          font-size: 13px;
          font-weight: 600;
        }

        .floor-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .floor-card {
          min-width: 0;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e5e5e5;
        }

        .floor-image {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #ffffff;
        }

        .floor-img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .floor-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 20px;
          border-top: 1px solid #eeeeee;
        }

        .floor-info strong {
          font-size: 16px;
        }

        .floor-info a {
          font-size: 12px;
          color: #65717a;
          white-space: nowrap;
        }

        .sales-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }

        .sales-card {
          min-height: 225px;
          padding: 28px;
          border: 1px solid #e3e6e8;
        }

        .sales-card > span {
          color: #9aa5ad;
          font: 33px Georgia, serif;
        }

        .sales-card h3 {
          margin: 22px 0 10px;
          font-size: 20px;
        }

        .sales-card p {
          color: #666666;
          font-size: 13px;
          line-height: 1.8;
        }

        .sales-card small {
          color: #9b9b9b;
          font-size: 11px;
        }

        .contact {
          padding: 100px 0;
          background: #243846;
          color: #ffffff;
          text-align: center;
        }

        .contact .container > span {
          font-size: 11px;
          letter-spacing: 3px;
        }

        .contact h2 {
          margin: 25px 0;
          font-size: clamp(30px, 4vw, 45px);
          font-weight: 400;
          line-height: 1.5;
        }

        .contact p {
          color: #d5dce1;
          font-size: 15px;
          line-height: 1.8;
        }

        .contact-call {
          display: block;
          width: fit-content;
          margin: 30px auto;
          padding: 18px 35px;
          background: #ffffff;
          color: #243846 !important;
          font-size: 25px;
          font-weight: 700;
        }

        .other-complex {
          display: inline-block;
          padding: 15px;
          font-size: 14px;
        }

        .detail-footer {
          padding: 35px 0;
          background: #111a20;
          color: #ffffff;
        }

        .footer-heading {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-heading strong {
          font-size: 17px;
        }

        .footer-heading a {
          font-size: 12px;
        }

        .detail-footer p {
          max-width: 950px;
          color: #a7b1b8;
          font-size: 11px;
          line-height: 2;
        }

        @media (max-width: 1050px) {
          .desktop-menu {
            display: none;
          }

          .mobile-toggle {
            display: block;
            margin-left: auto;
          }
        }

        @media (max-width: 700px) {
          .site-header {
            height: 65px;
            padding: 0 18px;
            gap: 12px;
          }

          .brand strong {
            font-size: 19px;
          }

          .brand small {
            font-size: 8px;
          }

          .header-call {
            font-size: 12px;
          }

          .mobile-menu {
            top: 65px;
          }

          .complex-switch {
            margin: 12px 18px;
          }

          .detail-hero {
            min-height: 530px;
          }

          .hero-content h1 {
            font-size: 39px;
          }

          .hero-content p {
            font-size: 14px;
          }

          .detail-section {
            padding: 75px 0;
          }

          .section-title h2 {
            font-size: 35px;
          }

          .section-title p {
            font-size: 13px;
          }

          .overview-heading > span {
            font-size: 35px;
          }

          .overview-heading h3 {
            font-size: 21px;
          }

          .overview-grid {
            gap: 25px 15px;
          }

          .overview-item h4 {
            font-size: 17px;
          }

          .overview-item p {
            font-size: 13px;
          }

          .location-item {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .location-item:nth-child(even) .photo,
          .location-item:nth-child(even) .photo-placeholder {
            order: 0;
          }

          .location-list {
            gap: 50px;
          }

          .location-copy h3 {
            font-size: 26px;
          }

          .premium-intro {
            padding: 30px 22px;
          }

          .premium-grid,
          .sales-grid {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
          }

          .premium-copy,
          .sales-card {
            padding: 18px 14px;
          }

          .premium-copy h3,
          .sales-card h3 {
            font-size: 17px;
          }

          .premium-copy p,
          .sales-card p {
            font-size: 12px;
          }

          .floor-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .floor-image {
            padding: 12px;
          }

          .floor-info {
            padding: 16px;
          }

          .document-photo {
            padding: 5px;
          }

          .guide-block > h3 {
            font-size: 22px;
          }

          .contact {
            padding: 75px 0;
          }

          .contact-call {
            font-size: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </main>
  );
}
