
"use client";

import Link from "next/link";
import Image from "next/image";
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
    aerial: "/IMG_2162.jpeg",
    entrance: "/IMG_2182.jpeg",
    units: "/IMG_2218.webp",
  },
  4: {
    number: "04",
    name: "4단지",
    address: "충청남도 천안시 서북구 부대동 384-20",
    households: "818세대",
    developer: "㈜하나자산신탁",
    builder: "IPARK현대산업개발",
    other: 3,
    aerial: "/IMG_2166.jpeg",
    entrance: "/IMG_2183.jpeg",
    units: "/IMG_2219.webp",
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

function commonsImage(filename: string) {
  return (
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/" +
    encodeURIComponent(filename) +
    "?width=1200"
  );
}

const LOCATION = [
  {
    num: "01",
    title: "자연환경",
    headline: "자연과 가까운 일상",
    text:
      "성성호수공원과 노태근린공원 등 주변 녹지와 휴식공간을 통해 쾌적한 생활환경을 살펴볼 수 있습니다.",
    detail:
      "공원 접근 경로와 실제 이동거리는 출발 위치에 따라 달라질 수 있습니다.",
    image: commonsImage("Seongseong Lake Park.jpg"),
    alt: "천안 성성호수공원 실제 풍경",
    credit:
      "사진: 김영호 / 한국관광공사 포토코리아 · 공공누리 제1유형",
  },
  {
    num: "02",
    title: "교육환경",
    headline: "자녀를 위한 교육 여건",
    text:
      "주변 교육시설과 학교 신설 계획 등을 살펴보고, 자녀의 통학 여건을 확인할 수 있도록 안내합니다.",
    detail:
      "학교 신설·개교 및 통학구역은 관계기관의 최종 결정에 따릅니다. 사진은 교육시설 참고 이미지입니다.",
    image: commonsImage("입장초등학교 정문.jpg"),
    alt: "천안 지역 초등학교 교육시설 참고 사진",
    credit: "사진: Wikimedia Commons · 교육시설 참고 이미지",
  },
  {
    num: "03",
    title: "생활환경",
    headline: "일상에 필요한 생활 인프라",
    text:
      "대형마트와 상업시설, 의료시설 등 천안 북부 생활권의 다양한 편의시설을 소개합니다.",
    detail:
      "시설별 운영 여부와 이동시간은 별도 확인이 필요합니다. 사진은 천안 지역 상업시설 참고 이미지입니다.",
    image: commonsImage(
      "천안남산중앙시장 20200401 142622.jpg"
    ),
    alt: "천안 지역 상업시설 참고 사진",
    credit: "사진: Wikimedia Commons · 생활시설 참고 이미지",
  },
  {
    num: "04",
    title: "교통환경",
    headline: "광역 이동을 고려한 교통 여건",
    text:
      "천안IC와 경부고속도로 접근 여건, 부성역 신설 계획 등 주변 교통환경을 살펴봅니다.",
    detail:
      "부성역 등 예정 사업의 일정과 세부 계획은 변경될 수 있습니다. 사진은 천안 지역 교통시설 참고 이미지입니다.",
    image: commonsImage(
      "천안지하도-보행자길-20200411 163101.jpg"
    ),
    alt: "천안 지역 교통시설 참고 사진",
    credit: "사진: Wikimedia Commons · 교통시설 참고 이미지",
  },
];

const PREMIUM = [
  {
    num: "01",
    title: "단지 설계",
    text:
      "동 배치와 주거동 사이 공간을 중심으로 단지 설계 정보를 안내합니다.",
    image: "/IMG_2191.jpeg",
  },
  {
    num: "02",
    title: "주거 평면",
    text:
      "전용 84㎡·102㎡·116㎡ 주택형별 구조와 공간 활용 계획을 살펴봅니다.",
    image: "/IMG_2225.webp",
  },
  {
    num: "03",
    title: "조경 공간",
    text:
      "단지 내 조경 및 휴식공간의 구성과 적용 계획을 안내합니다.",
    image: "/IMG_2163.jpeg",
  },
  {
    num: "04",
    title: "커뮤니티 시설",
    text:
      "커뮤니티 시설의 적용 여부와 이용 조건을 안내합니다.",
    image: "/IMG_2184.jpeg",
  },
  {
    num: "05",
    title: "생활 편의",
    text:
      "주차, 보행 동선과 생활 편의 요소를 공식 설계자료에 따라 안내합니다.",
    image: "/IMG_2186.jpeg",
  },
];

const FLOOR_PLANS = [
  {
    name: "84㎡ A",
    image: "/IMG_2225.webp",
  },
  {
    name: "84㎡ B",
    image: "/IMG_2226.webp",
  },
  {
    name: "추가 세대 안내",
    image: "/IMG_2227.webp",
  },
  {
    name: "추가 세대 안내",
    image: "/IMG_2228.webp",
  },
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
    <div className="ip-section-title">
      <span className="ip-section-index">
        {index} / {english}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function LocalPhoto({
  src,
  alt,
  contain = false,
}: {
  src: string;
  alt: string;
  contain?: boolean;
}) {
  return (
    <div
      className={
        contain
          ? "ip-image-frame ip-contain"
          : "ip-image-frame"
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1100px"
        className={
          contain ? "ip-image-contain" : "ip-image-cover"
        }
      />
    </div>
  );
}

function ExternalPhoto({
  src,
  alt,
  credit,
}: {
  src: string;
  alt: string;
  credit: string;
}) {
  return (
    <figure className="ip-external-photo">
      {/* 외부 공용 이미지: Next 이미지 설정 불필요 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <figcaption>{credit}</figcaption>
    </figure>
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
      <header className="ip-header">
        <Link href="/" className="ip-brand">
          <strong>IPARK CITY</strong>
          <small>CHEONAN · {data.number}</small>
        </Link>

        <nav className="ip-desktop-menu">
          {MENU.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ip-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기 및 닫기"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <a className="ip-header-call" href={TEL}>
          ☎ {PHONE}
        </a>
      </header>

      {menuOpen && (
        <nav className="ip-mobile-menu">
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

      <div className="ip-switch">
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

      {/* 메인 조감도 */}
      <section className="ip-hero">
        <Image
          src={data.aerial}
          alt={`천안 아이파크 시티 ${data.name} 조감도`}
          fill
          priority
          sizes="100vw"
          className="ip-image-cover"
        />

        <div className="ip-hero-shade" />

        <div className="ip-hero-content ip-container">
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

          <a href="#overview" className="ip-hero-button">
            {data.name} 자세히 보기 ↗
          </a>
        </div>
      </section>

      {/* 사업개요 */}
      <section id="overview" className="ip-section">
        <div className="ip-container">
          <SectionTitle
            index="01"
            english="PROJECT OVERVIEW"
            title="사업개요"
            description={`${data.name}의 주요 사업 정보를 소개합니다.`}
          />

          <LocalPhoto
            src={data.aerial}
            alt={`${data.name} 사업개요 조감도`}
          />

          <div className="ip-overview-heading">
            <span>Overview</span>
            <h3>천안 아이파크 시티 {data.name}</h3>
          </div>

          <div className="ip-overview-grid">
            <div className="ip-overview-item">
              <h4>위치</h4>
              <p>{data.address}</p>
            </div>

            <div className="ip-overview-item">
              <h4>건축규모</h4>
              <p>
                3·4단지 합계 1,714세대
                <br />
                {data.name} {data.households}
              </p>
            </div>

            <div className="ip-overview-item">
              <h4>주택형</h4>
              <p>
                전용 84㎡
                <br />
                102㎡
                <br />
                116㎡
              </p>
            </div>

            <div className="ip-overview-item">
              <h4>시행·시공</h4>
              <p>
                시행 {data.developer}
                <br />
                시공 {data.builder}
              </p>
            </div>
          </div>

          <p className="ip-disclaimer">
            ※ 사업 내용은 제공된 안내자료를 기준으로
            작성되었습니다. 실제 사업계획 및 설계는
            변경될 수 있습니다.
          </p>
        </div>
      </section>

      {/* 입지환경: 3단지·4단지 공통 사진 */}
      <section id="location" className="ip-section ip-soft">
        <div className="ip-container">
          <SectionTitle
            index="02"
            english="LOCATION"
            title="입지환경"
            description="자연과 교육, 생활과 교통을 아우르는 주변 환경"
          />

          <div className="ip-location-list">
            {LOCATION.map((item) => (
              <article
                className="ip-location-item"
                key={item.num}
              >
                <ExternalPhoto
                  src={item.image}
                  alt={item.alt}
                  credit={item.credit}
                />

                <div className="ip-location-copy">
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

          <p className="ip-disclaimer">
            ※ 학교 신설, 주변 개발계획 및 교통시설은
            관계기관 사정에 따라 변경되거나 지연될
            수 있습니다. 참고 사진은 단지에서의
            실제 접근거리나 조망을 의미하지 않습니다.
          </p>
        </div>
      </section>

      {/* 프리미엄 */}
      <section id="premium" className="ip-section">
        <div className="ip-container">
          <SectionTitle
            index="03"
            english="PREMIUM"
            title="프리미엄"
            description="단지의 설계와 주거 편의 요소를 살펴보세요."
          />

          <div className="ip-premium-intro">
            <span>PREMIUM LIVING</span>
            <h3>
              생활의 가치를 더하는
              <br />
              주거 공간
            </h3>
          </div>

          <div className="ip-premium-grid">
            {PREMIUM.map((item) => (
              <article
                className="ip-premium-card"
                key={item.num}
              >
                <div className="ip-premium-photo">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="ip-image-cover"
                  />
                </div>

                <div className="ip-premium-copy">
                  <span>{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="ip-disclaimer">
            ※ 실제 시설의 설치 여부와 규모,
            운영 방식은 공식 설계도서 및
            계약 관련 자료를 확인해 주세요.
          </p>
        </div>
      </section>

      {/* 단지안내 */}
      <section id="complex" className="ip-section ip-soft">
        <div className="ip-container">
          <SectionTitle
            index="04"
            english="COMPLEX GUIDE"
            title="단지안내"
            description="단지 조감도와 세대별 공간 구성을 안내합니다."
          />

          <div className="ip-guide-block">
            <h3>{data.name} 단지 조감도</h3>
            <LocalPhoto
              src={data.aerial}
              alt={`${data.name} 단지 조감도`}
            />
          </div>

          <div className="ip-guide-block">
            <h3>{data.name} 정문 안내</h3>
            <LocalPhoto
              src={data.entrance}
              alt={`${data.name} 정문 조감도`}
            />
          </div>

          <div className="ip-guide-block">
            <h3>{data.name} 동·호수 배치도</h3>
            <p className="ip-guide-description">
              동별 층수와 호수 구성을 확인할 수 있는
              안내자료입니다.
            </p>

            <LocalPhoto
              src={data.units}
              alt={`${data.name} 동호수 배치도`}
              contain
            />

            <p className="ip-disclaimer">
              ※ 동·호수별 실제 공급 가능 여부는
              최신 공식 자료를 확인해 주세요.
            </p>
          </div>

          <div className="ip-guide-block">
            <h3>세대 안내 및 공간 구성</h3>

            <p className="ip-guide-description">
              3단지와 4단지의 주택형별 공간 구성을
              참고 이미지로 살펴보세요.
              정확한 타입별 구조는 공식 평면도를
              기준으로 확인해야 합니다.
            </p>

            <div className="ip-floor-grid">
              {FLOOR_PLANS.map((item, index) => (
                <div
                  className="ip-floor-card"
                  key={item.image}
                >
                  <div className="ip-floor-photo">
                    <Image
                      src={item.image}
                      alt={`${item.name} 세대 공간 구성 참고 이미지`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="ip-image-contain"
                    />
                  </div>

                  <strong>
                    {index + 1 < 3
                      ? item.name
                      : `세대 구성 ${index + 1}`}
                  </strong>
                </div>
              ))}
            </div>

            <p className="ip-disclaimer">
              ※ 위 세대 이미지는 공간 구성 참고용입니다.
              주택형과 이미지의 정확한 대응 여부는
              공식 평면도로 재확인해야 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 분양안내 */}
      <section id="sales" className="ip-section">
        <div className="ip-container">
          <SectionTitle
            index="05"
            english="SALES GUIDE"
            title="분양안내"
            description="공급 조건과 청약·계약 관련 정보를 확인하세요."
          />

          <div className="ip-sales-grid">
            {[
              ["01", "공급안내", "주택형별 공급 조건"],
              ["02", "분양일정", "입주자모집공고 및 청약 일정"],
              ["03", "분양가격", "공급금액과 납부 조건"],
              ["04", "청약안내", "청약 자격 및 신청 방법"],
              ["05", "계약안내", "계약 일정과 필요 서류"],
              ["06", "유의사항", "공식 공고 및 계약 조건 확인"],
            ].map(([num, title, desc]) => (
              <div className="ip-sales-card" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <small>공식 자료 기준 확인</small>
              </div>
            ))}
          </div>

          <p className="ip-disclaimer">
            ※ 분양가, 청약 일정, 계약 조건 및
            공급 가능 여부는 시점에 따라 달라질 수
            있습니다. 반드시 최신 입주자모집공고와
            공식 안내를 확인해 주세요.
          </p>
        </div>
      </section>

      {/* 상담안내 */}
      <section id="contact" className="ip-contact">
        <div className="ip-container">
          <span>CONTACT US</span>

          <h2>
            천안 아이파크 시티
            <br />
            {data.name} 상담안내
          </h2>

          <p>
            부동산 관련 상담은
            <br />
            미소부동산으로 문의해 주세요.
          </p>

          <a href={TEL} className="ip-contact-call">
            ☎ {PHONE}
          </a>

          <Link
            href={`/complex/${data.other}`}
            className="ip-other-complex"
          >
            {data.other}단지 살펴보기 ↗
          </Link>
        </div>
      </section>

      <footer className="ip-footer">
        <div className="ip-container">
          <div className="ip-footer-heading">
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

      <style jsx global>{`
        .ipark-detail {
          color: #262c30;
          background: #fff;
          font-family: "Noto Sans KR", sans-serif;
          overflow: clip;
        }

        .ipark-detail *,
        .ipark-detail *::before,
        .ipark-detail *::after {
          box-sizing: border-box;
        }

        .ipark-detail a {
          text-decoration: none;
          color: inherit;
        }

        .ipark-detail button {
          font: inherit;
        }

        .ip-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ip-header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 75px;
          padding: 0 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: white;
          border-bottom: 1px solid #eee;
        }

        .ip-brand {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex-shrink: 0;
        }

        .ip-brand strong {
          font: 23px Georgia, serif;
          letter-spacing: 1px;
        }

        .ip-brand small {
          color: #777;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .ip-desktop-menu {
          display: flex;
          gap: 22px;
        }

        .ip-desktop-menu a {
          font-size: 13px;
          white-space: nowrap;
        }

        .ip-header-call {
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .ip-mobile-toggle {
          display: none;
          border: 0;
          background: transparent;
          font-size: 25px;
          cursor: pointer;
        }

        .ip-mobile-menu {
          position: fixed;
          top: 75px;
          left: 0;
          right: 0;
          z-index: 99;
          padding: 15px 25px 25px;
          background: white;
          box-shadow: 0 15px 30px #0002;
        }

        .ip-mobile-menu a {
          display: flex;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid #eee;
          font-size: 15px;
        }

        .ip-switch {
          display: flex;
          max-width: 550px;
          margin: 20px auto;
          border: 1px solid #d8dcdf;
        }

        .ip-switch a {
          flex: 1;
          padding: 15px;
          text-align: center;
          font-size: 15px;
        }

        .ip-switch a.active {
          background: #303b42;
          color: white;
        }

        .ip-hero {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          background: #283c4b;
          color: white;
          overflow: hidden;
        }

        .ip-image-cover {
          object-fit: cover;
        }

        .ip-image-contain {
          object-fit: contain;
        }

        .ip-hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(15, 28, 39, 0.88),
            rgba(15, 28, 39, 0.48),
            rgba(15, 28, 39, 0.12)
          );
        }

        .ip-hero-content {
          position: relative;
          z-index: 2;
          padding: 80px 0;
        }

        .ip-hero-content > span {
          font-size: 11px;
          letter-spacing: 3px;
        }

        .ip-hero h1 {
          margin: 24px 0;
          font-size: clamp(42px, 6vw, 75px);
          font-weight: 300;
          line-height: 1.3;
          letter-spacing: -2px;
        }

        .ip-hero h1 strong {
          font-weight: 700;
        }

        .ip-hero-content p {
          font-size: 17px;
          line-height: 1.9;
        }

        .ip-hero-button {
          display: inline-flex;
          align-items: center;
          margin-top: 25px;
          padding: 17px 23px;
          background: white;
          color: #202c35 !important;
          font-size: 14px;
        }

        .ip-section {
          padding: 100px 0;
          scroll-margin-top: 90px;
        }

        .ip-soft {
          background: #f5f6f6;
        }

        .ip-section-title {
          margin-bottom: 45px;
          text-align: center;
        }

        .ip-section-index {
          color: #89939a;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .ip-section-title h2 {
          margin: 18px 0 13px;
          font-size: clamp(35px, 4vw, 51px);
          letter-spacing: -2px;
        }

        .ip-section-title p {
          color: #777;
          font-size: 15px;
          line-height: 1.8;
        }

        .ip-image-frame {
          position: relative;
          width: 100%;
          height: 440px;
          overflow: hidden;
          background: #e9ecee;
        }

        .ip-image-frame.ip-contain {
          height: auto;
          min-height: 420px;
          aspect-ratio: 4 / 3;
          background: white;
        }

        .ip-overview-heading {
          margin: 40px 0 25px;
        }

        .ip-overview-heading > span {
          color: #c1c6ca;
          font: 45px Georgia, serif;
        }

        .ip-overview-heading h3 {
          margin: 15px 0;
          font-size: 26px;
        }

        .ip-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .ip-overview-item h4 {
          margin: 0 0 13px;
          padding-bottom: 14px;
          border-bottom: 2px solid #30383d;
          font-size: 20px;
        }

        .ip-overview-item p {
          margin: 0;
          color: #747474;
          font-size: 17px;
          line-height: 1.9;
        }

        .ip-disclaimer {
          margin: 30px 0 0;
          color: #858b90;
          font-size: 11px;
          line-height: 2;
        }

        .ip-location-list {
          display: flex;
          flex-direction: column;
          gap: 65px;
        }

        .ip-location-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 45px;
        }

        .ip-location-item:nth-child(even)
        .ip-external-photo {
          order: 2;
        }

        .ip-external-photo {
          position: relative;
          margin: 0;
          overflow: hidden;
          background: #e7ebed;
        }

        .ip-external-photo img {
          display: block;
          width: 100%;
          height: 330px;
          object-fit: cover;
        }

        .ip-external-photo figcaption {
          padding: 10px 12px;
          background: white;
          color: #888;
          font-size: 10px;
          line-height: 1.6;
        }

        .ip-location-copy > span {
          color: #81909c;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .ip-location-copy h3 {
          margin: 15px 0;
          font-size: clamp(25px, 3vw, 35px);
          letter-spacing: -1px;
        }

        .ip-location-copy h4 {
          margin: 15px 0;
          font-size: 17px;
        }

        .ip-location-copy p {
          color: #6c747a;
          font-size: 14px;
          line-height: 2;
        }

        .ip-location-copy small {
          display: block;
          color: #93999e;
          font-size: 11px;
          line-height: 1.8;
        }

        .ip-premium-intro {
          margin-bottom: 40px;
          padding: 45px;
          background: #253745;
          color: white;
        }

        .ip-premium-intro span {
          font-size: 11px;
          letter-spacing: 3px;
        }

        .ip-premium-intro h3 {
          margin: 20px 0 0;
          font-size: clamp(29px, 4vw, 46px);
          font-weight: 400;
          line-height: 1.5;
        }

        .ip-premium-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .ip-premium-card {
          overflow: hidden;
          background: #f5f6f7;
        }

        .ip-premium-photo {
          position: relative;
          height: 210px;
        }

        .ip-premium-copy {
          padding: 25px;
        }

        .ip-premium-copy > span {
          color: #9daab3;
          font: 30px Georgia, serif;
        }

        .ip-premium-copy h3 {
          margin: 20px 0 12px;
          font-size: 20px;
        }

        .ip-premium-copy p {
          color: #777;
          font-size: 13px;
          line-height: 1.9;
        }

        .ip-guide-block {
          margin-bottom: 60px;
        }

        .ip-guide-block > h3 {
          margin: 0 0 20px;
          font-size: 25px;
        }

        .ip-guide-description {
          margin-bottom: 25px;
          color: #777;
          font-size: 14px;
          line-height: 1.9;
        }

        .ip-floor-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .ip-floor-card {
          overflow: hidden;
          background: white;
          padding-bottom: 20px;
        }

        .ip-floor-photo {
          position: relative;
          height: 330px;
          background: white;
        }

        .ip-floor-card > strong {
          display: block;
          padding: 15px 20px 0;
          font-size: 17px;
        }

        .ip-sales-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }

        .ip-sales-card {
          min-height: 225px;
          padding: 28px;
          border: 1px solid #e3e6e8;
        }

        .ip-sales-card > span {
          color: #9aa5ad;
          font: 33px Georgia, serif;
        }

        .ip-sales-card h3 {
          margin: 22px 0 10px;
          font-size: 20px;
        }

        .ip-sales-card p {
          color: #666;
          font-size: 13px;
          line-height: 1.8;
        }

        .ip-sales-card small {
          color: #9b9b9b;
          font-size: 11px;
        }

        .ip-contact {
          padding: 100px 0;
          background: #243846;
          color: white;
          text-align: center;
          scroll-margin-top: 90px;
        }

        .ip-contact .ip-container > span {
          font-size: 11px;
          letter-spacing: 3px;
        }

        .ip-contact h2 {
          margin: 25px 0;
          font-size: clamp(30px, 4vw, 45px);
          font-weight: 400;
          line-height: 1.5;
        }

        .ip-contact p {
          color: #d5dce1;
          font-size: 15px;
          line-height: 1.8;
        }

        .ip-contact-call {
          display: block;
          width: fit-content;
          margin: 30px auto;
          padding: 18px 35px;
          background: white;
          color: #243846 !important;
          font-size: 25px;
          font-weight: 700;
        }

        .ip-other-complex {
          display: inline-block;
          padding: 15px;
          font-size: 14px;
        }

        .ip-footer {
          padding: 35px 0;
          background: #111a20;
          color: white;
        }

        .ip-footer-heading {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .ip-footer-heading strong {
          font-size: 17px;
        }

        .ip-footer-heading a {
          font-size: 12px;
        }

        .ip-footer p {
          max-width: 950px;
          color: #a7b1b8;
          font-size: 11px;
          line-height: 2;
        }

        @media (max-width: 1050px) {
          .ip-desktop-menu {
            display: none;
          }

          .ip-mobile-toggle {
            display: block;
            margin-left: auto;
          }
        }

        @media (max-width: 700px) {
          .ip-header {
            height: 65px;
            padding: 0 18px;
            gap: 12px;
          }

          .ip-brand strong {
            font-size: 19px;
          }

          .ip-brand small {
            font-size: 8px;
          }

          .ip-header-call {
            font-size: 12px;
          }

          .ip-mobile-menu {
            top: 65px;
          }

          .ip-switch {
            margin: 12px 18px;
          }

          .ip-hero {
            min-height: 530px;
          }

          .ip-hero h1 {
            font-size: 39px;
          }

          .ip-hero-content p {
            font-size: 14px;
          }

          .ip-section {
            padding: 75px 0;
          }

          .ip-section-title h2 {
            font-size: 35px;
          }

          .ip-section-title p {
            font-size: 13px;
          }

          .ip-image-frame {
            height: 250px;
          }

          .ip-image-frame.ip-contain {
            min-height: 260px;
            aspect-ratio: 3 / 4;
          }

          .ip-overview-heading > span {
            font-size: 35px;
          }

          .ip-overview-heading h3 {
            font-size: 21px;
          }

          .ip-overview-grid {
            gap: 25px 15px;
          }

          .ip-overview-item h4 {
            font-size: 17px;
          }

          .ip-overview-item p {
            font-size: 13px;
            overflow-wrap: anywhere;
          }

          .ip-location-item {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .ip-location-item:nth-child(even)
          .ip-external-photo {
            order: 0;
          }

          .ip-location-list {
            gap: 55px;
          }

          .ip-external-photo img {
            height: 250px;
          }

          .ip-location-copy h3 {
            font-size: 26px;
          }

          .ip-premium-intro {
            padding: 30px 22px;
          }

          .ip-premium-grid,
          .ip-sales-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .ip-premium-photo {
            height: 145px;
          }

          .ip-premium-copy,
          .ip-sales-card {
            padding: 18px 14px;
          }

          .ip-premium-copy h3,
          .ip-sales-card h3 {
            font-size: 17px;
          }

          .ip-premium-copy p,
          .ip-sales-card p {
            font-size: 12px;
          }

          .ip-floor-grid {
            gap: 10px;
          }

          .ip-floor-photo {
            height: 190px;
          }

          .ip-floor-card > strong {
            font-size: 14px;
            padding: 12px;
          }

          .ip-contact {
            padding: 75px 0;
          }

          .ip-contact-call {
            font-size: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ipark-detail {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </main>
  );
}
