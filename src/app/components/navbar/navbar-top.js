"use client";

import { useState } from "react";
import NavLink from "../navbar/nav-link";
import NavDate from "../navbar/nav-date";
import { Menu, X } from "lucide-react";
import NavDrawer from "../navbar/nav-drawer";
import Image from "next/image";

export default function NavbarTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent p-3 flex items-center justify-between font-[family-name:var(--font-montserrat)] backdrop-blur-sm border-b">
      {/* ========== Navbar Logo :begin ========== */}
      <div className="relative w-23 md:w-30 h-auto aspect-[3/2]">
        <Image
          src="/logo-2.png"
          alt="BDGCLUBDEPADEL Logo"
          className="dark:invert object-contain"
          fill
          priority
        />
      </div>
      {/* ========== Navbar Logo :end ========== */}

      {/* ========== Navbar Links :begin ========== */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 font-semibold bg-white rounded-4xl p-1">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/tournament">Tournament</NavLink>
        <NavLink href="/event">Event</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
      {/* ========== Navbar Links :end ========== */}

      {/* ========== Navbar Date :begin ========== */}
      <div className="interactive hidden md:flex flex-shrink-0">
        <NavDate />
      </div>
      {/* ========== Navbar Date :end ========== */}

      {/* ========== Button Drawer :begin ==========
      * onClick = setIsMenuOpen -> true
      * isMenuOpen = X Icon, isClose = Menu Icon
      ============================================== */}
      <div className="md:hidden flex-shrink-0">
        <button onClick={() => setIsMenuOpen(true)}>
          {isMenuOpen ? (
            <X className="w-6 h-6 transition duration-700 ease-in-out" />
          ) : (
            <Menu className="w-6 h-6 transition duration-700 ease-in-out" />
          )}
        </button>
      </div>
      {/* ========== Button Drawer :end ==========
      * onClick = setIsMenuOpen -> true
      * isMenuOpen = X Icon, isClose = Menu Icon
      ============================================== */}

      {/* ========== Navbar Drawer :begin ========== */}
      <NavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {/* ========== Navbar Drawer :end ========== */}
    </nav>
  );
}
