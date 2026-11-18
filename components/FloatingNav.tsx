"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (pathname === "/" && window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const mapSectionToNav = (id: string) => {
      switch (id) {
        case "home":
          return "home";
        case "about":
        case "lean-process":
          return "about";
        case "case-studies":
        case "work":
        case "testimonials":
          return "case-studies";
        case "experience":
          return "experience";
        case "contact":
          return "contact";
        default:
          return "home";
      }
    };

    const updateHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash) {
        setActiveSection(mapSectionToNav(hash));
      }
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    if (pathname !== "/") {
      return () => window.removeEventListener("hashchange", updateHash);
    }

    const sectionIds = [
      "home",
      "about",
      "lean-process",
      "case-studies",
      "testimonials",
      "experience",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(mapSectionToNav(entry.target.id));
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", updateHash);
      observer.disconnect();
    };
  }, [pathname]);

  const isCaseStudiesRoute =
    pathname.startsWith("/work") || pathname.startsWith("/case-studies");
  const isAboutRoute = pathname.startsWith("/about");
  const isExperienceRoute = pathname.startsWith("/experience");
  const isContactRoute = pathname.startsWith("/contact");

  const isCaseStudiesActive =
    isCaseStudiesRoute || (pathname === "/" && activeSection === "case-studies");
  const isAboutActive =
    isAboutRoute || (pathname === "/" && activeSection === "about");
  const isExperienceActive =
    isExperienceRoute || (pathname === "/" && activeSection === "experience");
  const isContactActive =
    isContactRoute || (pathname === "/" && activeSection === "contact");
  const isHomeActive =
    pathname === "/" &&
    !isCaseStudiesActive &&
    !isAboutActive &&
    !isExperienceActive &&
    !isContactActive;

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    setActiveSection("home");
    if (pathname === "/") {
      e.preventDefault();
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      label: "Home",
      href: "/#home",
      isActive: isHomeActive,
      onClick: handleHomeClick,
      section: "home",
    },
    {
      label: "About",
      href: "/#about",
      isActive: isAboutActive,
      section: "about",
    },
    {
      label: "Case studies",
      href: "/#case-studies",
      isActive: isCaseStudiesActive,
      section: "case-studies",
    },
    {
      label: "Experience",
      href: "/#experience",
      isActive: isExperienceActive,
      section: "experience",
    },
    {
      label: "Contact",
      href: "/#contact",
      isActive: isContactActive,
      section: "contact",
    },
  ];

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
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
              onClick={(e) => {
                if (item.onClick) {
                  item.onClick(e);
                } else {
                  setActiveSection(item.section);
                }
              }}
              className="group relative inline-flex items-center whitespace-nowrap px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
            >
              <span className="relative inline-block">
                {item.label}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-0 -bottom-1 w-full h-[4px] bg-[#36C5F0] origin-left transition-transform duration-200 ease-out ${
                    item.isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
            </Link>
          ))}
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
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
              onClick={(e) => {
                if (item.onClick) {
                  item.onClick(e);
                } else {
                  setIsOpen(false);
                  setActiveSection(item.section);
                }
              }}
              className="group relative inline-flex items-center whitespace-nowrap px-3 py-1.5 border-[1.5px] border-transparent hover:border-[#36C5F0] hover:bg-[#36C5F0]/5 text-black transition-colors duration-150 text-sm font-medium"
            >
              <span className="relative inline-block">
                {item.label}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-0 -bottom-1 w-full h-[4px] bg-[#36C5F0] origin-left transition-transform duration-200 ease-out ${
                    item.isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -left-1" />
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -top-1 -right-1" />
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -left-1" />
              <span aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 bg-white border-[1.5px] border-[#36C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-150 -bottom-1 -right-1" />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
