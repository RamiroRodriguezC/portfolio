import { motion } from "framer-motion";

export default function CurrentProjectCard({ title, projectName, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="md:col-span-8 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[225px] md:min-h-[350px]"
    >
      <div>
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{projectName}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
