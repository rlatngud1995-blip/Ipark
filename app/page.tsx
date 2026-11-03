
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  SkipForward,
} from "lucide-react";

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

export default function Home() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setFinished(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setFinished(true);
    }, 4200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="luxury-home">
      {/* B안: 럭셔리 브랜드 오프닝 */}
      {!finished && (
        <div className="brand-intro">
          <div className="intro-texture" aria-hidden="true" />
          <div className="intro-glow" aria-hidden="true" />

          <div className="intro-frame" aria-hidden="true">
            <span className="frame-top" />
            <span className="frame-right" />
            <span className="frame-bottom" />
            <span className="frame-left" />
          </div>

          <div className="intro-center">
            <div className="intro-emblem">
              <span>I</span>
            </div>

            <div className="intro-small-line" />

            <span className="intro-eyebrow">
              A NEW STANDARD OF LIVING
            </span>

            <h1 className="intro-title">
              CHEONAN
              <br />
              <em>IPARK CITY</em>
            </h1>

            <div className="intro-divider">
              <span />
              <b>03 &amp; 04</b>
              <span />
            </div>

            <p className="intro-korean">
              천안 아이파크 시티 3 · 4단지
            </p>
          </div>

          <div className="intro-bottom">
            <span>THE EXCLUSIVE COLLECTION</span>
            <span>WELCOME TO YOUR NEW BEGINNING</span>
          </div>

          <button
            className="skip-intro"
            type="button"
            onClick={() => setFinished(true)}
          >
            SKIP INTRO
            <SkipForward size={15} />
          </button>
        </div>
      )}

      {/* 기존 메인 화면 유지 */}
      <div className={`main-screen ${finished ? "visible" : ""}`}>
        <header className="main-header">
          <Link href="/" className="brand">
            <span className="brand-emblem">I</span>

            <span className="brand-copy">
              <strong>IPARK CITY</strong>
              <small>CHEONAN 03 · 04</small>
            </span>
          </Link>

          <a href={TEL} className="header-call">
            <Phone size={17} />
            <span>{PHONE}</span>
          </a>
        </header>

        <section className="selection-section">
          <div className="selection-heading">
            <span className="selection-eyebrow">
              THE EXCLUSIVE COLLECTION
            </span>

            <h2>
              당신의 새로운 삶,
              <br />
              <em>그 시작을 선택하세요.</em>
            </h2>

            <p>천안 아이파크 시티 3 · 4단지</p>
          </div>

          <div className="premium-grid">
            {/* 3단지 */}
            <Link href="/complex/3" className="premium-panel panel-3">
              <div className="premium-image" />
              <div className="premium-overlay" />

              <div className="premium-panel-top">
                <span>CHEONAN IPARK CITY</span>
                <ArrowUpRight size={23} />
              </div>

              <div className="premium-panel-content">
                <span className="premium-eyebrow">
                  THE THIRD COLLECTION
                </span>

                <strong className="premium-number">
                  03
                </strong>

                <h3>3단지</h3>
                <p>천안 아이파크 시티 3단지</p>

                <div className="premium-enter">
                  <span>3단지 입장하기</span>
                  <span className="enter-circle">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </Link>

            {/* 4단지 */}
            <Link href="/complex/4" className="premium-panel panel-4">
              <div className="premium-image" />
              <div className="premium-overlay" />

              <div className="premium-panel-top">
                <span>CHEONAN IPARK CITY</span>
                <ArrowUpRight size={23} />
              </div>

              <div className="premium-panel-content">
                <span className="premium-eyebrow">
                  THE FOURTH COLLECTION
                </span>

                <strong className="premium-number">
                  04
                </strong>

                <h3>4단지</h3>
                <p>천안 아이파크 시티 4단지</p>

                <div className="premium-enter">
                  <span>4단지 입장하기</span>
                  <span className="enter-circle">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-info">
            <span>MI SO REAL ESTATE</span>
            <a href={TEL}>상담문의 {PHONE}</a>
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
      </div>

      <style jsx global>{`
        :root {
          --gold: #c7a878;
          --gold-light: #e8d2ac;
          --navy: #0b1624;
          --ivory: #f5f1e9;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          min-height: 100%;
          background: var(--navy);
        }

        body {
          font-family: "Noto Sans KR", sans-serif;
          color: #fff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .luxury-home {
          min-height: 100svh;
          background: var(--navy);
        }

        /* 브랜드 오프닝 */

        .brand-intro {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            linear-gradient(
              145deg,
              #eee7db 0%,
              #faf7f0 45%,
              #e8dfd0 100%
            );
          animation: introExit 4.2s ease both;
        }

        @keyframes introExit {
          0%, 80% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1.055);
          }
        }

        .intro-texture {
          position: absolute;
          inset: 0;
          opacity: .3;
          background:
            repeating-linear-gradient(
              115deg,
              transparent 0,
              transparent 80px,
              rgba(149,119,80,.04) 81px
            );
        }

        .intro-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at center,
              rgba(255,255,255,.8),
              transparent 68%
            );
        }

        .intro-frame {
          position: absolute;
          inset: 6%;
          pointer-events: none;
        }

        .intro-frame span {
          position: absolute;
          background: #b89a6e;
          opacity: .75;
        }

        .frame-top,
        .frame-bottom {
          width: 100%;
          height: 1px;
          transform: scaleX(0);
          animation: drawHorizontal 1.5s .15s ease forwards;
        }

        .frame-top {
          top: 0;
          left: 0;
          transform-origin: left;
        }

        .frame-bottom {
          bottom: 0;
          right: 0;
          transform-origin: right;
        }

        .frame-left,
        .frame-right {
          width: 1px;
          height: 100%;
          transform: scaleY(0);
          animation: drawVertical 1.5s .4s ease forwards;
        }

        .frame-left {
          left: 0;
          bottom: 0;
          transform-origin: bottom;
        }

        .frame-right {
          right: 0;
          top: 0;
          transform-origin: top;
        }

        @keyframes drawHorizontal {
          to {
            transform: scaleX(1);
          }
        }

        @keyframes drawVertical {
          to {
            transform: scaleY(1);
          }
        }

        .intro-center {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 0 20px;
          text-align: center;
          color: #1d2b37;
          animation: centerReveal 2.4s .4s both;
        }

        @keyframes centerReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .intro-emblem {
          display: grid;
          place-items: center;
          width: 72px;
          height: 72px;
          border: 1px solid #b99a6c;
          color: #a17e4d;
          font: italic 48px Georgia, serif;
        }

        .intro-small-line {
          width: 1px;
          height: 45px;
          margin: 22px 0;
          background: #b99a6c;
        }

        .intro-eyebrow {
          color: #9b805a;
          font-size: 10px;
          letter-spacing: 4px;
        }

        .intro-title {
          margin: 23px 0 28px;
          font: 400 clamp(46px, 7.5vw, 105px)/1.08 Georgia, serif;
          letter-spacing: -2px;
        }

        .intro-title em {
          color: #b49365;
          font-style: normal;
        }

        .intro-divider {
          display: flex;
          align-items: center;
          gap: 18px;
          color: #9e8055;
        }

        .intro-divider span {
          width: 55px;
          height: 1px;
          background: #b99a6c;
        }

        .intro-divider b {
          font: 15px Georgia, serif;
          letter-spacing: 3px;
        }

        .intro-korean {
          margin-top: 24px;
          color: #5b6268;
          font-size: 13px;
          letter-spacing: 2px;
        }

        .intro-bottom {
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: 8%;
          display: flex;
          justify-content: space-between;
          color: #a18a6c;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .skip-intro {
          position: absolute;
          z-index: 10;
          top: 28px;
          right: 28px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 14px;
          border: 1px solid #bca888;
          background: #ffffff88;
          color: #685638;
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 1px;
        }

        /* 메인 */

        .main-screen {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          background:
            linear-gradient(
              180deg,
              #0a1523,
              #122236
            );
          opacity: 0;
          visibility: hidden;
          transition: opacity 1s ease;
        }

        .main-screen.visible {
          opacity: 1;
          visibility: visible;
        }

        .main-header {
          height: 88px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ffffff22;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-emblem {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border: 1px solid var(--gold);
          color: var(--gold);
          font: italic 28px Georgia, serif;
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .brand-copy strong {
          font: 18px Georgia, serif;
          letter-spacing: 2px;
        }

        .brand-copy small {
          color: var(--gold);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .header-call {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--gold-light);
          font-size: 14px;
        }

        .selection-section {
          flex: 1;
          padding: 48px 4% 65px;
        }

        .selection-heading {
          margin-bottom: 35px;
          text-align: center;
        }

        .selection-eyebrow {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 4px;
        }

        .selection-heading h2 {
          margin: 20px 0;
          font-size: clamp(30px, 4vw, 50px);
          font-weight: 300;
          line-height: 1.55;
          letter-spacing: -1.5px;
        }

        .selection-heading h2 em {
          color: var(--gold-light);
          font-style: normal;
        }

        .selection-heading p {
          color: #b7c0ca;
          font-size: 13px;
        }

        .premium-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          max-width: 1500px;
          margin: 0 auto;
        }

        .premium-panel {
          position: relative;
          isolation: isolate;
          min-height: 620px;
          padding: 35px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          border: 1px solid rgba(214,187,145,.35);
          background: #17283a;
          transition: transform .4s, border-color .4s;
        }

        .premium-panel:hover {
          transform: translateY(-5px);
          border-color: #d6bb91;
        }

        .premium-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-position: center;
          background-size: cover;
          transition: transform .9s;
        }

        .panel-3 .premium-image {
          background-color: #233b50;
          background-image: url("/complex3.jpg");
        }

        .panel-4 .premium-image {
          background-color: #3b4551;
          background-image: url("/complex4.jpg");
        }

        .premium-panel:hover .premium-image {
          transform: scale(1.08);
        }

        .premium-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(
              180deg,
              rgba(5,12,22,.28),
              rgba(5,12,22,.12) 30%,
              rgba(5,12,22,.92)
            );
        }

        .premium-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #e9d8b9;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .premium-eyebrow {
          display: block;
          color: #d6bb91;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .premium-number {
          display: block;
          font: 400 clamp(100px, 13vw, 190px)/1 Georgia, serif;
          color: rgba(255,255,255,.3);
          letter-spacing: -8px;
        }

        .premium-panel-content h3 {
          margin: -10px 0 8px;
          font-size: 48px;
          font-weight: 400;
          letter-spacing: -2px;
        }

        .premium-panel-content p {
          color: #e1e3e6;
          font-size: 14px;
        }

        .premium-enter {
          margin-top: 32px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.4);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }

        .enter-circle {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border: 1px solid var(--gold);
          border-radius: 50%;
          color: var(--gold);
          transition: .3s;
        }

        .premium-panel:hover .enter-circle {
          background: var(--gold);
          color: var(--navy);
        }

        .site-footer {
          padding: 25px 5%;
          background: #07101b;
          border-top: 1px solid #ffffff22;
        }

        .footer-info {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: var(--gold);
          font-size: 12px;
          letter-spacing: 1px;
        }

        .site-footer p {
          margin: 15px 0 0;
          color: #9faab6;
          font-size: 11px;
          line-height: 1.9;
        }

        @media (max-width: 700px) {
          .intro-frame {
            inset: 5%;
          }

          .intro-emblem {
            width: 55px;
            height: 55px;
            font-size: 36px;
          }

          .intro-small-line {
            height: 30px;
          }

          .intro-eyebrow {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .intro-title {
            font-size: 47px;
            letter-spacing: -1px;
          }

          .intro-korean {
            font-size: 11px;
          }

          .intro-bottom {
            left: 8%;
            right: 8%;
            font-size: 8px;
          }

          .intro-bottom span:last-child {
            display: none;
          }

          .main-header {
            height: 75px;
            padding: 0 18px;
          }

          .brand-emblem {
            width: 36px;
            height: 36px;
            font-size: 24px;
          }

          .brand-copy strong {
            font-size: 14px;
          }

          .brand-copy small {
            font-size: 8px;
          }

          .header-call span {
            display: none;
          }

          .selection-section {
            padding: 40px 12px 50px;
          }

          .selection-heading h2 {
            font-size: 27px;
          }

          .premium-grid {
            gap: 9px;
          }

          .premium-panel {
            min-height: 390px;
            padding: 14px;
          }

          .premium-panel-top {
            font-size: 8px;
            letter-spacing: .5px;
          }

          .premium-panel-top svg {
            width: 17px;
          }

          .premium-eyebrow {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .premium-number {
            font-size: 76px;
            letter-spacing: -4px;
          }

          .premium-panel-content h3 {
            font-size: 30px;
          }

          .premium-panel-content p {
            font-size: 10px;
            line-height: 1.6;
          }

          .premium-enter {
            font-size: 11px;
            margin-top: 22px;
            padding-top: 15px;
          }

          .enter-circle {
            width: 32px;
            height: 32px;
          }

          .enter-circle svg {
            width: 17px;
          }

          .site-footer {
            padding: 23px 18px;
          }

          .footer-info {
            font-size: 10px;
          }

          .site-footer p {
            font-size: 10px;
          }
        }

        @media (max-width: 370px) {
          .intro-title {
            font-size: 39px;
          }

          .premium-panel {
            padding: 11px;
          }

          .premium-number {
            font-size: 65px;
          }

          .premium-panel-content h3 {
            font-size: 25px;
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
