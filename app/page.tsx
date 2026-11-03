
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Phone,
  ChevronRight,
} from "lucide-react";

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

const complexes = [
  {
    number: "03",
    title: "3단지",
    english: "THE THIRD COLLECTION",
    subtitle: "천안 아이파크 시티 3단지",
    href: "/complex/3",
    image: "/complex3.jpg",
    className: "complex-three",
  },
  {
    number: "04",
    title: "4단지",
    english: "THE FOURTH COLLECTION",
    subtitle: "천안 아이파크 시티 4단지",
    href: "/complex/4",
    image: "/complex4.jpg",
    className: "complex-four",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="landing">
      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-mark">I</span>
          <span className="brand-copy">
            <strong>IPARK CITY</strong>
            <small>CHEONAN · 3 &amp; 4</small>
          </span>
        </Link>

        <nav className="desktop-nav">
          <a href="#collection">단지 선택</a>
          <a href="#introduction">사업 안내</a>
          <a href="#contact">분양 상담</a>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={TEL}>
            <Phone size={15} />
            <span>{PHONE}</span>
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            type="button"
            className="close-menu"
            aria-label="메뉴 닫기"
            onClick={() => setMenuOpen(false)}
          >
            <X size={26} />
          </button>
          <span className="menu-caption">CHEONAN IPARK CITY</span>
          <a href="#collection" onClick={() => setMenuOpen(false)}>
            단지 선택
          </a>
          <a href="#introduction" onClick={() => setMenuOpen(false)}>
            사업 안내
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            분양 상담
          </a>
          <a href={TEL} className="menu-call">
            <Phone size={17} /> {PHONE}
          </a>
        </div>
      )}

      <section className="intro-hero">
        <div className="intro-decoration intro-decoration-one" />
        <div className="intro-decoration intro-decoration-two" />

        <div className="intro-content">
          <div className="intro-eyebrow">
            <span className="eyebrow-line" />
            <span>AN EXCLUSIVE COLLECTION</span>
            <span className="eyebrow-line" />
          </div>

          <p className="intro-small">천안의 새로운 주거 이야기</p>

          <h1>
            CHEONAN
            <br />
            <em>IPARK CITY</em>
          </h1>

          <div className="hero-number">
            <span>03</span>
            <i />
            <span>04</span>
          </div>

          <p className="intro-description">
            두 개의 단지, 하나의 특별한 선택.
            <br />
            천안 아이파크 시티 3·4단지를 만나보세요.
          </p>

          <a href="#collection" className="explore-button">
            <span>EXPLORE THE COLLECTION</span>
            <ArrowDown size={17} />
          </a>
        </div>

        <div className="hero-bottom">
          <span>MI SO REAL ESTATE</span>
          <span>SCROLL TO DISCOVER</span>
          <span>CHEONAN, KOREA</span>
        </div>
      </section>

      <section id="collection" className="collection">
        <div className="collection-heading">
          <p className="gold-label">THE COLLECTION</p>
          <h2>
            당신의 선택,
            <br />
            <em>새로운 라이프스타일</em>
          </h2>
          <p>
            관심 있는 단지를 선택하시면
            <br />
            해당 단지의 상세 안내 페이지로 이동합니다.
          </p>
        </div>

        <div className="complex-grid">
          {complexes.map((complex) => (
            <Link
              href={complex.href}
              key={complex.number}
              className={`complex-card ${complex.className}`}
            >
              <div
                className="complex-photo"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(9,20,33,.12),rgba(9,20,33,.78)),url('${complex.image}')`,
                }}
              />
              <div className="complex-pattern" />

              <div className="complex-top">
                <span>CHEONAN IPARK CITY</span>
                <ArrowUpRight size={23} />
              </div>

              <div className="complex-content">
                <p className="complex-english">{complex.english}</p>
                <span className="complex-number">
                  {complex.number}
                </span>
                <h3>{complex.title}</h3>
                <p className="complex-subtitle">
                  {complex.subtitle}
                </p>

                <div className="complex-divider" />

                <div className="complex-link">
                  <span>단지 자세히 보기</span>
                  <span className="complex-arrow">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="image-notice">
          ※ 단지 이미지 파일은 추후 실제 사용 허가를 받은
          조감도로 교체할 예정입니다.
        </p>
      </section>

      <section id="introduction" className="statement">
        <div className="statement-inner">
          <span className="gold-label">A NEW PERSPECTIVE</span>
          <div className="statement-line" />
          <h2>
            공간을 넘어,
            <br />
            <em>삶의 가치를 생각하다.</em>
          </h2>
          <p>
            천안 아이파크 시티 3단지와 4단지에 대한
            <br className="desktop-only" />
            정보를 한곳에서 편리하게 살펴보세요.
          </p>
          <a href="#collection">
            단지 선택하기 <ChevronRight size={17} />
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div>
            <p className="gold-label">PRIVATE CONSULTATION</p>
            <h2>
              당신의 새로운 시작,
              <br />
              <em>미소부동산이 함께합니다.</em>
            </h2>
            <p className="contact-description">
              천안 아이파크 시티 3·4단지 관련 문의는
              <br />
              미소부동산으로 연락해 주세요.
            </p>
          </div>

          <a href={TEL} className="contact-button">
            <div>
              <span>분양 관련 상담 문의</span>
              <strong>{PHONE}</strong>
            </div>
            <ArrowUpRight size={26} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <strong className="footer-brand">
              CHEONAN IPARK CITY
            </strong>
            <p>천안 아이파크 시티 3·4단지 안내</p>
          </div>

          <div className="footer-contact">
            <strong>미소부동산</strong>
            <a href={TEL}>{PHONE}</a>
          </div>
        </div>

        <div className="footer-notice">
          본 홈페이지는 미소부동산에서 운영하는
          부동산 정보 및 상담 안내 사이트이며,
          시행사·시공사·공식 분양사무소가 운영하는
          공식 홈페이지가 아닙니다.
          <br />
          단지별 공급 정보, 일정, 가격 등은
          반드시 공식 자료를 통해 확인하시기 바랍니다.
        </div>

        <div className="footer-bottom">
          <span>© 2026 MISO REAL ESTATE.</span>
          <span>INFORMATION &amp; CONSULTATION</span>
        </div>
      </footer>

      <a href={TEL} className="floating-call">
        <Phone size={19} />
        <span>상담 문의</span>
      </a>

      <style jsx global>{`
        :root {
          --navy: #101b29;
          --navy-deep: #09121e;
          --gold: #c9ac7b;
          --ivory: #f7f5f0;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--navy-deep);
          color: #fff;
          font-family:
            "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .landing {
          overflow: hidden;
        }

        .site-header {
          height: 88px;
          position: absolute;
          z-index: 30;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          border-bottom: 1px solid rgba(255,255,255,.13);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 40px;
          height: 40px;
          border: 1px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 27px;
          font-style: italic;
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .brand-copy strong {
          font-family: Georgia, serif;
          font-size: 17px;
          letter-spacing: 2.5px;
        }

        .brand-copy small {
          color: var(--gold);
          font-size: 9px;
          letter-spacing: 2.6px;
        }

        .desktop-nav {
          display: flex;
          gap: 40px;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .desktop-nav a {
          transition: color .3s;
        }

        .desktop-nav a:hover {
          color: var(--gold);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .header-phone {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--gold);
          font-size: 14px;
          font-weight: 600;
        }

        .menu-button {
          display: none;
          border: 0;
          background: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          background: #0b1623;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px;
          gap: 27px;
        }

        .mobile-menu > a {
          font-size: 25px;
          font-weight: 300;
        }

        .mobile-menu .menu-call {
          font-size: 17px;
          color: var(--gold);
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .menu-caption {
          font-size: 11px;
          color: var(--gold);
          letter-spacing: 3px;
          margin-bottom: 12px;
        }

        .close-menu {
          position: absolute;
          top: 28px;
          right: 28px;
          border: none;
          background: none;
          color: white;
          cursor: pointer;
        }

        .intro-hero {
          position: relative;
          min-height: 100svh;
          background:
            radial-gradient(
              ellipse at 50% 40%,
              #26364b 0%,
              #101b29 48%,
              #070e18 100%
            );
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 130px 20px 100px;
        }

        .intro-hero::before {
          content: "";
          position: absolute;
          inset: 22px;
          border: 1px solid rgba(201,172,123,.12);
          pointer-events: none;
        }

        .intro-decoration {
          position: absolute;
          width: 480px;
          height: 480px;
          border: 1px solid rgba(201,172,123,.09);
          border-radius: 50%;
          pointer-events: none;
        }

        .intro-decoration-one {
          width: 650px;
          height: 650px;
        }

        .intro-decoration-two {
          width: 900px;
          height: 900px;
          opacity: .55;
        }

        .intro-content {
          position: relative;
          z-index: 2;
          animation: fadeRise 1.2s ease both;
        }

        @keyframes fadeRise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .intro-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 17px;
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 4px;
          margin-bottom: 45px;
        }

        .eyebrow-line {
          width: 35px;
          height: 1px;
          background: var(--gold);
          opacity: .6;
        }

        .intro-small {
          font-size: 14px;
          letter-spacing: 5px;
          font-weight: 300;
          margin-bottom: 22px;
          color: #ddd8cd;
        }

        .intro-content h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(53px, 8.5vw, 126px);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: 1.05;
          margin: 0;
        }

        .intro-content h1 em {
          font-weight: 400;
          color: var(--gold);
          font-style: normal;
          letter-spacing: -.04em;
        }

        .hero-number {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          margin: 30px 0;
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 25px;
          letter-spacing: 3px;
        }

        .hero-number i {
          width: 75px;
          height: 1px;
          background: var(--gold);
          opacity: .6;
        }

        .intro-description {
          color: #c5cbd0;
          font-size: 15px;
          font-weight: 300;
          line-height: 2.2;
        }

        .explore-button {
          margin: 45px auto 0;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 25px;
          border: 1px solid rgba(201,172,123,.5);
          padding: 17px 24px;
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 2px;
          transition: .3s;
        }

        .explore-button:hover {
          background: var(--gold);
          color: #111;
        }

        .hero-bottom {
          position: absolute;
          bottom: 44px;
          left: 6%;
          right: 6%;
          display: flex;
          justify-content: space-between;
          color: #8b929b;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .collection {
          background: var(--ivory);
          color: var(--navy);
          padding: 115px 5% 100px;
        }

        .collection-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .gold-label {
          font-size: 11px;
          color: #aa8956;
          letter-spacing: 4px;
          font-weight: 600;
        }

        .collection-heading h2 {
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 400;
          line-height: 1.5;
          margin: 24px 0;
          letter-spacing: -2px;
        }

        .collection-heading h2 em {
          font-family: Georgia, "Noto Sans KR", serif;
          font-style: normal;
          color: #a88c64;
        }

        .collection-heading > p:last-child {
          font-size: 14px;
          line-height: 2;
          color: #737b83;
        }

        .complex-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .complex-card {
          position: relative;
          min-height: 680px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 35px;
          overflow: hidden;
          background: #24354a;
          color: white;
          isolation: isolate;
        }

        .complex-four {
          background: #34414a;
        }

        .complex-photo {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-size: cover;
          background-position: center;
          transition: transform .8s ease;
        }

        .complex-card:hover .complex-photo {
          transform: scale(1.07);
        }

        .complex-pattern {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(
              135deg,
              rgba(201,172,123,.1),
              transparent 40%
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent 95px,
              rgba(255,255,255,.035) 96px
            );
          pointer-events: none;
        }

        .complex-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #e8d9bd;
          font-family: Georgia, serif;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .complex-content {
          position: relative;
          z-index: 2;
        }

        .complex-english {
          color: #dfc69d;
          font-size: 11px;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }

        .complex-number {
          display: block;
          font-family: Georgia, serif;
          font-size: clamp(100px, 12vw, 180px);
          line-height: 1;
          color: rgba(255,255,255,.17);
          letter-spacing: -10px;
        }

        .complex-content h3 {
          font-size: 44px;
          font-weight: 400;
          margin: -15px 0 10px;
          letter-spacing: -2px;
        }

        .complex-subtitle {
          color: #d6d8db;
          font-size: 14px;
          font-weight: 300;
        }

        .complex-divider {
          height: 1px;
          background: rgba(255,255,255,.3);
          margin: 35px 0 22px;
        }

        .complex-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }

        .complex-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255,255,255,.5);
          border-radius: 50%;
          transition: .3s;
        }

        .complex-card:hover .complex-arrow {
          background: var(--gold);
          color: var(--navy);
          border-color: var(--gold);
        }

        .image-notice {
          max-width: 1440px;
          margin: 20px auto 0;
          color: #7a7e84;
          font-size: 11px;
        }

        .statement {
          background: #111d2b;
          text-align: center;
          padding: 140px 20px;
        }

        .statement-inner {
          max-width: 850px;
          margin: auto;
        }

        .statement-line {
          height: 65px;
          width: 1px;
          background: var(--gold);
          margin: 30px auto;
        }

        .statement h2 {
          font-size: clamp(33px, 4.5vw, 59px);
          line-height: 1.6;
          font-weight: 300;
          letter-spacing: -2px;
        }

        .statement h2 em {
          font-style: normal;
          color: var(--gold);
        }

        .statement-inner > p {
          color: #aab3bd;
          line-height: 2.1;
          font-size: 14px;
          margin: 28px 0;
        }

        .statement-inner > a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--gold);
          font-size: 13px;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 12px;
          margin-top: 15px;
        }

        .contact-section {
          background: #edeae3;
          color: var(--navy);
          padding: 105px 6%;
        }

        .contact-inner {
          max-width: 1300px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .contact-inner h2 {
          font-size: clamp(29px, 3.7vw, 48px);
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -1.5px;
        }

        .contact-inner h2 em {
          color: #a88c64;
          font-style: normal;
        }

        .contact-description {
          color: #777e85;
          font-size: 14px;
          line-height: 2;
        }

        .contact-button {
          min-width: 300px;
          background: #142338;
          color: white;
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .contact-button div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-button span {
          color: #cbb58f;
          font-size: 12px;
        }

        .contact-button strong {
          font-size: 27px;
          font-family: Georgia, sans-serif;
          letter-spacing: 1px;
        }

        .footer {
          background: #08111d;
          padding: 65px 6% 30px;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          padding-bottom: 35px;
          border-bottom: 1px solid rgba(255,255,255,.13);
        }

        .footer-brand {
          font-family: Georgia, serif;
          letter-spacing: 2px;
          font-size: 20px;
          font-weight: 400;
        }

        .footer-main p {
          font-size: 12px;
          color: #9ca6b0;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-contact strong {
          font-size: 13px;
          color: var(--gold);
        }

        .footer-contact a {
          font-size: 20px;
        }

        .footer-notice {
          padding: 25px 0;
          color: #a0a7b0;
          font-size: 12px;
          line-height: 2;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          color: #7d8791;
          font-size: 10px;
          letter-spacing: 1px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,.1);
        }

        .floating-call {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 40;
          background: var(--gold);
          color: #101b29;
          padding: 16px 23px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 10px 35px rgba(0,0,0,.25);
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .site-header {
            height: 75px;
          }

          .intro-content h1 {
            font-size: clamp(46px, 10vw, 85px);
          }

          .complex-card {
            min-height: 570px;
            padding: 25px;
          }

          .contact-inner {
            flex-direction: column;
            align-items: stretch;
          }
        }

        @media (max-width: 600px) {
          .site-header {
            padding: 0 20px;
          }

          .brand-mark {
            width: 35px;
            height: 35px;
            font-size: 24px;
          }

          .brand-copy strong {
            font-size: 13px;
            letter-spacing: 1.6px;
          }

          .brand-copy small {
            font-size: 8px;
            letter-spacing: 1.4px;
          }

          .header-phone span {
            display: none;
          }

          .intro-hero {
            min-height: 100svh;
            padding: 115px 18px 90px;
          }

          .intro-hero::before {
            inset: 12px;
          }

          .intro-decoration-one {
            width: 420px;
            height: 420px;
          }

          .intro-decoration-two {
            width: 610px;
            height: 610px;
          }

          .intro-eyebrow {
            font-size: 8px;
            letter-spacing: 2px;
            gap: 10px;
            margin-bottom: 35px;
          }

          .eyebrow-line {
            width: 20px;
          }

          .intro-small {
            font-size: 11px;
            letter-spacing: 3px;
          }

          .intro-content h1 {
            font-size: clamp(40px, 10vw, 58px);
          }

          .hero-number {
            margin: 25px 0;
            font-size: 22px;
          }

          .hero-number i {
            width: 50px;
          }

          .intro-description {
            font-size: 12px;
          }

          .explore-button {
            margin-top: 35px;
            font-size: 9px;
            padding: 15px 17px;
            gap: 15px;
          }

          .hero-bottom {
            bottom: 32px;
            left: 25px;
            right: 25px;
            font-size: 8px;
          }

          .hero-bottom span:nth-child(3) {
            display: none;
          }

          .collection {
            padding: 85px 17px 70px;
          }

          .collection-heading {
            margin-bottom: 35px;
          }

          .collection-heading h2 {
            font-size: 30px;
          }

          .collection-heading > p:last-child {
            font-size: 12px;
          }

          .complex-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .complex-card {
            min-height: 520px;
            padding: 25px;
          }

          .complex-number {
            font-size: 115px;
          }

          .complex-content h3 {
            font-size: 39px;
          }

          .complex-english {
            font-size: 10px;
          }

          .statement {
            padding: 100px 20px;
          }

          .statement h2 {
            font-size: 31px;
          }

          .statement-inner > p {
            font-size: 12px;
          }

          .desktop-only {
            display: none;
          }

          .contact-section {
            padding: 80px 20px;
          }

          .contact-inner h2 {
            font-size: 30px;
          }

          .contact-button {
            min-width: 0;
          }

          .footer {
            padding: 50px 20px 100px;
          }

          .footer-main {
            flex-direction: column;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 10px;
          }

          .floating-call {
            bottom: 15px;
            right: 15px;
            padding: 14px 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
