import { motion } from "framer-motion";

export default function CvCard({ title, description, actionLabel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="md:col-span-4 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[225px] md:min-h-[350px]"
    >
      <div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-sm font-semibold mb-1">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <button className="w-full px-4 py-2.5 text-xs font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
        {actionLabel}
      </button>
    </motion.div>
  );
}
