
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

export default function Home() {
  return (
    <main className="ipark-home">
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
            새로운 일상의 시작,
            <br />
            당신의 선택을 기다립니다.
          </p>

          <div className="complex-actions">
            <Link
              href="/complex/3"
              className="complex-button"
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
          <h2>원하시는 단지를 선택하세요.</h2>
          <p>
            천안 아이파크 시티 3단지 · 4단지
            상세 안내
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
              <div className="selection-link">
                자세히 보기
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
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

        /* 메인 조감도 */

        .hero {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100svh;
          overflow: hidden;
          background: #242a30;
        }

        .hero-photo {
          position: absolute;
          inset: 0;
          background-image:
            url("/IMG_2125.jpeg");
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

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.5) 0%,
              rgba(0,0,0,.08) 30%,
              rgba(0,0,0,.2) 52%,
              rgba(0,0,0,.85) 100%
            );
        }

        .header {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 28px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom:
            1px solid rgba(255,255,255,.25);
        }

        .brand {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .brand strong {
          font-family: Georgia, serif;
          font-size: 25px;
          letter-spacing: 2px;
        }

        .brand span {
          font-size: 10px;
          letter-spacing: 3px;
        }

        .header-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
        }

        .hero-content {
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

        .hero-eyebrow {
          display: block;
          margin-bottom: 20px;
          font-size: 12px;
          letter-spacing: 4px;
        }

        .hero-content h1 {
          margin: 0;
          font-size: clamp(42px, 6vw, 88px);
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -3px;
          text-shadow:
            0 3px 20px rgba(0,0,0,.3);
        }

        .hero-content h1 span {
          font-weight: 300;
        }

        .hero-content p {
          margin: 25px 0 35px;
          font-size: 17px;
          line-height: 1.9;
          color: rgba(255,255,255,.93);
        }

        .complex-actions {
          display: flex;
          gap: 12px;
          max-width: 680px;
        }

        .complex-button {
          flex: 1;
          min-width: 0;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: rgba(255,255,255,.96);
          color: #171717;
          transition:
            transform .3s ease,
            background .3s ease;
        }

        .complex-button:hover {
          background: #fff;
          transform: translateY(-4px);
        }

        .complex-button div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .complex-button small {
          color: #777;
          font-size: 9px;
          letter-spacing: 1.3px;
        }

        .complex-button strong {
          font-size: 17px;
          font-weight: 600;
        }

        .hero-bottom {
          position: relative;
          z-index: 2;
          padding: 22px 5%;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          border-top:
            1px solid rgba(255,255,255,.25);
          font-size: 10px;
          letter-spacing: 2px;
        }

        /* 단지 선택 */

        .selection {
          padding: 100px 5%;
          background: #f7f7f5;
          color: #191919;
        }

        .selection-heading {
          margin-bottom: 45px;
          text-align: center;
        }

        .selection-heading > span {
          color: #777;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .selection-heading h2 {
          margin: 20px 0 12px;
          font-size: clamp(28px, 4vw, 45px);
          font-weight: 500;
          letter-spacing: -1.5px;
        }

        .selection-heading p {
          color: #777;
          font-size: 14px;
        }

        .selection-grid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 15px;
          max-width: 1250px;
          margin: 0 auto;
        }

        .selection-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 360px;
          padding: 35px;
          overflow: hidden;
          background: #1b2835;
          color: white;
          transition:
            transform .3s ease,
            background .3s ease;
        }

        .selection-card:nth-child(2) {
          background: #343c45;
        }

        .selection-card:hover {
          transform: translateY(-5px);
          background: #253c50;
        }

        .selection-number {
          align-self: flex-end;
          color: rgba(255,255,255,.15);
          font-family: Georgia, serif;
          font-size: clamp(100px, 13vw, 180px);
          line-height: 1;
          letter-spacing: -7px;
        }

        .selection-card-content {
          position: relative;
          z-index: 1;
        }

        .selection-card-content > span {
          font-size: 10px;
          letter-spacing: 2px;
          color: #c4cbd2;
        }

        .selection-card-content h3 {
          margin: 13px 0 22px;
          font-size: 42px;
          font-weight: 400;
        }

        .selection-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
        }

        /* 하단 */

        .footer {
          padding: 35px 5%;
          background: #10151b;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          font-size: 14px;
        }

        .footer-top a {
          font-weight: 600;
        }

        .footer p {
          max-width: 1100px;
          margin: 20px 0 0;
          color: #9ca5ae;
          font-size: 11px;
          line-height: 1.9;
        }

        /* 모바일 */

        @media (max-width: 700px) {
          .hero {
            min-height: 100svh;
          }

          .hero-photo {
            background-position: center;
          }

          .header {
            padding: 22px 20px;
          }

          .brand strong {
            font-size: 19px;
          }

          .brand span {
            font-size: 8px;
          }

          .header-contact {
            font-size: 12px;
          }

          .header-contact span {
            display: none;
          }

          .hero-content {
            width: calc(100% - 36px);
            margin-bottom: 8vh;
          }

          .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 2.5px;
          }

          .hero-content h1 {
            font-size: clamp(35px, 9vw, 52px);
            letter-spacing: -2px;
          }

          .hero-content p {
            margin: 20px 0 30px;
            font-size: 14px;
          }

          .complex-actions {
            gap: 9px;
          }

          .complex-button {
            padding: 17px 13px;
          }

          .complex-button small {
            font-size: 8px;
            letter-spacing: 0;
          }

          .complex-button strong {
            font-size: 13px;
          }

          .complex-button svg {
            width: 17px;
            flex-shrink: 0;
          }

          .hero-bottom {
            padding: 17px 20px;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .selection {
            padding: 75px 16px;
          }

          .selection-heading h2 {
            font-size: 28px;
          }

          .selection-heading p {
            font-size: 12px;
          }

          .selection-grid {
            gap: 10px;
          }

          .selection-card {
            min-height: 280px;
            padding: 18px;
          }

          .selection-number {
            font-size: 90px;
          }

          .selection-card-content > span {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .selection-card-content h3 {
            font-size: 30px;
          }

          .selection-link {
            font-size: 12px;
          }

          .footer {
            padding: 28px 20px;
          }

          .footer-top {
            font-size: 12px;
          }

          .footer p {
            font-size: 10px;
          }
        }

        @media (max-width: 370px) {
          .complex-button {
            padding: 15px 10px;
          }

          .complex-button strong {
            font-size: 12px;
          }

          .selection-card {
            padding: 13px;
          }

          .selection-number {
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
