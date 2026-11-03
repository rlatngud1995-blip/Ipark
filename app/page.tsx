
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

const menus = [
  { name: "사업안내", href: "#project" },
  { name: "입지환경", href: "#location" },
  { name: "프리미엄", href: "#premium" },
  { name: "단지안내", href: "#complex" },
  { name: "분양안내", href: "#sales" },
  { name: "모델하우스", href: "#modelhouse" },
];

const complexes = [
  {
    number: "03",
    title: "천안 아이파크 시티 3단지",
    subtitle: "CHEONAN IPARK CITY 3",
    description:
      "천안 아이파크 시티 3단지의 사업정보와 단지 안내, 모델하우스 방문 상담 정보를 확인하세요.",
  },
  {
    number: "04",
    title: "천안 아이파크 시티 4단지",
    subtitle: "CHEONAN IPARK CITY 4",
    description:
      "천안 아이파크 시티 4단지의 사업정보와 단지 안내, 모델하우스 방문 상담 정보를 확인하세요.",
  },
];

const features = [
  {
    number: "01",
    english: "LOCATION",
    title: "입지환경",
    description:
      "교통, 교육, 생활 편의시설 등 단지 주변의 입지 정보를 안내합니다.",
  },
  {
    number: "02",
    english: "LIFESTYLE",
    title: "프리미엄",
    description:
      "단지별 조경, 커뮤니티 및 주거 특화 정보를 확인하세요.",
  },
  {
    number: "03",
    english: "RESIDENCE",
    title: "단지안내",
    description:
      "3단지와 4단지의 배치도 및 평면도 정보를 구분해 안내합니다.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <style jsx global>{`
        .ip-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,.22);
        }

        .ip-header-inner {
          width: min(1440px, calc(100% - 64px));
          height: 92px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .ip-logo {
          font-size: 23px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .ip-logo small {
          display: block;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 3px;
          margin-top: 4px;
        }

        .ip-nav {
          display: flex;
          align-items: center;
          gap: 27px;
        }

        .ip-nav a {
          font-size: 13px;
          white-space: nowrap;
        }

        .ip-nav a:hover {
          color: #d6b989;
        }

        .ip-phone {
          border: 1px solid rgba(255,255,255,.6);
          padding: 12px 18px;
          font-size: 13px;
          white-space: nowrap;
        }

        .ip-menu-button {
          display: none;
          background: transparent;
          color: white;
          border: 0;
        }

        .ip-hero {
          min-height: 780px;
          height: 100svh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          background:
            linear-gradient(
              180deg,
              rgba(8,17,30,.55),
              rgba(8,17,30,.35) 45%,
              rgba(8,17,30,.85)
            ),
            linear-gradient(135deg,#263b50,#101c2a);
          overflow: hidden;
        }

        .ip-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/hero.jpg");
          background-position: center;
          background-size: cover;
          opacity: .78;
        }

        .ip-hero-content {
          position: relative;
          z-index: 2;
          padding: 100px 20px 70px;
          animation: ipFade 1.2s ease both;
        }

        .ip-eyebrow {
          color: #dfc79f;
          letter-spacing: 6px;
          font-size: 12px;
          margin-bottom: 30px;
        }

        .ip-hero h1 {
          font-size: clamp(37px, 5.8vw, 83px);
          font-weight: 400;
          letter-spacing: -3px;
          line-height: 1.35;
          margin: 0;
          word-break: keep-all;
        }

        .ip-hero-subtitle {
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 2px;
          margin-top: 25px;
          color: #eee;
        }

        .ip-hero-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 45px;
        }

        .ip-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 52px;
          padding: 14px 25px;
          font-size: 13px;
          transition: .25s;
        }

        .ip-btn-gold {
          background: #c9ab78;
          color: #101c2a;
        }

        .ip-btn-outline {
          border: 1px solid rgba(255,255,255,.7);
          color: white;
        }

        .ip-btn:hover {
          transform: translateY(-3px);
        }

        .ip-hero-bottom {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 12px;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .ip-notice {
          background: #eee9df;
          padding: 13px 20px;
          text-align: center;
          font-size: 12px;
          line-height: 1.8;
          color: #4d4d4d;
        }

        .ip-center {
          text-align: center;
        }

        .ip-section-heading {
          max-width: 800px;
          margin: 0 auto 55px;
        }

        .ip-grid-two {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 24px;
        }

        .ip-complex-card {
          position: relative;
          min-height: 450px;
          padding: 45px;
          background: linear-gradient(145deg,#273b50,#101b28);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }

        .ip-complex-card:nth-child(2) {
          background: linear-gradient(145deg,#41454a,#172331);
        }

        .ip-complex-number {
          position: absolute;
          top: 30px;
          right: 35px;
          font-family: Georgia,serif;
          font-size: 95px;
          color: rgba(255,255,255,.1);
        }

        .ip-complex-card h3 {
          font-size: clamp(24px,3vw,35px);
          font-weight: 500;
          margin: 10px 0 15px;
        }

        .ip-complex-card p {
          font-size: 14px;
          line-height: 1.9;
          color: #ddd;
          max-width: 420px;
        }

        .ip-card-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          color: #e2c697;
          font-size: 13px;
        }

        .ip-features {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .ip-feature {
          border-top: 1px solid #bca276;
          padding-top: 25px;
        }

        .ip-feature-number {
          font-family: Georgia,serif;
          font-size: 42px;
          color: #c9ab78;
        }

        .ip-feature h3 {
          font-size: 25px;
          font-weight: 500;
          margin: 15px 0;
        }

        .ip-feature p {
          color: #858585;
          font-size: 14px;
          line-height: 2;
        }

        .ip-banner {
          padding: 110px 20px;
          text-align: center;
          background: #101c2a;
          color: white;
        }

        .ip-banner h2 {
          font-size: clamp(29px,4vw,52px);
          font-weight: 400;
          margin: 18px 0;
        }

        .ip-banner p {
          color: #bbb;
          font-size: 14px;
          line-height: 2;
        }

        .ip-info-box {
          padding: 35px;
          background: white;
          border: 1px solid #e8e4dc;
          min-height: 190px;
        }

        .ip-info-box h3 {
          font-size: 23px;
          font-weight: 500;
          margin: 0 0 15px;
        }

        .ip-info-box p {
          color: #777;
          line-height: 1.9;
          font-size: 14px;
        }

        .ip-footer {
          background: #0c1520;
          color: #aaa;
          padding: 65px 20px 105px;
          font-size: 12px;
          line-height: 2;
        }

        .ip-footer strong {
          display: block;
          font-size: 22px;
          color: white;
          margin-bottom: 18px;
        }

        .ip-mobile-bottom {
          display: none;
        }

        .ip-mobile-menu {
          position: fixed;
          inset: 0;
          background: #101c2a;
          z-index: 100;
          padding: 35px;
          color: white;
        }

        .ip-mobile-menu-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ip-mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-top: 65px;
        }

        .ip-mobile-menu-links a {
          font-size: 23px;
        }

        @keyframes ipFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media(max-width:1100px) {
          .ip-nav {
            display: none;
          }

          .ip-menu-button {
            display: block;
          }
        }

        @media(max-width:768px) {
          .ip-header-inner {
            width: calc(100% - 36px);
            height: 72px;
          }

          .ip-logo {
            font-size: 18px;
          }

          .ip-phone {
            display: none;
          }

          .ip-hero {
            min-height: 680px;
          }

          .ip-hero h1 {
            letter-spacing: -1.5px;
          }

          .ip-eyebrow {
            font-size: 10px;
            letter-spacing: 3px;
          }

          .ip-hero-subtitle {
            font-size: 13px;
            line-height: 1.9;
          }

          .ip-hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .ip-hero-actions .ip-btn {
            width: 220px;
          }

          .ip-grid-two,
          .ip-features {
            grid-template-columns: 1fr;
          }

          .ip-complex-card {
            min-height: 370px;
            padding: 30px;
          }

          .ip-banner {
            padding: 75px 20px;
          }

          .ip-mobile-bottom {
            display: grid;
            grid-template-columns: 1fr 1fr;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 60;
            box-shadow: 0 -4px 20px rgba(0,0,0,.15);
          }

          .ip-mobile-bottom a {
            min-height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
          }

          .ip-mobile-bottom a:first-child {
            background: #c9ab78;
            color: #101c2a;
          }

          .ip-mobile-bottom a:last-child {
            background: #101c2a;
            color: white;
          }
        }
      `}</style>

      <header className="ip-header">
        <div className="ip-header-inner">
          <a href="#" className="ip-logo">
            IPARK CITY
            <small>CHEONAN 3 · 4</small>
          </a>

          <nav className="ip-nav">
            {menus.map((menu) => (
              <a key={menu.name} href={menu.href}>
                {menu.name}
              </a>
            ))}
          </nav>

          <a className="ip-phone" href={TEL}>
            분양 상담 {PHONE}
          </a>

          <button
            className="ip-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            <Menu size={27} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="ip-mobile-menu">
          <div className="ip-mobile-menu-top">
            <strong>IPARK CITY</strong>
            <button
              className="ip-menu-button"
              style={{ display: "block" }}
              onClick={() => setMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="ip-mobile-menu-links">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                onClick={() => setMenuOpen(false)}
              >
                {menu.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      <section className="ip-hero">
        <div className="ip-hero-content">
          <p className="ip-eyebrow">
            THE NEW RESIDENTIAL VISION
          </p>

          <h1>
            천안 아이파크 시티
            <br />
            3 · 4단지
          </h1>

          <p className="ip-hero-subtitle">
            새로운 주거의 가치를 만나는 공간
          </p>

          <div className="ip-hero-actions">
            <a href="#project" className="ip-btn ip-btn-gold">
              분양정보 확인 <ArrowRight size={16} />
            </a>

            <a href="#modelhouse" className="ip-btn ip-btn-outline">
              모델하우스 상담 <ChevronRight size={16} />
            </a>
          </div>
        </div>

        <a href="#project" className="ip-hero-bottom">
          SCROLL DOWN
          <ArrowDown size={20} />
        </a>
      </section>

      <div className="ip-notice">
        본 홈페이지는 미소부동산에서 운영하는
        비공식 분양 안내 사이트이며,
        시행사·시공사의 공식 홈페이지가 아닙니다.
      </div>

      <section id="project" className="section">
        <div className="container">
          <div className="ip-center ip-section-heading">
            <p className="section-label">PROJECT OVERVIEW</p>
            <h2 className="section-title">
              천안 아이파크 시티
              <br />
              3·4단지 분양안내
            </h2>
            <p className="section-description">
              천안 아이파크 시티 3단지와 4단지의
              분양 및 견본주택 상담 정보를 안내합니다.
            </p>
          </div>

          <div className="ip-grid-two">
            {complexes.map((item) => (
              <article
                className="ip-complex-card"
                key={item.number}
              >
                <span className="ip-complex-number">
                  {item.number}
                </span>

                <p className="section-label">
                  {item.subtitle}
                </p>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a href="#modelhouse" className="ip-card-link">
                  방문 상담 안내 <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section dark-section">
        <div className="container">
          <div className="ip-center ip-section-heading">
            <p className="section-label">LOCATION</p>
            <h2 className="section-title">
              천안 성성권역의
              <br />
              주거환경을 살펴보다
            </h2>
            <p className="section-description">
              교통, 교육, 생활 인프라 등
              실제 확인된 입지 정보를 중심으로 안내합니다.
            </p>
          </div>

          <div className="ip-features">
            {features.map((item) => (
              <div className="ip-feature" key={item.number}>
                <span className="ip-feature-number">
                  {item.number}
                </span>
                <p className="section-label">{item.english}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="premium" className="section">
        <div className="container ip-center">
          <p className="section-label">PREMIUM LIFESTYLE</p>
          <h2 className="section-title">
            삶의 기준을 높이는
            <br />
            새로운 주거 경험
          </h2>
          <p className="section-description">
            단지별 프리미엄과 커뮤니티 시설은
            공식 분양 자료 확인 후 상세하게 안내합니다.
          </p>
          <div className="gold-line" />
        </div>
      </section>

      <section id="complex" className="section dark-section">
        <div className="container">
          <div className="ip-center ip-section-heading">
            <p className="section-label">COMPLEX GUIDE</p>
            <h2 className="section-title">
              단지별 상세 안내
            </h2>
            <p className="section-description">
              3단지와 4단지의 배치도,
              평면도 및 공급 정보를 구분해 안내할 예정입니다.
            </p>
          </div>

          <div className="ip-grid-two">
            <div className="ip-info-box">
              <h3>3단지 단지안내</h3>
              <p>
                단지배치도, 타입별 평면도 및
                상세 공급 정보를 준비 중입니다.
              </p>
            </div>

            <div className="ip-info-box">
              <h3>4단지 단지안내</h3>
              <p>
                단지배치도, 타입별 평면도 및
                상세 공급 정보를 준비 중입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sales" className="section">
        <div className="container ip-center">
          <p className="section-label">SALES INFORMATION</p>
          <h2 className="section-title">
            분양 정보 안내
          </h2>
          <p className="section-description">
            분양 일정, 공급 조건 및 모집공고 등은
            확인된 자료를 기준으로 업데이트합니다.
            <br />
            자세한 사항은 미소부동산으로 문의해 주세요.
          </p>
          <div className="gold-line" />
        </div>
      </section>

      <section id="modelhouse" className="ip-banner">
        <p className="section-label">MODEL HOUSE</p>

        <h2>
          모델하우스 · 견본주택
          <br />
          방문 상담 안내
        </h2>

        <p>
          천안 아이파크 시티 3·4단지
          <br />
          방문 상담 및 분양 문의
        </p>

        <div
          className="ip-hero-actions"
          style={{ marginTop: 30 }}
        >
          <a href={TEL} className="ip-btn ip-btn-gold">
            <Phone size={17} />
            {PHONE}
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 12 }}>
          미소부동산 상담 연결 · 실제 방문 가능 일정은
          전화로 확인해 주세요.
        </p>
      </section>

      <footer className="ip-footer">
        <div className="container">
          <strong>천안 아이파크 시티 3·4단지</strong>

          <p>운영 및 분양 상담 안내: 미소부동산</p>
          <p>상담전화: {PHONE}</p>
          <p>
            본 사이트는 미소부동산이 운영하는
            비공식 분양 안내 홈페이지입니다.
          </p>
          <p>
            시행사·시공사의 공식 홈페이지가 아니며,
            실제 분양 조건과 일정은 공식 자료를
            통해 확인하시기 바랍니다.
          </p>
          <p>
            © {new Date().getFullYear()} MISO REAL ESTATE.
          </p>
        </div>
      </footer>

      <div className="ip-mobile-bottom">
        <a href={TEL}>
          <Phone size={18} />
          전화 상담
        </a>

        <a href="#modelhouse">
          <CalendarDays size={18} />
          방문 상담
        </a>
      </div>
    </main>
  );
}
