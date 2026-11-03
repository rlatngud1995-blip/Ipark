
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
  const [stage, setStage] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setFinished(true);
      return;
    }

    const timers = [
      window.setTimeout(() => setStage(1), 800),
      window.setTimeout(() => setStage(2), 2200),
      window.setTimeout(() => setStage(3), 3600),
      window.setTimeout(() => setFinished(true), 4900),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="home-page">
      {/* 따뜻한 가정집 현관 오프닝 */}
      {!finished && (
        <div className={`home-intro stage-${stage}`}>
          {/* 현관문 너머 거실 */}
          <div className="warm-living-room">
            <div className="room-ceiling" />
            <div className="room-wall" />

            <div className="room-window">
              <div className="sunlight" />
              <div className="curtain curtain-left" />
              <div className="curtain curtain-right" />
            </div>

            <div className="room-floor" />
            <div className="room-rug" />

            <div className="sofa">
              <div className="sofa-back" />
              <div className="sofa-seat" />
              <div className="sofa-arm arm-left" />
              <div className="sofa-arm arm-right" />
              <div className="sofa-leg leg-left" />
              <div className="sofa-leg leg-right" />
            </div>

            <div className="coffee-table" />
            <div className="warm-light" />
          </div>

          {/* 현관 벽과 문틀 */}
          <div className="entrance-surround">
            <div className="entry-wall left-wall" />
            <div className="entry-wall right-wall" />

            <div className="entry-frame">
              <div className="door-opening">
                <div className="home-door">
                  <div className="door-panel panel-top" />
                  <div className="door-panel panel-bottom" />
                  <div className="door-woodgrain" />
                  <div className="door-lock">
                    <div className="lock-body" />
                    <div className="lock-handle" />
                  </div>
                </div>
              </div>
            </div>

            <div className="entry-floor" />
          </div>

          {/* 오프닝 문구 */}
          <div className="intro-copy">
            <span className="intro-kicker">
              A PLACE TO CALL HOME
            </span>

            <h1>
              집으로 돌아오는 순간,
              <br />
              <em>행복이 시작됩니다.</em>
            </h1>

            <div className="intro-divider" />

            <p>천안 아이파크 시티 3 · 4단지</p>
          </div>

          <div className="welcome-copy">
            <span>WELCOME HOME</span>
            <strong>당신의 새로운 일상이 시작되는 곳</strong>
          </div>

          <button
            className="skip-intro"
            type="button"
            onClick={() => setFinished(true)}
          >
            건너뛰기
            <SkipForward size={16} />
          </button>
        </div>
      )}

      {/* 기존 3단지·4단지 선택 메인 */}
      <div className={`main-screen ${finished ? "show" : ""}`}>
        <header className="main-header">
          <Link href="/" className="brand">
            <span className="brand-mark">I</span>
            <span className="brand-text">
              <strong>IPARK CITY</strong>
              <small>CHEONAN 03 · 04</small>
            </span>
          </Link>

          <a href={TEL} className="header-phone">
            <Phone size={17} />
            <span>{PHONE}</span>
          </a>
        </header>

        <section className="selection-section">
          <div className="selection-heading">
            <span className="eyebrow">
              THE EXCLUSIVE COLLECTION
            </span>

            <h2>
              당신의 새로운 삶,
              <br />
              <em>그 시작을 선택하세요.</em>
            </h2>

            <p>천안 아이파크 시티 3 · 4단지</p>
          </div>

          <div className="complex-grid">
            <Link href="/complex/3" className="complex-card complex-3">
              <div className="complex-image" />
              <div className="complex-shade" />

              <div className="card-top">
                <span>CHEONAN IPARK CITY</span>
                <ArrowUpRight size={23} />
              </div>

              <div className="card-content">
                <span className="card-eyebrow">
                  THE THIRD COLLECTION
                </span>

                <strong className="card-number">03</strong>

                <h3>3단지</h3>
                <p>천안 아이파크 시티 3단지</p>

                <div className="card-action">
                  <span>3단지 입장하기</span>
                  <span className="action-circle">
                    <ArrowRight size={21} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/complex/4" className="complex-card complex-4">
              <div className="complex-image" />
              <div className="complex-shade" />

              <div className="card-top">
                <span>CHEONAN IPARK CITY</span>
                <ArrowUpRight size={23} />
              </div>

              <div className="card-content">
                <span className="card-eyebrow">
                  THE FOURTH COLLECTION
                </span>

                <strong className="card-number">04</strong>

                <h3>4단지</h3>
                <p>천안 아이파크 시티 4단지</p>

                <div className="card-action">
                  <span>4단지 입장하기</span>
                  <span className="action-circle">
                    <ArrowRight size={21} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <footer className="main-footer">
          <div className="footer-row">
            <span>MI SO REAL ESTATE</span>
            <a href={TEL}>상담문의 {PHONE}</a>
          </div>

          <p>
            본 홈페이지는 미소부동산이 운영하는
            부동산 정보 및 상담 안내 사이트이며,
            시행사·시공사·공식 분양사무소의 공식
            홈페이지가 아닙니다. 사업 및 분양 정보는
            공식 자료를 우선하여 확인해 주세요.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        :root {
          --gold: #d1b58b;
          --cream: #f5ead8;
          --dark: #0a1421;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          min-height: 100%;
          background: var(--dark);
        }

        body {
          color: white;
          font-family: "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .home-page {
          min-height: 100svh;
          background: var(--dark);
        }

        /* 가정집 오프닝 */

        .home-intro {
          position: fixed;
          inset: 0;
          z-index: 1000;
          overflow: hidden;
          background: #d8c8b1;
          perspective: 1300px;
          animation: introCamera 4.9s ease-in-out both;
        }

        @keyframes introCamera {
          0%, 40% {
            transform: scale(1);
          }

          75% {
            transform: scale(1.12);
          }

          100% {
            transform: scale(1.5);
          }
        }

        /* 거실 */

        .warm-living-room {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              #e9dcc7 0%,
              #f6e8d1 60%,
              #bda68a 100%
            );
        }

        .room-ceiling {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 18%;
          background: linear-gradient(
            #d6c6ae,
            #f0e4d0
          );
          box-shadow: 0 8px 25px #aa907144;
        }

        .room-wall {
          position: absolute;
          top: 15%;
          left: 0;
          right: 0;
          bottom: 24%;
          background:
            linear-gradient(
              100deg,
              #cbb79c,
              #f7ecda 45%,
              #ead9be
            );
        }

        .room-window {
          position: absolute;
          top: 20%;
          left: 35%;
          width: 45%;
          height: 45%;
          overflow: hidden;
          border: 12px solid #e9ddc8;
          background:
            linear-gradient(
              #c8dce2,
              #fff1cb 65%,
              #d5d3bd
            );
          box-shadow:
            0 10px 45px #9c805044,
            inset 0 0 30px #fff9;
        }

        .sunlight {
          position: absolute;
          width: 70%;
          height: 80%;
          top: -15%;
          right: -10%;
          background: radial-gradient(
            circle,
            #fff7d6,
            #ffe6a677,
            transparent 75%
          );
        }

        .curtain {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 20%;
          background:
            repeating-linear-gradient(
              90deg,
              #f9f3e9cc 0,
              #e4d6bf99 13px,
              #fff9efcc 25px
            );
        }

        .curtain-left {
          left: 0;
        }

        .curtain-right {
          right: 0;
        }

        .room-floor {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 30%;
          background:
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent 85px,
              #92755444 87px
            ),
            linear-gradient(
              #d7b992,
              #a88764
            );
        }

        .room-rug {
          position: absolute;
          bottom: 3%;
          left: 20%;
          width: 65%;
          height: 17%;
          border-radius: 50%;
          background: #f1e7d6;
          box-shadow: 0 5px 25px #70553a44;
        }

        .sofa {
          position: absolute;
          bottom: 20%;
          left: 22%;
          width: 43%;
          height: 26%;
        }

        .sofa-back {
          position: absolute;
          inset: 0 0 22% 0;
          border-radius: 30px 30px 12px 12px;
          background:
            linear-gradient(
              115deg,
              #eee3d2,
              #c6b49c
            );
          box-shadow: 0 8px 22px #6d584355;
        }

        .sofa-seat {
          position: absolute;
          bottom: 5%;
          width: 100%;
          height: 38%;
          border-radius: 16px;
          background: #e7d8c3;
          box-shadow: inset 0 -10px 18px #ad947566;
        }

        .sofa-arm {
          position: absolute;
          bottom: 5%;
          width: 13%;
          height: 50%;
          border-radius: 16px;
          background: #d5c2a8;
        }

        .arm-left {
          left: -5%;
        }

        .arm-right {
          right: -5%;
        }

        .sofa-leg {
          position: absolute;
          bottom: -7%;
          width: 8px;
          height: 15%;
          background: #806347;
        }

        .leg-left {
          left: 12%;
        }

        .leg-right {
          right: 12%;
        }

        .coffee-table {
          position: absolute;
          bottom: 13%;
          left: 43%;
          width: 23%;
          height: 5%;
          border-radius: 50%;
          background: #9c7651;
          box-shadow:
            0 15px 0 -4px #76583d,
            0 25px 20px #5b432b44;
        }

        .warm-light {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at 60% 38%,
              #fff3d444,
              transparent 70%
            );
        }

        /* 현관 구조 */

        .entrance-surround {
          position: absolute;
          inset: 0;
          perspective: 1500px;
          pointer-events: none;
        }

        .entry-wall {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 17%;
          background:
            linear-gradient(
              90deg,
              #bca78c,
              #e4d5bd,
              #c9b59a
            );
          z-index: 3;
        }

        .left-wall {
          left: 0;
          box-shadow: 12px 0 25px #614e3644;
        }

        .right-wall {
          right: 0;
          box-shadow: -12px 0 25px #614e3644;
        }

        .entry-frame {
          position: absolute;
          top: 7%;
          left: 17%;
          right: 17%;
          bottom: 0;
          border: 15px solid #9a7451;
          border-bottom: 0;
          background: transparent;
          box-shadow:
            0 0 0 5px #e7d7c1,
            0 0 40px #634b3266;
          z-index: 2;
          perspective: 1500px;
        }

        .door-opening {
          position: absolute;
          inset: 0;
          perspective: 1500px;
        }

        .home-door {
          position: absolute;
          inset: 0;
          transform-origin: left center;
          transform-style: preserve-3d;
          background:
            repeating-linear-gradient(
              90deg,
              #ffffff09 0,
              #00000008 7px,
              transparent 14px
            ),
            linear-gradient(
              100deg,
              #70482f,
              #b17e52 35%,
              #92623e 75%,
              #65432c
            );
          box-shadow:
            inset 0 0 50px #38251a66,
            8px 8px 35px #37231677;
          transition:
            transform 2.15s
            cubic-bezier(.55,.02,.18,1);
          backface-visibility: visible;
        }

        .stage-2 .home-door,
        .stage-3 .home-door {
          transform: rotateY(-112deg);
        }

        .door-panel {
          position: absolute;
          left: 7%;
          right: 7%;
          border: 2px solid #e5ba8555;
          box-shadow:
            inset 0 0 0 9px #3b241522,
            inset 0 0 0 11px #dfb37b33;
        }

        .panel-top {
          top: 6%;
          height: 38%;
        }

        .panel-bottom {
          bottom: 6%;
          height: 42%;
        }

        .door-woodgrain {
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              93deg,
              transparent 0,
              #2d170b11 2px,
              transparent 5px,
              transparent 23px
            );
        }

        .door-lock {
          position: absolute;
          right: 5%;
          top: 46%;
          width: 12%;
          height: 11%;
        }

        .lock-body {
          position: absolute;
          right: 0;
          top: 0;
          width: 25%;
          height: 100%;
          border-radius: 5px;
          background:
            linear-gradient(
              90deg,
              #8e7658,
              #ead7b6,
              #9e805b
            );
          box-shadow: 2px 3px 8px #34201377;
        }

        .lock-handle {
          position: absolute;
          top: 45%;
          right: 10%;
          width: 75%;
          height: 9px;
          border-radius: 10px;
          background:
            linear-gradient(
              #f3e4c7,
              #95724e
            );
          box-shadow: 0 3px 7px #34201366;
        }

        .entry-floor {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 10%;
          z-index: 4;
          background:
            linear-gradient(
              #c6b39a,
              #a58d70
            );
          clip-path: polygon(
            17% 0,
            83% 0,
            100% 100%,
            0 100%
          );
        }

        /* 오프닝 텍스트 */

        .intro-copy {
          position: absolute;
          z-index: 10;
          top: 32%;
          left: 0;
          right: 0;
          padding: 0 20px;
          text-align: center;
          color: white;
          text-shadow:
            0 3px 18px #392414,
            0 1px 5px #392414;
          pointer-events: none;
          transition:
            opacity .7s,
            transform .7s;
        }

        .stage-2 .intro-copy,
        .stage-3 .intro-copy {
          opacity: 0;
          transform: translateY(-25px);
        }

        .intro-kicker {
          display: block;
          color: #f4d9ac;
          font-size: 11px;
          letter-spacing: 4px;
        }

        .intro-copy h1 {
          margin: 25px 0;
          font-size: clamp(29px, 4.6vw, 65px);
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -2px;
        }

        .intro-copy h1 em {
          color: #ffe1b2;
          font-style: normal;
        }

        .intro-divider {
          width: 75px;
          height: 1px;
          margin: 20px auto;
          background: #f1d3a5;
        }

        .intro-copy p {
          font-size: 14px;
          letter-spacing: 2px;
        }

        .welcome-copy {
          position: absolute;
          z-index: 10;
          left: 0;
          right: 0;
          top: 38%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          color: #fff9ee;
          text-shadow: 0 2px 14px #4e3928;
          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity .8s,
            transform .8s;
          pointer-events: none;
        }

        .welcome-copy span {
          font: 32px Georgia, serif;
          letter-spacing: 5px;
        }

        .welcome-copy strong {
          font-size: 15px;
          font-weight: 400;
        }

        .stage-3 .welcome-copy {
          opacity: 1;
          transform: translateY(0);
        }

        .skip-intro {
          position: absolute;
          z-index: 30;
          top: 25px;
          right: 25px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 16px;
          border: 1px solid #ffffff88;
          color: #fff;
          background: #37271c99;
          cursor: pointer;
          font-size: 12px;
        }

        /* 3·4단지 선택 화면 */

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

        .main-screen.show {
          opacity: 1;
          visibility: visible;
        }

        .main-header {
          height: 88px;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ffffff22;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid var(--gold);
          color: var(--gold);
          font: italic 28px Georgia, serif;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .brand-text strong {
          font: 18px Georgia, serif;
          letter-spacing: 2px;
        }

        .brand-text small {
          color: var(--gold);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .header-phone {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e9d2ad;
          font-size: 14px;
        }

        .selection-section {
          flex: 1;
          padding: 48px 4% 65px;
        }

        .selection-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .eyebrow {
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
          color: #ead4b1;
          font-style: normal;
        }

        .selection-heading p {
          color: #b7c0ca;
          font-size: 13px;
        }

        .complex-grid {
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .complex-card {
          position: relative;
          isolation: isolate;
          min-height: 610px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 35px;
          overflow: hidden;
          border: 1px solid #d1b58b66;
          background: #22374a;
          transition:
            transform .4s,
            border-color .4s;
        }

        .complex-card:hover {
          transform: translateY(-5px);
          border-color: var(--gold);
        }

        .complex-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-position: center;
          background-size: cover;
          transition: transform .8s;
        }

        .complex-3 .complex-image {
          background-color: #30465b;
          background-image: url("/complex3.jpg");
        }

        .complex-4 .complex-image {
          background-color: #4b4d4e;
          background-image: url("/complex4.jpg");
        }

        .complex-card:hover .complex-image {
          transform: scale(1.07);
        }

        .complex-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(
              180deg,
              #07101c55,
              #07101c11 25%,
              #07101cf2
            );
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #e9d8b9;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .card-eyebrow {
          color: var(--gold);
          font-size: 11px;
          letter-spacing: 3px;
        }

        .card-number {
          display: block;
          font: clamp(105px, 13vw, 185px)/1 Georgia, serif;
          color: #ffffff44;
          letter-spacing: -8px;
        }

        .card-content h3 {
          margin: -8px 0 10px;
          font-size: 47px;
          font-weight: 400;
        }

        .card-content p {
          color: #e3e5e8;
          font-size: 14px;
        }

        .card-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ffffff66;
          font-size: 14px;
        }

        .action-circle {
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          border: 1px solid var(--gold);
          border-radius: 50%;
          color: var(--gold);
          transition: .3s;
        }

        .complex-card:hover .action-circle {
          background: var(--gold);
          color: #0a1523;
        }

        .main-footer {
          padding: 25px 5%;
          background: #07101b;
          border-top: 1px solid #ffffff22;
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: var(--gold);
          font-size: 12px;
          letter-spacing: 1px;
        }

        .main-footer p {
          margin: 16px 0 0;
          color: #9faab6;
          font-size: 11px;
          line-height: 1.9;
        }

        @media (max-width: 700px) {
          .entry-wall {
            width: 7%;
          }

          .entry-frame {
            left: 7%;
            right: 7%;
            top: 12%;
            border-width: 9px;
            border-bottom: 0;
          }

          .entry-floor {
            clip-path: polygon(
              7% 0,
              93% 0,
              100% 100%,
              0 100%
            );
          }

          .intro-copy {
            top: 35%;
          }

          .intro-copy h1 {
            font-size: 29px;
            letter-spacing: -1px;
          }

          .intro-kicker {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .intro-copy p {
            font-size: 11px;
          }

          .welcome-copy span {
            font-size: 24px;
          }

          .welcome-copy strong {
            font-size: 12px;
          }

          .room-window {
            left: 30%;
            width: 60%;
          }

          .sofa {
            left: 13%;
            width: 60%;
          }

          .main-header {
            height: 75px;
            padding: 0 18px;
          }

          .brand-mark {
            width: 36px;
            height: 36px;
            font-size: 24px;
          }

          .brand-text strong {
            font-size: 14px;
          }

          .brand-text small {
            font-size: 8px;
          }

          .header-phone span {
            display: none;
          }

          .selection-section {
            padding: 38px 12px 45px;
          }

          .selection-heading {
            margin-bottom: 30px;
          }

          .selection-heading h2 {
            font-size: 27px;
          }

          .selection-heading p {
            font-size: 12px;
          }

          .complex-grid {
            gap: 9px;
          }

          .complex-card {
            min-height: 390px;
            padding: 14px;
          }

          .card-top {
            font-size: 8px;
            letter-spacing: .5px;
          }

          .card-top svg {
            width: 18px;
          }

          .card-eyebrow {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .card-number {
            font-size: 75px;
            letter-spacing: -4px;
          }

          .card-content h3 {
            font-size: 29px;
          }

          .card-content p {
            font-size: 10px;
            line-height: 1.6;
          }

          .card-action {
            font-size: 11px;
            margin-top: 20px;
            padding-top: 15px;
          }

          .action-circle {
            width: 32px;
            height: 32px;
          }

          .action-circle svg {
            width: 17px;
          }

          .main-footer {
            padding: 22px 18px;
          }

          .footer-row {
            font-size: 10px;
          }

          .main-footer p {
            font-size: 10px;
          }
        }

        @media (max-width: 370px) {
          .complex-card {
            padding: 11px;
          }

          .card-number {
            font-size: 65px;
          }

          .card-content h3 {
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
