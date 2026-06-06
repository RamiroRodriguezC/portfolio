import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project, index = 0 }) {
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
    >
      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
        <div className="text-muted-foreground text-sm">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <span className="text-muted-foreground">{t("projects.placeholder")}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        <a
          href={project.liveUrl}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {t("projects.cta")}
          <span aria-hidden="true" className="text-lg leading-none">
            &rarr;
          </span>
        </a>
      </div>
    </motion.article>
  );
}
