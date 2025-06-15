"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="relative isolate min-h-screen font-[family-name:var(--font-montserrat)] bg-silver-medal overflow-hidden">
      {/* Title ::begin */}
      <div className="pt-36 mb-10 px-10 w-full lg:static absolute top-0 left-0">
        <h1 className="md:text-8xl text-5xl text-black font-bold font-[family-name:var(--font-roboto)]">
          JOIN OUR <span className="text-stoplight">SESSION</span>
        </h1>
      </div>
      {/* Title ::end */}

      {/* Content ::begin */}
      <div className="md:py-6 md:flex md:flex-row md:justify-between md:items-center w-full lg:static absolute bottom-0 left-0">
        {/* Contact Info ::begin */}
        <div className="px-10 grid grid-cols-1 gap-2 mb-6">
          {/* Instagram */}
          <div className="flex justify-start items-center md:p-2 gap-4">
            <Image
              src="/instagram.svg"
              alt="Instagram Icon"
              width={60}
              height={60}
            />
            <a
              href="https://www.instagram.com/bdg.clubdepadel"
              className="md:text-4xl text-3xl font-medium font-[family-name:var(--font-geist-mono)] text-black hover:text-stoplight/80"
            >
              @bdg.clubdepadel
            </a>
          </div>
          {/* Reclub */}
          <div className="flex justify-start items-center md:p-2 gap-4">
            <Image
              className="dark:invert"
              src="/reclub-logo.svg"
              alt="Reclub Icon"
              width={60}
              height={60}
            />
            <a
              href="https://reclub.co/clubs/@bdgclubdepadel"
              className="md:text-4xl text-3xl font-medium font-[family-name:var(--font-geist-mono)] text-black hover:text-stoplight/80"
            >
              @bdgclubdepadel
            </a>
          </div>
          {/* Location */}
          <div className="flex justify-start items-center md:p-2 gap-4">
            <Image
              src="/pin.svg"
              alt="Location Pin Icon"
              width={60}
              height={60}
            />
            <a
              href="https://maps.app.goo.gl/mN6c5XGrEgS4BcgcA"
              className="md:text-4xl text-3xl font-medium font-[family-name:var(--font-geist-mono)] text-black hover:text-stoplight/80"
            >
              Bandung, West Java, Indonesia
            </a>
          </div>
        </div>
        {/* Contact Info ::end */}

        {/* Animation ::begin */}
        <div className="hidden lg:relative lg:block lg:w-[350px] lg:h-[350px] mx-auto mt-6 lg:mt-0">
          {/* Circle Picture */}
          <div className="w-full h-full bg-white rounded-full shadow-md overflow-hidden z-10 relative">
            <Image
              src="/bdgclubdepadel-flag2.jpg"
              alt="BDGCLUBDEPADEL Flag"
              width={350}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Infinite Animation Text */}
          <div
            className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              animation: "spin 15s linear infinite",
            }}
          >
            <svg viewBox="0 0 360 360" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 180, 180 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"
                />
              </defs>
              <text
                fill="black"
                fontSize="16"
                fontFamily="monospace"
                letterSpacing="2"
              >
                <textPath href="#circlePath" startOffset="0%" textLength="1005">
                  BDG CLUB DE PADEL • BDG CLUB DE PADEL • BDG CLUB DE PADEL •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        {/* Animation ::end */}
      </div>
      {/* Content ::end */}
    </section>
  );
}
