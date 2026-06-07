import { AnimatePresence, motion } from "framer-motion";
import TiltWrapper from "../shared/TiltWrapper.jsx";

export default function Modal({ open, onClose, is3D = false, actionButton, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
      {/* Backdrop de fondo quieto */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      {/* MODAL 3D PARA EL CV */}
      {is3D ? (
        <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6 pointer-events-none">
          
          {/* EL TILT WRAPPER: Ahora abraza de forma estricta al contenido del CV */}
          <TiltWrapper active={true} className="w-full flex items-center justify-center pointer-events-auto">
            <div className="w-full bg-transparent border-none shadow-none overflow-visible">
              {children}
            </div>
          </TiltWrapper>

          {/* EL BOTÓN DE ACCIÓN: Totalmente inmóvil, afuera del 3D y con espacio */}
          <div className="pointer-events-auto mt-2">
            {actionButton}
          </div>

        </div>
      ) : (
        /* MODALES COMUNES PLANOS: Mantienen tu diseño de siempre */
        <div className="relative z-10 w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-6">
          {children}
        </div>
      )}
    </div>
  );
}