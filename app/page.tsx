
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useState,
  type FormEvent,
} from "react";

/* =====================================
   기본 설정
===================================== */

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

/* =====================================
   메인 슬라이드
===================================== */

const SLIDES = [
  {
    image: "/IMG_2192.jpeg",
    title: "천안 아이파크 시티",
  },
  {
    image: "/IMG_2191.jpeg",
    title: "천안 아이파크 시티 외관",
  },
  {
    image: "/IMG_2161.jpeg",
    title: "천안 아이파크 시티 야경",
  },
];

/* =====================================
   3단지 / 4단지
===================================== */

const COMPLEXES = [
  {
    number: "03",
    name: "3단지",
    image: "/IMG_2182.jpeg",
    href: "/complex/3",
    households: "896세대",
    address: "천안시 서북구 부대동 394-2",
    floors: "지하 3층 ~ 지상 최고 35층",
  },
  {
    number: "04",
    name: "4단지",
    image: "/IMG_2183.jpeg",
    href: "/complex/4",
    households: "818세대",
    address: "천안시 서북구 부대동 384-20",
    floors: "지하 2층 ~ 지상 최고 35층",
  },
];

/* =====================================
   FAQ
===================================== */

const FAQS = [
  {
    question:
      "천안 아이파크 시티 3단지와 4단지는 어디에 있나요?",
    answer:
      "3단지는 천안시 서북구 부대동 394-2, " +
      "4단지는 부대동 384-20 일원에 위치합니다. " +
      "각 단지 상세페이지에서 사업개요와 " +
      "입지환경을 확인할 수 있습니다.",
  },
  {
    question:
      "천안 아이파크 시티 분양가는 어디에서 확인하나요?",
    answer:
      "3단지와 4단지 상세페이지에서 " +
      "주택형별 분양가격 안내를 확인할 수 있습니다. " +
      "실제 계약 조건과 옵션 비용은 " +
      "공식 입주자모집공고를 확인해야 합니다.",
  },
  {
    question:
      "84㎡, 102㎡, 116㎡ 평면도를 볼 수 있나요?",
    answer:
      "각 단지 상세페이지에서 " +
      "84㎡ A·B, 102㎡ A·B, 116㎡ 주택형의 " +
      "평면도 안내를 확인할 수 있습니다. " +
      "정확한 평면 구성은 공식 자료를 확인해 주세요.",
  },
  {
    question:
      "모델하우스나 견본주택 방문은 어떻게 하나요?",
    answer:
      "방문을 원하시면 희망 단지와 일정을 확인한 뒤 " +
      "041-556-0303으로 전화해 주세요. " +
      "방문 가능 여부와 상담 일정은 " +
      "전화 상담을 통해 확인해야 합니다.",
  },
  {
    question:
      "천안 아이파크 시티 3·4단지는 총 몇 세대인가요?",
    answer:
      "3단지 896세대, 4단지 818세대로 " +
      "총 1,714세대입니다. " +
      "단지별 세부 공급 정보는 " +
      "각 상세페이지에서 확인할 수 있습니다.",
  },
  {
    question:
      "천안 아이파크 시티 3단지와 4단지의 차이점은 무엇인가요?",
    answer:
      "두 단지는 세대수, 위치, 건축 규모와 " +
      "사업 주체 등에 차이가 있습니다. " +
      "3단지·4단지 비교 페이지에서 " +
      "주요 정보를 한눈에 확인할 수 있습니다.",
  },
];

/* =====================================
   방문 상담 입력폼
===================================== */

type Reservation = {
  name: string;
  phone: string;
  complex: string;
  date: string;
  time: string;
};

const INITIAL_FORM: Reservation = {
  name: "",
  phone: "",
  complex: "3단지",
  date: "",
  time: "시간 협의",
};

/* =====================================
   메인 페이지
===================================== */

