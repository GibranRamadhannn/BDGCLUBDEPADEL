"use client";

import { X } from "lucide-react"; /* import X icon from lucide-react */
import NavLinkDrawer from "./nav-link-drawer";
import { BackgroundBeams } from "../ui/background-beams";

export default function NavDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* ========== Drawer :begin ==========
      * isOpen = translate-x-0
      * isClose = translate-x-full
      ======================================= */}
      <div
        className={`fixed md:hidden top-0 left-0 w-screen h-screen z-[999] transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Button Close :begin => onClick = {onClose} */}
        <div className="relative z-10 flex justify-end p-4">
          <button onClick={onClose} className="rounded-full bg-stoplight/80 p-2">
            <X className="w-6 h-6 text-white transition duration-700 ease-in-out" />
          </button>
        </div>
        {/* Button Close :end => onClick = {onClose} */}

        {/* Drawer Menu :begin */}
        <div className="relative z-10 mt-10 space-y-6 text-3xl font-semibold text-center">
          <NavLinkDrawer href="/" className="border-b">Home</NavLinkDrawer>
          <NavLinkDrawer href="/about" className="border-b">Tournament</NavLinkDrawer>
          <NavLinkDrawer href="/projects" className="border-b">Event</NavLinkDrawer>
          <NavLinkDrawer href="/contact" className="border-b">Contact</NavLinkDrawer>
        </div>
        {/* Drawer Menu :end */}

        {/* Background Beams */}
        <BackgroundBeams className="absolute z-[-1] h-full w-full bg-neutral-950" />
        {/* <BackgroundBeams className="z-0 h-screen" /> */}
      </div>
      {/* ========== Drawer :end ========== */}
    </>
  );
}
