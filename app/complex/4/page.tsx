
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

const MENU = [
  { id: "business", name: "사업안내" },
  { id: "location", name: "입지환경" },
  { id: "premium", name: "프리미엄" },
  { id: "complex", name: "단지안내" },
  { id: "sales", name: "분양안내" },
  { id: "modelhouse", name: "방문 및 상담" },
];

function SectionHeading({
  number,
  english,
  title,
  description,
}: {
  number: string;
  english: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-label">
        <span>{number}</span>
        <span>{english}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Complex4Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="complex4">
      <header className="site-header">
        <Link href="/" className="header-brand">
          <span className="brand-title">IPARK CITY</span>
          <span className="brand-subtitle">CHEONAN · 04</span>
        </Link>

        <nav className="desktop-nav" aria-label="4단지 메뉴">
          {MENU.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={TEL} className="header-phone">
            <Phone size={16} />
            <span>{PHONE}</span>
          </a>

          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="모바일 메뉴">
          {MENU.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
            >
              {item.name}
              <ArrowUpRight size={17} />
            </a>
          ))}

          <Link href="/complex/3" onClick={closeMenu}>
            3단지 바로가기
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      )}

      {/* 메인 */}
      <section className="hero">
        <div className="hero-architecture" aria-hidden="true">
          <div className="tower tower-one" />
          <div className="tower tower-two" />
          <div className="tower tower-three" />
          <div className="tower tower-four" />
        </div>
        <div className="hero-shade" />

        <div className="hero-content">
          <span className="hero-eyebrow">
            CHEONAN IPARK CITY · COMPLEX 04
          </span>

          <h1>
            천안 아이파크 시티
            <br />
            <strong>4단지</strong>
          </h1>

          <p>
            새로운 주거 공간을 만나는 곳.
            <br />
            천안 아이파크 시티 4단지 안내
          </p>

          <div className="hero-buttons">
            <a href="#business" className="primary-button">
              4단지 살펴보기
              <ArrowRight size={18} />
            </a>
            <a href={TEL} className="outline-button">
              상담문의 {PHONE}
              <Phone size={16} />
            </a>
          </div>
        </div>

        <a href="#business" className="scroll-down">
          SCROLL TO EXPLORE
          <ChevronDown size={17} />
        </a>
      </section>

      {/* 사업안내 */}
      <section id="business" className="section section-light">
        <div className="container">
          <SectionHeading
            number="01"
            english="PROJECT OVERVIEW"
            title="사업안내"
            description="천안 아이파크 시티 4단지의 주요 정보를 안내합니다."
          />

          <div className="overview-layout">
            <div className="overview-visual">
              <span>CHEONAN</span>
              <strong>04</strong>
              <p>IPARK CITY</p>
            </div>

            <div className="overview-info">
              <h3>
                새로운 생활의 시작,
                <br />
                천안 아이파크 시티 4단지
              </h3>

              <p className="overview-description">
                단지의 사업 개요와 분양 관련 정보는
                공식 자료 확인 후 정확하게 반영할 예정입니다.
              </p>

              <div className="info-table">
                <div>
                  <span>사업명</span>
                  <strong>천안 아이파크 시티 4단지</strong>
                </div>
                <div>
                  <span>공급 위치</span>
                  <strong>공식 사업자료 확인 후 안내</strong>
                </div>
                <div>
                  <span>건축 규모</span>
                  <strong>공식 사업자료 확인 후 안내</strong>
                </div>
                <div>
                  <span>공급 세대수</span>
                  <strong>공식 사업자료 확인 후 안내</strong>
                </div>
                <div>
                  <span>주택형</span>
                  <strong>공식 사업자료 확인 후 안내</strong>
                </div>
                <div>
                  <span>분양 일정</span>
                  <strong>공식 분양공고 기준 확인</strong>
                </div>
              </div>

              <p className="info-note">
                ※ 정확한 사업 내용은 입주자모집공고 등
                공식 자료를 기준으로 확인해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 입지환경 */}
      <section id="location" className="section section-soft">
        <div className="container">
          <SectionHeading
            number="02"
            english="LOCATION"
            title="입지환경"
            description="단지 주변의 교통·교육·생활 환경을 살펴보세요."
          />

          <div className="location-grid">
            {[
              {
                number: "01",
                title: "교통환경",
                description:
                  "주요 도로와 대중교통 접근성 등 실제 이동 환경을 확인할 수 있도록 안내할 예정입니다.",
              },
              {
                number: "02",
                title: "교육환경",
                description:
                  "주변 학교와 교육시설의 위치 및 통학 관련 정보를 공식 자료에 맞춰 정리할 예정입니다.",
              },
              {
                number: "03",
                title: "생활환경",
                description:
                  "상업시설, 의료시설, 공공시설 등 생활 편의시설 정보를 안내할 예정입니다.",
              },
              {
                number: "04",
                title: "주변환경",
                description:
                  "단지 주변의 공원, 녹지 및 생활권 정보를 확인하여 안내할 예정입니다.",
              },
            ].map((item) => (
              <div key={item.number} className="location-card">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="location-notice">
            <MapPin size={22} />
            <div>
              <strong>4단지 위치 및 교통 안내</strong>
              <p>
                정확한 사업지 주소와 지도는 공식 사업자료를
                확인한 후 추가합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프리미엄 */}
      <section id="premium" className="section section-dark">
        <div className="container">
          <SectionHeading
            number="03"
            english="PREMIUM"
            title="프리미엄"
            description="천안 아이파크 시티 4단지의 특화 요소를 소개합니다."
          />

          <div className="premium-layout">
            <div className="premium-copy">
              <span>DESIGNED FOR YOUR LIFE</span>
              <h3>
                일상의 가치를
                <br />
                생각하는 공간
              </h3>
              <p>
                단지 설계, 커뮤니티 시설, 조경 및 주거 편의시설 등
                실제 적용되는 특화 요소는 공식 자료 확인 후
                구체적으로 안내합니다.
              </p>
            </div>

            <div className="premium-list">
              {[
                "단지 설계 및 배치",
                "조경 및 외부공간",
                "커뮤니티 시설",
                "주거 편의 및 시스템",
              ].map((item, index) => (
                <div key={item} className="premium-row">
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  <ArrowUpRight size={18} />
                </div>
              ))}
            </div>
          </div>

          <p className="dark-note">
            ※ 위 항목은 안내 예정인 정보의 분류이며,
            개별 시설의 설치 또는 제공을 확정하는 내용이 아닙니다.
          </p>
        </div>
      </section>

      {/* 단지안내 */}
      <section id="complex" className="section section-light">
        <div className="container">
          <SectionHeading
            number="04"
            english="COMPLEX INFORMATION"
            title="단지안내"
            description="조감도, 단지배치도, 평면도 등을 순차적으로 안내합니다."
          />

          <div className="complex-visual">
            <Building2 size={45} strokeWidth={1} />
            <span>COMPLEX 04</span>
            <h3>4단지 조감도</h3>
            <p>공식 조감도 이미지 준비 중</p>
          </div>

          <div className="complex-doc-grid">
            {[
              "단지배치도",
              "동·호수 배치도",
              "주택형별 평면도",
            ].map((item) => (
              <div key={item} className="document-card">
                <div className="document-icon">
                  <Building2 size={25} strokeWidth={1.4} />
                </div>
                <h3>{item}</h3>
                <p>공식 자료 확인 후 업데이트 예정</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 분양안내 */}
      <section id="sales" className="section section-soft">
        <div className="container">
          <SectionHeading
            number="05"
            english="SALES INFORMATION"
            title="분양안내"
            description="공급 일정과 청약 및 계약 관련 정보를 확인하세요."
          />

          <div className="sales-layout">
            <div className="sales-intro">
              <span>SALES GUIDE</span>
              <h3>
                분양 정보,
                <br />
                정확하게 확인하세요.
              </h3>
              <p>
                분양 일정과 공급 조건은 변경될 수 있으므로
                공식 입주자모집공고 및 관련 자료를
                반드시 확인해 주세요.
              </p>
            </div>

            <div className="sales-list">
              {[
                "입주자모집공고",
                "공급 일정",
                "주택형별 공급 정보",
                "분양가 및 납부 조건",
                "청약 및 계약 안내",
              ].map((item) => (
                <div key={item}>
                  <Check size={18} />
                  <span>{item}</span>
                  <small>자료 확인 후 안내</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 방문 및 상담 */}
      <section id="modelhouse" className="section contact-section">
        <div className="container contact-content">
          <span>CONTACT & CONSULTATION</span>

          <h2>
            천안 아이파크 시티 4단지
            <br />
            상담 안내
          </h2>

          <p>
            단지 및 부동산 관련 상담은
            미소부동산으로 문의해 주세요.
          </p>

          <a href={TEL} className="contact-number">
            <Phone size={29} />
            {PHONE}
          </a>

          <div className="contact-actions">
            <a href={TEL}>
              전화 상담하기
              <ArrowUpRight size={18} />
            </a>

            <Link href="/complex/3">
              3단지 살펴보기
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="contact-disclaimer">
            미소부동산은 공식 분양사무소가 아니며,
            방문 장소 및 일정은 상담 시 확인해 주세요.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Link href="/">IPARK CITY · CHEONAN</Link>
            <a href={TEL}>미소부동산 {PHONE}</a>
          </div>

          <p>
            본 홈페이지는 미소부동산이 운영하는 부동산 정보 및
            상담 안내 사이트이며, 시행사·시공사·공식 분양사무소의
            공식 홈페이지가 아닙니다. 사업 및 분양 정보는
            공식 자료를 우선하여 확인해 주세요.
          </p>

          <div className="footer-bottom">
            <span>CHEONAN IPARK CITY · COMPLEX 04</span>
            <Link href="/">
              메인으로 돌아가기
              <ArrowLeft size={15} />
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        body {
          margin: 0;
          background: #fff;
          color: #16191d;
          font-family: "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .complex4 {
          overflow: clip;
        }

        .container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 78px;
          padding: 0 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: rgba(255,255,255,.97);
          border-bottom: 1px solid #e9e9e9;
          backdrop-filter: blur(12px);
        }

        .header-brand {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex-shrink: 0;
        }

        .brand-title {
          font: 24px Georgia, serif;
          letter-spacing: 1px;
        }

        .brand-subtitle {
          color: #777;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(12px, 2vw, 30px);
        }

        .desktop-nav a {
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          transition: color .2s;
        }

        .desktop-nav a:hover {
          color: #6b829b;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .header-phone {
          display: flex;
          align-items: center;
          gap: 9px;
          white-space: nowrap;
          font-size: 13px;
          font-weight: 700;
        }

        .menu-button {
          display: none;
          padding: 8px;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 78px;
          left: 0;
          right: 0;
          z-index: 99;
          padding: 16px 24px 28px;
          background: #fff;
          box-shadow: 0 18px 30px #00000018;
        }

        .mobile-menu a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 0;
          border-bottom: 1px solid #eee;
          font-size: 15px;
        }

        /* 메인 */

        .hero {
          position: relative;
          min-height: min(790px, calc(100svh - 78px));
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              145deg,
              #aab5bd 0%,
              #657786 45%,
              #1e2d3b 100%
            );
          color: #fff;
        }

        .hero-architecture {
          position: absolute;
          inset: 0;
          opacity: .7;
        }

        .tower {
          position: absolute;
          bottom: -3%;
          background:
            repeating-linear-gradient(
              180deg,
              transparent 0,
              transparent 19px,
              #1a29374d 20px,
              #1a29374d 25px
            ),
            repeating-linear-gradient(
              90deg,
              #d0d6d7 0,
              #d0d6d7 18px,
              #455768 19px,
              #455768 29px
            );
          box-shadow: 10px 0 35px #00000033;
          transform: skewY(-2deg);
        }

        .tower-one {
          left: 47%;
          width: 15%;
          height: 65%;
        }

        .tower-two {
          left: 62%;
          width: 14%;
          height: 85%;
        }

        .tower-three {
          left: 78%;
          width: 15%;
          height: 75%;
        }

        .tower-four {
          left: 92%;
          width: 13%;
          height: 94%;
        }

        .hero-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(7,18,29,.9),
              rgba(7,18,29,.65) 42%,
              rgba(7,18,29,.06)
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding: 95px 0;
        }

        .hero-eyebrow {
          font-size: 11px;
          letter-spacing: 3px;
        }

        .hero-content h1 {
          margin: 24px 0;
          font-size: clamp(42px, 5.5vw, 75px);
          font-weight: 300;
          line-height: 1.3;
          letter-spacing: -2px;
        }

        .hero-content h1 strong {
          font-weight: 700;
        }

        .hero-content p {
          margin-bottom: 35px;
          font-size: 17px;
          line-height: 1.9;
          color: #e7eaed;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .primary-button,
        .outline-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          min-height: 54px;
          padding: 15px 22px;
          font-size: 13px;
          font-weight: 600;
          transition: .25s;
        }

        .primary-button {
          background: #fff;
          color: #172331;
        }

        .outline-button {
          border: 1px solid #ffffff80;
          color: #fff;
        }

        .primary-button:hover,
        .outline-button:hover {
          transform: translateY(-3px);
        }

        .scroll-down {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        /* 공통 섹션 */

        .section {
          padding: 110px 0;
        }

        .section-light {
          background: #fff;
        }

        .section-soft {
          background: #f5f6f7;
        }

        .section-dark {
          background: #131e29;
          color: #fff;
        }

        .section-heading {
          margin-bottom: 55px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #718092;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .section-label span:first-child {
          font-weight: 700;
        }

        .section-heading h2 {
          margin: 20px 0 15px;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 600;
          letter-spacing: -2px;
        }

        .section-heading p {
          color: #777;
          font-size: 15px;
          line-height: 1.8;
        }

        .section-dark .section-heading p {
          color: #b8c0c8;
        }

        /* 사업안내 */

        .overview-layout {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 65px;
          align-items: center;
        }

        .overview-visual {
          min-height: 520px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(
              145deg,
              #293c4c,
              #899ba9
            );
          color: #fff;
        }

        .overview-visual span {
          font-size: 12px;
          letter-spacing: 5px;
        }

        .overview-visual strong {
          font: 240px/.95 Georgia, serif;
          color: #ffffff33;
        }

        .overview-visual p {
          font: 25px Georgia, serif;
          letter-spacing: 5px;
        }

        .overview-info h3 {
          margin: 0 0 18px;
          font-size: 29px;
          line-height: 1.5;
          letter-spacing: -1px;
        }

        .overview-description {
          color: #777;
          font-size: 14px;
          line-height: 1.9;
        }

        .info-table {
          margin-top: 30px;
          border-top: 2px solid #202b35;
        }

        .info-table > div {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 15px;
          padding: 19px 8px;
          border-bottom: 1px solid #e5e7e9;
          font-size: 13px;
        }

        .info-table span {
          color: #777;
        }

        .info-table strong {
          font-weight: 500;
        }

        .info-note {
          margin-top: 15px;
          color: #888;
          font-size: 11px;
          line-height: 1.8;
        }

        /* 입지환경 */

        .location-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .location-card {
          min-height: 260px;
          padding: 30px 25px;
          background: #fff;
          border: 1px solid #e8eaed;
        }

        .location-card > span {
          color: #a2acb5;
          font: 40px Georgia, serif;
        }

        .location-card h3 {
          margin: 25px 0 12px;
          font-size: 20px;
        }

        .location-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.9;
        }

        .location-notice {
          margin-top: 25px;
          padding: 28px;
          display: flex;
          align-items: flex-start;
          gap: 17px;
          background: #e8edf0;
        }

        .location-notice strong {
          font-size: 15px;
        }

        .location-notice p {
          margin: 8px 0 0;
          color: #68737b;
          font-size: 13px;
        }

        /* 프리미엄 */

        .premium-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        .premium-copy > span {
          color: #b3c0cb;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .premium-copy h3 {
          margin: 25px 0;
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 300;
          line-height: 1.45;
        }

        .premium-copy p {
          max-width: 420px;
          color: #b7c0c8;
          font-size: 14px;
          line-height: 2;
        }

        .premium-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 23px 0;
          border-bottom: 1px solid #ffffff33;
        }

        .premium-row > span {
          color: #8c9ba9;
          font: 20px Georgia, serif;
        }

        .premium-row strong {
          flex: 1;
          font-size: 17px;
          font-weight: 400;
        }

        .dark-note {
          margin-top: 45px;
          color: #9faab5;
          font-size: 11px;
          line-height: 1.8;
        }

        /* 단지안내 */

        .complex-visual {
          min-height: 460px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(
              135deg,
              #e5e8eb,
              #c9d1d8
            );
          color: #4d5b68;
          text-align: center;
        }

        .complex-visual > span {
          margin-top: 18px;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .complex-visual h3 {
          margin: 18px 0 8px;
          font-size: 30px;
        }

        .complex-visual p {
          color: #71808d;
          font-size: 13px;
        }

        .complex-doc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 15px;
        }

        .document-card {
          min-height: 220px;
          padding: 28px;
          background: #f5f6f7;
        }

        .document-icon {
          color: #7b8a97;
        }

        .document-card h3 {
          margin: 35px 0 10px;
          font-size: 19px;
        }

        .document-card p {
          color: #888;
          font-size: 12px;
        }

        /* 분양안내 */

        .sales-layout {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 80px;
        }

        .sales-intro > span {
          color: #75889a;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .sales-intro h3 {
          margin: 20px 0;
          font-size: 35px;
          line-height: 1.5;
          font-weight: 500;
        }

        .sales-intro p {
          max-width: 400px;
          color: #777;
          font-size: 14px;
          line-height: 1.9;
        }

        .sales-list {
          border-top: 2px solid #202b35;
        }

        .sales-list > div {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 22px 0;
          border-bottom: 1px solid #dfe3e7;
        }

        .sales-list svg {
          color: #70889c;
        }

        .sales-list span {
          flex: 1;
          font-size: 15px;
        }

        .sales-list small {
          color: #8c959c;
          font-size: 11px;
        }

        /* 상담 */

        .contact-section {
          padding: 120px 0;
          background:
            linear-gradient(
              135deg,
              #152536,
              #344b5d
            );
          color: #fff;
          text-align: center;
        }

        .contact-content > span {
          color: #b5c2cd;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .contact-content h2 {
          margin: 25px 0;
          font-size: clamp(31px, 4vw, 49px);
          font-weight: 400;
          line-height: 1.5;
        }

        .contact-content > p {
          color: #d2dbe1;
          font-size: 15px;
          line-height: 1.8;
        }

        .contact-number {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 35px 0;
          font-size: clamp(28px, 5vw, 47px);
          font-weight: 700;
        }

        .contact-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contact-actions a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          min-width: 210px;
          padding: 18px 22px;
          border: 1px solid #ffffff77;
          font-size: 13px;
        }

        .contact-actions a:first-child {
          background: #fff;
          color: #152536;
        }

        .contact-content .contact-disclaimer {
          margin-top: 35px;
          font-size: 11px;
          color: #b5c2cd;
        }

        /* 하단 */

        .footer {
          padding: 40px 0 25px;
          background: #101820;
          color: #fff;
        }

        .footer-top,
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .footer-top a:first-child {
          font: 20px Georgia, serif;
          letter-spacing: 1px;
        }

        .footer-top a:last-child {
          font-size: 13px;
        }

        .footer p {
          max-width: 900px;
          margin: 25px 0;
          color: #a8b2bc;
          font-size: 11px;
          line-height: 2;
        }

        .footer-bottom {
          padding-top: 20px;
          border-top: 1px solid #ffffff22;
          color: #a8b2bc;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .footer-bottom a {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* 반응형 */

        @media (max-width: 1100px) {
          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: block;
          }
        }

        @media (max-width: 800px) {
          .overview-layout,
          .premium-layout,
          .sales-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .location-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .overview-visual {
            min-height: 350px;
          }

          .overview-visual strong {
            font-size: 160px;
          }
        }

        @media (max-width: 600px) {
          .container {
            width: calc(100% - 36px);
          }

          .site-header {
            height: 68px;
            padding: 0 18px;
          }

          .mobile-menu {
            top: 68px;
          }

          .brand-title {
            font-size: 19px;
          }

          .brand-subtitle {
            font-size: 8px;
          }

          .header-phone span {
            display: none;
          }

          .hero {
            min-height: 690px;
          }

          .hero-content {
            width: calc(100% - 36px);
            padding: 80px 0;
          }

          .hero-eyebrow {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .hero-content h1 {
            font-size: 43px;
          }

          .hero-content p {
            font-size: 14px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }

          .primary-button,
          .outline-button {
            width: min(100%, 290px);
          }

          .tower-one {
            left: 20%;
          }

          .tower-two {
            left: 45%;
          }

          .tower-three {
            left: 70%;
          }

          .tower-four {
            left: 90%;
          }

          .hero-shade {
            background:
              linear-gradient(
                90deg,
                rgba(7,18,29,.88),
                rgba(7,18,29,.35)
              );
          }

          .section {
            padding: 75px 0;
          }

          .section-heading {
            margin-bottom: 35px;
          }

          .section-heading h2 {
            font-size: 35px;
          }

          .section-heading p {
            font-size: 13px;
          }

          .overview-visual {
            min-height: 280px;
          }

          .overview-visual strong {
            font-size: 130px;
          }

          .overview-info h3 {
            font-size: 24px;
          }

          .info-table > div {
            grid-template-columns: 95px 1fr;
            font-size: 12px;
          }

          .location-grid {
            gap: 9px;
          }

          .location-card {
            min-height: 240px;
            padding: 19px 15px;
          }

          .location-card h3 {
            font-size: 17px;
          }

          .location-card p {
            font-size: 12px;
          }

          .premium-copy h3 {
            font-size: 36px;
          }

          .premium-row strong {
            font-size: 15px;
          }

          .complex-visual {
            min-height: 290px;
          }

          .complex-doc-grid {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .document-card {
            min-height: 155px;
          }

          .document-card h3 {
            margin-top: 18px;
          }

          .sales-intro h3 {
            font-size: 29px;
          }

          .sales-list span {
            font-size: 13px;
          }

          .sales-list small {
            font-size: 10px;
          }

          .contact-section {
            padding: 85px 0;
          }

          .contact-content h2 {
            font-size: 29px;
          }

          .contact-content > p {
            font-size: 13px;
          }

          .contact-number {
            font-size: 29px;
          }

          .contact-actions {
            flex-direction: column;
            align-items: center;
          }

          .contact-actions a {
            width: min(100%, 300px);
          }

          .footer-top,
          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
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
