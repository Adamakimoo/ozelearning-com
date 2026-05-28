"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Work",      href: "/#work" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A3A2F] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="OZE Learning home">
          <Image
            src="/ozelearning.svg"
            alt="OZE Learning"
            width={360}
            height={104}
            className="h-24 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#A2E8CE]/80 hover:text-[#A2E8CE] text-sm font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-[#A2E8CE] text-[#0A3A2F] text-sm font-semibold hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2E8CE]"
          >
            Get a Proposal
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A2E8CE]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`block w-6 h-0.5 bg-[#A2E8CE] transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#A2E8CE] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#A2E8CE] transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-[#0A3A2F] border-t border-[#A2E8CE]/10 px-6 py-6 flex flex-col gap-5"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#A2E8CE]/80 hover:text-[#A2E8CE] text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 px-5 py-3 rounded-full bg-[#A2E8CE] text-[#0A3A2F] text-sm font-semibold text-center hover:bg-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get a Proposal
          </Link>
        </nav>
      )}
    </header>
  );
}
