"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60%", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Easwanth, back to top">
        EN<span>.</span>
      </a>
      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? "active" : undefined}
                aria-current={active === link.href ? "location" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="nav-cta" href="#contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