export default function HomePage() {
  const [slide, setSlide] = useState(0);

  const [form, setForm] =
    useState<Reservation>(INITIAL_FORM);

  const [submitted, setSubmitted] =
    useState(false);

  const [todayString, setTodayString] =
    useState("");

  useEffect(() => {
    const now = new Date();

    setTodayString(
      `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, "0")}-${String(
        now.getDate()
      ).padStart(2, "0")}`
    );

    const timer = window.setInterval(() => {
      setSlide(
        (current) =>
          (current + 1) % SLIDES.length
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const updateForm = (
    field: keyof Reservation,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSubmitted(false);
  };

  const handleReservation = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.date
    ) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="ipark-home">

      {/* =====================================
          HEADER
      ===================================== */}

      <header className="ipark-header">
        <Link
          href="/"
          className="ipark-logo"
        >
          <strong>IPARK CITY</strong>
          <small>CHEONAN 3 · 4</small>
        </Link>

        <nav className="ipark-nav">
          <a href="#complex-select">
            단지안내
          </a>

          <Link href="/compare">
            단지비교
          </Link>

          <a href="#information">
            분양정보
          </a>

          <a href="#faq">
            자주 묻는 질문
          </a>

          <a href="#reservation">
            방문상담
          </a>
        </nav>

        <a
          href={TEL}
          className="header-phone"
        >
          <span>상담문의</span>
          <strong>{PHONE}</strong>
        </a>
      </header>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="ipark-hero">
        {SLIDES.map((item, index) => (
          <div
            key={item.image}
            className={`hero-slide ${
              slide === index
                ? "active"
                : ""
            }`}
            aria-hidden={slide !== index}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-image"
            />
          </div>
        ))}

        <div className="hero-overlay" />

        <div className="hero-inner">
          <span className="hero-eyebrow">
            PREMIUM RESIDENTIAL LIFESTYLE
          </span>

          <div className="hero-line" />

          <h1>
            천안 아이파크 시티
            <br />
            <em>3 · 4단지</em>
          </h1>

          <p>
            천안 아이파크 시티 분양정보
            <br />
            평면도 · 분양가 · 방문상담 안내
          </p>

          <a
            href="#complex-select"
            className="hero-action"
          >
            단지별 정보 확인
            <span>↗</span>
          </a>
        </div>

        <div className="slider-controls">
          <button
            type="button"
            onClick={() =>
              setSlide(
                (current) =>
                  (
                    current -
                    1 +
                    SLIDES.length
                  ) % SLIDES.length
              )
            }
            aria-label="이전 사진"
          >
            ‹
          </button>

          <span>
            0{slide + 1}
            <i />
            0{SLIDES.length}
          </span>

          <button
            type="button"
            onClick={() =>
              setSlide(
                (current) =>
                  (current + 1) %
                  SLIDES.length
              )
            }
            aria-label="다음 사진"
          >
            ›
          </button>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span>CHEONAN IPARK CITY</span>
        </div>
      </section>

      {/* =====================================
          COMPLEX SELECT
      ===================================== */}

      <section
        id="complex-select"
        className="complex-section"
      >
        <div className="home-container">

          <div className="section-heading">
            <span>THE COMPLEX</span>
            <div className="heading-line" />

            <h2>
              천안 아이파크 시티
              <br />
              <strong>3 · 4단지</strong>
            </h2>

            <p>
              총 1,714세대 규모의 주거단지
              <br />
              각 단지의 정보를 확인해 보세요.
            </p>
          </div>

          <div className="premium-complex-grid">
            {COMPLEXES.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="premium-complex-card"
                aria-label={`천안 아이파크 시티 ${item.name} 상세정보`}
              >
                <Image
                  src={item.image}
                  alt={`천안 아이파크 시티 ${item.name} 조감도`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="premium-complex-image"
                />

                <div className="premium-complex-shade" />

                <div className="premium-complex-top">
                  <span>
                    CHEONAN IPARK CITY
                  </span>
                  <span>{item.number}</span>
                </div>

                <div className="premium-complex-content">
                  <span className="premium-complex-label">
                    COMPLEX {item.number}
                  </span>

                  <h3>
                    천안 아이파크 시티
                    <br />
                    <strong>{item.name}</strong>
                  </h3>

                  <p className="complex-card-info">
                    {item.households}
                    <br />
                    {item.address}
                  </p>

                  <div className="premium-complex-bottom">
                    <span>
                      단지 상세정보 보기
                    </span>

                    <span className="premium-complex-circle">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="complex-disclaimer">
            ※ 이미지는 이해를 돕기 위한
            조감도 및 연출 이미지로 실제
            시공 내용과 차이가 있을 수 있습니다.
          </p>

          {/* =====================================
              NEW: COMPLEX COMPARISON
          ===================================== */}

          <div className="complex-compare-cta">
            <div className="complex-compare-text">
              <span>
                COMPLEX COMPARISON
              </span>

              <h3>
                3단지 · 4단지 비교
              </h3>

              <p>
                세대수 · 위치 · 건축 규모
                · 평면도 · 분양정보
                <br />
                두 단지의 차이점을
                한눈에 확인해 보세요.
              </p>
            </div>

            <Link
              href="/compare"
              className="complex-compare-button"
            >
              3단지 · 4단지 비교하기
              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================
          PROJECT INFORMATION
      ===================================== */}

      <section
        id="information"
        className="information-section"
      >
        <div className="home-container">

          <div className="section-heading">
            <span>
              PROJECT INFORMATION
            </span>

            <div className="heading-line" />

            <h2>
              천안 아이파크 시티
              <br />
              <strong>
                단지별 분양정보
              </strong>
            </h2>

            <p>
              단지 위치부터 주택형,
              평면도와 분양가격까지
              <br />
              필요한 정보를 확인하세요.
            </p>
          </div>

          <div className="info-summary">
            <div>
              <span>총 세대수</span>
              <strong>1,714</strong>
              <small>
                3·4단지 합계 / 세대
              </small>
            </div>

            <div>
              <span>3단지</span>
              <strong>896</strong>
              <small>세대</small>
            </div>

            <div>
              <span>4단지</span>
              <strong>818</strong>
              <small>세대</small>
            </div>

            <div>
              <span>주택형</span>
              <strong>
                84·102·116
              </strong>
              <small>㎡</small>
            </div>
          </div>

          <div className="information-grid">
            {COMPLEXES.map((item) => (
              <article
                className="information-card"
                key={item.number}
              >
                <span className="info-card-label">
                  COMPLEX {item.number}
                </span>

                <h3>
                  천안 아이파크 시티
                  {" "}
                  {item.name}
                </h3>

                <dl>
                  <div>
                    <dt>위치</dt>
                    <dd>{item.address}</dd>
                  </div>

                  <div>
                    <dt>총 세대수</dt>
                    <dd>{item.households}</dd>
                  </div>

                  <div>
                    <dt>건축 규모</dt>
                    <dd>{item.floors}</dd>
                  </div>

                  <div>
                    <dt>주택형</dt>
                    <dd>
                      84㎡ · 102㎡ · 116㎡
                    </dd>
                  </div>
                </dl>

                <p>
                  {item.name}의 사업개요,
                  평면도, 분양가격,
                  입지환경과 단지 안내를
                  확인할 수 있습니다.
                </p>

                <Link href={item.href}>
                  {item.name} 분양정보 확인
                  <span>↗</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="information-notice">
            ※ 공급 세대수와 주택형 등
            사업정보는 공식 입주자모집공고를
            우선하여 확인해 주세요.
          </p>

        </div>
      </section>

      {/* =====================================
          FAQ
      ===================================== */}

      <section
        id="faq"
        className="faq-section"
      >
        <div className="home-container">

          <div className="section-heading">
            <span>
              FREQUENTLY ASKED QUESTIONS
            </span>

            <div className="heading-line" />

            <h2>
              천안 아이파크 시티
              <br />
              <strong>
                자주 묻는 질문
              </strong>
            </h2>

            <p>
              분양가, 평면도, 모델하우스
              방문 관련 정보를 안내합니다.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span className="faq-number">
                    Q{String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {item.question}
                  </strong>

                  <span className="faq-plus">
                    +
                  </span>
                </summary>

                <div className="faq-answer">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="faq-compare-link">
            <Link href="/compare">
              천안 아이파크 시티
              3단지·4단지 비교정보 보기
              <span>↗</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================
          RESERVATION
      ===================================== */}

      <section
        id="reservation"
        className="reservation-section"
      >
        <div className="home-container">

          <div className="section-heading">
            <span>
              VISIT RESERVATION
            </span>

            <div className="heading-line" />

            <h2>
              방문 상담 정보 입력
            </h2>

            <p>
              천안 아이파크 시티 3·4단지
              <br />
              방문 상담을 안내해 드립니다.
            </p>
          </div>

          <div className="reservation-box">

            <div className="reservation-intro">
              <span>
                PRIVATE CONSULTATION
              </span>

              <h3>
                방문 상담을
                <br />
                준비하고 계신가요?
              </h3>

              <p>
                희망하시는 단지와
                방문 일정을 선택해 주세요.
                <br />
                전화 상담을 통해
                방문 가능 여부를
                확인하실 수 있습니다.
              </p>

              <div className="reservation-phone">
                <small>상담 연락처</small>
                <a href={TEL}>
                  {PHONE}
                </a>
              </div>
            </div>

            <form
              className="reservation-form"
              onSubmit={handleReservation}
            >
              <div className="form-heading">
                <span>
                  RESERVATION FORM
                </span>

                <h3>
                  방문 상담 정보 입력
                </h3>
              </div>

              <div className="form-field">
                <label htmlFor="visitor-name">
                  성함 <b>*</b>
                </label>

                <input
                  id="visitor-name"
                  type="text"
                  placeholder="성함을 입력해 주세요"
                  autoComplete="name"
                  required
                  maxLength={30}
                  value={form.name}
                  onChange={(event) =>
                    updateForm(
                      "name",
                      event.target.value
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="visitor-phone">
                  연락처 <b>*</b>
                </label>

                <input
                  id="visitor-phone"
                  type="tel"
                  placeholder="010-0000-0000"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  pattern="[0-9+\\-\\s]{9,20}"
                  title="올바른 전화번호를 입력해 주세요"
                  value={form.phone}
                  onChange={(event) =>
                    updateForm(
                      "phone",
                      event.target.value
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="visitor-complex">
                  관심 단지 <b>*</b>
                </label>

                <select
                  id="visitor-complex"
                  value={form.complex}
                  onChange={(event) =>
                    updateForm(
                      "complex",
                      event.target.value
                    )
                  }
                >
                  <option>3단지</option>
                  <option>4단지</option>
                  <option>
                    3·4단지 모두
                  </option>
                </select>
              </div>

              <div className="form-row">

                <div className="form-field">
                  <label htmlFor="visitor-date">
                    방문 희망일 <b>*</b>
                  </label>

                  <input
                    id="visitor-date"
                    type="date"
                    min={
                      todayString ||
                      undefined
                    }
                    required
                    value={form.date}
                    onChange={(event) =>
                      updateForm(
                        "date",
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="visitor-time">
                    희망 시간
                  </label>

                  <select
                    id="visitor-time"
                    value={form.time}
                    onChange={(event) =>
                      updateForm(
                        "time",
                        event.target.value
                      )
                    }
                  >
                    {[
                      "시간 협의",
                      "오전 10시",
                      "오전 11시",
                      "오후 1시",
                      "오후 2시",
                      "오후 3시",
                      "오후 4시",
                      "오후 5시",
                    ].map((time) => (
                      <option key={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <button
                type="submit"
                className="submit-button"
              >
                방문 상담 정보 확인
                <span>→</span>
              </button>

              {submitted && (
                <div
                  className="reservation-result"
                  role="status"
                >
                  <strong>
                    입력 내용을 확인해 주세요.
                  </strong>

                  <p>
                    {form.name}
                    {" / "}
                    {form.complex}
                    <br />
                    {form.date}
                    {" / "}
                    {form.time}
                    <br />
                    연락처: {form.phone}
                  </p>

                  <p>
                    아직 예약이 접수되지 않았습니다.
                    아래 버튼으로 전화하여
                    방문 일정을 확정해 주세요.
                  </p>

                  <a href={TEL}>
                    {PHONE} 전화 연결
                  </a>
                </div>
              )}

              <p className="form-notice">
                ※ 본 양식은 입력 내용을
                확인하는 용도입니다.
                정보는 서버로 전송되거나
                저장되지 않으며,
                실제 예약은 전화 상담 후
                확정됩니다.
              </p>

            </form>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT
      ===================================== */}

      <section className="home-contact">
        <div className="home-container">
          <span>CONTACT US</span>

          <h2>
            천안 아이파크 시티
            <br />
            분양 및 방문 상담
          </h2>

          <p>상담 연락처</p>

          <a href={TEL}>
            {PHONE}
          </a>
        </div>
      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="home-footer">
        <div className="home-container">

          <div className="footer-top">
            <div>
              <strong>IPARK CITY</strong>
              <p>
                천안 아이파크 시티 3·4단지
              </p>
            </div>

            <a href={TEL}>
              {PHONE}
            </a>
          </div>

          <div className="footer-links">
            <Link href="/complex/3">
              3단지 분양정보
            </Link>

            <Link href="/complex/4">
              4단지 분양정보
            </Link>

            <Link href="/compare">
              3·4단지 비교
            </Link>

            <a href="#faq">
              자주 묻는 질문
            </a>

            <a href="#reservation">
              방문 상담
            </a>
          </div>

          <p className="footer-disclaimer">
            본 사이트는 공식 분양 홈페이지가
            아닌 부동산 정보 안내 페이지입니다.
            이미지·사업 정보·분양 조건은
            변경될 수 있으므로 정확한 내용은
            공식 입주자모집공고 및 관련 자료를
            확인하시기 바랍니다.
          </p>

          <div className="footer-copy">
            © {new Date().getFullYear()}
            {" "}
            IPARK CITY INFORMATION.
          </div>

        </div>
      </footer>

      {/* =====================================
          MOBILE CALL
      ===================================== */}

      <div className="mobile-call">
        <a href={TEL}>
          ☎ 방문 상담 {PHONE}
        </a>
      </div>

      {/* =====================================
          CSS
      ===================================== */}

      <style jsx global>{`
        .ipark-home {
          background: #f7f5f0;
          color: #24282d;
          overflow-x: hidden;
          font-family: "Noto Sans KR", sans-serif;
        }

        .ipark-home * {
          box-sizing: border-box;
        }

        .ipark-home a {
          text-decoration: none;
        }

        .home-container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HEADER */

        .ipark-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 88px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #fff;
          border-bottom: 1px solid #ffffff30;
        }

        .ipark-logo {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex-shrink: 0;
        }

        .ipark-logo strong {
          font: 25px Georgia, serif;
          letter-spacing: 2px;
          color: #fff;
        }

        .ipark-logo small {
          font-size: 9px;
          letter-spacing: 3px;
          color: #e4d3b4;
        }

        .ipark-nav {
          display: flex;
          gap: 25px;
        }

        .ipark-nav a {
          font-size: 13px;
          color: #fff;
        }

        .header-phone {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: right;
          color: #fff;
        }

        .header-phone span {
          font-size: 10px;
          color: #c9ab78;
        }

        .header-phone strong {
          font-size: 17px;
        }

        /* HERO */

        .ipark-hero {
          position: relative;
          height: 100svh;
          min-height: 640px;
          max-height: 1050px;
          overflow: hidden;
          background: #101c2a;
          color: #fff;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.4s ease;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-image {
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(10,20,33,.85),
            rgba(10,20,33,.45) 65%,
            rgba(10,20,33,.25)
          );
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: min(1160px, calc(100% - 40px));
          height: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 110px 0 80px;
        }

        .hero-eyebrow {
          font-size: 12px;
          letter-spacing: 4px;
          color: #e4d3b4;
        }

        .hero-line {
          width: 55px;
          height: 1px;
          background: #c9ab78;
          margin: 28px 0;
        }

        .hero-inner h1 {
          margin: 0;
          font-size: clamp(42px, 6vw, 80px);
          font-weight: 400;
          letter-spacing: -3px;
          line-height: 1.3;
        }

        .hero-inner h1 em {
          font-family: Georgia, serif;
          font-style: normal;
          color: #e4d3b4;
          font-weight: 400;
        }

        .hero-inner p {
          margin: 28px 0 0;
          font-size: 17px;
          font-weight: 300;
          line-height: 2;
          color: #ffffffd9;
        }

        .hero-action {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 45px;
          margin-top: 40px;
          padding: 18px 25px;
          border: 1px solid #c9ab78;
          color: #fff;
          font-size: 13px;
          transition: .3s;
        }

        .hero-action:hover {
          background: #c9ab78;
          color: #101c2a;
        }

        .slider-controls {
          position: absolute;
          right: 6%;
          bottom: 65px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .slider-controls button {
          border: 1px solid #ffffff70;
          background: transparent;
          color: #fff;
          width: 42px;
          height: 42px;
          font-size: 27px;
          cursor: pointer;
        }

        .slider-controls span {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
        }

        .slider-controls i {
          width: 35px;
          height: 1px;
          background: #c9ab78;
        }

        .hero-bottom {
          position: absolute;
          bottom: 32px;
          left: 5%;
          right: 5%;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          letter-spacing: 2px;
          color: #ffffffa0;
        }

        /* COMMON SECTIONS */

        .complex-section,
        .information-section,
        .faq-section,
        .reservation-section {
          padding: 110px 0;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .section-heading > span {
          color: #b59b77;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .heading-line {
          width: 45px;
          height: 1px;
          background: #c9ab78;
          margin: 24px auto;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.45;
          letter-spacing: -2px;
        }

        .section-heading h2 strong {
          font-weight: 600;
        }

        .section-heading p {
          margin: 23px 0 0;
          color: #777;
          font-size: 15px;
          line-height: 2;
        }

        /* COMPLEX CARDS */

        .premium-complex-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .premium-complex-card {
          position: relative;
          display: block;
          height: 570px;
          overflow: hidden;
          background: #101c2a;
          color: #fff;
          isolation: isolate;
        }

        .premium-complex-image {
          object-fit: cover;
          object-position: center;
          transition: transform .8s ease;
        }

        .premium-complex-card:hover
        .premium-complex-image {
          transform: scale(1.055);
        }

        .premium-complex-shade {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(5,13,23,.38),
            rgba(5,13,23,.05) 38%,
            rgba(5,13,23,.35) 62%,
            rgba(5,13,23,.94)
          );
        }

        .premium-complex-top {
          position: absolute;
          top: 30px;
          left: 30px;
          right: 30px;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          letter-spacing: 2.5px;
        }

        .premium-complex-top span:last-child {
          font: 25px Georgia, serif;
          color: #e4d3b4;
        }

        .premium-complex-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 35px;
        }

        .premium-complex-label {
          color: #e4d3b4;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .premium-complex-content h3 {
          margin: 18px 0 15px;
          font-size: 29px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -1px;
        }

        .premium-complex-content h3 strong {
          font-size: 47px;
          font-weight: 500;
        }

        .complex-card-info {
          color: #f1e8d9;
          font-size: 13px;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .premium-complex-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #ffffff60;
          padding-top: 22px;
          font-size: 13px;
        }

        .premium-complex-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border: 1px solid #e4d3b4;
          border-radius: 50%;
          color: #e4d3b4;
          font-size: 23px;
        }

        .complex-disclaimer,
        .information-notice {
          margin-top: 20px;
          color: #888;
          font-size: 11px;
          line-height: 1.8;
          text-align: center;
        }

        /* NEW COMPARISON CTA */

        .complex-compare-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 35px;
          padding: 38px 42px;
          background: #17283a;
          color: #fff;
        }

        .complex-compare-text > span {
          color: #c9ab78;
          font-size: 10px;
          letter-spacing: 2.5px;
        }

        .complex-compare-text h3 {
          margin: 12px 0;
          font-size: 27px;
          font-weight: 500;
        }

        .complex-compare-text p {
          margin: 0;
          font-size: 13px;
          line-height: 1.9;
          color: #c5cbd0;
        }

        .complex-compare-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          min-width: 245px;
          padding: 18px 22px;
          background: #c9ab78;
          color: #101c2a;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          transition: background .2s;
        }

        .complex-compare-button:hover {
          background: #e4d3b4;
        }

        .complex-compare-button span {
          font-size: 20px;
        }

        /* INFORMATION */

        .information-section {
          background: #fff;
        }

        .info-summary {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #ddd7cb;
          border-bottom: 1px solid #ddd7cb;
          margin-bottom: 40px;
        }

        .info-summary > div {
          padding: 28px 15px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-summary > div + div {
          border-left: 1px solid #e7e3db;
        }

        .info-summary span {
          font-size: 12px;
          color: #888;
        }

        .info-summary strong {
          font-size: clamp(23px, 3vw, 37px);
          color: #17283a;
          font-weight: 500;
          letter-spacing: -1px;
        }

        .info-summary small {
          font-size: 11px;
          color: #999;
        }

        .information-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .information-card {
          background: #f7f5f0;
          padding: 38px;
          border: 1px solid #ebe5d9;
        }

        .info-card-label {
          color: #b59b77;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .information-card h3 {
          font-size: 25px;
          margin: 17px 0 27px;
          letter-spacing: -1px;
        }

        .information-card dl {
          margin: 0;
        }

        .information-card dl div {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #e4ded4;
          font-size: 13px;
        }

        .information-card dt {
          color: #777;
          flex-shrink: 0;
        }

        .information-card dd {
          margin: 0;
          text-align: right;
          font-weight: 600;
        }

        .information-card p {
          font-size: 13px;
          color: #777;
          line-height: 1.9;
          margin: 25px 0;
        }

        .information-card > a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 20px;
          background: #17283a;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
        }

        /* FAQ */

        .faq-section {
          background: #f7f5f0;
        }

        .faq-list {
          max-width: 900px;
          margin: auto;
          border-top: 1px solid #d9d3c8;
        }

        .faq-list details {
          border-bottom: 1px solid #d9d3c8;
        }

        .faq-list summary {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 12px;
          cursor: pointer;
          list-style: none;
        }

        .faq-list summary::-webkit-details-marker {
          display: none;
        }

        .faq-list summary strong {
          font-size: 15px;
          font-weight: 500;
          flex: 1;
        }

        .faq-number {
          color: #b59b77;
          font-size: 12px;
          flex-shrink: 0;
        }

        .faq-plus {
          font-size: 23px;
          color: #b59b77;
        }

        .faq-list details[open]
        .faq-plus {
          transform: rotate(45deg);
        }

        .faq-answer {
          padding: 0 45px 27px;
          font-size: 13px;
          color: #666;
          line-height: 2;
        }

        .faq-compare-link {
          display: flex;
          justify-content: center;
          margin-top: 35px;
        }

        .faq-compare-link a {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 17px 25px;
          background: #17283a;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
        }

        .faq-compare-link span {
          font-size: 19px;
          color: #c9ab78;
        }

        /* RESERVATION */

        .reservation-section {
          background: #fff;
        }

        .reservation-box {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          background: #f7f5f0;
        }

        .reservation-intro {
          background: #101c2a;
          color: #fff;
          padding: 65px 45px;
        }

        .reservation-intro > span {
          color: #c9ab78;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .reservation-intro h3 {
          margin: 35px 0 25px;
          font-size: 36px;
          font-weight: 400;
          line-height: 1.5;
        }

        .reservation-intro > p {
          color: #c5cbd0;
          font-size: 14px;
          line-height: 2;
        }

        .reservation-phone {
          margin-top: 65px;
          padding-top: 25px;
          border-top: 1px solid #ffffff35;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .reservation-phone small {
          color: #c9ab78;
          font-size: 12px;
        }

        .reservation-phone a {
          font-size: 28px;
          font-weight: 600;
          color: #fff;
        }

        .reservation-form {
          padding: 50px;
        }

        .form-heading {
          margin-bottom: 35px;
        }

        .form-heading span {
          color: #b59b77;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .form-heading h3 {
          margin: 12px 0 0;
          font-size: 25px;
        }

        .form-field {
          margin-bottom: 23px;
          min-width: 0;
        }

        .form-field label {
          display: block;
          margin-bottom: 10px;
          font-size: 13px;
          font-weight: 600;
        }

        .form-field label b {
          color: #b59b77;
        }

        .form-field input,
        .form-field select {
          display: block;
          width: 100%;
          min-width: 0;
          height: 53px;
          padding: 0 15px;
          border: 1px solid #dedbd5;
          border-radius: 0;
          background: #fff;
          color: #24282d;
          font-family: inherit;
          font-size: 14px;
        }

        .form-field input:focus,
        .form-field select:focus {
          outline: 1px solid #b59b77;
          border-color: #b59b77;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .submit-button {
          width: 100%;
          min-height: 58px;
          margin-top: 10px;
          padding: 16px 22px;
          border: 0;
          background: #b59b77;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .submit-button span {
          font-size: 23px;
        }

        .reservation-result {
          margin-top: 20px;
          padding: 20px;
          background: #fff;
          border: 1px solid #c9ab78;
          font-size: 13px;
          line-height: 1.9;
        }

        .reservation-result strong {
          display: block;
          font-size: 15px;
        }

        .reservation-result a {
          display: block;
          padding: 12px;
          margin-top: 15px;
          background: #101c2a;
          color: #fff;
          text-align: center;
          font-weight: 600;
        }

        .form-notice {
          margin: 20px 0 0;
          font-size: 11px;
          color: #888;
          line-height: 1.9;
        }

        /* CONTACT */

        .home-contact {
          padding: 90px 20px;
          text-align: center;
          background: #1b2b3d;
          color: #fff;
        }

        .home-contact span {
          color: #c9ab78;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .home-contact h2 {
          margin: 25px 0;
          font-size: clamp(30px, 4vw, 45px);
          font-weight: 400;
          line-height: 1.5;
        }

        .home-contact p {
          color: #c5cbd0;
          font-size: 14px;
        }

        .home-contact a {
          display: inline-block;
          margin-top: 20px;
          padding: 17px 35px;
          border: 1px solid #c9ab78;
          color: #e4d3b4;
          font-size: 23px;
          font-weight: 600;
        }

        /* FOOTER */

        .home-footer {
          padding: 50px 0 35px;
          background: #101820;
          color: #fff;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .footer-top strong {
          font: 23px Georgia, serif;
          letter-spacing: 2px;
        }

        .footer-top p {
          margin: 8px 0 0;
        }

        .footer-top a {
          font-size: 17px;
          font-weight: 600;
          color: #e4d3b4;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
        }

        .footer-links a {
          color: #e4d3b4;
          font-size: 12px;
        }

        .home-footer p {
          max-width: 900px;
          font-size: 11px;
          color: #a5adb4;
          line-height: 2;
        }

        .footer-copy {
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid #ffffff20;
          font-size: 10px;
          color: #888;
        }

        .mobile-call {
          display: none;
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .ipark-header {
            height: 70px;
            padding: 0 20px;
          }

          .ipark-logo strong {
            font-size: 19px;
          }

          .ipark-logo small {
            font-size: 8px;
          }

          .ipark-nav {
            display: none;
          }

          .header-phone span {
            font-size: 9px;
          }

          .header-phone strong {
            font-size: 13px;
          }

          .ipark-hero {
            height: 77svh;
            min-height: 560px;
            max-height: 760px;
          }

          .hero-inner {
            padding: 100px 0 95px;
          }

          .hero-eyebrow {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .hero-line {
            margin: 22px 0;
          }

          .hero-inner h1 {
            font-size: clamp(34px, 9vw, 49px);
            letter-spacing: -2px;
          }

          .hero-inner p {
            font-size: 13px;
            line-height: 1.9;
          }

          .hero-action {
            margin-top: 28px;
            padding: 15px 19px;
            font-size: 12px;
          }

          .slider-controls {
            right: 20px;
            bottom: 50px;
            gap: 10px;
          }

          .slider-controls button {
            width: 34px;
            height: 34px;
          }

          .slider-controls i {
            width: 18px;
          }

          .hero-bottom {
            bottom: 15px;
          }

          .hero-bottom span {
            font-size: 8px;
          }

          .complex-section,
          .information-section,
          .faq-section,
          .reservation-section {
            padding: 75px 0;
          }

          .section-heading {
            margin-bottom: 35px;
          }

          .section-heading h2 {
            font-size: 34px;
          }

          .section-heading p {
            font-size: 13px;
          }

          .premium-complex-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .premium-complex-card {
            height: 440px;
          }

          .premium-complex-top {
            top: 22px;
            left: 22px;
            right: 22px;
            font-size: 9px;
          }

          .premium-complex-content {
            padding: 25px;
          }

          .premium-complex-label {
            font-size: 10px;
          }

          .premium-complex-content h3 {
            font-size: 23px;
            margin: 12px 0 12px;
          }

          .premium-complex-content h3 strong {
            font-size: 39px;
          }

          .complex-card-info {
            font-size: 12px;
          }

          .premium-complex-circle {
            width: 42px;
            height: 42px;
          }

          /* MOBILE COMPARISON */

          .complex-compare-cta {
            flex-direction: column;
            align-items: stretch;
            gap: 25px;
            padding: 30px 24px;
            margin-top: 25px;
          }

          .complex-compare-text h3 {
            font-size: 23px;
          }

          .complex-compare-text p {
            font-size: 12px;
          }

          .complex-compare-button {
            min-width: 0;
            width: 100%;
          }

          .info-summary {
            grid-template-columns: repeat(2, 1fr);
          }

          .info-summary > div:nth-child(3) {
            border-left: 0;
            border-top: 1px solid #e7e3db;
          }

          .info-summary > div:nth-child(4) {
            border-top: 1px solid #e7e3db;
          }

          .information-grid {
            grid-template-columns: 1fr;
          }

          .information-card {
            padding: 25px;
          }

          .information-card h3 {
            font-size: 21px;
          }

          .information-card dl div {
            font-size: 12px;
          }

          .faq-list summary {
            gap: 12px;
            padding: 20px 5px;
          }

          .faq-list summary strong {
            font-size: 13px;
          }

          .faq-answer {
            padding: 0 15px 22px 43px;
            font-size: 12px;
          }

          .faq-compare-link a {
            width: 100%;
            justify-content: space-between;
            font-size: 12px;
          }

          .reservation-box {
            grid-template-columns: 1fr;
          }

          .reservation-intro {
            padding: 35px 25px;
          }

          .reservation-intro h3 {
            font-size: 27px;
            margin: 20px 0;
          }

          .reservation-intro > p {
            font-size: 12px;
          }

          .reservation-phone {
            margin-top: 25px;
          }

          .reservation-phone a {
            font-size: 23px;
          }

          .reservation-form {
            padding: 35px 22px;
          }

          .form-heading h3 {
            font-size: 22px;
          }

          .form-row {
            gap: 10px;
          }

          .form-field input,
          .form-field select {
            font-size: 13px;
            padding: 0 10px;
          }

          .home-contact {
            padding: 75px 20px;
          }

          .home-contact a {
            font-size: 21px;
          }

          .home-footer {
            padding-bottom: 115px;
          }

          .footer-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .mobile-call {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            padding: 10px 15px;
            padding-bottom: calc(
              10px + env(safe-area-inset-bottom)
            );
            background: #101c2a;
          }

          .mobile-call a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 52px;
            background: #c9ab78;
            color: #101c2a;
            font-size: 15px;
            font-weight: 700;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .hero-slide,
          .premium-complex-image {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
