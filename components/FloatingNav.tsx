"use client";

import { useState } from "react";
import { Home, Briefcase, FileText, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md w-full border-b border-gray-100">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        <Link
          href="/"
          onClick={handleHomeClick}
          className="font-[family-name:var(--font-archivo-black)] text-2xl md:text-3xl uppercase tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
          style={{ fontFamily: "var(--font-archivo-black)" }}
        >
          AL
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Home size={18} /> Home
          </Link>
          <Link
            href="/#work"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Briefcase size={18} /> Work
          </Link>
          <Link
            href="/#cv"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <FileText size={18} /> CV
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <User size={18} /> About
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-md">
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1"
          >
            <Home size={18} /> Home
          </Link>
          <Link
            href="/#work"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1"
          >
            <Briefcase size={18} /> Work
          </Link>
          <Link
            href="/#cv"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1"
          >
            <FileText size={18} /> CV
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1"
          >
            <User size={18} /> About
          </Link>
        </div>
      )}
    </nav>
  );
}
