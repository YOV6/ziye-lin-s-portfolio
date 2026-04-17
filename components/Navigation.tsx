"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "#about", label: "关于" },
  { href: "#projects", label: "项目" },
  { href: "#contact", label: "联系" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>ZL</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.desktopNav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => {
                    if (pathname !== "/") {
                      e.preventDefault();
                      router.push("/");
                      setTimeout(() => {
                        const el = document.querySelector(link.href);
                        el?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (pathname !== "/") {
                        e.preventDefault();
                        router.push("/");
                        setTimeout(() => {
                          const el = document.querySelector(link.href);
                          el?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
