"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  function NavClass() {
    return `rounded-full transition-colors flex items-center justify-start gap-2 font-medium font-[family-name:var(--font-geist-mono)] sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto block duration-300 ease-in-out transition
     ${
       isActive
         ? "text-foreground bg-stoplight/90" 
         : "text-background hover:bg-stoplight/80 hover:text-foreground"
     }
    `;
  }

  return (
    <Link href={href} className={NavClass()}>
      {children}
    </Link>
  );
}
