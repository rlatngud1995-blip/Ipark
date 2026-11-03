
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const SITE = "https://cheonaniparkcity34.com";
const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "천안 아이파크 시티 3·4단지 분양정보",
      url: SITE,
      inLanguage: "ko-KR",
      description:
        "미소부동산이 운영하는 천안 아이파크 시티 3단지·4단지 부동산 정보 및 상담 안내 홈페이지",
      publisher: {
        "@id": `${SITE}/#organization`,
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE}/#organization`,
      name: "미소부동산",
      telephone: PHONE,
      url: SITE,
      description:
        "천안 아이파크 시티 3단지·4단지 부동산 정보 및 상담 안내",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: "천안아이파크시티 3·4단지 분양정보",
      description:
        "천안아이파크시티3단지·4단지, 성성아이파크시티3단지·4단지 관련 사업개요와 분양정보 및 모델하우스·견본주택 상담 안내",
      isPartOf: {
        "@id": `${SITE}/#website`,
      },
      about: [
        {
          "@type": "Thing",
          name: "천안 아이파크 시티 3단지",
          url: `${SITE}/complex/3`,
        },
        {
          "@type": "Thing",
          name: "천안 아이파크 시티 4단지",
          url: `${SITE}/complex/4`,
        },
      ],
      inLanguage: "ko-KR",
    },
  ],
};

