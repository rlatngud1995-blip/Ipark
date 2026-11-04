
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://cheonaniparkcity34.com";
const PHONE = "041-556-0303";
const TEL = "tel:0415560303";

export const metadata: Metadata = {
  title: "천안 아이파크 시티 3·4단지 | 분양·모델하우스 방문 안내",
  description:
    "천안 아이파크 시티 3단지·4단지 분양 정보, 단지 조감도, 조경, 커뮤니티 및 모델하우스 방문 상담 안내. 미소부동산 041-556-0303. 비공식 분양 안내 사이트입니다.",
  alternates: { canonical: SITE },
  openGraph: {
    title: "천안 아이파크 시티 3·4단지 분양 안내",
    description:
      "천안 아이파크 시티 3·4단지 단지 정보와 방문 상담 안내",
    url: SITE,
    type: "website",
    images: ["/IMG_2192.jpeg"],
  },
};

const photos = {
  hero: "/IMG_2192.jpeg",
  mainExterior: "/IMG_2191.jpeg",
  exteriorDay: "/IMG_2189.jpeg",
  exteriorNight: "/IMG_2190.jpeg",
  exteriorEvening: "/IMG_2161.jpeg",
  aerialThree: "/IMG_2162.jpeg",
  aerialFour: "/IMG_2166.jpeg",
  gardenOne: "/IMG_2163.jpeg",
  gardenTwo: "/IMG_2193.jpeg",
  gardenThree: "/IMG_2194.jpeg",
  entranceThree: "/IMG_2182.jpeg",
  entranceFour: "/IMG_2183.jpeg",
  communityOne: "/IMG_2184.jpeg",
  communityTwo: "/IMG_2185.jpeg",
  streetOne: "/IMG_2186.jpeg",
  streetTwo: "/IMG_2187.jpeg",
  streetThree: "/IMG_2188.jpeg",
  rooftopOne: "/IMG_2180.jpeg",
  rooftopTwo: "/IMG_2181.jpeg",
  exteriorExtra: "/IMG_2164.jpeg",
};

const highlights = [
  {
    number: "01",
    label: "ARCHITECTURE",
    title: "도시의 새로운 주거 풍경",
    description:
      "다양한 각도에서 살펴보는 천안 아이파크 시티의 외관과 단지 이미지",
    image: photos.exteriorDay,
  },
  {
    number: "02",
    label: "LANDSCAPE",
    title: "일상에 여유를 더하는 조경",
    description:
      "녹지와 산책 동선, 휴게 공간을 중심으로 살펴보는 단지 조경 계획 이미지",
    image: photos.gardenOne,
  },
  {
    number: "03",
    label: "COMMUNITY",
    title: "생활과 연결되는 공간",
    description:
      "단지 내 커뮤니티 및 공용 공간의 디자인과 분위기를 확인해 보세요",
    image: photos.communityOne,
  },
];

const galleries = [
  {
    category: "단지 외관",
    title: "아이파크 시티의 건축 이미지",
    description: "주간과 야간의 단지 외관을 살펴보세요.",
    images: [
      { src: photos.mainExterior, alt: "천안 아이파크 시티 아파트 외관" },
      { src: photos.exteriorNight, alt: "천안 아이파크 시티 야경" },
      { src: photos.exteriorEvening, alt: "천안 아이파크 시티 저녁 외관" },
      { src: photos.exteriorExtra, alt: "천안 아이파크 시티 주간 외관" },
    ],
  },
  {
    category: "조경 공간",
    title: "단지 안에서 만나는 자연",
    description: "중앙정원과 녹지, 산책 공간의 계획 이미지를 소개합니다.",
    images: [
      { src: photos.gardenOne, alt: "천안 아이파크 시티 중앙정원" },
      { src: photos.gardenTwo, alt: "천안 아이파크 시티 조경과 산책로" },
      { src: photos.gardenThree, alt: "천안 아이파크 시티 잔디광장" },
    ],
  },
  {
    category: "커뮤니티와 생활시설",
    title: "생활의 편리함을 생각한 공간",
    description:
      "커뮤니티 건물과 단지 내 보행·생활 공간을 이미지로 살펴보세요.",
    images: [
      { src: photos.communityOne, alt: "천안 아이파크 시티 커뮤니티 건물" },
      { src: photos.communityTwo, alt: "천안 아이파크 시티 생활시설" },
      { src: photos.streetOne, alt: "천안 아이파크 시티 상업시설 거리" },
      { src: photos.streetTwo, alt: "천안 아이파크 시티 단지 내 보행 공간" },
      { src: photos.streetThree, alt: "천안 아이파크 시티 생활시설 전경" },
    ],
  },
  {
    category: "특화 공간",
    title: "새로운 시선으로 바라보는 일상",
    description:
      "옥상 공간과 주변 경관을 담은 특화설계 이미지입니다.",
    images: [
      { src: photos.rooftopOne, alt: "천안 아이파크 시티 옥상 공간과 호수 조망" },
      { src: photos.rooftopTwo, alt: "천안 아이파크 시티 옥상 테라스 야경" },
    ],
  },
];

