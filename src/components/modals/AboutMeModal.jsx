import { useTranslation } from "react-i18next";

export default function AboutMeModal() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
        <svg className="w-16 h-16 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold">{t("about.meModal.title")}</h2>
      <p className="text-sm text-muted-foreground text-center">{t("about.meModal.description")}</p>
    </div>
  );
}
