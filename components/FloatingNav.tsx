"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl px-6 py-3 border-2 flex justify-between items-center transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white rounded-xl border-black shadow-[4px_4px_0px_#000]"
          : "bg-transparent border-transparent shadow-none"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link
          href="/"
          onClick={handleHomeClick}
          className="font-[family-name:var(--font-archivo-black)] text-2xl md:text-3xl uppercase tracking-tight text-slate-900"
          style={{ fontFamily: "var(--font-archivo-black)" }}
        >
          AL
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            onClick={handleHomeClick}
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            Home
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
          <Link
            href="/#work"
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            Work
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
          <Link
            href="/#cv"
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            CV
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
          <Link
            href="#about"
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            About
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-0.5 bg-slate-900 block transition-transform" />
          <span className="w-6 h-0.5 bg-slate-900 block transition-opacity" />
          <span className="w-6 h-0.5 bg-slate-900 block transition-transform" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 mt-3 pt-3 flex flex-col gap-2">
          <Link
            href="/"
            onClick={handleHomeClick}
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            Home
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
          <Link
            href="/#work"
            onClick={() => setIsOpen(false)}
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            Work
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
          <Link
            href="/#cv"
            onClick={() => setIsOpen(false)}
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            CV
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="group relative inline-flex items-center px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
          >
            About
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
            <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
          </Link>
        </div>
      )}
    </nav>
  );
}
