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
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/#work"
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            Work
          </Link>
          <Link
            href="/#cv"
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            CV
          </Link>
          <Link
            href="#about"
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            About
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
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/#work"
            onClick={() => setIsOpen(false)}
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            Work
          </Link>
          <Link
            href="/#cv"
            onClick={() => setIsOpen(false)}
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            CV
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 transition-colors hover:bg-[#36C5F0] hover:text-white"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