export default function Home() {
  return (
    <main className="ipark-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* 메인 조감도 */}
      <section className="hero">
        <div className="hero-photo" />
        <div className="hero-overlay" />

        <header className="header">
          <Link href="/" className="brand">
            <strong>IPARK CITY</strong>
            <span>CHEONAN 03 · 04</span>
          </Link>

          <a href={TEL} className="header-contact">
            <Phone size={17} />
            <span>{PHONE}</span>
          </a>
        </header>

        <div className="hero-content">
          <span className="hero-eyebrow">
            CHEONAN IPARK CITY
          </span>

          <h1>
            천안 아이파크 시티
            <br />
            <span>3 · 4단지</span>
          </h1>

          <p>
            천안아이파크시티 3단지·4단지
            <br />
            분양정보 및 상담 안내
          </p>

          <div className="complex-actions">
            <Link
              href="/complex/3"
              className="complex-button"
              aria-label="천안 아이파크 시티 3단지 상세페이지"
            >
              <div>
                <small>CHEONAN IPARK CITY 03</small>
                <strong>3단지 바로가기</strong>
              </div>
              <ArrowUpRight size={22} />
            </Link>

            <Link
              href="/complex/4"
              className="complex-button"
              aria-label="천안 아이파크 시티 4단지 상세페이지"
            >
              <div>
                <small>CHEONAN IPARK CITY 04</small>
                <strong>4단지 바로가기</strong>
              </div>
              <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>

        <div className="hero-bottom">
          <span>MI SO REAL ESTATE</span>
          <span>CHEONAN IPARK CITY</span>
        </div>
      </section>

      {/* 단지 선택 */}
      <section className="selection">
        <div className="selection-heading">
          <span>EXPLORE THE COMPLEX</span>
          <h2>천안 아이파크 시티 3·4단지</h2>
          <p>
            단지별 사업개요, 입지환경, 평면도 및
            분양정보를 확인하세요.
          </p>
        </div>

        <div className="selection-grid">
          <Link
            href="/complex/3"
            className="selection-card"
          >
            <span className="selection-number">
              03
            </span>

            <div className="selection-card-content">
              <span>CHEONAN IPARK CITY</span>
              <h3>3단지</h3>
              <p className="selection-description">
                천안아이파크시티3단지
                <br />
                성성아이파크시티3단지
                <br />
                모델하우스·견본주택·분양정보 안내
              </p>
              <div className="selection-link">
                자세히 보기
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>

          <Link
            href="/complex/4"
            className="selection-card"
          >
            <span className="selection-number">
              04
            </span>

            <div className="selection-card-content">
              <span>CHEONAN IPARK CITY</span>
              <h3>4단지</h3>
              <p className="selection-description">
                천안아이파크시티4단지
                <br />
                성성아이파크시티4단지
                <br />
                모델하우스·견본주택·분양정보 안내
              </p>
              <div className="selection-link">
                자세히 보기
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
        </div>

        <div className="information-note">
          <h2>천안 아이파크 시티 분양정보 안내</h2>
          <p>
            천안 아이파크 시티 3단지는
            충청남도 천안시 서북구 부대동 394-2
            일원에 위치하며 896세대로 안내됩니다.
            4단지는 부대동 384-20 일원에
            위치하며 818세대로 안내됩니다.
          </p>
          <p>
            미소부동산은 천안 아이파크 시티
            3·4단지의 단지별 정보와
            모델하우스·견본주택 관련 상담을
            안내합니다. 방문 가능 여부와
            구체적인 분양 조건은 최신 공식 자료를
            확인해 주세요.
          </p>
        </div>
      </section>

      {/* 하단 */}
      <footer className="footer">
        <div className="footer-top">
          <strong>미소부동산</strong>
          <a href={TEL}>
            상담문의 {PHONE}
          </a>
        </div>

        <p>
          본 홈페이지는 미소부동산이 운영하는
          부동산 정보 및 상담 안내 사이트이며,
          시행사·시공사·공식 분양사무소의
          공식 홈페이지가 아닙니다.
          사업 및 분양 정보는 공식 자료를
          우선하여 확인해 주세요.
        </p>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          background: #111;
          color: #fff;
          font-family: "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .ipark-home {
          min-height: 100vh;
        }

        .ipark-home .hero {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100svh;
          overflow: hidden;
          background: #242a30;
        }

        .ipark-home .hero-photo {
          position: absolute;
          inset: 0;
          background-image: url("/IMG_2125.jpeg");
          background-position: center;
          background-size: cover;
          animation: photoReveal 2s ease-out both;
        }

        @keyframes photoReveal {
          from {
            opacity: .65;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .ipark-home .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,.5) 0%,
            rgba(0,0,0,.08) 30%,
            rgba(0,0,0,.2) 52%,
            rgba(0,0,0,.85) 100%
          );
        }

        .ipark-home .header {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 28px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,.25);
        }

        .ipark-home .brand {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ipark-home .brand strong {
          font-family: Georgia, serif;
          font-size: 25px;
          letter-spacing: 2px;
        }

        .ipark-home .brand span {
          font-size: 10px;
          letter-spacing: 3px;
        }

        .ipark-home .header-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
        }

        .ipark-home .hero-content {
          position: relative;
          z-index: 2;
          width: min(1200px, 90%);
          margin: auto auto 9vh;
          animation: contentReveal 1.3s .3s both;
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ipark-home .hero-eyebrow {
          display: block;
          margin-bottom: 20px;
          font-size: 12px;
          letter-spacing: 4px;
        }

        .ipark-home .hero-content h1 {
          margin: 0;
          font-size: clamp(42px, 6vw, 88px);
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -3px;
          text-shadow: 0 3px 20px rgba(0,0,0,.3);
        }

        .ipark-home .hero-content h1 span {
          font-weight: 300;
        }

        .ipark-home .hero-content p {
          margin: 25px 0 35px;
          font-size: 17px;
          line-height: 1.9;
          color: rgba(255,255,255,.93);
        }

        .ipark-home .complex-actions {
          display: flex;
          gap: 12px;
          max-width: 680px;
        }

        .ipark-home .complex-button {
          flex: 1;
          min-width: 0;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: rgba(255,255,255,.96);
          color: #171717;
          transition: transform .3s ease, background .3s ease;
        }

        .ipark-home .complex-button:hover {
          background: #fff;
          transform: translateY(-4px);
        }

        .ipark-home .complex-button div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ipark-home .complex-button small {
          color: #777;
          font-size: 9px;
          letter-spacing: 1.3px;
        }

        .ipark-home .complex-button strong {
          font-size: 17px;
          font-weight: 600;
        }

        .ipark-home .hero-bottom {
          position: relative;
          z-index: 2;
          padding: 22px 5%;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid rgba(255,255,255,.25);
          font-size: 10px;
          letter-spacing: 2px;
        }

        .ipark-home .selection {
          padding: 100px 5%;
          background: #f7f7f5;
          color: #191919;
        }

        .ipark-home .selection-heading {
          margin-bottom: 45px;
          text-align: center;
        }

        .ipark-home .selection-heading > span {
          color: #777;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .ipark-home .selection-heading h2 {
          margin: 20px 0 12px;
          font-size: clamp(28px, 4vw, 45px);
          font-weight: 500;
          letter-spacing: -1.5px;
        }

        .ipark-home .selection-heading p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        .ipark-home .selection-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          max-width: 1250px;
          margin: 0 auto;
        }

        .ipark-home .selection-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 360px;
          padding: 35px;
          overflow: hidden;
          background: #1b2835;
          color: white;
          transition: transform .3s ease, background .3s ease;
        }

        .ipark-home .selection-card:nth-child(2) {
          background: #343c45;
        }

        .ipark-home .selection-card:hover {
          transform: translateY(-5px);
          background: #253c50;
        }

        .ipark-home .selection-number {
          align-self: flex-end;
          color: rgba(255,255,255,.15);
          font-family: Georgia, serif;
          font-size: clamp(100px, 13vw, 180px);
          line-height: 1;
          letter-spacing: -7px;
        }

        .ipark-home .selection-card-content {
          position: relative;
          z-index: 1;
        }

        .ipark-home .selection-card-content > span {
          font-size: 10px;
          letter-spacing: 2px;
          color: #c4cbd2;
        }

        .ipark-home .selection-card-content h3 {
          margin: 13px 0 12px;
          font-size: 42px;
          font-weight: 400;
        }

        .ipark-home .selection-description {
          margin: 0 0 24px;
          color: #d3dbe2;
          font-size: 12px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .ipark-home .selection-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
        }

        .ipark-home .information-note {
          max-width: 950px;
          margin: 65px auto 0;
          padding: 35px 0 0;
          border-top: 1px solid #d6d8da;
        }

        .ipark-home .information-note h2 {
          margin: 0 0 20px;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -.5px;
        }

        .ipark-home .information-note p {
          color: #60666a;
          font-size: 14px;
          line-height: 2;
          word-break: keep-all;
        }

        .ipark-home .footer {
          padding: 35px 5%;
          background: #10151b;
        }

        .ipark-home .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          font-size: 14px;
        }

        .ipark-home .footer-top a {
          font-weight: 600;
        }

        .ipark-home .footer p {
          max-width: 1100px;
          margin: 20px 0 0;
          color: #9ca5ae;
          font-size: 11px;
          line-height: 1.9;
        }

        @media (max-width: 700px) {
          .ipark-home .hero {
            min-height: 100svh;
          }

          .ipark-home .hero-photo {
            background-position: center;
          }

          .ipark-home .header {
            padding: 22px 20px;
          }

          .ipark-home .brand strong {
            font-size: 19px;
          }

          .ipark-home .brand span {
            font-size: 8px;
          }

          .ipark-home .header-contact {
            font-size: 12px;
          }

          .ipark-home .header-contact span {
            display: none;
          }

          .ipark-home .hero-content {
            width: calc(100% - 36px);
            margin-bottom: 8vh;
          }

          .ipark-home .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 2.5px;
          }

          .ipark-home .hero-content h1 {
            font-size: clamp(35px, 9vw, 52px);
            letter-spacing: -2px;
          }

          .ipark-home .hero-content p {
            margin: 20px 0 30px;
            font-size: 14px;
          }

          .ipark-home .complex-actions {
            gap: 9px;
          }

          .ipark-home .complex-button {
            padding: 17px 13px;
          }

          .ipark-home .complex-button small {
            font-size: 8px;
            letter-spacing: 0;
          }

          .ipark-home .complex-button strong {
            font-size: 13px;
          }

          .ipark-home .complex-button svg {
            width: 17px;
            flex-shrink: 0;
          }

          .ipark-home .hero-bottom {
            padding: 17px 20px;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .ipark-home .selection {
            padding: 75px 16px;
          }

          .ipark-home .selection-heading h2 {
            font-size: 28px;
          }

          .ipark-home .selection-heading p {
            font-size: 12px;
          }

          .ipark-home .selection-grid {
            gap: 10px;
          }

          .ipark-home .selection-card {
            min-height: 310px;
            padding: 18px;
          }

          .ipark-home .selection-number {
            font-size: 90px;
          }

          .ipark-home .selection-card-content > span {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .ipark-home .selection-card-content h3 {
            font-size: 30px;
          }

          .ipark-home .selection-description {
            font-size: 10px;
            line-height: 1.8;
          }

          .ipark-home .selection-link {
            font-size: 12px;
          }

          .ipark-home .information-note {
            margin-top: 45px;
          }

          .ipark-home .information-note h2 {
            font-size: 21px;
          }

          .ipark-home .information-note p {
            font-size: 12px;
          }

          .ipark-home .footer {
            padding: 28px 20px;
          }

          .ipark-home .footer-top {
            font-size: 12px;
          }

          .ipark-home .footer p {
            font-size: 10px;
          }
        }

        @media (max-width: 370px) {
          .ipark-home .complex-button {
            padding: 15px 10px;
          }

          .ipark-home .complex-button strong {
            font-size: 12px;
          }

          .ipark-home .selection-card {
            padding: 13px;
          }

          .ipark-home .selection-number {
            font-size: 75px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
