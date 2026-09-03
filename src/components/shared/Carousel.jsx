import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-56 mb-4 bg-muted rounded-xl flex items-center justify-center">
        <span className="text-muted-foreground">Sin imágenes</span>
      </div>
    );
  }

  const goPrev = () =>
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const goNext = () =>
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-56 mb-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 overflow-auto"
        >
          <img
            src={images[current]}
            alt={`Gallery ${current + 1}`}
            className="block w-full h-full object-contain rounded-xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current
                ? "w-5 bg-primary"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
