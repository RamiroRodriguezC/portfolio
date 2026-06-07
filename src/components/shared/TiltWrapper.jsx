import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function TiltWrapper({ children, active = true, className = "" }) {
  const cardRef = useRef(null);

  // 1. Inicializamos los valores de movimiento del mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Mapeamos la posición a los grados de rotación
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  // 3. Suavizado tipo resorte (Spring)
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  // 4. Mapeamos el gradiente del brillo dinámico (Glare)
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255, 255, 255, 0.06) 0%, transparent 70%)`
  );

  // Manejadores del mouse
  const handleMouseMove = (e) => {
    if (!active || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXRelative = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // SI NO ESTÁ ACTIVO: Devuelve el contenido normal sin efectos 3D
  if (!active) {
    return <div className={className}>{children}</div>;
  }

  // SI ESTÁ ACTIVO: Aplica la magia 3D de Framer Motion
  return (
    <div className="[perspective:1200px] w-full h-full flex items-center justify-center">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden cursor-pointer group select-none ${className}`}
      >
        {/* Capa de Brillo (Glare Effect) */}
        <motion.div
          style={{ background: glareBg }}
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
        />
        
        {/* Renderiza el contenido interno del modal */}
        <div className="w-full h-full [transform:translateZ(10px)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}