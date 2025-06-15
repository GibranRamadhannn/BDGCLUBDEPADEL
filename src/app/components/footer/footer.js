"use client";
import Image from "next/image";
import NavFooter from "./nav-footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FooterSection({ id }) {
  return (
    <section
      id={id}
      className="relative isolate min-h-[640px] scroll-mt-20 font-[family-name:var(--font-montserrat)] bg-white flex justify-between flex-col"
    >
      {/* Main Items ::begin */}
      <div className="px-10 mt-10 flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="flex lg:flex-col flex-row md:items-start items-center gap-10 w-full">
          <div className="relative w-36 md:w-48 h-auto aspect-3/2 transition-colors duration-500">
            <Image
              src="/logo-1.png"
              alt="BDGCLUBDEPADEL Logo"
              className="object-contain"
              fill
              priority
            />
          </div>
        </div>

        <div className="md:p-4 mb-6 w-full grid grid-cols-2 gap-x-8 gap-y-2">
          <NavFooter href="/">Home</NavFooter>
          <NavFooter href="/tournament">Tournament</NavFooter>
          <NavFooter href="/event">Event</NavFooter>
          <NavFooter href="/contact">Contact</NavFooter>
        </div>
      </div>
      {/* Main Items ::end */}

      {/* Sponsor ::begin */}
      <div className="px-10 py-10 border-t border-silver-medal">
        <h2 className="text-cavernous/90 font-semibold text-md text-center mb-6">
          Our sponsor
        </h2>

        <div className="w-full md:p-5 md:flex md:justify-between md:items-center grid grid-cols-3 gap-4">
          <div className="bg-cavernous/50 text-black text-center text-sm p-4 rounded-lg w-full">
            Sponsor 1
          </div>
          <div className="bg-cavernous/50 text-black text-center text-sm p-4 rounded-lg w-full">
            Sponsor 2
          </div>
          <div className="bg-cavernous/50 text-black text-center text-sm p-4 rounded-lg w-full">
            Sponsor 3
          </div>
          <div className="bg-cavernous/50 text-black text-center text-sm p-4 rounded-lg w-full">
            Sponsor 4
          </div>
          <div className="bg-cavernous/50 text-black text-center text-sm p-4 rounded-lg w-full">
            Sponsor 5
          </div>
          <div className="bg-cavernous/50 text-black text-center text-sm p-4 rounded-lg w-full">
            Sponsor 6
          </div>
        </div>
      </div>
      {/* Sponsor ::end */}

      {/* Additional Items ::begin */}
      <div className="px-10 md:py-6 py-2 md:flex md:flex-row grid grid-cols-1 text-center gap-2 md:justify-between md:items-center border-t border-silver-medal">
        <h3 className="text-cavernous/80 font-medium text-xs">
          Privacy Policy | Cookie Policy
        </h3>
        <a
          href="https://www.instagram.com/bdg.clubdepadel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="text-cavernous/70 font-medium text-xs hover:text-stoplight"
        >
          @bdg.clubdepadel
        </a>
        <h3 className="text-cavernous/70 font-medium text-xs">
          BDGCLUBDEPADEL 2025 | Developed by Geeb Space
        </h3>
      </div>
      {/* Additional Items ::end */}
    </section>
  );
}
