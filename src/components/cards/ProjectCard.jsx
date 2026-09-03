import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function ProjectCard({ project, index, onReadMore }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glass rounded-3xl flex flex-col overflow-hidden"
    >
      <div
        className="relative h-52 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--color-basesita-purple) 22%, transparent), color-mix(in srgb, var(--color-basesita-light-purple) 6%, transparent))",
        }}
      >
        <div
          className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: "var(--color-basesita-purple)" }}
        />
        <div
          className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "var(--color-basesita-light-purple)" }}
        />
        <div className="absolute inset-x-4 top-0 h-full transition-transform duration-500 ease-out translate-y-5 group-hover:translate-y-[-4]">
          <div className="h-full w-full rounded-2xl overflow-hidden ring-1 ring-primary/25 shadow-xl rotate-[8deg] origin-top-left">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="text-muted-foreground">Project Image</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-bold mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
          {typeof project.description === "object"
            ? project.description[lang] || project.description.en || ""
            : project.description}
        </p>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-full glass border border-primary/15 text-primary/90"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          <button
            onClick={onReadMore}
            className="flex-1 h-11 rounded-xl glass text-sm font-medium flex items-center justify-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <BookOpen className="h-4 w-4" /> Leer más
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 h-11 rounded-xl text-sm font-medium flex items-center justify-center gap-2 liquid-fill text-white"
              style={{
                background:
                  "linear-gradient(90deg, #6200EE 0%, #BB86FC 50%, #6200EE 100%)",
                backgroundSize: "200% 100%",
              }}
            >
              Ver proyecto <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
