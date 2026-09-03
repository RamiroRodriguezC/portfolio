import { useTranslation } from "react-i18next";
import Carousel from "../shared/Carousel.jsx";

export default function ProjectModal({ project }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const description =
    project.description?.[lang] || project.description?.en || project.description;

  const gallery = (project.gallery && project.gallery.length > 0)
    ? project.gallery
    : (project.image ? [project.image] : []);

  return (
    <>
      <h2 className="text-lg font-bold mb-4">{project.title}</h2>

      <Carousel images={gallery} />

      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
        {description}
      </p>

      <div className="flex justify-end">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {t("projects.cta")}
            <span aria-hidden="true" className="text-lg leading-none">
              &rarr;
            </span>
          </a>
        )}
      </div>
    </>
  );
}
