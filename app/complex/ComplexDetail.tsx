
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
    images: {
      hero: "/IMG_2161.jpeg",
      overview: "/IMG_2162.jpeg",
      aerial: "/IMG_2166.jpeg",
      landscape: "/IMG_2163.jpeg",
      exterior: "/IMG_2164.jpeg",
      community: "/IMG_2180.jpeg",
      special: "/IMG_2181.jpeg",
      entrance: "/IMG_2182.jpeg",
    },
  },
  4: {
    number: "04",
    name: "4단지",
    address: "충청남도 천안시 서북구 부대동 384-20",
    households: "818세대",
    developer: "㈜하나자산신탁",
    builder: "IPARK현대산업개발",
    other: 3,
    images: {
      hero: "/IMG_2191.jpeg",
      overview: "/IMG_2190.jpeg",
      aerial: "/IMG_2192.jpeg",
      landscape: "/IMG_2193.jpeg",
      exterior: "/IMG_2189.jpeg",
      community: "/IMG_2185.jpeg",
      special: "/IMG_2184.jpeg",
      entrance: "/IMG_2183.jpeg",
    },
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
    text: "성성호수공원과 노태근린공원 등 주변 녹지와 휴식공간을 통해 생활환경을 살펴볼 수 있습니다.",
    detail: "공원 접근 경로와 실제 이동거리는 출발 위치에 따라 달라질 수 있습니다.",
  },
  {
    num: "02",
    title: "교육환경",
    headline: "자녀를 위한 교육 여건",
    text: "주변 교육시설과 학교 신설 계획 등을 살펴보고 자녀의 통학 여건을 확인할 수 있도록 안내합니다.",
    detail: "학교 신설·개교 및 통학구역은 관계기관의 최종 결정에 따릅니다.",
  },
  {
    num: "03",
    title: "생활환경",
    headline: "일상에 필요한 생활 인프라",
    text: "대형마트와 상업시설, 의료시설 등 천안 북부 생활권의 다양한 편의시설을 소개합니다.",
    detail: "시설별 운영 여부와 이동시간은 별도 확인이 필요합니다.",
  },
  {
    num: "04",
    title: "교통환경",
    headline: "광역 이동을 고려한 교통 여건",
    text: "천안IC와 경부고속도로 접근 여건, 부성역 신설 계획 등 주변 교통환경을 살펴봅니다.",
    detail: "부성역 등 예정 사업의 일정과 세부 계획은 변경될 수 있습니다.",
  },
];

const PREMIUM = [
  {
    num: "01",
    title: "단지 설계",
    text: "동 배치, 주동 구성 및 주거동 사이 공간을 중심으로 단지 설계 정보를 안내합니다.",
  },
  {
    num: "02",
    title: "주거 평면",
    text: "전용 84㎡·102㎡·116㎡ 주택형별 구조와 공간 활용 계획을 살펴봅니다. 세부 구조는 공식 평면도 기준입니다.",
  },
  {
    num: "03",
    title: "조경 공간",
    text: "단지 내 조경 및 휴식공간의 구성과 실제 적용 계획을 공식 자료에 맞춰 안내합니다.",
  },
  {
    num: "04",
    title: "커뮤니티 시설",
    text: "피트니스, 골프연습장, 독서·휴게공간 등 커뮤니티 관련 시설의 적용 여부와 이용 조건을 안내합니다.",
  },
  {
    num: "05",
    title: "생활 편의",
    text: "주차, 보행 동선, 수납 및 기타 생활 편의 요소를 공식 설계자료에 따라 안내합니다.",
  },
];

const FLOOR_TYPES = [
  "84㎡ A",
  "84㎡ B",
  "102㎡ A",
  "102㎡ B",
  "116㎡",
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
  caption,
  priority = false,
  variant = "wide",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  variant?: "wide" | "standard" | "hero";
}) {
  return (
    <figure className={`photo photo-${variant}`}>
      <div className="photo-frame">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={
            variant === "standard"
              ? "(max-width: 700px) 100vw, 50vw"
              : "100vw"
          }
          className="photo-image"
        />
      </div>
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  );
}

function InfoPlaceholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="info-placeholder">
      <span>OFFICIAL DOCUMENT</span>
      <strong>{title}</strong>
      <p>
        {description ||
          "정확한 정보는 공식 자료를 기준으로 확인해 주세요."}
      </p>
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
  const images = data.images;

  return (
    <main className="ipark-detail">
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

      {/* 메인 */}
      <section className="hero">
        <div className="hero-bg">
          <Photo
            src={images.hero}
            alt={`천안 아이파크 시티 ${data.name} 아파트 외관 조감도`}
            priority
            variant="hero"
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
            {data.name} 자세히 보기 <span>↗</span>
          </a>
        </div>
      </section>

      {/* 사업개요 */}
      <section id="overview" className="section">
        <div className="container">
          <SectionTitle
            index="01"
            english="PROJECT OVERVIEW"
            title="사업개요"
            description={`${data.name}의 주요 사업 정보를 소개합니다.`}
          />

          <Photo
            src={images.overview}
            alt={`천안 아이파크 시티 ${data.name} 전체 조감도`}
            caption={`${data.name} 조감도 · 이미지 내용은 실제 시공 및 인허가 과정에서 변경될 수 있습니다.`}
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
            ※ 상기 사업 정보는 제공된 안내자료를
            기준으로 작성하였습니다. 건축물 외관,
            색채계획, 부대시설 및 조경계획 등은
            관계기관 협의와 사업 진행에 따라
            변경될 수 있습니다.
          </p>
        </div>
      </section>

      {/* 입지환경 */}
      <section id="location" className="section soft">
        <div className="container">
          <SectionTitle
            index="02"
            english="LOCATION"
            title="입지환경"
            description="자연과 교육, 생활과 교통을 아우르는 주변 환경"
          />

          <Photo
            src={images.aerial}
            alt={`천안 아이파크 시티 ${data.name} 단지 및 주변 조감도`}
            caption="단지 조감 이미지이며 실제 입지 안내도와는 다릅니다."
          />

          <div className="location-list">
            {LOCATION.map((item, index) => {
              const photo =
                index === 0
                  ? images.landscape
                  : index === 1
                    ? images.community
                    : index === 2
                      ? images.special
                      : images.exterior;

              return (
                <article
                  className="location-item"
                  key={item.num}
                >
                  <Photo
                    src={photo}
                    alt={`${data.name} ${item.title} 관련 단지 이미지`}
                    variant="standard"
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
              );
            })}
          </div>

          <p className="disclaimer">
            ※ 이 섹션의 이미지는 단지 조감
            자료로서 주변 학교, 도로, 상업시설
            등의 실제 사진이나 위치도는 아닙니다.
            주변 개발계획, 학교 신설, 철도역 및
            교통시설은 관계기관 사정에 따라
            변경되거나 지연될 수 있습니다.
          </p>
        </div>
      </section>

      {/* 프리미엄 */}
      <section id="premium" className="section">
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
                <span>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <Photo
            src={images.landscape}
            alt={`${data.name} 조경 및 녹지 공간 조감도`}
            caption="단지 조경 및 휴식공간 조감 이미지"
          />

          <div className="feature-grid">
            <div>
              <Photo
                src={images.community}
                alt={`${data.name} 커뮤니티 관련 건축 이미지`}
                variant="standard"
              />
              <h3>커뮤니티와 생활 공간</h3>
              <p>
                단지 내 생활공간과 커뮤니티 관련
                계획을 살펴보세요.
              </p>
            </div>

            <div>
              <Photo
                src={images.special}
                alt={`${data.name} 특화 주거공간 조감 이미지`}
                variant="standard"
              />
              <h3>특화 주거 설계</h3>
              <p>
                주거동 외관과 특화 공간의
                조감 이미지를 소개합니다.
              </p>
            </div>
          </div>

          <p className="disclaimer">
            ※ 커뮤니티 및 편의시설의 실제 설치
            여부, 규모, 운영 방식은 공식 설계도서와
            계약 관련 자료를 기준으로 확인해야 합니다.
          </p>
        </div>
      </section>

      {/* 단지안내 */}
      <section id="complex" className="section soft">
        <div className="container">
          <SectionTitle
            index="04"
            english="COMPLEX GUIDE"
            title="단지안내"
            description="단지 조감도와 주택형별 공간 구성을 안내합니다."
          />

          <div className="guide-block">
            <h3>단지 전체 조감도</h3>
            <Photo
              src={images.aerial}
              alt={`${data.name} 항공 조감도 및 단지 전체 배치 모습`}
              caption="항공 조감 이미지로, 공식 단지배치도와는 다릅니다."
            />
          </div>

          <div className="guide-block">
            <h3>단지 외관 안내</h3>
            <Photo
              src={images.exterior}
              alt={`${data.name} 아파트 외관 조감도`}
            />
          </div>

          <div className="guide-block">
            <h3>단지 주출입구</h3>
            <Photo
              src={images.entrance}
              alt={`${data.name} 주출입구 조감도`}
            />
          </div>

          <div className="guide-block">
            <h3>동·호수 배치도</h3>
            <InfoPlaceholder
              title={`${data.name} 동·호수 배치도`}
              description="정확한 동·호수 배치는 공식 배치도와 분양자료를 기준으로 확인해 주세요."
            />
          </div>

          <div className="guide-block">
            <h3>주택형별 평면도</h3>
            <p className="guide-description">
              전용면적별 세부 평면과 공간 구성은
              공식 평면도를 기준으로 안내합니다.
            </p>

            <div className="floor-grid">
              {FLOOR_TYPES.map((type) => (
                <div
                  className="floor-card"
                  key={type}
                >
                  <InfoPlaceholder
                    title={`${type} 평면도`}
                    description="공식 평면도 확인 필요"
                  />
                  <strong>{type}</strong>
                </div>
              ))}
            </div>
          </div>

          <p className="disclaimer">
            ※ 조감도는 이해를 돕기 위한
            이미지입니다. 정확한 동 배치,
            평면 구성, 면적 및 시설은
            공식 설계도서와 입주자모집공고를
            기준으로 확인해 주세요.
          </p>
        </div>
      </section>

      {/* 분양안내 */}
      <section id="sales" className="section">
        <div className="container">
          <SectionTitle
            index="05"
            english="SALES GUIDE"
            title="분양안내"
            description="공급 조건과 청약·계약 관련 정보를 확인하세요."
          />

          <div className="sales-grid">
            {SALES.map(([num, title, desc]) => (
              <div
                className="sales-card"
                key={num}
              >
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <small>
                  공식 자료 기준 확인
                </small>
              </div>
            ))}
          </div>

          <div className="sales-contact">
            <div>
              <span>SALES INFORMATION</span>
              <h3>
                {data.name} 분양 관련 상담
              </h3>
              <p>
                분양 관련 문의는
                미소부동산으로 연락해 주세요.
              </p>
            </div>
            <a href={TEL}>
              전화 상담하기 ↗
            </a>
          </div>

          <p className="disclaimer">
            ※ 분양가, 청약 일정, 계약 조건 및
            공급 가능 여부는 시점에 따라 달라질 수
            있습니다. 반드시 최신 입주자모집공고와
            공식 안내를 확인해 주세요.
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
            부동산 관련 상담은
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

      <footer className="footer">
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
            제공된 사업 및 분양 정보는
            변경될 수 있으므로 최신 공식 자료를
            우선하여 확인해 주세요.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 115px;
        }

        body {
          margin: 0;
          background: #fff;
          color: #262c30;
          font-family: "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .ipark-detail {
          overflow: clip;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
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
          background: #fff;
          border-bottom: 1px solid #eee;
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
          color: #777;
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
          background: none;
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
          background: #fff;
          box-shadow: 0 15px 30px #0002;
        }

        .mobile-menu a {
          display: flex;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid #eee;
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
          color: #fff;
        }

        .hero {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          background: #283c4b;
          color: #fff;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
        }

        .hero-bg .photo,
        .hero-bg .photo-frame {
          width: 100%;
          height: 100%;
        }

        .hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #142330e8,
            #14233080,
            #14233018
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

        .hero h1 {
          margin: 24px 0;
          font-size: clamp(42px, 6vw, 75px);
          font-weight: 300;
          line-height: 1.3;
          letter-spacing: -2px;
        }

        .hero h1 strong {
          font-weight: 700;
        }

        .hero-content p {
          font-size: 17px;
          line-height: 1.9;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 40px;
          margin-top: 25px;
          padding: 17px 23px;
          background: #fff;
          color: #202c35;
          font-size: 14px;
        }

        .section {
          padding: 100px 0;
        }

        .soft {
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
          color: #777;
          font-size: 15px;
          line-height: 1.8;
        }

        .photo {
          margin: 0;
          width: 100%;
        }

        .photo-frame {
          position: relative;
          width: 100%;
          height: 410px;
          overflow: hidden;
          background: #e7ebed;
        }

        .photo-standard .photo-frame {
          height: 320px;
        }

        .photo-hero .photo-frame {
          height: 100%;
        }

        .photo-image {
          object-fit: cover;
          object-position: center;
        }

        .photo figcaption {
          padding: 12px 0;
          color: #858b90;
          font-size: 11px;
          line-height: 1.8;
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
        }

        .disclaimer {
          margin: 30px 0 0;
          color: #858b90;
          font-size: 11px;
          line-height: 2;
        }

        .location-list {
          margin-top: 50px;
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

        .location-item:nth-child(even) .photo {
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
          color: #fff;
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
          gap: 13px;
          margin-bottom: 35px;
        }

        .premium-card {
          min-height: 240px;
          padding: 28px;
          background: #f5f6f7;
        }

        .premium-card > span {
          color: #9daab3;
          font: 35px Georgia, serif;
        }

        .premium-card h3 {
          margin: 25px 0 13px;
          font-size: 20px;
        }

        .premium-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.9;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        .feature-grid h3 {
          margin: 20px 0 10px;
          font-size: 21px;
        }

        .feature-grid p {
          color: #777;
          font-size: 13px;
          line-height: 1.9;
        }

        .guide-block {
          margin-bottom: 55px;
        }

        .guide-block > h3 {
          margin: 0 0 20px;
          font-size: 25px;
        }

        .guide-description {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        .info-placeholder {
          min-height: 230px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #e7ebed;
          border: 1px dashed #adb7bd;
          color: #697984;
          text-align: center;
        }

        .info-placeholder span {
          font-size: 10px;
          letter-spacing: 2px;
        }

        .info-placeholder strong {
          font-size: 17px;
        }

        .info-placeholder p {
          margin: 0;
          font-size: 12px;
          line-height: 1.8;
        }

        .floor-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .floor-card {
          background: #fff;
          padding-bottom: 20px;
        }

        .floor-card > strong {
          display: block;
          padding: 20px 20px 0;
          font-size: 17px;
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
          color: #666;
          font-size: 13px;
          line-height: 1.8;
        }

        .sales-card small {
          color: #9b9b9b;
          font-size: 11px;
        }

        .sales-contact {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          margin-top: 35px;
          padding: 35px;
          background: #f5f6f7;
        }

        .sales-contact span {
          color: #89939a;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .sales-contact h3 {
          margin: 12px 0;
          font-size: 23px;
        }

        .sales-contact p {
          color: #777;
          font-size: 13px;
        }

        .sales-contact a {
          flex-shrink: 0;
          padding: 16px 25px;
          background: #253745;
          color: #fff;
          font-size: 14px;
        }

        .contact {
          padding: 100px 0;
          background: #243846;
          color: #fff;
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
          background: #fff;
          color: #243846;
          font-size: 25px;
          font-weight: 700;
        }

        .other-complex {
          display: inline-block;
          padding: 15px;
          font-size: 14px;
        }

        .footer {
          padding: 35px 0;
          background: #111a20;
          color: #fff;
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

        .footer p {
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

          .hero {
            min-height: 530px;
          }

          .hero h1 {
            font-size: 39px;
          }

          .hero-content p {
            font-size: 14px;
          }

          .section {
            padding: 75px 0;
          }

          .section-title h2 {
            font-size: 35px;
          }

          .section-title p {
            font-size: 13px;
          }

          .photo-frame {
            height: 240px;
          }

          .photo-standard .photo-frame {
            height: 240px;
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

          .location-item:nth-child(even) .photo {
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

          .premium-card,
          .sales-card {
            padding: 20px 15px;
            min-height: 225px;
          }

          .premium-card h3,
          .sales-card h3 {
            font-size: 17px;
          }

          .premium-card p,
          .sales-card p {
            font-size: 12px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .floor-grid {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
          }

          .floor-card .info-placeholder {
            min-height: 165px;
            padding: 12px;
          }

          .sales-contact {
            flex-direction: column;
            align-items: stretch;
            padding: 25px;
          }

          .sales-contact a {
            text-align: center;
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
