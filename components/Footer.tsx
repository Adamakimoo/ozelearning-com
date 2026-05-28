import Image from "next/image";
import Link from "next/link";

const navGroups = [
  {
    heading: "Services",
    links: [
      { label: "Bespoke Digital Learning", href: "#solutions" },
      { label: "Immersive Simulations",    href: "#solutions" },
      { label: "Learning Ecosystem Design",href: "#solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Philosophy", href: "/#about" },
      { label: "Case Studies",   href: "/#work" },
      { label: "Blog",           href: "/blog" },
      { label: "Contact",        href: "/#contact" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A3A2F] pt-20 pb-10" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-[#A2E8CE]/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="OZE Learning home">
              <Image
                src="/ozelearning.svg"
                alt="OZE Learning"
                width={140}
                height={40}
                className="h-9 w-auto mb-6 brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-[#A2E8CE]/60 text-sm leading-relaxed max-w-xs">
              We architect digital learning experiences for the modern workforce.
              Built proudly in Australia, deployed globally.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#A2E8CE]/20 flex items-center justify-center text-[#A2E8CE]/60 hover:border-[#A2E8CE] hover:text-[#A2E8CE] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.heading}>
              <p className="text-[#A2E8CE] text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                {group.heading}
              </p>
              <ul className="space-y-3">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[#A2E8CE]/60 text-sm hover:text-[#A2E8CE] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Acknowledgement of Country */}
        <div className="py-10 border-b border-[#A2E8CE]/10">
          <p className="text-[#A2E8CE]/50 text-xs leading-relaxed max-w-3xl">
            <span className="font-semibold text-[#A2E8CE]/70">Acknowledgement of Country.</span>{" "}
            OZE Learning acknowledges the Traditional Custodians of the lands on which we live and
            work across Australia. We pay our respects to Elders past, present and emerging, and
            recognise the deep history of storytelling, knowledge-sharing and learning that forms
            the foundation of the oldest continuing cultures on Earth. We are honoured to carry
            that tradition of sharing knowledge forward through the work we do.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-[#A2E8CE]/40 text-xs">
            © {year} OZE Learning. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[#A2E8CE]/40 text-xs hover:text-[#A2E8CE]/70 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
