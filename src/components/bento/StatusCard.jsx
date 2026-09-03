import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../../context/PortfolioDataContext.jsx";
import { Handshake, Rocket, Shield } from "lucide-react";

const STATUS_STYLES = {
  Open: {
    bg: "bg-gradient-to-br from-[#152A1C]/80 to-[#1A3522]/70",
    border: "border-[#284A31]/50",
    titleText: "text-[#86C88A]",
    descText: "text-[#A3BAA6]",
    icon: Handshake,
    iconColor: "text-[#1E3B27]",
  },
  WorkingButOpen: {
    bg: "bg-gradient-to-br from-[#362812]/80 to-[#4A3517]/70",
    border: "border-[#5A451E]/50",
    titleText: "text-[#DAB86F]",
    descText: "text-[#B6A88E]",
    icon: Rocket,
    iconColor: "text-[#4A381A]",
  },
  Working: {
    bg: "bg-gradient-to-br from-[#351C1C]/80 to-[#4A2525]/70",
    border: "border-[#5A2D2D]/50",
    titleText: "text-[#DA7676]",
    descText: "text-[#B99494]",
    icon: Shield,
    iconColor: "text-[#4B2727]",
  },
};

export default function StatusCard({ status: statusProp }) {
  const { t } = useTranslation();
  const { data } = usePortfolioData();
  const status = statusProp || data?.employmentStatus;
  const style = STATUS_STYLES[status];

  if (!style) return null;

  const IconComponent = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`relative overflow-hidden ${style.bg} ${style.border} glass rounded-3xl p-6 flex items-stretch min-h-[160px] breathe`}
    >
      <div
        className="absolute -top-5 -right-5 h-20 w-20 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, var(--color-basesita-purple), var(--color-basesita-light-purple))",
        }}
      />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-center w-[60%]">
        <h3
          className={`font-heading text-xl font-bold tracking-tight ${style.titleText}`}
        >
          {t(`about.status.${status}.title`)}
        </h3>
        <p
          className={`text-sm mt-2 font-medium ${style.descText} leading-relaxed`}
        >
          {t(`about.status.${status}.description`)}
        </p>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-center pointer-events-none">
        <IconComponent
          size={100}
          className={`${style.iconColor} opacity-60`}
          strokeWidth={1.5}
        />
      </div>
    </motion.div>
  );
}
