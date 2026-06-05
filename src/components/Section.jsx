import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {subtitle && (
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
