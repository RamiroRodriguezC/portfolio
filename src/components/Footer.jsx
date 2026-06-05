import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>Copyright &copy; {new Date().getFullYear()} Portfolio</p>
        <p>{t("footer.madeWith")}</p>
      </div>
    </footer>
  );
}