function Photo({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`ip-photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="ip-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="ip-home">
      {/* HEADER */}
      <header className="ip-header">
        <div className="ip-header-inner">
          <Link href="/" className="ip-logo">
            <strong>IPARK CITY</strong>
            <small>CHEONAN 3 · 4</small>
          </Link>

          <nav className="ip-nav">
            <a href="#overview">사업 안내</a>
            <a href="#complex">3·4단지</a>
            <a href="#gallery">단지 갤러리</a>
            <a href="#reservation">방문 상담</a>
          </nav>

          <a href={TEL} className="ip-header-call">
            전화 상담
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="ip-hero">
        <div className="ip-hero-image">
          <Image
            src={photos.hero}
            alt="천안 아이파크 시티 3·4단지 전체 조감도"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <div className="ip-hero-overlay" />

        <div className="ip-container ip-hero-content">
          <span>CHEONAN IPARK CITY</span>

          <h1>
            천안 아이파크 시티
            <br />
            <strong>3·4단지</strong>
          </h1>

          <p>
            천안 아이파크 시티의 새로운 주거 공간.
            <br />
            단지 조감도부터 조경과 커뮤니티까지
            <br />
            다양한 모습을 확인해 보세요.
          </p>

          <div className="ip-hero-buttons">
            <a href="#complex" className="ip-button-gold">
              3·4단지 살펴보기
            </a>

            <a href={TEL} className="ip-button-outline">
              방문 상담 전화
            </a>
          </div>

          <small>
            미소부동산 운영 비공식 분양 안내 사이트
            <br />
            이미지는 이해를 돕기 위한 조감도 및 연출 이미지입니다.
          </small>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="ip-section">
        <div className="ip-container ip-overview">
          <div>
            <SectionHeading
              eyebrow="PROJECT OVERVIEW"
              title="천안의 새로운 주거 공간을 만나다"
              description="천안 아이파크 시티 3단지와 4단지의 건축 이미지, 단지 배치, 조경 및 공용공간을 한곳에서 살펴보세요."
            />

            <p className="ip-body-text">
              단지별 이미지와 주요 공간을 확인하고,
              분양 관련 세부 정보와 방문 상담은
              안내 전화로 문의해 주세요.
              실제 공급 조건과 시설 계획은
              공식 분양 자료를 통해 확인해야 합니다.
            </p>

            <a href="#complex" className="ip-text-link">
              단지별 정보 보기 →
            </a>
          </div>

          <Photo
            src={photos.mainExterior}
            alt="천안 아이파크 시티 아파트 외관"
          />
        </div>
      </section>

      {/* COMPLEX */}
      <section id="complex" className="ip-section ip-soft">
        <div className="ip-container">
          <SectionHeading
            eyebrow="THE COMPLEX"
            title="3단지와 4단지"
            description="각 단지의 출입구와 조감도를 중심으로 살펴보세요."
          />

          <div className="ip-complex-grid">
            {[
              {
                number: "03",
                name: "천안 아이파크 시티 3단지",
                entrance: photos.entranceThree,
                aerial: photos.aerialThree,
                href: "/complex/3",
                description: "3단지 정문과 단지 배치 조감도",
              },
              {
                number: "04",
                name: "천안 아이파크 시티 4단지",
                entrance: photos.entranceFour,
                aerial: photos.aerialFour,
                href: "/complex/4",
                description: "4단지 정문과 단지 배치 조감도",
              },
            ].map((item) => (
              <article className="ip-complex-card" key={item.number}>
                <Photo
                  src={item.entrance}
                  alt={`${item.name} 정문 조감도`}
                />

                <div className="ip-complex-content">
                  <span>COMPLEX {item.number}</span>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <Photo
                    src={item.aerial}
                    alt={`${item.name} 단지 배치 조감도`}
                  />

                  <Link href={item.href} className="ip-complex-link">
                    <span>단지 상세정보 보기</span>
                    <span>↗</span>
                  </Link>

                  <a href={TEL} className="ip-complex-call">
                    분양 및 방문 상담 ☎
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="ip-section">
        <div className="ip-container">
          <SectionHeading
            eyebrow="LIFESTYLE"
            title="공간으로 만나는 아이파크 시티"
            description="건축, 조경, 커뮤니티를 중심으로 단지의 주요 이미지를 소개합니다."
          />

          <div className="ip-highlight-grid">
            {highlights.map((item) => (
              <article className="ip-highlight" key={item.number}>
                <Photo src={item.image} alt={item.title} />

                <div className="ip-highlight-copy">
                  <span>{item.number}</span>
                  <div>
                    <small>{item.label}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="ip-section ip-soft">
        <div className="ip-container">
          <SectionHeading
            eyebrow="IMAGE GALLERY"
            title="아이파크 시티 갤러리"
            description="제공된 조감도와 연출 이미지를 공간별로 분류했습니다."
          />

          {galleries.map((group) => (
            <div className="ip-gallery-group" key={group.category}>
              <div className="ip-gallery-heading">
                <span>{group.category}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="ip-gallery-grid">
                {group.images.map((item) => (
                  <Photo
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reservation" className="ip-reservation">
        <div className="ip-container">
          <span>VISIT & CONSULTATION</span>

          <h2>모델하우스 방문 상담 안내</h2>

          <p>
            천안 아이파크 시티 3단지·4단지의
            분양 정보와 방문 관련 사항은
            전화로 문의해 주세요.
            실제 방문 가능 일정은 상담 시 확인해 드립니다.
          </p>

          <strong>{PHONE}</strong>

          <a href={TEL} className="ip-button-gold">
            전화로 방문 상담하기
          </a>

          <small>방문 예약은 전화 상담을 통해 안내됩니다.</small>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ip-footer">
        <div className="ip-container">
          <strong>IPARK CITY</strong>
          <p>천안 아이파크 시티 3·4단지</p>
          <p>분양 안내: 미소부동산</p>

          <a href={TEL}>{PHONE}</a>

          <div className="ip-footer-notice">
            본 사이트는 미소부동산이 운영하는
            비공식 분양 안내 홈페이지이며,
            시행사·시공사의 공식 홈페이지가 아닙니다.
            이미지 및 표현은 이해를 돕기 위한 것으로
            실제 시공, 설계 및 공급 내용과 차이가 있을 수 있습니다.
          </div>

          <small>
            © {new Date().getFullYear()} IPARK CITY INFORMATION.
          </small>
        </div>
      </footer>

      {/* MOBILE CALL */}
      <div className="ip-mobile-call">
        <a href={TEL}>
          ☎ 방문예약 · 전화상담 {PHONE}
        </a>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        body {
          margin: 0;
          overflow-x: hidden;
          font-family: Arial, "Noto Sans KR", sans-serif;
        }

        .ip-home {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          color: #202020;
          background: white;
        }

        .ip-home a {
          color: inherit;
          text-decoration: none;
        }

        .ip-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ip-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 30;
          height: 80px;
          border-bottom: 1px solid #ffffff30;
        }

        .ip-header-inner {
          max-width: 1200px;
          height: 100%;
          margin: auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ip-logo {
          color: white !important;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .ip-logo strong {
          font-size: 21px;
          letter-spacing: 2px;
        }

        .ip-logo small {
          margin-top: 5px;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .ip-nav {
          display: flex;
          gap: 28px;
        }

        .ip-nav a {
          color: white !important;
          font-size: 13px;
        }

        .ip-header-call {
          padding: 12px 20px;
          border: 1px solid #ffffff90;
          color: white !important;
          font-size: 13px;
          white-space: nowrap;
        }

        .ip-hero {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: flex-end;
          color: white;
          background: #18232e;
          overflow: hidden;
        }

        .ip-hero-image {
          position: absolute;
          inset: 0;
        }

        .ip-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(0,0,0,.88),
            rgba(0,0,0,.35) 60%,
            rgba(0,0,0,.35)
          );
        }

        .ip-hero-content {
          position: relative;
          z-index: 2;
          padding-top: 150px;
          padding-bottom: 100px;
        }

        .ip-hero-content > span {
          color: #e5cfad;
          font-size: 12px;
          letter-spacing: 3px;
        }

        .ip-hero h1 {
          margin: 24px 0;
          font-size: clamp(40px, 6vw, 78px);
          line-height: 1.2;
          letter-spacing: -2px;
        }

        .ip-hero h1 strong {
          font-weight: 700;
        }

        .ip-hero-content > p {
          max-width: 600px;
          font-size: 16px;
          line-height: 2;
          color: #ffffffdd;
        }

        .ip-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 35px;
        }

        .ip-button-gold,
        .ip-button-outline {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 52px;
          padding: 15px 26px;
          font-size: 14px;
          font-weight: 700;
        }

        .ip-button-gold {
          background: #b59b77;
          color: white !important;
        }

        .ip-button-outline {
          border: 1px solid #ffffffaa;
          color: white !important;
        }

        .ip-hero-content > small {
          display: block;
          margin-top: 35px;
          font-size: 11px;
          line-height: 1.9;
          color: #ffffffaa;
        }

        .ip-section {
          padding: 100px 0;
        }

        .ip-soft {
          background: #f6f5f2;
        }

        .ip-heading {
          margin-bottom: 45px;
        }

        .ip-heading > span {
          color: #a38a67;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .ip-heading h2 {
          margin: 15px 0;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.3;
          letter-spacing: -1.5px;
          overflow-wrap: break-word;
        }

        .ip-heading p {
          max-width: 700px;
          color: #777;
          font-size: 15px;
          line-height: 1.9;
        }

        .ip-overview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .ip-body-text {
          color: #666;
          font-size: 14px;
          line-height: 2;
        }

        .ip-text-link {
          display: inline-block;
          margin-top: 25px;
          padding-bottom: 8px;
          border-bottom: 1px solid #333;
          font-size: 14px;
          font-weight: 700;
        }

        .ip-photo {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #e8e8e8;
        }

        .ip-complex-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .ip-complex-card {
          min-width: 0;
          overflow: hidden;
          background: white;
        }

        .ip-complex-content {
          padding: 28px;
        }

        .ip-complex-content > span {
          color: #a38a67;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .ip-complex-content h3 {
          margin: 15px 0;
          font-size: 25px;
          line-height: 1.4;
        }

        .ip-complex-content > p {
          margin-bottom: 25px;
          color: #777;
          font-size: 14px;
        }

        .ip-complex-link {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          margin-top: 20px;
          border-top: 1px solid #ddd;
          font-size: 14px;
          font-weight: 700;
        }

        .ip-complex-call {
          display: block;
          padding: 15px;
          background: #b59b77;
          color: white !important;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
        }

        .ip-highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .ip-highlight .ip-photo {
          aspect-ratio: 4 / 3;
        }

        .ip-highlight-copy {
          display: flex;
          gap: 15px;
          margin-top: 22px;
        }

        .ip-highlight-copy > span {
          color: #b59b77;
          font-size: 13px;
          font-weight: 700;
        }

        .ip-highlight-copy small {
          color: #aaa;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .ip-highlight-copy h3 {
          margin: 10px 0;
          font-size: 20px;
          line-height: 1.5;
        }

        .ip-highlight-copy p {
          color: #777;
          font-size: 13px;
          line-height: 1.9;
        }

        .ip-gallery-group {
          margin-bottom: 75px;
        }

        .ip-gallery-heading {
          margin-bottom: 25px;
          padding-bottom: 25px;
          border-bottom: 1px solid #ddd;
        }

        .ip-gallery-heading > span {
          color: #a38a67;
          font-size: 12px;
          font-weight: 700;
        }

        .ip-gallery-heading h3 {
          margin: 12px 0;
          font-size: 28px;
        }

        .ip-gallery-heading p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        .ip-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .ip-reservation {
          padding: 100px 0;
          background: #18232e;
          color: white;
          text-align: center;
        }

        .ip-reservation .ip-container > span {
          color: #d9c4a5;
          font-size: 12px;
          letter-spacing: 3px;
        }

        .ip-reservation h2 {
          margin: 25px 0;
          font-size: clamp(30px, 4vw, 48px);
        }

        .ip-reservation p {
          max-width: 600px;
          margin: 0 auto;
          color: #ffffffbb;
          font-size: 15px;
          line-height: 2;
        }

        .ip-reservation strong {
          display: block;
          margin: 35px 0;
          font-size: clamp(30px, 5vw, 55px);
        }

        .ip-reservation small {
          display: block;
          margin-top: 25px;
          color: #ffffff99;
          font-size: 12px;
        }

        .ip-footer {
          padding: 50px 0 110px;
          background: #111820;
          color: #ffffffaa;
        }

        .ip-footer strong {
          color: white;
          font-size: 20px;
          letter-spacing: 2px;
        }

        .ip-footer p {
          font-size: 13px;
        }

        .ip-footer a {
          display: inline-block;
          margin-top: 10px;
          color: white !important;
          font-weight: 700;
        }

        .ip-footer-notice {
          max-width: 800px;
          margin: 30px 0;
          color: #ffffff88;
          font-size: 12px;
          line-height: 2;
        }

        .ip-footer small {
          font-size: 11px;
        }

        .ip-mobile-call {
          display: none;
        }

        @media (max-width: 900px) {
          .ip-nav {
            display: none;
          }

          .ip-overview {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ip-highlight-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }
        }

        @media (max-width: 700px) {
          .ip-container {
            width: calc(100% - 36px);
          }

          .ip-header {
            height: 70px;
          }

          .ip-header-inner {
            padding: 0 18px;
          }

          .ip-logo strong {
            font-size: 18px;
          }

          .ip-logo small {
            font-size: 8px;
          }

          .ip-header-call {
            padding: 10px 13px;
            font-size: 12px;
          }

          .ip-hero {
            min-height: 690px;
          }

          .ip-hero-content {
            padding-top: 150px;
            padding-bottom: 75px;
          }

          .ip-hero h1 {
            font-size: 39px;
            letter-spacing: -1.5px;
          }

          .ip-hero-content > p {
            font-size: 13px;
            line-height: 2;
          }

          .ip-hero-buttons {
            flex-direction: column;
          }

          .ip-hero-buttons a {
            width: 100%;
          }

          .ip-section {
            padding: 70px 0;
          }

          .ip-heading {
            margin-bottom: 30px;
          }

          .ip-heading h2 {
            font-size: 30px;
          }

          .ip-heading p {
            font-size: 13px;
          }

          .ip-complex-grid,
          .ip-gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .ip-complex-content {
            padding: 20px;
          }

          .ip-complex-content h3 {
            font-size: 21px;
          }

          .ip-photo {
            aspect-ratio: 16 / 10;
          }

          .ip-gallery-heading h3 {
            font-size: 23px;
          }

          .ip-reservation {
            padding: 75px 0;
          }

          .ip-reservation h2 {
            font-size: 30px;
          }

          .ip-reservation p {
            font-size: 13px;
          }

          .ip-reservation strong {
            font-size: 31px;
          }

          .ip-mobile-call {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            display: block;
            padding: 10px 15px;
            padding-bottom: calc(10px + env(safe-area-inset-bottom));
            background: #17202a;
          }

          .ip-mobile-call a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 52px;
            background: #b59b77;
            color: white !important;
            font-size: 14px;
            font-weight: 700;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </main>
  );
}
