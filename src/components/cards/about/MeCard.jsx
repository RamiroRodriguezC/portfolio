import { motion } from "framer-motion";

export default function MeCard({ onOpen, buttonText }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onOpen}
      className="md:col-span-6 bg-card border border-border rounded-2xl p-6 text-left hover:border-primary/40 transition-colors flex flex-col items-center justify-center gap-4 min-h-[350px] md:min-h-[500px]"
    >
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
        <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <p className="text-sm text-muted-foreground">{buttonText}</p>
    </motion.button>
  );
}
