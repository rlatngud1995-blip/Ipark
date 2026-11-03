
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  CalendarDays,
  Clock3,
  UserRound,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const SITE = "https://cheonaniparkcity34.com";
const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

// 문자 수신 가능한 번호인지 반드시 확인하세요.
const SMS_PHONE = "0415560303";

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
        "미소부동산 운영 천안 아이파크 시티 3단지·4단지 부동산 정보 및 상담 안내 홈페이지",
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
        "천안 아이파크 시티 3단지·4단지 부동산 정보 및 방문 상담 안내",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: "천안아이파크시티 3·4단지 분양정보",
      description:
        "천안아이파크시티3단지·4단지 및 성성아이파크시티3단지·4단지 분양정보, 모델하우스·견본주택 방문 상담 안내",
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

const TIME_OPTIONS = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function Home() {
  const [complex, setComplex] = useState<"3" | "4">("3");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:00");
  const [memo, setMemo] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleReservation(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setError("");

    const cleanName = name.trim();
    const cleanPhone = phone.replace(/[^0-9]/g, "");

    if (!cleanName) {
      setError("예약자 성함을 입력해 주세요.");
      return;
    }

    if (
      !/^01[016789][0-9]{7,8}$/.test(cleanPhone)
    ) {
      setError("올바른 휴대전화 번호를 입력해 주세요.");
      return;
    }

    if (!date || date < localToday) {
      setError("오늘 이후의 방문 희망일을 선택해 주세요.");
      return;
    }

    if (!TIME_OPTIONS.includes(time)) {
      setError("방문 희망 시간을 선택해 주세요.");
      return;
    }

    if (!consent) {
      setError("개인정보 수집·이용 동의가 필요합니다.");
      return;
    }

    const message = [
      "[천안 아이파크 시티 방문예약 신청]",
      "",
      `희망 단지: ${complex}단지`,
      `예약자 성함: ${cleanName}`,
      `연락처: ${cleanPhone}`,
      `방문 희망일: ${date}`,
      `방문 희망시간: ${time}`,
      `문의사항: ${memo.trim() || "없음"}`,
      "",
      "※ 방문 일정은 담당자 확인 후 확정됩니다.",
    ].join("\n");

    const separator = /iPhone|iPad|iPod/i.test(
      navigator.userAgent
    )
      ? "&"
      : "?";

    window.location.href =
      `sms:${SMS_PHONE}${separator}body=` +
      encodeURIComponent(message);
  }

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
            분양정보 및 방문 상담 안내
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

      {/* 방문예약 */}
      <section
        className="reservation-section"
        id="reservation"
      >
        <div className="reservation-container">
          <div className="reservation-intro">
            <span className="section-eyebrow">
              VISIT RESERVATION
            </span>

            <h2>
              모델하우스
              <br />
              방문예약
            </h2>

            <p>
              천안 아이파크 시티 3·4단지
              <br />
              방문 상담을 신청해 주세요.
            </p>

            <div className="reservation-info">
              <div>
                <CalendarDays size={20} />
                <span>방문 희망 날짜 및 시간 선택</span>
              </div>
              <div>
                <UserRound size={20} />
                <span>예약자 정보 입력</span>
              </div>
              <div>
                <CheckCircle2 size={20} />
                <span>담당자 확인 후 일정 안내</span>
              </div>
            </div>

            <div className="reservation-contact">
              <span>전화 상담</span>
              <a href={TEL}>{PHONE}</a>
            </div>
          </div>

          <form
            className="reservation-form"
            onSubmit={handleReservation}
          >
            <div className="form-heading">
              <span>RESERVATION FORM</span>
              <h3>방문예약 신청</h3>
              <p>
                아래 정보를 입력하신 후
                문자로 신청해 주세요.
              </p>
            </div>

            <div className="form-field">
              <label>방문 희망 단지 *</label>
              <div className="complex-radio">
                <button
                  type="button"
                  className={
                    complex === "3" ? "selected" : ""
                  }
                  onClick={() => setComplex("3")}
                >
                  3단지
                </button>
                <button
                  type="button"
                  className={
                    complex === "4" ? "selected" : ""
                  }
                  onClick={() => setComplex("4")}
                >
                  4단지
                </button>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="visitor-name">
                예약자 성함 *
              </label>
              <input
                id="visitor-name"
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="성함을 입력해 주세요"
                maxLength={30}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="visitor-phone">
                연락처 *
              </label>
              <input
                id="visitor-phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="010-0000-0000"
                maxLength={13}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="visit-date">
                  방문 희망일 *
                </label>
                <input
                  id="visit-date"
                  type="date"
                  value={date}
                  min={localToday}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="visit-time">
                  방문 희망 시간 *
                </label>
                <select
                  id="visit-time"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                  required
                >
                  {TIME_OPTIONS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="visit-memo">
                문의사항 (선택)
              </label>
              <textarea
                id="visit-memo"
                value={memo}
                onChange={(e) =>
                  setMemo(e.target.value)
                }
                placeholder="궁금하신 내용을 입력해 주세요"
                maxLength={300}
                rows={3}
              />
            </div>

            <label className="privacy-check">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) =>
                  setConsent(e.target.checked)
                }
                required
              />
              <span>
                개인정보 수집·이용에 동의합니다.
                (필수)
              </span>
            </label>

            <div className="privacy-details">
              <p>
                수집 항목: 성함, 연락처,
                방문 희망 단지·일시, 문의사항
              </p>
              <p>
                이용 목적: 방문 상담 신청 확인
                및 일정 안내
              </p>
              <p>
                보유 기간: 상담 목적 달성 후
                지체 없이 파기. 단, 법령상
                보존 의무가 있는 경우 해당 기간 보관
              </p>
              <p>
                동의를 거부할 수 있으나,
                거부 시 방문예약 신청이 제한됩니다.
              </p>
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button
              className="reservation-submit"
              type="submit"
            >
              문자로 방문예약 신청하기
              <ArrowRight size={19} />
            </button>

            <p className="form-notice">
              신청 버튼을 누르면 문자 앱이 열립니다.
              문자 앱에서 전송을 완료해야 접수되며,
              방문 일정은 담당자 확인 후 확정됩니다.
            </p>
          </form>
        </div>
      </section>

      {/* 검색엔진과 방문객을 위한 단지 안내 */}
      <section className="information-section">
        <div className="information-container">
          <span className="section-eyebrow">
            CHEONAN IPARK CITY
          </span>

          <h2>천안 아이파크 시티 분양정보</h2>

          <p>
            천안 아이파크 시티 3단지는
            충청남도 천안시 서북구 부대동
            394-2 일원에 위치하며
            896세대로 안내됩니다.
            4단지는 부대동 384-20 일원에
            위치하며 818세대로 안내됩니다.
          </p>

          <p>
            미소부동산은 천안아이파크시티
            3·4단지 및 성성아이파크시티
            3·4단지 관련 사업개요,
            입지환경, 평면도와
            모델하우스·견본주택 방문 상담
            정보를 안내합니다.
          </p>

          <div className="information-links">
            <Link href="/complex/3">
              3단지 분양정보
              <ArrowUpRight size={17} />
            </Link>

            <Link href="/complex/4">
              4단지 분양정보
              <ArrowUpRight size={17} />
            </Link>
          </div>
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

        html {
          scroll-behavior: smooth;
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

        button,
        input,
        select,
        textarea {
          font: inherit;
        }

        .ipark-home {
          min-height: 100vh;
        }

        /* 메인 */

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

        /* 방문예약 */

        .ipark-home .reservation-section {
          padding: 110px 5%;
          background: #f5f5f3;
          color: #1b2228;
        }

        .ipark-home .reservation-container {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 75px;
          align-items: start;
          max-width: 1180px;
          margin: auto;
        }

        .ipark-home .section-eyebrow {
          display: block;
          color: #78858e;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .ipark-home .reservation-intro h2 {
          margin: 25px 0;
          font-size: clamp(42px, 5vw, 66px);
          line-height: 1.3;
          font-weight: 500;
          letter-spacing: -2px;
        }

        .ipark-home .reservation-intro > p {
          color: #6d777e;
          font-size: 16px;
          line-height: 2;
        }

        .ipark-home .reservation-info {
          display: flex;
          flex-direction: column;
          gap: 23px;
          margin-top: 55px;
        }

        .ipark-home .reservation-info > div {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #505d66;
          font-size: 14px;
        }

        .ipark-home .reservation-info svg {
          color: #536c7c;
          flex-shrink: 0;
        }

        .ipark-home .reservation-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 55px;
          padding-top: 30px;
          border-top: 1px solid #d5d9dc;
        }

        .ipark-home .reservation-contact span {
          color: #777;
          font-size: 12px;
        }

        .ipark-home .reservation-contact a {
          font-size: 28px;
          font-weight: 700;
        }

        .ipark-home .reservation-form {
          padding: 45px;
          background: #fff;
          box-shadow: 0 20px 70px rgba(24,40,50,.06);
        }

        .ipark-home .form-heading {
          margin-bottom: 35px;
        }

        .ipark-home .form-heading > span {
          color: #87929a;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .ipark-home .form-heading h3 {
          margin: 12px 0;
          font-size: 30px;
          font-weight: 600;
        }

        .ipark-home .form-heading p {
          color: #888;
          font-size: 13px;
        }

        .ipark-home .form-field {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin-bottom: 23px;
        }

        .ipark-home .form-field > label {
          font-size: 13px;
          font-weight: 600;
        }

        .ipark-home .form-field input,
        .ipark-home .form-field select,
        .ipark-home .form-field textarea {
          width: 100%;
          min-width: 0;
          padding: 15px 16px;
          border: 1px solid #dce0e3;
          border-radius: 0;
          background: #fff;
          color: #20262a;
          font-size: 14px;
          outline: none;
        }

        .ipark-home .form-field input:focus,
        .ipark-home .form-field select:focus,
        .ipark-home .form-field textarea:focus {
          border-color: #263d4d;
        }

        .ipark-home .form-field textarea {
          resize: vertical;
        }

        .ipark-home .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .ipark-home .complex-radio {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .ipark-home .complex-radio button {
          padding: 16px;
          border: 1px solid #dce0e3;
          background: #fff;
          color: #343b40;
          font-size: 14px;
          cursor: pointer;
        }

        .ipark-home .complex-radio button.selected {
          border-color: #253746;
          background: #253746;
          color: #fff;
          font-weight: 600;
        }

        .ipark-home .privacy-check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.7;
          cursor: pointer;
        }

        .ipark-home .privacy-check input {
          width: 17px;
          height: 17px;
          margin-top: 3px;
          accent-color: #253746;
        }

        .ipark-home .privacy-details {
          margin: 16px 0 25px;
          padding: 16px;
          background: #f4f5f5;
        }

        .ipark-home .privacy-details p {
          margin: 5px 0;
          color: #727a80;
          font-size: 11px;
          line-height: 1.8;
        }

        .ipark-home .form-error {
          margin-bottom: 15px;
          color: #b42318;
          font-size: 13px;
        }

        .ipark-home .reservation-submit {
          width: 100%;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          border: 0;
          background: #253746;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .ipark-home .reservation-submit:hover {
          background: #172733;
        }

        .ipark-home .form-notice {
          margin: 16px 0 0;
          color: #90969b;
          font-size: 11px;
          line-height: 1.8;
          text-align: center;
        }

        /* 분양정보 */

        .ipark-home .information-section {
          padding: 85px 5%;
          background: #fff;
          color: #1b2228;
        }

        .ipark-home .information-container {
          max-width: 1000px;
          margin: auto;
        }

        .ipark-home .information-container h2 {
          margin: 20px 0 25px;
          font-size: clamp(27px, 4vw, 40px);
          font-weight: 600;
          letter-spacing: -1px;
        }

        .ipark-home .information-container p {
          color: #626d75;
          font-size: 14px;
          line-height: 2;
          word-break: keep-all;
        }

        .ipark-home .information-links {
          display: flex;
          gap: 12px;
          margin-top: 30px;
        }

        .ipark-home .information-links a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          min-width: 190px;
          padding: 17px 20px;
          border: 1px solid #d9dfe3;
          font-size: 13px;
          font-weight: 600;
        }

        .ipark-home .information-links a:hover {
          border-color: #253746;
        }

        /* 하단 */

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

        /* 모바일 */

        @media (max-width: 800px) {
          .ipark-home .reservation-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ipark-home .reservation-info {
            margin-top: 30px;
          }

          .ipark-home .reservation-contact {
            margin-top: 30px;
          }
        }

        @media (max-width: 700px) {
          .ipark-home .hero {
            min-height: 100svh;
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

          .ipark-home .reservation-section {
            padding: 75px 16px;
          }

          .ipark-home .reservation-intro h2 {
            font-size: 42px;
          }

          .ipark-home .reservation-intro > p {
            font-size: 14px;
          }

          .ipark-home .reservation-form {
            padding: 27px 19px;
          }

          .ipark-home .form-heading h3 {
            font-size: 26px;
          }

          .ipark-home .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .ipark-home .information-section {
            padding: 70px 20px;
          }

          .ipark-home .information-container h2 {
            font-size: 26px;
          }

          .ipark-home .information-container p {
            font-size: 12px;
          }

          .ipark-home .information-links {
            flex-direction: column;
          }

          .ipark-home .information-links a {
            width: 100%;
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
