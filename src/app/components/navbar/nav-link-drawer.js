"use client";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  function NavClass() {
    return `transition-colors flex items-center justify-start gap-2 font-medium font-[family-name:var(--font-geist-mono)] sm:text-base h-10 sm:h-12 px-4 py-10 sm:px-5 sm:w-auto block duration-300 ease-in-out
      ${isActive ? "text-stoplight" : "text-foreground hover:text-stoplight"}
      ${className}
    `;
  }

  return (
    <a href={href} className={NavClass()}>
      {children}
    </a>
  );
}
