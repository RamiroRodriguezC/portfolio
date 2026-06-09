import { motion } from "framer-motion";
import socialData from "../../../data/social.json";

export default function PlatformCard({ name }) {
  const platform = socialData.find((s) => s.name === name);
  if (!platform) return null;

  return (
    <motion.a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full bg-card border border-border rounded-2xl flex flex-col items-center justify-center py-4 hover:border-primary/40 transition-colors cursor-pointer min-h-[160px]"
    >
      <img src={platform.icon} alt={platform.name} className="w-28 h-28" />
      <span className="text-xl font-semibold mt-1">{platform.name}</span>
    </motion.a>
  );
}
