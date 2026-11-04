
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
    hero: "/IMG_2182.jpeg",
    overview: "/IMG_2162.jpeg",
    entrance: "/IMG_2182.jpeg",
    landscape: "/IMG_2163.jpeg",
    community: "/IMG_2184.jpeg",
  },
  4: {
    number: "04",
    name: "4단지",
    address: "충청남도 천안시 서북구 부대동 384-20",
    households: "818세대",
    developer: "㈜하나자산신탁",
    builder: "IPARK현대산업개발",
    other: 3,
    hero: "/IMG_2183.jpeg",
    overview: "/IMG_2166.jpeg",
    entrance: "/IMG_2183.jpeg",
    landscape: "/IMG_2193.jpeg",
    community: "/IMG_2185.jpeg",
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
    text: "성성호수공원과 노태근린공원 등 주변 녹지 및 휴식공간을 살펴볼 수 있습니다.",
    detail: "공원 접근 경로와 이동거리는 출발 위치에 따라 달라질 수 있습니다.",
  },
  {
    num: "02",
    title: "교육환경",
    headline: "자녀를 위한 교육 여건",
    text: "주변 교육시설과 학교 신설 계획 등을 살펴보고 통학 여건을 확인할 수 있습니다.",
    detail: "학교 신설 및 통학구역은 관계기관의 최종 결정에 따릅니다.",
  },
  {
    num: "03",
    title: "생활환경",
    headline: "편리한 생활 인프라",
    text: "상업시설과 의료시설 등 천안 북부 생활권의 다양한 편의시설을 소개합니다.",
    detail: "시설 운영 여부와 실제 이동시간은 별도 확인이 필요합니다.",
  },
  {
    num: "04",
    title: "교통환경",
    headline: "광역 이동을 고려한 입지",
    text: "천안IC와 경부고속도로 접근 여건 및 주변 교통환경을 살펴봅니다.",
    detail: "예정된 교통 개발계획은 변경되거나 지연될 수 있습니다.",
  },
];

const PREMIUM = [
  {
    num: "01",
    title: "단지 설계",
    text: "주동 배치와 단지 내 보행 동선을 중심으로 설계 정보를 살펴봅니다.",
  },
  {
    num: "02",
    title: "주거 평면",
    text: "주택형별 공간 구성과 실내 구조를 평면 자료를 통해 확인할 수 있습니다.",
  },
  {
    num: "03",
    title: "조경 공간",
    text: "단지 내 조경과 휴식공간의 계획 이미지를 소개합니다.",
  },
  {
    num: "04",
    title: "커뮤니티 시설",
    text: "커뮤니티 및 공용시설의 계획 정보를 안내합니다.",
  },
  {
    num: "05",
    title: "생활 편의",
    text: "주차, 보행 동선 및 생활 편의 요소를 살펴봅니다.",
  },
];

const THREE_FLOORS = [
  {
    id: "A",
    name: "평면도 A",
    image: "/IMG_2225.webp",
  },
  {
    id: "B",
    name: "평면도 B",
    image: "/IMG_2226.webp",
  },
  {
    id: "C",
    name: "평면도 C",
    image: "/IMG_2227.webp",
  },
  {
    id: "D",
    name: "평면도 D",
    image: "/IMG_2228.webp",
  },
];

