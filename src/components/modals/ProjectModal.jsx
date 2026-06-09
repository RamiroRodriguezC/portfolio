import { useTranslation } from "react-i18next";

export default function ProjectModal({ project }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const description =
    project.description?.[lang] || project.description?.en || project.description;

  return (
    <>
      <h2 className="text-lg font-bold mb-4">{project.title}</h2>

      {project.image && (
        <div className="w-full aspect-video overflow-hidden rounded-xl mb-4 bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
        {description}
      </p>

      <div className="flex justify-end">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {t("projects.cta")}
          <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
        </a>
      </div>
    </>
  );
}
