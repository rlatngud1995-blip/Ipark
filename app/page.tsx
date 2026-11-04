
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
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    title: "천안 아이파크 시티 3·4단지 분양 안내",
    description:
      "천안 아이파크 시티 3·4단지 단지 정보와 방문 상담 안내",
    url: SITE,
    type: "website",
    images: [
      {
        url: "/IMG_2192.jpeg",
        width: 1200,
        height: 630,
        alt: "천안 아이파크 시티 3·4단지",
      },
    ],
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

const complexes = [
  {
    number: "03",
    name: "천안 아이파크 시티 3단지",
    entrance: photos.entranceThree,
    aerial: photos.aerialThree,
    description: "3단지 정문과 단지 배치 조감도",
    href: "/complex/3",
  },
  {
    number: "04",
    name: "천안 아이파크 시티 4단지",
    entrance: photos.entranceFour,
    aerial: photos.aerialFour,
    description: "4단지 정문과 단지 배치 조감도",
    href: "/complex/4",
  },
];

const galleries = [
  {
    category: "단지 외관",
    title: "아이파크 시티의 건축 이미지",
    description: "주간과 야간의 단지 외관을 살펴보세요.",
    images: [
      {
        src: photos.mainExterior,
        alt: "천안 아이파크 시티 아파트 외관",
      },
      {
        src: photos.exteriorNight,
        alt: "천안 아이파크 시티 야경",
      },
      {
        src: photos.exteriorEvening,
        alt: "천안 아이파크 시티 저녁 외관",
      },
      {
        src: photos.exteriorExtra,
        alt: "천안 아이파크 시티 주간 외관",
      },
    ],
  },
  {
    category: "조경 공간",
    title: "단지 안에서 만나는 자연",
    description:
      "중앙정원과 녹지, 산책 공간의 계획 이미지를 소개합니다.",
    images: [
      {
        src: photos.gardenOne,
        alt: "천안 아이파크 시티 중앙정원",
      },
      {
        src: photos.gardenTwo,
        alt: "천안 아이파크 시티 조경과 산책로",
      },
      {
        src: photos.gardenThree,
        alt: "천안 아이파크 시티 잔디광장",
      },
    ],
  },
  {
    category: "커뮤니티와 생활시설",
    title: "생활의 편리함을 생각한 공간",
    description:
      "커뮤니티 건물과 단지 내 보행·생활 공간을 이미지로 살펴보세요.",
    images: [
      {
        src: photos.communityOne,
        alt: "천안 아이파크 시티 커뮤니티 건물",
      },
      {
        src: photos.communityTwo,
        alt: "천안 아이파크 시티 생활시설",
      },
      {
        src: photos.streetOne,
        alt: "천안 아이파크 시티 상업시설 거리",
      },
      {
        src: photos.streetTwo,
        alt: "천안 아이파크 시티 단지 내 보행 공간",
      },
      {
        src: photos.streetThree,
        alt: "천안 아이파크 시티 생활시설 전경",
      },
    ],
  },
  {
    category: "특화 공간",
    title: "새로운 시선으로 바라보는 일상",
    description:
      "옥상 공간과 주변 경관을 담은 특화설계 이미지입니다.",
    images: [
      {
        src: photos.rooftopOne,
        alt: "천안 아이파크 시티 옥상 공간과 호수 조망",
      },
      {
        src: photos.rooftopTwo,
        alt: "천안 아이파크 시티 옥상 테라스 야경",
      },
    ],
  },
];

