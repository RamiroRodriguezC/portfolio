import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Handshake, Rocket, Shield } from "lucide-react";

const STATUS_STYLES = {
  Open: {
    bg: "bg-[#152A1C]",
    border: "border-[#284A31]",
    titleText: "text-[#86C88A]",
    descText: "text-[#A3BAA6]",
    icon: Handshake,
    iconColor: "text-[#1E3B27]", 
  },
  WorkingButOpen: {
    bg: "bg-[#362812]",
    border: "border-[#5A451E]",
    titleText: "text-[#DAB86F]",
    descText: "text-[#B6A88E]",
    icon: Rocket,
    iconColor: "text-[#4A381A]", 
  },
  Working: { 
    bg: "bg-[#351C1C]",
    border: "border-[#5A2D2D]",
    titleText: "text-[#DA7676]",
    descText: "text-[#B99494]",
    icon: Shield,
    iconColor: "text-[#4B2727]", 
  },
};

export default function StatusCard({ status }) {
  const { t } = useTranslation();
  const style = STATUS_STYLES[status];

  if (!style) return null;

  const IconComponent = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`relative overflow-hidden ${style.bg} border ${style.border} rounded-2xl p-6 flex items-stretch min-h-[130px]`}
    >
      <div className="relative z-10 flex flex-col justify-center w-[60%]">
        <h3 className={`text-xl font-bold tracking-tight ${style.titleText}`}>
          {t(`about.status.${status}.title`)}
        </h3>
        <p className={`text-sm mt-2 font-medium ${style.descText} leading-relaxed`}>
          {t(`about.status.${status}.description`)}
        </p>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-center pointer-events-none">
        <IconComponent
          size={170} 
          className={`${style.iconColor} opacity-70`}
          strokeWidth={1.5}
        />
      </div>

    </motion.div>
  );
}