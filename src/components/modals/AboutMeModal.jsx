import { useTranslation } from "react-i18next";
import MePhoto from "../shared/MePhoto.jsx";

export default function AboutMeModal() {
  const { t } = useTranslation();
  const sections = t("about.meModal.description.sections", { returnObjects: true });

  return (
    <div className="flex flex-col items-center gap-6">
      <MePhoto className="w-32 h-32" />
      {sections.map((section, sIdx) => (
        <div key={sIdx} className="w-full space-y-2">
          <h3 className="text-lg font-semibold text-center">{section.title}</h3>
          {section.paragraphs.map((p, pIdx) => (
            <p key={pIdx} className="text-sm text-muted-foreground text-center">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