const FOUR_FLOORS = [
  "84㎡ A",
  "84㎡ B",
  "102㎡ A",
  "102㎡ B",
  "116㎡",
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

function DetailPhoto({
  src,
  alt,
  contain = false,
  priority = false,
}: {
  src: string;
  alt: string;
  contain?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`detail-photo ${
        contain ? "contain" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 1100px"
        className="detail-image"
      />
    </div>
  );
}

function PhotoSlot({
  label,
}: {
  label: string;
}) {
  return (
    <div className="photo-slot">
      <span>＋</span>
      <strong>{label}</strong>
      <small>자료 확인 후 등록 예정</small>
    </div>
  );
}

export default function ComplexDetail({
  complex,
}: {
  complex: ComplexNumber;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] =
    useState(0);

  const data = DATA[complex];
  const isThree = complex === 3;

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
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
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

      {/* COMPLEX SWITCH */}
      <div className="complex-switch">
        <Link
          href="/complex/3"
          className={
            isThree ? "active" : ""
          }
        >
          3단지
        </Link>

        <Link
          href="/complex/4"
          className={
            !isThree ? "active" : ""
          }
        >
          4단지
        </Link>
      </div>

      {/* HERO */}
      <section className="detail-hero">
        <Image
          src={data.hero}
          alt={`천안 아이파크 시티 ${data.name} 조감도`}
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />

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

          <a
            href="#overview"
            className="hero-button"
          >
            {data.name} 자세히 보기 ↗
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="detail-section">
        <div className="container">
          <SectionTitle
            index="01"
            english="PROJECT OVERVIEW"
            title="사업개요"
            description={`${data.name}의 주요 사업 정보를 소개합니다.`}
          />

          <DetailPhoto
            src={data.overview}
            alt={`천안 아이파크 시티 ${data.name} 단지 조감도`}
          />

          <div className="overview-heading">
            <span>Overview</span>
            <h3>
              천안 아이파크 시티 {data.name}
            </h3>
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
              <h4>주택형</h4>
              <p>
                전용 84㎡
                <br />
                전용 102㎡
                <br />
                전용 116㎡
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
            ※ 사업 정보 및 설계 내용은
            공식 자료와 관계기관의 최종
            승인 내용에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* LOCATION */}
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
                <div className="location-number">
                  {item.num}
                </div>

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
            ※ 주변 개발계획, 교육시설 및
            교통시설의 계획은 변경될 수 있습니다.
          </p>
        </div>
      </section>

      {/* PREMIUM */}
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
                <span>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="premium-photo-grid">
            <DetailPhoto
              src={data.landscape}
              alt={`${data.name} 조경 이미지`}
            />

            <DetailPhoto
              src={data.community}
              alt={`${data.name} 커뮤니티 이미지`}
            />
          </div>

          <p className="disclaimer">
            ※ 커뮤니티 및 조경시설의 실제
            설치 여부와 규모는 공식 설계자료를
            기준으로 확인해야 합니다.
          </p>
        </div>
      </section>

      {/* COMPLEX GUIDE */}
      <section
        id="complex"
        className="detail-section soft"
      >
        <div className="container">
          <SectionTitle
            index="04"
            english="COMPLEX GUIDE"
            title="단지안내"
            description="단지배치도와 주택형별 공간 구성을 안내합니다."
          />

          <div className="guide-block">
            <h3>단지 조감도</h3>

            <DetailPhoto
              src={data.overview}
              alt={`${data.name} 단지 조감도`}
            />
          </div>

          <div className="guide-block">
            <h3>동·호수 배치도</h3>

            {isThree ? (
              <>
                <div className="document-photo">
                  <Image
                    src="/IMG_2218.webp"
                    alt="천안 아이파크 시티 3단지 동·호수 배치도"
                    width={1800}
                    height={2400}
                    sizes="(max-width: 768px) 100vw, 1100px"
                    className="document-image"
                  />
                </div>

                <p className="guide-description">
                  3단지 동별 층수, 호수 및
                  주택형 배치를 확인할 수 있습니다.
                  작은 글씨는 이미지를 확대하여
                  확인해 주세요.
                </p>

                <a
                  href="/IMG_2218.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  동·호수 배치도 크게 보기 ↗
                </a>
              </>
            ) : (
              <PhotoSlot
                label="4단지 동·호수 배치도"
              />
            )}
          </div>

          <div className="guide-block">
            <h3>주택형별 평면도</h3>

            <p className="guide-description">
              전용면적별 공간 구성과
              실내 구조를 확인해 보세요.
            </p>

            {isThree ? (
              <>
                <div className="floor-tabs">
                  {THREE_FLOORS.map(
                    (item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        className={
                          selectedFloor === index
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedFloor(index)
                        }
                      >
                        {item.name}
                      </button>
                    )
                  )}
                </div>

                <div className="floor-viewer">
                  <div className="floor-viewer-top">
                    <span>
                      FLOOR PLAN
                    </span>

                    <strong>
                      {
                        THREE_FLOORS[
                          selectedFloor
                        ].name
                      }
                    </strong>
                  </div>

                  <div className="floor-image-wrap">
                    <Image
                      src={
                        THREE_FLOORS[
                          selectedFloor
                        ].image
                      }
                      alt={`천안 아이파크 시티 3단지 ${
                        THREE_FLOORS[
                          selectedFloor
                        ].name
                      }`}
                      fill
                      sizes="(max-width: 768px) 100vw, 1000px"
                      className="floor-image"
                    />
                  </div>

                  <a
                    href={
                      THREE_FLOORS[
                        selectedFloor
                      ].image
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="document-link"
                  >
                    평면도 원본 크게 보기 ↗
                  </a>
                </div>

                <div className="floor-grid">
                  {THREE_FLOORS.map(
                    (item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`floor-card ${
                          selectedFloor === index
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedFloor(index)
                        }
                      >
                        <div className="floor-thumbnail">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="floor-image"
                          />
                        </div>

                        <strong>{item.name}</strong>
                      </button>
                    )
                  )}
                </div>

                <p className="disclaimer">
                  ※ 평면도 A~D는 등록된 이미지
                  구분명입니다. 실제 주택형과의
                  대응 관계는 공식 평면도 표기를
                  확인한 후 적용해야 합니다.
                  실내 구조와 마감재는 실제
                  시공 내용과 차이가 있을 수
                  있습니다.
                </p>
              </>
            ) : (
              <div className="floor-grid">
                {FOUR_FLOORS.map((type) => (
                  <div
                    className="floor-card"
                    key={type}
                  >
                    <PhotoSlot
                      label={`${type} 평면도`}
                    />
                    <strong>{type}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SALES */}
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
            {[
              [
                "01",
                "공급안내",
                "주택형별 공급 세대수 및 공급 조건",
              ],
              [
                "02",
                "분양일정",
                "입주자모집공고 및 청약 일정",
              ],
              [
                "03",
                "분양가격",
                "공급금액과 납부 조건",
              ],
              [
                "04",
                "청약안내",
                "청약 자격 및 신청 방법",
              ],
              [
                "05",
                "계약안내",
                "계약 일정과 필요 서류",
              ],
              [
                "06",
                "유의사항",
                "공식 공고 및 계약 조건 확인",
              ],
            ].map(([num, title, desc]) => (
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

          <p className="disclaimer">
            ※ 분양가, 청약 일정, 계약 조건 및
            공급 가능 여부는 변경될 수 있습니다.
            최신 입주자모집공고와 공식 안내를
            확인해 주세요.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="detail-contact"
      >
        <div className="container">
          <span>CONTACT US</span>

          <h2>
            천안 아이파크 시티
            <br />
            {data.name} 상담안내
          </h2>

          <p>
            분양 정보 및 방문 관련 상담은
            <br />
            미소부동산으로 문의해 주세요.
          </p>

          <a
            href={TEL}
            className="contact-call"
          >
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
            비공식 부동산 정보 및 상담 안내
            사이트입니다. 시행사·시공사·공식
            분양사무소의 공식 홈페이지가
            아닙니다.
          </p>

          <p>
            사업 및 분양 정보는 변경될 수
            있으므로 최신 공식 자료를
            우선하여 확인해 주세요.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .ipark-detail {
          background: #fff;
          color: #262c30;
          overflow-x: hidden;
          font-family: "Noto Sans KR", sans-serif;
        }

        .ipark-detail * {
          box-sizing: border-box;
        }

        .ipark-detail a {
          color: inherit;
          text-decoration: none;
        }

        .ipark-detail button {
          font: inherit;
          cursor: pointer;
        }

        .ipark-detail .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
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

        /* HERO */
        .detail-hero {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #283c4b;
          color: #fff;
        }

        .hero-image {
          object-fit: cover;
          object-position: center;
        }

        .hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(20, 35, 48, 0.9),
            rgba(20, 35, 48, 0.55),
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
          color: #e4d3b4;
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
          align-items: center;
          margin-top: 25px;
          padding: 17px 23px;
          background: #fff;
          color: #202c35 !important;
          font-size: 14px;
        }

        /* SECTIONS */
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
          color: #777;
          font-size: 15px;
          line-height: 1.8;
        }

        /* PHOTOS */
        .detail-photo {
          position: relative;
          width: 100%;
          height: 470px;
          overflow: hidden;
          background: #e7ebed;
        }

        .detail-photo .detail-image {
          object-fit: cover;
        }

        .detail-photo.contain .detail-image {
          object-fit: contain;
        }

        .photo-slot {
          min-height: 230px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #e7ebed;
          border: 1px dashed #adb7bd;
          color: #697984;
          text-align: center;
        }

        .photo-slot span {
          font-size: 34px;
          font-weight: 200;
        }

        .photo-slot strong {
          font-size: 15px;
          font-weight: 500;
        }

        .photo-slot small {
          font-size: 11px;
        }

        /* OVERVIEW */
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

        /* LOCATION */
        .location-list {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .location-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          gap: 30px;
          padding: 35px;
          background: #fff;
        }

        .location-number {
          font: 55px Georgia, serif;
          color: #c9ab78;
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

        /* PREMIUM */
        .premium-intro {
          margin-bottom: 40px;
          padding: 45px;
          background: #253745;
          color: #fff;
        }

        .premium-intro span {
          font-size: 11px;
          letter-spacing: 3px;
          color: #e4d3b4;
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

        .premium-photo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .premium-photo-grid .detail-photo {
          height: 340px;
        }

        /* GUIDE */
        .guide-block {
          margin-bottom: 65px;
        }

        .guide-block > h3 {
          margin: 0 0 20px;
          font-size: 25px;
        }

        .guide-description {
          color: #777;
          font-size: 14px;
          line-height: 1.9;
        }

        .document-photo {
          width: 100%;
          padding: 20px;
          background: #fff;
          border: 1px solid #e5e5e5;
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
          margin-top: 15px;
          padding: 13px 20px;
          background: #253745;
          color: #fff !important;
          font-size: 13px;
          font-weight: 600;
        }

        /* FLOOR PLAN */
        .floor-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 30px 0 20px;
        }

        .floor-tabs button {
          padding: 13px 22px;
          border: 1px solid #d5d9dc;
          background: #fff;
          color: #333;
          font-size: 14px;
        }

        .floor-tabs button.selected {
          background: #253745;
          border-color: #253745;
          color: #fff;
        }

        .floor-viewer {
          padding: 25px;
          background: #fff;
          border: 1px solid #e1e4e6;
          margin-bottom: 25px;
        }

        .floor-viewer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 20px;
        }

        .floor-viewer-top span {
          font-size: 11px;
          letter-spacing: 2px;
          color: #b59b77;
        }

        .floor-viewer-top strong {
          font-size: 20px;
        }

        .floor-image-wrap {
          position: relative;
          width: 100%;
          height: 550px;
          background: #fff;
        }

        .floor-image {
          object-fit: contain;
        }

        .floor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .floor-card {
          display: block;
          min-width: 0;
          padding: 0 0 20px;
          background: #fff;
          border: 1px solid #e1e4e6;
          text-align: left;
          color: #262c30;
        }

        .floor-card.selected {
          border: 2px solid #c9ab78;
        }

        .floor-card > strong {
          display: block;
          padding: 20px 20px 0;
          font-size: 16px;
        }

        .floor-thumbnail {
          position: relative;
          height: 185px;
          background: #fff;
        }

        .floor-card .photo-slot {
          min-height: 180px;
        }

        /* SALES */
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

        /* CONTACT */
        .detail-contact {
          padding: 100px 0;
          background: #243846;
          color: #fff;
          text-align: center;
        }

        .detail-contact .container > span {
          color: #e4d3b4;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .detail-contact h2 {
          margin: 25px 0;
          font-size: clamp(30px, 4vw, 45px);
          font-weight: 400;
          line-height: 1.5;
        }

        .detail-contact p {
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
          color: #243846 !important;
          font-size: 25px;
          font-weight: 700;
        }

        .other-complex {
          display: inline-block;
          padding: 15px;
          font-size: 14px;
        }

        /* FOOTER */
        .detail-footer {
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

          .detail-photo {
            height: 260px;
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
            gap: 10px;
            padding: 25px;
          }

          .location-number {
            font-size: 38px;
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

          .premium-photo-grid {
            grid-template-columns: 1fr;
          }

          .premium-photo-grid .detail-photo {
            height: 260px;
          }

          .document-photo {
            padding: 5px;
          }

          .floor-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .floor-tabs button {
            padding: 12px 8px;
            font-size: 12px;
          }

          .floor-viewer {
            padding: 12px;
          }

          .floor-image-wrap {
            height: 330px;
          }

          .floor-grid {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
          }

          .floor-thumbnail {
            height: 150px;
          }

          .floor-card > strong {
            padding: 12px 10px 0;
            font-size: 13px;
          }

          .detail-contact {
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
