import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "experience", "projects", "contact"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.find((e) => e.isIntersecting);
        if (intersecting) {
          setActiveSection(intersecting.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const sectionTitles = {
    "": t("nav.brand"),
    about: t("nav.about"),
    experience: t("nav.experience"),
    projects: t("nav.projects"),
    contact: t("nav.contact"),
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6"
    >
      {/* Desktop pill */}
      <div
        className={`hidden md:flex items-center gap-8 px-6 py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border"
            : "bg-card/60 backdrop-blur-sm border-border/50"
        }`}
      >
        <a href="#" className="text-sm font-semibold tracking-tight mr-2 text-muted-foreground">
          {t("nav.brand")}
        </a>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors ${
              activeSection === link.href.slice(1)
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={toggleLang}
          className="text-xs font-medium text-primary hover:text-primary/80 transition-colors uppercase ml-2"
        >
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
      </div>

      {/* Mobile bar */}
      <div className="md:hidden w-full flex items-center justify-between px-4 py-3 rounded-2xl border bg-card/60 backdrop-blur-sm border-border/50">
        <a href="#" className="text-sm font-semibold tracking-tight text-muted-foreground">
          {sectionTitles[activeSection]}
        </a>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xs font-medium text-primary uppercase"
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-6 h-5 flex flex-col justify-between"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-0.5 w-full bg-foreground rounded" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-full bg-foreground rounded" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-0.5 w-full bg-foreground rounded" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-6 right-6 mt-2 md:hidden bg-card border border-border rounded-2xl"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  const id = link.href.slice(1);
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  window.location.hash = id;
                  setMobileOpen(false);
                }}
                className={`text-sm text-left transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
