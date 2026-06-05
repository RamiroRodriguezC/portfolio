import { useTranslation } from "react-i18next";
import Section from "./Section.jsx";
import { ExperienceCard } from "./Card.jsx";

export default function Experience() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  return (
    <Section id="experience" subtitle={t("experience.subtitle")} title={t("experience.title")}>
      <div className="max-w-2xl mx-auto">
        {items.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
