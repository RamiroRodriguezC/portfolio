import { motion } from "framer-motion";

export default function MeCard({ onOpen, buttonText }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onOpen}
      className="md:col-span-6 bg-card border border-border rounded-2xl pt-6 px-6 pb-0 text-left hover:border-primary/40 transition-colors flex flex-col items-center justify-between min-h-[350px] md:min-h-[500px] overflow-hidden"
    >
      <div className="flex items-center pt-8 md:pt-12">
        <p className="text-sm text-muted-foreground">{buttonText}</p>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="assets/MyFoto.png"
          alt="Ramiro"
          className="w-auto max-w-full h-auto max-h-[280px] md:max-h-[380px] object-contain"
          style={{
            filter:
              "drop-shadow(0 0 2px oklch(0.63 0.24 285)) drop-shadow(0 0 6px oklch(0.63 0.24 285))",
          }}
        />
      </div>
    </motion.button>
  );
}