function Photo({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
    />
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
    <div className="mb-9 md:mb-12">
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#a38a67]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#202020] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#202020]">

      {/* HEADER */}
      <header className="absolute left-0 right-0 top-0 z-30 border-b border-white/20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="text-white">
            <div className="text-lg font-bold tracking-[0.12em] md:text-xl">
              IPARK CITY
            </div>
            <div className="mt-1 text-[9px] tracking-[0.16em] text-white/80">
              CHEONAN 3 · 4
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white md:flex">
            <a href="#overview">사업 안내</a>
            <a href="#complex">3·4단지</a>
            <a href="#gallery">단지 갤러리</a>
            <a href="#reservation">방문 상담</a>
          </nav>

          <a
            href={TEL}
            className="rounded-sm border border-white/70 px-4 py-3 text-xs font-semibold text-white transition hover:bg-white hover:text-black md:px-6"
          >
            <span className="md:hidden">전화 상담</span>
            <span className="hidden md:inline">{PHONE}</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#1b222b] md:min-h-[850px]">
        <Image
          src={photos.hero}
          alt="천안 아이파크 시티 3·4단지 전체 조감도"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/35" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-8 md:pb-36">
          <p className="mb-6 text-xs font-medium tracking-[0.35em] text-[#e5cfad] md:text-sm">
            CHEONAN IPARK CITY
          </p>

          <h1 className="max-w-5xl text-[42px] font-semibold leading-[1.17] tracking-[-0.055em] text-white md:text-[78px]">
            천안 아이파크 시티
            <br />
            <span className="text-white/90">3·4단지</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-white/85 md:text-lg">
            단지 조감도부터 조경, 커뮤니티 공간까지
            <br className="hidden md:block" />
            천안 아이파크 시티의 다양한 모습을 확인해 보세요.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#complex"
              className="flex min-h-[52px] items-center justify-center bg-[#b59b77] px-7 py-4 text-sm font-semibold text-white"
            >
              3·4단지 살펴보기
            </a>

            <a
              href={TEL}
              className="flex min-h-[52px] items-center justify-center border border-white/70 px-7 py-4 text-sm font-semibold text-white"
            >
              방문 상담 전화
            </a>
          </div>

          <p className="mt-9 text-xs leading-6 text-white/65">
            본 홈페이지는 미소부동산에서 운영하는 비공식 분양 안내 사이트입니다.
            <br />
            게재된 이미지는 이해를 돕기 위한 조감도 및 연출 이미지입니다.
          </p>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section id="overview" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-8">
          <div>
            <SectionHeading
              eyebrow="PROJECT OVERVIEW"
              title="천안의 새로운 주거 공간을 만나다"
              description="천안 아이파크 시티 3단지와 4단지의 건축 이미지, 단지 배치, 조경 및 공용공간을 한곳에서 살펴볼 수 있도록 구성했습니다."
            />

            <p className="text-sm leading-8 text-neutral-600">
              단지별 이미지와 주요 공간을 확인하고,
              분양 관련 세부 정보와 방문 상담은 안내 전화로 문의해 주세요.
              실제 공급 조건과 시설 계획은 공식 분양 자료를 통해 확인해야 합니다.
            </p>

            <a
              href="#complex"
              className="mt-8 inline-flex border-b border-[#202020] pb-2 text-sm font-semibold"
            >
              단지별 정보 보기 →
            </a>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden bg-neutral-100">
            <Photo
              src={photos.mainExterior}
              alt="천안 아이파크 시티 아파트 단지 외관"
            />
          </div>
        </div>
      </section>

      {/* COMPLEX 3 & 4 */}
      <section
        id="complex"
        className="bg-[#f6f5f2] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="THE COMPLEX"
            title="3단지와 4단지"
            description="각 단지의 출입구와 조감도를 중심으로 살펴보세요."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {complexes.map((item) => (
              <article
                key={item.number}
                className="min-w-0 overflow-hidden bg-white"
              >
                <div className="group relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Photo
                    src={item.entrance}
                    alt={`${item.name} 정문 조감도`}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#a38a67]">
                    COMPLEX {item.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-500">
                    {item.description}
                  </p>

                  <div className="group relative mt-7 aspect-[16/10] overflow-hidden bg-neutral-100">
                    <Photo
                      src={item.aerial}
                      alt={`${item.name} 단지 배치 조감도`}
                    />
                  </div>

                  <Link
                    href={item.href}
                    className="mt-7 flex items-center justify-between border-t border-neutral-200 pt-5 text-sm font-semibold"
                  >
                    <span>{item.number === "03" ? "3단지" : "4단지"} 상세정보 보기</span>
                    <span aria-hidden="true">↗</span>
                  </Link>

                  <a
                    href={TEL}
                    className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4 text-sm text-neutral-600"
                  >
                    <span>분양 및 방문 전화상담</span>
                    <span aria-hidden="true">☎</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="LIFESTYLE"
            title="공간으로 만나는 아이파크 시티"
            description="건축, 조경, 커뮤니티를 중심으로 단지의 주요 이미지를 소개합니다."
          />

          <div className="grid gap-10 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.number}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <Photo
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="mt-6 flex gap-4">
                  <span className="text-xs font-semibold text-[#b59b77]">
                    {item.number}
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-400">
                      {item.label}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section
        id="gallery"
        className="bg-[#f6f5f2] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="IMAGE GALLERY"
            title="아이파크 시티 갤러리"
            description="제공된 조감도와 연출 이미지를 공간별로 분류했습니다."
          />

          <div className="space-y-20">
            {galleries.map((group) => (
              <section key={group.category}>
                <div className="mb-7 flex flex-col justify-between gap-3 border-b border-neutral-300 pb-6 md:flex-row md:items-end">
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#a38a67]">
                      {group.category}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {group.title}
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-neutral-500">
                    {group.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {group.images.map((item) => (
                    <div
                      key={item.src}
                      className="group relative aspect-[16/10] overflow-hidden bg-neutral-200"
                    >
                      <Photo
                        src={item.src}
                        alt={item.alt}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reservation"
        className="relative overflow-hidden bg-[#18202a] py-24 text-white md:py-32"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src={photos.exteriorNight}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#18202a]/75" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#d9c4a5]">
            VISIT & CONSULTATION
          </p>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            모델하우스 방문 상담 안내
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/75 md:text-base">
            천안 아이파크 시티 3단지·4단지의 분양 정보와
            방문 관련 사항은 전화로 문의해 주세요.
            실제 방문 가능 일정은 상담 시 확인해 드립니다.
          </p>

          <p className="mt-9 text-sm text-[#d9c4a5]">
            미소부동산 상담 안내
          </p>

          <p className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">
            {PHONE}
          </p>

          <a
            href={TEL}
            className="mx-auto mt-9 inline-flex min-h-[56px] items-center justify-center bg-[#b59b77] px-12 py-4 text-sm font-semibold text-white transition hover:bg-[#a58b68]"
          >
            전화로 방문 상담하기
          </a>

          <p className="mt-6 text-xs text-white/55">
            방문 예약은 전화 상담을 통해 안내됩니다.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111820] py-12 text-white/60">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <p className="text-lg font-bold tracking-[0.12em] text-white">
                IPARK CITY
              </p>

              <p className="mt-2 text-xs">
                천안 아이파크 시티 3·4단지
              </p>

              <p className="mt-4 text-sm">
                분양 안내: 미소부동산
              </p>

              <a
                href={TEL}
                className="mt-2 inline-block text-sm text-white"
              >
                {PHONE}
              </a>
            </div>

            <div className="max-w-lg text-xs leading-7">
              <p>
                본 사이트는 미소부동산이 운영하는 비공식 분양 안내
                홈페이지이며, 시행사·시공사의 공식 홈페이지가 아닙니다.
              </p>

              <p className="mt-2">
                이미지 및 표현은 이해를 돕기 위한 것으로 실제 시공,
                설계 및 공급 내용과 차이가 있을 수 있습니다.
                정확한 내용은 공식 분양 자료를 확인하시기 바랍니다.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs">
            © {new Date().getFullYear()} IPARK CITY INFORMATION.
          </div>
        </div>
      </footer>

      {/* MOBILE CALL BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#17202a] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
        <a
          href={TEL}
          className="flex min-h-[52px] items-center justify-center rounded-sm bg-[#b59b77] px-5 py-4 text-sm font-bold text-white"
        >
          방문예약 · 전화상담 {PHONE}
        </a>
      </div>

      <div className="h-20 md:hidden" />
    </main>
  );
}
