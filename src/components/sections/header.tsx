"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";
import { brand, navLinks } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 h-20 w-full transition-colors duration-200",
        scrolled ? "bg-white/95 shadow-soft backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <a
          href="#top"
          className="flex flex-col leading-tight"
          aria-label={`${brand.professional} — início`}
        >
          <span
            className={cn(
              "font-display text-lg font-semibold transition-colors duration-200 sm:text-xl",
              scrolled ? "text-ink" : "text-white"
            )}
          >
            {brand.professional}
          </span>
          <span
            className={cn(
              "text-xs font-medium tracking-wide transition-colors duration-200 sm:text-sm",
              scrolled ? "text-ink-soft" : "text-white/80"
            )}
          >
            {brand.role}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                scrolled ? "text-ink-soft hover:text-ink" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
          <WhatsappCta
            variant={scrolled ? "primary" : "ghost"}
            size="md"
            message="default"
          >
            Falar no WhatsApp
          </WhatsappCta>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <WhatsappCta
            variant={scrolled ? "primary" : "ghost"}
            size="md"
            message="floating"
            icon
            className="px-3.5 py-2.5"
          >
            <span className="sr-only">Falar no WhatsApp</span>
          </WhatsappCta>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-200",
              scrolled
                ? "bg-brand-blue-50 text-ink"
                : "bg-white/15 text-white backdrop-blur-sm"
            )}
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-brand-purple-100 bg-white/95 shadow-soft backdrop-blur-sm md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-3 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-brand-blue-50 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <WhatsappCta
                variant="primary"
                size="md"
                message="default"
                className="mt-2 w-full"
              >
                Falar no WhatsApp
              </WhatsappCta>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
