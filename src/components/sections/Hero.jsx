import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-center justify-start overflow-hidden md:min-h-[620px] max-md:min-h-[100svh] max-md:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="flex flex-col items-center md:items-stretch">
        <div className="flex w-full max-w-6xl mx-auto gap-3 md:gap-14 relative z-10 flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="w-full md:w-2/3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            {t("hero.heading")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("hero.headingAccent")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-base md:text-lg md:mb-3 max-w-2xl"
          >
            {t("hero.description")}
          </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-1/3 max-w-[300px] overflow-hidden"
          >
            <img
              src="/assets/meOnSetupRender.png"
              alt="me on setup render"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-3 md:mt-4 flex justify-center w-full"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              {t("hero.cta")}
              <span aria-hidden="true" className="text-lg leading-none">
                &darr;
              </span>
            </a>
          </motion.div>
      </div>
    </section>
  );
}
