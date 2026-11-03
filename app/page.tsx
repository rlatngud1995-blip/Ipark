
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
      {/* 실내 공간 배경 */}
      <div className="interior" aria-hidden="true">
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

      {/* 고급 현관문 오프닝 */}
      {!finished && (
        <div className={`entrance phase-${phase}`}>
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

      {/* 오프닝 이후 메인 화면 */}
      <div
        className={`main-screen ${
          finished ? "visible" : ""
        }`}
      >
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

        <section className="selection-screen premium-selection">
          <div className="selection-heading">
            <span className="heading-kicker">
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
            <Link
              href="/complex/3"
              className="premium-panel panel-3"
            >
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
            <Link
              href="/complex/4"
              className="premium-panel panel-4"
            >
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

          <p className="photo-note">
            단지별 이미지는 실제 사용 허가를 받은
            조감도로 교체할 예정입니다.
          </p>
        </section>

        <footer className="site-footer">
          <div className="footer-info">
            <span>MI SO REAL ESTATE</span>
            <a href={TEL}>
              상담문의 {PHONE}
            </a>
          </div>

          <p>
            본 사이트는 미소부동산이 운영하는
            비공식 부동산 정보·상담 안내 사이트이며,
            시행사·시공사·공식 분양사무소가 운영하는
            공식 홈페이지가 아닙니다.
            단지별 공급 정보는 공식 자료를 통해
            확인하시기 바랍니다.
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

        html,
        body {
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
          background:
            linear-gradient(#272d31, #54585a);
          clip-path: polygon(
            0 0,
            100% 0,
            78% 100%,
            22% 100%
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
            0 0,
            100% 27%,
            100% 75%,
            0 100%
          );
        }

        .interior-right-wall {
          right: 0;
          transform: scaleX(-1);
          clip-path: polygon(
            0 0,
            100% 27%,
            100% 75%,
            0 100%
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
            22% 0,
            78% 0,
            100% 100%,
            0 100%
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
          background:
            radial-gradient(
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
            0 65%,
            12% 65%,
            12% 25%,
            23% 25%,
            23% 50%,
            34% 50%,
            34% 10%,
            47% 10%,
            47% 40%,
            59% 40%,
            59% 0,
            73% 0,
            73% 50%,
            86% 50%,
            86% 20%,
            100% 20%,
            100% 100%,
            0 100%
          );
        }

        .city-front {
          height: 22%;
          background: #1d2a39;
          clip-path: polygon(
            0 30%,
            17% 30%,
            17% 0,
            31% 0,
            31% 40%,
            48% 40%,
            48% 10%,
            64% 10%,
            64% 45%,
            80% 45%,
            80% 5%,
            100% 5%,
            100% 100%,
            0 100%
          );
        }

        .window-frame {
          position: absolute;
          background: #222d35;
          box-shadow:
            0 0 8px rgba(0,0,0,.35);
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
          background:
            radial-gradient(
              ellipse at center,
              rgba(255,215,165,.14),
              rgba(0,0,0,.5) 90%
            );
        }

        /* 현관문 오프닝 */

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
          border-right:
            1px solid rgba(255,255,255,.06);
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
          transition:
            transform 1.65s
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
          border:
            1px solid rgba(210,184,141,.19);
          box-shadow:
            inset 0 0 0 12px rgba(0,0,0,.1);
        }

        .door-handle {
          position: absolute;
          top: 45%;
          width: 7px;
          height: 110px;
          border-radius: 8px;
          background:
            linear-gradient(
              90deg,
              #7e6745,
              #f2dfbd,
              #9e8053
            );
          box-shadow:
            2px 4px 10px #0008;
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
          text-shadow:
            0 4px 25px #000;
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
          font:
            400 clamp(45px, 7vw, 100px)/1.1
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
          border:
            1px solid rgba(255,255,255,.4);
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
              rgba(6,14,24,.94),
              rgba(9,20,34,.86)
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
          border-bottom:
            1px solid rgba(255,255,255,.14);
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

        /* 선택 화면 */

        .selection-screen {
          flex: 1;
          padding: 48px 4% 65px;
        }

        .selection-heading {
          text-align: center;
          margin-bottom: 35px;
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

        /* 3·4단지 프리미엄 선택 카드 */

        .premium-grid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 12px;
          max-width: 1500px;
          margin: 0 auto;
        }

        .premium-panel {
          position: relative;
          min-height: 620px;
          padding: 35px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          isolation: isolate;
          background: #17283a;
          border:
            1px solid rgba(214,187,145,.35);
          transition:
            border-color .4s,
            transform .4s,
            box-shadow .4s;
        }

        .premium-panel:hover {
          border-color: #d6bb91;
          transform: translateY(-5px);
          box-shadow:
            0 25px 65px rgba(0,0,0,.4);
        }

        .premium-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-position: center;
          background-size: cover;
          transition:
            transform 1s
            cubic-bezier(.2,.7,.2,1);
        }

        .panel-3 .premium-image {
          background-image:
            url("/complex3.jpg");
          background-color: #233b50;
        }

        .panel-4 .premium-image {
          background-image:
            url("/complex4.jpg");
          background-color: #3b4551;
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
              rgba(5,12,22,.25) 0%,
              rgba(5,12,22,.12) 30%,
              rgba(5,12,22,.94) 100%
            );
        }

        .premium-panel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #e9d8b9;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .premium-panel-content {
          position: relative;
        }

        .premium-eyebrow {
          display: block;
          color: #d6bb91;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .premium-number {
          display: block;
          font:
            400 clamp(100px, 13vw, 190px)/1
            Georgia, serif;
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
          border-top:
            1px solid rgba(255,255,255,.4);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          transition: color .3s;
        }

        .premium-panel:hover .premium-enter {
          color: #e5c998;
        }

        .enter-circle {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border:
            1px solid rgba(214,187,145,.8);
          border-radius: 50%;
          color: var(--gold);
          transition: .3s;
        }

        .premium-panel:hover .enter-circle {
          background: var(--gold);
          color: #101b29;
        }

        .photo-note {
          max-width: 1500px;
          margin: 15px auto 0;
          color: #aeb7c0;
          font-size: 11px;
        }

        /* 하단 */

        .site-footer {
          background: rgba(5,11,19,.9);
          border-top:
            1px solid rgba(255,255,255,.12);
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

        /* 태블릿 */

        @media (max-width: 900px) {
          .premium-panel {
            min-height: 510px;
            padding: 24px;
          }

          .premium-number {
            font-size: 120px;
          }
        }

        /* 모바일 */

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
            padding: 40px 12px 50px;
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
          .premium-panel {
            padding: 11px;
          }

          .premium-panel-top {
            font-size: 7px;
          }

          .premium-number {
            font-size: 64px;
          }

          .premium-panel-content h3 {
            font-size: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration:
              .01ms !important;
            transition-duration:
              .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
