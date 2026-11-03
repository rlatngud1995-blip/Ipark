
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

const sections = [
  { id: "business", label: "사업안내", en: "OVERVIEW" },
  { id: "location", label: "입지환경", en: "LOCATION" },
  { id: "premium", label: "프리미엄", en: "PREMIUM" },
  { id: "complex", label: "단지안내", en: "COMPLEX" },
  { id: "sales", label: "분양안내", en: "INFORMATION" },
  { id: "modelhouse", label: "모델하우스", en: "VISIT" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="section-line" />
    </div>
  );
}

function ImagePlaceholder({
  label,
  number,
  className = "",
}: {
  label: string;
  number?: string;
  className?: string;
}) {
  return (
    <div className={`image-placeholder ${className}`}>
      <div className="placeholder-grid" />
      <div className="placeholder-glow" />
      <div className="placeholder-content">
        {number && <span>{number}</span>}
        <Building2 size={38} strokeWidth={1} />
        <strong>{label}</strong>
        <small>IMAGE COMING SOON</small>
      </div>
    </div>
  );
}

export default function ComplexThreePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="complex-page">
      {/* 상단 네비게이션 */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="site-logo">
          <span className="logo-mark">I</span>
          <span className="logo-text">
            <strong>IPARK CITY</strong>
            <small>CHEONAN · 3RD COMPLEX</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="3단지 메뉴">
          {sections.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={TEL} className="header-phone">
            <Phone size={15} />
            {PHONE}
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="mobile-menu">
          <span className="mobile-menu-label">EXPLORE THE COLLECTION</span>

          {sections.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={18} />
            </a>
          ))}

          <Link href="/" onClick={closeMenu}>
            <span>←</span>
            3·4단지 선택으로 돌아가기
          </Link>
        </div>
      )}

      {/* 메인 히어로 */}
      <section className="hero">
        <div className="hero-architecture" aria-hidden="true">
          <div className="hero-tower tower-one" />
          <div className="hero-tower tower-two" />
          <div className="hero-tower tower-three" />
          <div className="hero-horizon" />
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-kicker">
            CHEONAN IPARK CITY
            <span className="kicker-line" />
            THE THIRD COLLECTION
          </span>

          <span className="hero-number">03</span>

          <h1>
            천안 아이파크 시티
            <br />
            <em>3단지</em>
          </h1>

          <p>
            새로운 일상을 위한 공간.
            <br />
            천안 아이파크 시티 3단지의
            <br className="mobile-only" />
            정보를 만나보세요.
          </p>

          <div className="hero-buttons">
            <a href="#business" className="primary-button">
              3단지 살펴보기
              <ArrowRight size={18} />
            </a>
            <a href={TEL} className="outline-button">
              <Phone size={16} />
              분양 정보 상담
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <a href="#business" aria-label="사업안내로 이동">
            <ChevronDown size={23} />
          </a>
          <span>CHEONAN · IPARK CITY · 03</span>
        </div>
      </section>

      {/* 사업안내 */}
      <section id="business" className="content-section business-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="01 / PROJECT OVERVIEW"
            title="사업안내"
            description="천안 아이파크 시티 3단지의 주요 정보를 안내합니다."
          />

          <div className="business-layout">
            <div className="business-visual">
              <ImagePlaceholder
                label="3단지 조감도"
                number="03"
                className="business-image"
              />
            </div>

            <div className="business-info">
              <span className="info-eyebrow">
                THE THIRD COLLECTION
              </span>

              <h3>
                새로운 공간의 시작,
                <br />
                <em>천안 아이파크 시티 3단지</em>
              </h3>

              <p>
                천안 아이파크 시티 3단지에 관한
                사업 개요와 공급 정보를 확인하실 수
                있도록 준비하고 있습니다.
              </p>

              <div className="overview-table">
                <div>
                  <span>사업명</span>
                  <strong>천안 아이파크 시티 3단지</strong>
                </div>
                <div>
                  <span>사업 위치</span>
                  <strong>공식 사업 자료 확인 후 안내</strong>
                </div>
                <div>
                  <span>공급 규모</span>
                  <strong>공식 자료 확인 후 안내</strong>
                </div>
                <div>
                  <span>주택형</span>
                  <strong>공식 자료 확인 후 안내</strong>
                </div>
                <div>
                  <span>공급 일정</span>
                  <strong>공식 공고 기준 안내 예정</strong>
                </div>
              </div>

              <p className="info-note">
                ※ 세부 사업 내용은 입주자모집공고 및
                사업주체의 공식 자료를 기준으로
                확인해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 입지환경 */}
      <section id="location" className="content-section location-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="02 / LOCATION"
            title="입지환경"
            description="교통·교육·생활 인프라를 공식 자료에 맞춰 안내합니다."
          />

          <div className="location-layout">
            <div className="location-copy">
              <span className="large-outline-number">02</span>
              <h3>
                일상을 결정하는
                <br />
                <em>입지의 가치</em>
              </h3>

              <p>
                실제 위치와 주변 시설, 이동 동선 등을
                확인할 수 있도록 입지 정보를
                준비하고 있습니다.
              </p>

              <div className="location-features">
                <div>
                  <span className="feature-index">01</span>
                  <div>
                    <strong>교통환경</strong>
                    <p>주요 도로 및 대중교통 접근 정보</p>
                  </div>
                </div>

                <div>
                  <span className="feature-index">02</span>
                  <div>
                    <strong>교육환경</strong>
                    <p>주변 학교 및 교육시설 정보</p>
                  </div>
                </div>

                <div>
                  <span className="feature-index">03</span>
                  <div>
                    <strong>생활환경</strong>
                    <p>쇼핑·의료·편의시설 정보</p>
                  </div>
                </div>
              </div>
            </div>

            <ImagePlaceholder
              label="입지환경 지도"
              className="location-image"
            />
          </div>
        </div>
      </section>

      {/* 프리미엄 */}
      <section id="premium" className="content-section premium-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="03 / PREMIUM"
            title="프리미엄"
            description="단지의 특징과 생활 환경을 확인할 수 있는 공간입니다."
          />

          <div className="premium-intro">
            <span>THE ART OF LIVING</span>
            <h3>
              공간을 넘어,
              <br />
              <em>삶의 기준을 생각하다.</em>
            </h3>
          </div>

          <div className="premium-cards">
            {[
              {
                number: "01",
                title: "ARCHITECTURE",
                korean: "건축과 공간",
                description: "단지 배치와 건축 계획을 확인합니다.",
              },
              {
                number: "02",
                title: "LANDSCAPE",
                korean: "조경과 외부 공간",
                description: "조경 및 외부 공간 계획을 확인합니다.",
              },
              {
                number: "03",
                title: "COMMUNITY",
                korean: "커뮤니티",
                description: "공식 커뮤니티 시설 정보를 확인합니다.",
              },
            ].map((item) => (
              <div className="premium-card" key={item.number}>
                <div className="premium-card-visual">
                  <span className="premium-card-number">
                    {item.number}
                  </span>
                  <div className="premium-card-pattern" />
                </div>
                <div className="premium-card-content">
                  <span>{item.title}</span>
                  <h4>{item.korean}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="section-disclaimer">
            ※ 본 항목은 안내 페이지 구성용이며,
            실제 적용 시설과 설계 내용은 공식 자료를
            확인한 뒤 반영됩니다.
          </p>
        </div>
      </section>

      {/* 단지안내 */}
      <section id="complex" className="content-section complex-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="04 / COMPLEX GUIDE"
            title="단지안내"
            description="배치도와 평면도 등 주요 단지 자료를 확인하는 공간입니다."
          />

          <div className="complex-grid">
            <div className="complex-feature">
              <ImagePlaceholder
                label="단지 배치도"
                className="complex-feature-image"
              />
              <div className="complex-feature-caption">
                <span>01 / SITE PLAN</span>
                <h3>단지 배치도</h3>
                <p>공식 배치도 자료 준비 중</p>
              </div>
            </div>

            <div className="complex-feature">
              <ImagePlaceholder
                label="세대 평면도"
                className="complex-feature-image"
              />
              <div className="complex-feature-caption">
                <span>02 / FLOOR PLAN</span>
                <h3>세대 평면도</h3>
                <p>공식 주택형별 평면 자료 준비 중</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 분양안내 */}
      <section id="sales" className="content-section sales-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="05 / SALES INFORMATION"
            title="분양안내"
            description="청약과 공급 관련 정보는 공식 공고를 기준으로 안내합니다."
          />

          <div className="sales-layout">
            <div className="sales-message">
              <span>INFORMATION DESK</span>
              <h3>
                정확한 정보로
                <br />
                <em>안내하겠습니다.</em>
              </h3>
              <p>
                공급 일정, 주택형, 분양가, 청약 자격 등은
                공식 입주자모집공고를 통해 확인해야 합니다.
                자세한 사항은 미소부동산에 문의해 주세요.
              </p>

              <a href={TEL} className="gold-button">
                상담 문의하기
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="sales-details">
              <div>
                <Clock3 size={22} />
                <span>공급 일정</span>
                <strong>공식 공고 확인 후 안내</strong>
              </div>

              <div>
                <Building2 size={22} />
                <span>공급 세대 및 주택형</span>
                <strong>공식 공고 확인 후 안내</strong>
              </div>

              <div>
                <Check size={22} />
                <span>청약 관련 안내</span>
                <strong>청약홈 및 공식 공고 기준</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 모델하우스 */}
      <section
        id="modelhouse"
        className="content-section modelhouse-section"
      >
        <div className="section-container">
          <SectionHeading
            eyebrow="06 / VISIT & CONSULTATION"
            title="모델하우스"
            description="방문 관련 정보와 상담 안내를 확인하세요."
          />

          <div className="modelhouse-layout">
            <ImagePlaceholder
              label="모델하우스 안내 이미지"
              className="modelhouse-image"
            />

            <div className="modelhouse-info">
              <span className="info-eyebrow">
                VISIT INFORMATION
              </span>

              <h3>
                방문 전,
                <br />
                <em>먼저 확인하세요.</em>
              </h3>

              <p>
                모델하우스의 운영 여부, 위치 및
                방문 가능 시간은 변경될 수 있으므로
                방문 전에 확인해 주세요.
              </p>

              <div className="modelhouse-row">
                <MapPin size={20} />
                <div>
                  <span>모델하우스 위치</span>
                  <strong>공식 위치 확인 후 안내</strong>
                </div>
              </div>

              <div className="modelhouse-row">
                <Clock3 size={20} />
                <div>
                  <span>방문 가능 시간</span>
                  <strong>운영 일정 확인 필요</strong>
                </div>
              </div>

              <a href={TEL} className="gold-button">
                미소부동산 상담 연결
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 다른 단지 이동 */}
      <section className="next-complex">
        <div className="next-complex-content">
          <span>EXPLORE ANOTHER COLLECTION</span>
          <h2>4단지도 둘러보세요.</h2>
          <Link href="/complex/4">
            4단지 바로가기
            <ArrowRight size={21} />
          </Link>
        </div>
        <span className="next-complex-number">04</span>
      </section>

      {/* 하단 */}
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <span className="footer-eyebrow">
              MI SO REAL ESTATE
            </span>
            <h2>미소부동산</h2>
            <p>천안 아이파크 시티 3·4단지 정보 및 상담</p>
          </div>

          <a href={TEL} className="footer-phone">
            <Phone size={23} />
            {PHONE}
          </a>
        </div>

        <div className="footer-bottom">
          <Link href="/">
            <ArrowLeft size={15} />
            3·4단지 선택 화면
          </Link>

          <p>
            본 홈페이지는 미소부동산이 운영하는
            부동산 정보 및 상담 안내 사이트이며,
            시행사·시공사·공식 분양사무소의
            공식 홈페이지가 아닙니다.
            사업 및 분양 관련 내용은 공식 자료를
            우선하여 확인해 주세요.
          </p>

          <small>
            © MI SO REAL ESTATE. ALL RIGHTS RESERVED.
          </small>
        </div>
      </footer>

      {/* 모바일 하단 상담 */}
      <div className="mobile-bottom-bar">
        <a href={TEL}>
          <Phone size={18} />
          3단지 상담문의 {PHONE}
        </a>
      </div>

      <style jsx global>{`
        :root {
          --navy: #0b1624;
          --navy-light: #152538;
          --gold: #cbb18a;
          --gold-light: #f0dec1;
          --ivory: #f5f2ec;
          --muted: #a9b1bb;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 85px;
        }

        body {
          margin: 0;
          background: var(--navy);
          color: #fff;
          font-family: "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .complex-page {
          min-height: 100vh;
          overflow: clip;
        }

        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 86px;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4%;
          border-bottom: 1px solid rgba(255,255,255,.15);
          background: rgba(7,14,24,.36);
          backdrop-filter: blur(14px);
          transition: background .3s;
        }

        .site-header.scrolled {
          background: rgba(7,14,24,.96);
        }

        .site-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .logo-mark {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border: 1px solid var(--gold);
          color: var(--gold);
          font: italic 27px Georgia, serif;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .logo-text strong {
          font: 18px Georgia, serif;
          letter-spacing: 1px;
        }

        .logo-text small {
          color: var(--gold);
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .desktop-nav {
          display: flex;
          gap: clamp(14px, 2vw, 33px);
        }

        .desktop-nav a {
          color: #e0e3e7;
          font-size: 12px;
          white-space: nowrap;
          transition: color .25s;
        }

        .desktop-nav a:hover {
          color: var(--gold);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .header-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--gold-light);
          font-size: 13px;
          white-space: nowrap;
        }

        .menu-toggle {
          display: none;
          border: 0;
          color: white;
          background: transparent;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          z-index: 99;
          top: 75px;
          left: 0;
          right: 0;
          padding: 28px 25px 40px;
          background: #0b1624;
          border-bottom: 1px solid rgba(203,177,138,.4);
          box-shadow: 0 25px 50px rgba(0,0,0,.5);
        }

        .mobile-menu-label {
          display: block;
          margin-bottom: 20px;
          color: var(--gold);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .mobile-menu a {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 17px 0;
          border-bottom: 1px solid rgba(255,255,255,.1);
          font-size: 16px;
        }

        .mobile-menu a span {
          color: var(--gold);
          font: 15px Georgia, serif;
        }

        .mobile-menu a svg {
          margin-left: auto;
        }

        /* HERO */

        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 70% 30%,
              #5a6470,
              #1b2a3a 45%,
              #08111d 90%
            );
        }

        .hero-architecture {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: .8;
        }

        .hero-tower {
          position: absolute;
          bottom: 0;
          width: 17%;
          background:
            repeating-linear-gradient(
              180deg,
              rgba(220,195,155,.35) 0,
              rgba(220,195,155,.35) 2px,
              transparent 3px,
              transparent 18px
            ),
            repeating-linear-gradient(
              90deg,
              #182536 0,
              #182536 18px,
              #506071 20px,
              #182536 23px
            );
          box-shadow: -25px 0 55px rgba(0,0,0,.25);
          transform: skewY(-2deg);
        }

        .tower-one {
          height: 61%;
          right: 5%;
        }

        .tower-two {
          height: 84%;
          right: 25%;
        }

        .tower-three {
          height: 70%;
          right: 45%;
        }

        .hero-horizon {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 24%;
          background:
            linear-gradient(
              transparent,
              #08111d
            );
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(5,12,22,.97) 0%,
              rgba(5,12,22,.75) 45%,
              rgba(5,12,22,.16) 100%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(100%, 1300px);
          margin: 0 auto;
          padding: 150px 5% 100px;
        }

        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 2.5px;
        }

        .kicker-line {
          width: 45px;
          height: 1px;
          background: var(--gold);
        }

        .hero-number {
          display: block;
          margin-top: 28px;
          font: 160px/.9 Georgia, serif;
          color: rgba(255,255,255,.13);
          letter-spacing: -12px;
        }

        .hero h1 {
          margin: -22px 0 25px;
          font-size: clamp(45px, 6vw, 82px);
          font-weight: 300;
          line-height: 1.35;
          letter-spacing: -3px;
        }

        .hero h1 em {
          color: var(--gold-light);
          font-style: normal;
        }

        .hero-content > p {
          color: #d4d8de;
          font-size: 16px;
          line-height: 2;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 40px;
        }

        .primary-button,
        .outline-button,
        .gold-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          min-height: 55px;
          padding: 0 26px;
          font-size: 13px;
          transition: .3s;
        }

        .primary-button,
        .gold-button {
          background: var(--gold);
          color: #0b1624;
        }

        .primary-button:hover,
        .gold-button:hover {
          background: var(--gold-light);
        }

        .outline-button {
          border: 1px solid rgba(255,255,255,.5);
          color: white;
        }

        .outline-button:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .hero-bottom {
          position: absolute;
          z-index: 2;
          bottom: 30px;
          left: 5%;
          right: 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #c7cbd1;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .hero-bottom a {
          color: var(--gold);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .mobile-only {
          display: none;
        }

        /* 공통 섹션 */

        .content-section {
          padding: 115px 5%;
        }

        .section-container {
          width: min(100%, 1250px);
          margin: 0 auto;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-eyebrow {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .section-heading h2 {
          margin: 18px 0;
          font-size: clamp(32px, 4vw, 47px);
          font-weight: 400;
          letter-spacing: -2px;
        }

        .section-heading p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .section-line {
          width: 60px;
          height: 1px;
          margin: 27px auto 0;
          background: var(--gold);
        }

        .image-placeholder {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 340px;
          overflow: hidden;
          background:
            linear-gradient(
              145deg,
              #35495c,
              #142435 60%,
              #0b1624
            );
          border: 1px solid rgba(203,177,138,.2);
        }

        .placeholder-grid {
          position: absolute;
          inset: 0;
          opacity: .25;
          background:
            repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 49px,
              rgba(255,255,255,.12) 50px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent 49px,
              rgba(255,255,255,.12) 50px
            );
          transform: perspective(400px) rotateX(25deg);
        }

        .placeholder-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at center,
              rgba(203,177,138,.18),
              transparent 65%
            );
        }

        .placeholder-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          text-align: center;
        }

        .placeholder-content > span {
          color: rgba(255,255,255,.15);
          font: 100px/.8 Georgia, serif;
        }

        .placeholder-content svg {
          color: var(--gold);
        }

        .placeholder-content strong {
          font-size: 18px;
          font-weight: 400;
        }

        .placeholder-content small {
          color: #b3bbc4;
          font-size: 9px;
          letter-spacing: 3px;
        }

        /* 사업안내 */

        .business-section {
          background: #f5f2ec;
          color: #172332;
        }

        .business-section .section-heading p {
          color: #66717a;
        }

        .business-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .business-image {
          min-height: 570px;
        }

        .info-eyebrow {
          color: #a78a60;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .business-info h3,
        .location-copy h3,
        .sales-message h3,
        .modelhouse-info h3 {
          margin: 22px 0;
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -1.5px;
        }

        .business-info h3 em,
        .location-copy h3 em,
        .sales-message h3 em,
        .modelhouse-info h3 em {
          color: #ad906a;
          font-style: normal;
        }

        .business-info > p {
          color: #68717a;
          font-size: 14px;
          line-height: 2;
        }

        .overview-table {
          margin-top: 35px;
          border-top: 2px solid #263748;
        }

        .overview-table > div {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          padding: 17px 0;
          border-bottom: 1px solid #d7d6d2;
          font-size: 13px;
        }

        .overview-table span {
          color: #727b84;
        }

        .overview-table strong {
          font-weight: 500;
        }

        .business-info .info-note {
          font-size: 11px;
          margin-top: 20px;
        }

        /* 입지환경 */

        .location-section {
          background: #0d1a29;
        }

        .location-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        .large-outline-number {
          display: block;
          font: 120px/.9 Georgia, serif;
          color: rgba(203,177,138,.15);
        }

        .location-copy h3 em {
          color: var(--gold);
        }

        .location-copy > p {
          color: #b4bec9;
          font-size: 14px;
          line-height: 2;
        }

        .location-features {
          margin-top: 40px;
          border-top: 1px solid rgba(255,255,255,.2);
        }

        .location-features > div {
          display: flex;
          gap: 22px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .feature-index {
          color: var(--gold);
          font: 20px Georgia, serif;
        }

        .location-features strong {
          font-size: 15px;
          font-weight: 500;
        }

        .location-features p {
          color: #9da9b6;
          font-size: 12px;
          margin-bottom: 0;
        }

        .location-image {
          min-height: 600px;
        }

        /* 프리미엄 */

        .premium-section {
          background: #111f2e;
        }

        .premium-intro {
          text-align: center;
          margin-bottom: 55px;
        }

        .premium-intro > span {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .premium-intro h3 {
          font-size: clamp(27px, 3.5vw, 46px);
          font-weight: 300;
          line-height: 1.6;
        }

        .premium-intro h3 em {
          color: var(--gold-light);
          font-style: normal;
        }

        .premium-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .premium-card {
          background: #1b2b3d;
          border: 1px solid rgba(203,177,138,.18);
        }

        .premium-card-visual {
          position: relative;
          height: 300px;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 70% 20%,
              #52606a,
              #1d2b39 65%,
              #0b1624
            );
        }

        .premium-card-number {
          position: absolute;
          right: 20px;
          bottom: -15px;
          font: 130px Georgia, serif;
          color: rgba(255,255,255,.12);
        }

        .premium-card-pattern {
          position: absolute;
          left: 15%;
          top: 15%;
          width: 55%;
          height: 70%;
          border: 1px solid rgba(203,177,138,.4);
          box-shadow:
            25px 25px 0 -1px #243648,
            25px 25px 0 0 rgba(203,177,138,.3);
        }

        .premium-card-content {
          padding: 28px;
        }

        .premium-card-content > span {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 2px;
        }

        .premium-card-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin: 12px 0;
        }

        .premium-card-content p {
          color: #abb5c0;
          font-size: 13px;
          line-height: 1.8;
        }

        .section-disclaimer {
          color: #9ba8b5;
          font-size: 11px;
          line-height: 1.8;
          margin-top: 25px;
        }

        /* 단지안내 */

        .complex-section {
          background: #f5f2ec;
          color: #172332;
        }

        .complex-section .section-heading p {
          color: #66717a;
        }

        .complex-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .complex-feature-image {
          min-height: 410px;
        }

        .complex-feature-caption {
          padding: 25px 0;
          border-bottom: 1px solid #cfc9be;
        }

        .complex-feature-caption > span {
          color: #a78a60;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .complex-feature-caption h3 {
          font-size: 24px;
          font-weight: 400;
          margin: 12px 0;
        }

        .complex-feature-caption p {
          color: #68717a;
          font-size: 13px;
        }

        /* 분양안내 */

        .sales-section {
          background: #0b1624;
        }

        .sales-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .sales-message > span {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .sales-message h3 em {
          color: var(--gold-light);
        }

        .sales-message p {
          color: #adb7c3;
          font-size: 14px;
          line-height: 2;
          max-width: 440px;
        }

        .sales-message .gold-button {
          margin-top: 25px;
        }

        .sales-details {
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .sales-details > div {
          display: grid;
          grid-template-columns: 35px 1fr;
          gap: 10px 20px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .sales-details svg {
          grid-row: span 2;
          color: var(--gold);
        }

        .sales-details span {
          color: #aeb8c3;
          font-size: 12px;
        }

        .sales-details strong {
          font-size: 15px;
          font-weight: 400;
        }

        /* 모델하우스 */

        .modelhouse-section {
          background: #f5f2ec;
          color: #172332;
        }

        .modelhouse-section .section-heading p {
          color: #66717a;
        }

        .modelhouse-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .modelhouse-image {
          min-height: 540px;
        }

        .modelhouse-info > p {
          color: #68717a;
          font-size: 14px;
          line-height: 2;
        }

        .modelhouse-row {
          display: flex;
          gap: 17px;
          padding: 20px 0;
          border-bottom: 1px solid #d5d2cc;
        }

        .modelhouse-row svg {
          color: #a78a60;
        }

        .modelhouse-row > div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .modelhouse-row span {
          color: #78818a;
          font-size: 12px;
        }

        .modelhouse-row strong {
          font-size: 14px;
          font-weight: 500;
        }

        .modelhouse-info .gold-button {
          margin-top: 30px;
        }

        /* 다음 단지 */

        .next-complex {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 340px;
          padding: 65px 8%;
          overflow: hidden;
          background:
            linear-gradient(
              110deg,
              #243b50,
              #101c2b
            );
        }

        .next-complex-content {
          position: relative;
          z-index: 2;
        }

        .next-complex-content > span {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .next-complex-content h2 {
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 400;
          margin: 20px 0;
        }

        .next-complex-content a {
          display: inline-flex;
          align-items: center;
          gap: 30px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--gold);
          color: var(--gold-light);
          font-size: 14px;
        }

        .next-complex-number {
          position: absolute;
          right: 8%;
          bottom: -65px;
          font: 300px Georgia, serif;
          color: rgba(255,255,255,.06);
        }

        /* 푸터 */

        .site-footer {
          padding: 65px 5% 35px;
          background: #070e18;
        }

        .footer-top,
        .footer-bottom {
          width: min(100%, 1250px);
          margin: 0 auto;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .footer-eyebrow {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 2px;
        }

        .footer-top h2 {
          font-size: 30px;
          font-weight: 400;
          margin: 15px 0;
        }

        .footer-top p {
          color: #aab4bf;
          font-size: 13px;
        }

        .footer-phone {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--gold-light);
          font: 25px Georgia, serif;
        }

        .footer-bottom {
          padding-top: 30px;
        }

        .footer-bottom > a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--gold);
          font-size: 13px;
        }

        .footer-bottom p {
          max-width: 800px;
          margin: 25px 0;
          color: #8995a2;
          font-size: 11px;
          line-height: 2;
        }

        .footer-bottom small {
          color: #687583;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .mobile-bottom-bar {
          display: none;
        }

        @media (max-width: 1150px) {
          .desktop-nav {
            display: none;
          }

          .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        @media (max-width: 800px) {
          .business-layout,
          .location-layout,
          .sales-layout,
          .modelhouse-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .business-image,
          .location-image,
          .modelhouse-image {
            min-height: 390px;
          }

          .premium-cards {
            grid-template-columns: 1fr;
          }

          .premium-card-visual {
            height: 230px;
          }
        }

        @media (max-width: 600px) {
          html {
            scroll-padding-top: 75px;
          }

          .site-header {
            height: 75px;
            padding: 0 18px;
          }

          .logo-mark {
            width: 36px;
            height: 36px;
          }

          .logo-text strong {
            font-size: 14px;
          }

          .logo-text small {
            font-size: 7px;
          }

          .header-phone {
            font-size: 0;
          }

          .header-phone svg {
            width: 20px;
            height: 20px;
          }

          .hero-content {
            padding: 125px 22px 110px;
          }

          .hero-kicker {
            font-size: 8px;
            gap: 8px;
            letter-spacing: 1px;
          }

          .kicker-line {
            width: 20px;
          }

          .hero-number {
            font-size: 115px;
            letter-spacing: -7px;
          }

          .hero h1 {
            font-size: 44px;
            letter-spacing: -2px;
          }

          .hero-content > p {
            font-size: 13px;
          }

          .mobile-only {
            display: initial;
          }

          .hero-buttons {
            flex-direction: column;
            max-width: 260px;
          }

          .hero-bottom {
            left: 22px;
            right: 22px;
          }

          .hero-bottom span:last-child {
            display: none;
          }

          .content-section {
            padding: 80px 20px;
          }

          .section-heading {
            margin-bottom: 40px;
          }

          .section-heading h2 {
            font-size: 34px;
          }

          .section-heading p {
            font-size: 12px;
          }

          .business-info h3,
          .location-copy h3,
          .sales-message h3,
          .modelhouse-info h3 {
            font-size: 29px;
          }

          .business-image,
          .location-image,
          .modelhouse-image {
            min-height: 320px;
          }

          .overview-table > div {
            grid-template-columns: 85px 1fr;
            font-size: 11px;
          }

          .large-outline-number {
            font-size: 90px;
          }

          .complex-grid {
            grid-template-columns: 1fr;
          }

          .complex-feature-image {
            min-height: 300px;
          }

          .sales-layout {
            gap: 45px;
          }

          .next-complex {
            min-height: 280px;
            padding: 55px 25px;
          }

          .next-complex-number {
            font-size: 180px;
            bottom: -30px;
          }

          .site-footer {
            padding: 50px 22px 105px;
          }

          .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
          }

          .footer-phone {
            font-size: 22px;
          }

          .mobile-bottom-bar {
            display: block;
            position: fixed;
            z-index: 120;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px 14px max(10px, env(safe-area-inset-bottom));
            background: rgba(7,14,24,.97);
            border-top: 1px solid rgba(203,177,138,.35);
          }

          .mobile-bottom-bar a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            min-height: 49px;
            background: var(--gold);
            color: #0b1624;
            font-size: 14px;
            font-weight: 600;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
