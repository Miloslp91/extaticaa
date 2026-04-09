"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t("home") },
    { href: "/events", label: t("events") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/95 backdrop-blur-md border-b border-vine/20 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] w-full px-8 sm:px-12 md:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl tracking-[0.15em] uppercase font-bold text-accent">
          Extaticaa
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-accent"
                  : "text-text-muted hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-text" />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-text" />
          <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-text" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-md border-b border-vine/20"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-widest uppercase font-medium transition-colors ${
                    pathname === link.href ? "text-accent" : "text-text-muted hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
