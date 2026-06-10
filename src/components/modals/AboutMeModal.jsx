import { useTranslation } from "react-i18next";
import MePhoto from "../shared/MePhoto.jsx";

export default function AboutMeModal() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4">
      <MePhoto className="w-32 h-32" />
      <h2 className="text-xl font-bold">{t("about.meModal.title")}</h2>
      <p className="text-sm text-muted-foreground text-center">{t("about.meModal.description")}</p>
    </div>
  );
}
