import { useTranslation } from "react-i18next";
import Section from "../layout/Section.jsx";
import ExperienceCard from "../cards/ExperienceCard.jsx";

export default function Experience() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <Section id="experience" subtitle={t("experience.subtitle")} title={t("experience.title")}>
      <div className="max-w-2xl">
        {items.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
