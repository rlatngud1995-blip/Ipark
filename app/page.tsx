
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  SkipForward,
} from "lucide-react";

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

export default function Home() {
  const [phase, setPhase] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setPhase(3);
      setFinished(true);
      return;
    }

    const timers = [
      window.setTimeout(() => setPhase(1), 900),
      window.setTimeout(() => setPhase(2), 2200),
      window.setTimeout(() => {
        setPhase(3);
        setFinished(true);
      }, 4100),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, []);

  function skipIntro() {
    setPhase(3);
    setFinished(true);
  }

  return (
    <main className="luxury-site">
      {/* 실내 공간 */}
      <div className="interior">
        <div className="interior-ceiling" />
        <div className="interior-left-wall" />
        <div className="interior-right-wall" />
        <div className="interior-floor" />

        <div className="window-view">
          <div className="sky-glow" />
          <div className="city city-back" />
          <div className="city city-front" />
          <div className="window-frame vertical-one" />
          <div className="window-frame vertical-two" />
          <div className="window-frame horizontal" />
        </div>

        <div className="interior-light" />
      </div>

      {/* 현관문 오프닝 */}
      {!finished && (
        <div
          className={`entrance phase-${phase}`}
          aria-label="고급 주거 공간 입장 애니메이션"
        >
          <div className="entrance-wall">
            <div className="wall-left" />
            <div className="wall-right" />
          </div>

          <div className="door-frame">
            <div className="door door-left">
              <div className="door-groove" />
              <div className="door-handle left-handle" />
            </div>

            <div className="door door-right">
              <div className="door-groove" />
              <div className="door-handle right-handle" />
            </div>
          </div>

          <div className="entrance-title">
            <span className="entrance-label">
              WELCOME TO
            </span>
            <h1>
              CHEONAN
              <br />
              <em>IPARK CITY</em>
            </h1>
            <div className="entrance-line" />
            <p>천안 아이파크 시티 3 · 4단지</p>
          </div>

          <div className="entrance-bottom">
            <span>THE ART OF LIVING</span>
            <span>AN EXCLUSIVE ENTRANCE</span>
          </div>

          <button
            className="skip-button"
            type="button"
            onClick={skipIntro}
          >
            SKIP INTRO
            <SkipForward size={15} />
          </button>
        </div>
      )}

      {/* 메인 */}
      <div className={`main-screen ${finished ? "visible" : ""}`}>
        <header className="main-header">
          <Link href="/" className="brand">
            <span className="brand-emblem">I</span>
            <span>
              <strong>IPARK CITY</strong>
              <small>CHEONAN 03 · 04</small>
            </span>
          </Link>

          <a href={TEL} className="header-call">
            <Phone size={16} />
            <span>{PHONE}</span>
          </a>
        </header>

        <section className="selection-screen">
          <div className="selection-heading">
            <span className="heading-kicker">
              THE EXCLUSIVE COLLECTION
            </span>
            <h2>
              당신의 새로운 공간,
              <br />
              <em>어디에서 시작할까요?</em>
            </h2>
            <p>
              천안 아이파크 시티
              <br className="mobile-break" />
              {" "}3단지와 4단지 중 선택해 주세요.
            </p>
          </div>

          <div className="choice-grid">
            <Link
              href="/complex/3"
              className="choice-card choice-three"
            >
              <div className="card-glow" />
              <div className="card-building building-three">
                <div className="tower tower-a" />
                <div className="tower tower-b" />
                <div className="tower tower-c" />
              </div>

              <div className="choice-top">
                <span>THE THIRD COLLECTION</span>
                <ArrowUpRight size={23} />
              </div>

              <div className="choice-content">
                <span className="choice-number">03</span>
                <h3>3단지</h3>
                <p>천안 아이파크 시티 3단지</p>
                <div className="choice-line" />
                <div className="choice-enter">
                  <span>3단지 입장하기</span>
                  <span className="circle-arrow">
                    <ArrowRight size={22} />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/complex/4"
              className="choice-card choice-four"
            >
              <div className="card-glow" />
              <div className="card-building building-four">
                <div className="tower tower-a" />
                <div className="tower tower-b" />
                <div className="tower tower-c" />
              </div>

              <div className="choice-top">
                <span>THE FOURTH COLLECTION</span>
                <ArrowUpRight size={23} />
              </div>

              <div className="choice-content">
                <span className="choice-number">04</span>
                <h3>4단지</h3>
                <p>천안 아이파크 시티 4단지</p>
                <div className="choice-line" />
                <div className="choice-enter">
                  <span>4단지 입장하기</span>
                  <span className="circle-arrow">
                    <ArrowRight size={22} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-info">
            <span>MI SO REAL ESTATE</span>
            <a href={TEL}>
              상담문의 {PHONE}
            </a>
          </div>

          <p>
            본 사이트는 미소부동산 운영의 비공식
            부동산 정보·상담 안내 사이트이며,
            시행사·시공사 공식 홈페이지가 아닙니다.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        :root {
          --gold: #d2b88d;
          --gold-bright: #f2dfbd;
          --deep: #08111c;
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          min-height: 100%;
          background: var(--deep);
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

        .luxury-site {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          isolation: isolate;
          background: #0a1420;
        }

        /* 실내 배경 */

        .interior {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              #343b3c 0%,
              #686761 50%,
              #24272a 100%
            );
        }

        .interior-ceiling {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 27%;
          background: linear-gradient(
            #272d31,
            #54585a
          );
          clip-path: polygon(
            0 0, 100% 0, 78% 100%, 22% 100%
          );
        }

        .interior-left-wall,
        .interior-right-wall {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 35%;
          background:
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent 85px,
              rgba(255,255,255,.035) 86px
            ),
            linear-gradient(
              90deg,
              #1b252c,
              #555c5c
            );
        }

        .interior-left-wall {
          left: 0;
          clip-path: polygon(
            0 0, 100% 27%, 100% 75%, 0 100%
          );
        }

        .interior-right-wall {
          right: 0;
          transform: scaleX(-1);
          clip-path: polygon(
            0 0, 100% 27%, 100% 75%, 0 100%
          );
        }

        .interior-floor {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 35%;
          background:
            repeating-linear-gradient(
              92deg,
              transparent 0,
              transparent 130px,
              rgba(255,255,255,.1) 132px
            ),
            linear-gradient(
              #a19a8c,
              #3e4142
            );
          clip-path: polygon(
            22% 0, 78% 0, 100% 100%, 0 100%
          );
        }

        .window-view {
          position: absolute;
          left: 22%;
          right: 22%;
          top: 20%;
          bottom: 25%;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              #b7a28b,
              #d4bb98 40%,
              #6b7c88 75%,
              #293847
            );
          box-shadow:
            0 0 90px rgba(255,218,162,.25),
            inset 0 0 50px rgba(0,0,0,.3);
        }

        .sky-glow {
          position: absolute;
          width: 55%;
          height: 65%;
          left: 22%;
          top: 0;
          background: radial-gradient(
            circle,
            rgba(255,236,190,.85),
            transparent 70%
          );
        }

        .city {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: #344352;
        }

        .city-back {
          height: 35%;
          opacity: .5;
          clip-path: polygon(
            0 65%, 12% 65%, 12% 25%,
            23% 25%, 23% 50%,
            34% 50%, 34% 10%,
            47% 10%, 47% 40%,
            59% 40%, 59% 0,
            73% 0, 73% 50%,
            86% 50%, 86% 20%,
            100% 20%, 100% 100%,
            0 100%
          );
        }

        .city-front {
          height: 22%;
          background: #1d2a39;
          clip-path: polygon(
            0 30%, 17% 30%, 17% 0,
            31% 0, 31% 40%,
            48% 40%, 48% 10%,
            64% 10%, 64% 45%,
            80% 45%, 80% 5%,
            100% 5%, 100% 100%,
            0 100%
          );
        }

        .window-frame {
          position: absolute;
          background: #222d35;
          box-shadow: 0 0 8px rgba(0,0,0,.35);
        }

        .vertical-one {
          left: 33%;
          width: 10px;
          height: 100%;
        }

        .vertical-two {
          left: 66%;
          width: 10px;
          height: 100%;
        }

        .horizontal {
          top: 72%;
          width: 100%;
          height: 9px;
        }

        .interior-light {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(255,215,165,.14),
            rgba(0,0,0,.5) 90%
          );
        }

        /* 현관 오프닝 */

        .entrance {
          position: fixed;
          inset: 0;
          z-index: 100;
          perspective: 1200px;
          overflow: hidden;
          background: #10151b;
          animation: entranceZoom 4.1s ease forwards;
        }

        @keyframes entranceZoom {
          0%, 45% {
            transform: scale(1);
          }
          90%, 100% {
            transform: scale(1.22);
          }
        }

        .entrance-wall {
          position: absolute;
          inset: 0;
          display: flex;
          background:
            repeating-linear-gradient(
              105deg,
              transparent 0,
              transparent 95px,
              rgba(255,255,255,.035) 97px
            ),
            linear-gradient(
              120deg,
              #171d24,
              #33373a,
              #151b23
            );
        }

        .wall-left,
        .wall-right {
          width: 50%;
          height: 100%;
          border-right: 1px solid rgba(255,255,255,.06);
        }

        .door-frame {
          position: absolute;
          left: 15%;
          right: 15%;
          top: 8%;
          bottom: 0;
          display: flex;
          border: 12px solid #14171a;
          border-bottom: 0;
          box-shadow:
            0 0 0 2px rgba(210,184,141,.35),
            0 0 80px rgba(0,0,0,.75);
          perspective: 1400px;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              #d9c4a5,
              #3a4b55
            );
        }

        .door {
          position: relative;
          width: 50%;
          height: 100%;
          background:
            repeating-linear-gradient(
              90deg,
              rgba(0,0,0,.08) 0,
              rgba(255,255,255,.025) 7px,
              rgba(0,0,0,.08) 16px
            ),
            linear-gradient(
              110deg,
              #201b19,
              #514239 50%,
              #1b1716
            );
          box-shadow:
            inset 0 0 45px rgba(0,0,0,.65);
          transition: transform 1.65s
            cubic-bezier(.65,0,.18,1);
          z-index: 3;
          backface-visibility: hidden;
        }

        .door-left {
          transform-origin: left center;
          border-right: 2px solid #15110e;
        }

        .door-right {
          transform-origin: right center;
          border-left: 2px solid #15110e;
        }

        .phase-2 .door-left {
          transform: rotateY(-105deg);
        }

        .phase-2 .door-right {
          transform: rotateY(105deg);
        }

        .door-groove {
          position: absolute;
          inset: 5%;
          border: 1px solid rgba(210,184,141,.19);
          box-shadow:
            inset 0 0 0 12px rgba(0,0,0,.1);
        }

        .door-handle {
          position: absolute;
          top: 45%;
          width: 7px;
          height: 110px;
          border-radius: 8px;
          background: linear-gradient(
            90deg,
            #7e6745,
            #f2dfbd,
            #9e8053
          );
          box-shadow: 2px 4px 10px #0008;
        }

        .left-handle {
          right: 18px;
        }

        .right-handle {
          left: 18px;
        }

        .entrance-title {
          position: absolute;
          z-index: 5;
          top: 33%;
          left: 0;
          right: 0;
          text-align: center;
          pointer-events: none;
          text-shadow: 0 4px 25px #000;
          transition:
            opacity .65s,
            transform .65s;
        }

        .phase-2 .entrance-title {
          opacity: 0;
          transform: scale(1.3);
        }

        .entrance-label {
          color: var(--gold);
          font-size: 11px;
          letter-spacing: 5px;
        }

        .entrance-title h1 {
          font: 400 clamp(45px, 7vw, 100px)/1.1
            Georgia, serif;
          letter-spacing: -2px;
          margin: 25px 0;
        }

        .entrance-title h1 em {
          color: var(--gold-bright);
          font-style: normal;
        }

        .entrance-line {
          height: 1px;
          width: 90px;
          background: var(--gold);
          margin: 22px auto;
        }

        .entrance-title p {
          font-size: 14px;
          letter-spacing: 3px;
        }

        .entrance-bottom {
          position: absolute;
          bottom: 35px;
          left: 5%;
          right: 5%;
          z-index: 5;
          display: flex;
          justify-content: space-between;
          color: #d5c3a8;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .skip-button {
          position: absolute;
          z-index: 10;
          right: 25px;
          top: 25px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 16px;
          color: white;
          background: rgba(0,0,0,.45);
          border: 1px solid rgba(255,255,255,.4);
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 1px;
        }

        /* 메인 화면 */

        .main-screen {
          position: relative;
          z-index: 2;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          background:
            linear-gradient(
              180deg,
              rgba(6,14,24,.92),
              rgba(9,20,34,.84)
            );
          opacity: 0;
          visibility: hidden;
          transition: opacity 1.1s ease;
        }

        .main-screen.visible {
          opacity: 1;
          visibility: visible;
        }

        .main-header {
          height: 90px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,.14);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid var(--gold);
          color: var(--gold);
          font: italic 28px Georgia, serif;
        }

        .brand > span:last-child {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .brand strong {
          font: 18px Georgia, serif;
          letter-spacing: 2px;
        }

        .brand small {
          color: var(--gold);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .header-call {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--gold-bright);
          font-size: 14px;
        }

        .selection-screen {
          flex: 1;
          padding: 65px 5% 75px;
        }

        .selection-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .heading-kicker {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 4px;
        }

        .selection-heading h2 {
          font-size: clamp(30px, 4vw, 51px);
          font-weight: 300;
          line-height: 1.55;
          letter-spacing: -1.5px;
          margin: 20px 0;
        }

        .selection-heading h2 em {
          color: var(--gold-bright);
          font-style: normal;
        }

        .selection-heading p {
          color: #b9c0c7;
          font-size: 13px;
          line-height: 1.9;
        }

        .mobile-break {
          display: none;
        }

        .choice-grid {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .choice-card {
          position: relative;
          min-height: 470px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          isolation: isolate;
          border: 1px solid rgba(210,184,141,.35);
          background:
            linear-gradient(
              155deg,
              #30465a,
              #0d1928
            );
          transition:
            transform .45s,
            border-color .45s,
            box-shadow .45s;
        }

        .choice-four {
          background:
            linear-gradient(
              155deg,
              #4a4b4a,
              #172230
            );
        }

        .choice-card:hover {
          transform: translateY(-8px);
          border-color: var(--gold);
          box-shadow:
            0 25px 65px rgba(0,0,0,.4);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(
            ellipse at 50% 15%,
            rgba(233,206,165,.2),
            transparent 65%
          );
        }

        .card-building {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .45;
        }

        .tower {
          position: absolute;
          bottom: 0;
          width: 23%;
          background:
            repeating-linear-gradient(
              180deg,
              rgba(230,207,169,.35) 0,
              rgba(230,207,169,.35) 2px,
              transparent 3px,
              transparent 17px
            ),
            repeating-linear-gradient(
              90deg,
              #172534 0,
              #172534 13px,
              #42556a 15px,
              #172534 18px
            );
          border: 1px solid rgba(255,255,255,.1);
          box-shadow: -12px 0 25px rgba(0,0,0,.2);
        }

        .tower-a {
          left: 13%;
          height: 53%;
        }

        .tower-b {
          left: 39%;
          height: 78%;
        }

        .tower-c {
          right: 11%;
          height: 64%;
        }

        .building-four .tower-a {
          height: 65%;
        }

        .building-four .tower-b {
          height: 56%;
        }

        .building-four .tower-c {
          height: 83%;
        }

        .choice-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #e8d7b7;
          font-size: 10px;
          letter-spacing: 2.5px;
        }

        .choice-content {
          position: relative;
        }

        .choice-number {
          display: block;
          font: 110px/.9 Georgia, serif;
          color: rgba(255,255,255,.23);
          letter-spacing: -8px;
        }

        .choice-content h3 {
          font-size: 45px;
          font-weight: 400;
          margin: 0 0 10px;
        }

        .choice-content p {
          color: #e2e4e6;
          font-size: 14px;
          margin-bottom: 25px;
        }

        .choice-line {
          height: 1px;
          background: rgba(255,255,255,.35);
          margin-bottom: 18px;
        }

        .choice-enter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }

        .circle-arrow {
          width: 46px;
          height: 46px;
          border: 1px solid var(--gold);
          color: var(--gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .3s;
        }

        .choice-card:hover .circle-arrow {
          background: var(--gold);
          color: #101b29;
        }

        .site-footer {
          background: rgba(5,11,19,.9);
          border-top: 1px solid rgba(255,255,255,.12);
          padding: 25px 5%;
        }

        .footer-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          color: var(--gold);
          font-size: 12px;
          letter-spacing: 1px;
        }

        .site-footer p {
          color: #a5adb6;
          font-size: 11px;
          line-height: 1.8;
          margin: 15px 0 0;
        }

        @media (max-width: 700px) {
          .door-frame {
            left: 5%;
            right: 5%;
            top: 13%;
          }

          .door-handle {
            height: 80px;
          }

          .entrance-title h1 {
            font-size: 44px;
          }

          .entrance-title p {
            font-size: 11px;
          }

          .entrance-label {
            font-size: 9px;
          }

          .entrance-bottom {
            font-size: 8px;
          }

          .entrance-bottom span:last-child {
            display: none;
          }

          .main-header {
            height: 75px;
            padding: 0 20px;
          }

          .brand-emblem {
            width: 36px;
            height: 36px;
            font-size: 23px;
          }

          .brand strong {
            font-size: 14px;
          }

          .brand small {
            font-size: 8px;
          }

          .header-call span {
            display: none;
          }

          .selection-screen {
            padding: 42px 17px 50px;
          }

          .selection-heading {
            margin-bottom: 30px;
          }

          .selection-heading h2 {
            font-size: 28px;
          }

          .selection-heading p {
            font-size: 12px;
          }

          .mobile-break {
            display: initial;
          }

          .choice-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .choice-card {
            min-height: 365px;
            padding: 15px;
          }

          .choice-top {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .choice-top svg {
            width: 18px;
          }

          .choice-number {
            font-size: 76px;
          }

          .choice-content h3 {
            font-size: 29px;
          }

          .choice-content p {
            font-size: 10px;
            line-height: 1.6;
            min-height: 32px;
          }

          .choice-enter {
            font-size: 11px;
          }

          .circle-arrow {
            width: 32px;
            height: 32px;
          }

          .circle-arrow svg {
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
          .choice-card {
            padding: 11px;
          }

          .choice-top {
            font-size: 7px;
          }

          .choice-number {
            font-size: 64px;
          }

          .choice-content h3 {
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
