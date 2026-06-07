import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // O la librería de i18n que uses
import DownloadButton from "../../shared/buttons/DownloadButton.jsx";

export default function CvCard({ title, description, actionLabel, onOpen }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="md:col-span-4 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[225px] md:min-h-[350px]"
    >
      <div>
        {/* CONTENEDOR DE LA MINIATURA: Estático y con overflow-hidden como ranura */}
        <div 
          onClick={onOpen}
          className="w-full mb-4 aspect-video overflow-hidden rounded-xl bg-[#18181b] border border-white/5 relative flex justify-center cursor-pointer group"
        >
          {/* LA CAJITA DEL CV: Maneja la rotación y el desplazamiento juntos en el objeto style */}
          <motion.div 
            // Combinamos el desplazamiento inicial en Y con las rotaciones fijas 3D
            style={{
              transform: "rotateX(12deg) rotateZ(4deg) translateY(16px)",
              transformOrigin: "top"
            }}
            // Al hacer hover, reducimos el translateY para que la hoja "suba" manteniendo su inclinación
            whileHover={{ 
              transform: "rotateX(12deg) rotateZ(4deg) translateY(0px)" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }} // Resorte limpio y fluido
            className="w-[85%] h-[200%] mt-4 overflow-hidden rounded-t-lg border border-white/10 shadow-2xl transition-colors duration-300 group-hover:border-white/20"
          >
            <img 
              src="assets/cv.jpg" 
              alt="Vista de cabecera de CV" 
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Textos */}
        <p className="text-sm font-semibold mb-1">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>

      {/* Botón */}
       <DownloadButton btnText={t("about.cv")} href="assets/cv-rodriguezcastro-ramiro.pdf" download="cv-rodriguezcastro-ramiro.pdf" />

    </motion.div>
  );
}