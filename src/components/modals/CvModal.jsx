export default function CvModal() {
  return (
    <div className="w-full max-h-[75vh] overflow-y-auto rounded-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-zinc-950/40 scrollbar-thin">
      <img 
        src="assets/cv.jpg" 
        alt="Curriculum Vitae Completo" 
        className="w-full h-auto object-contain select-none"
      />
    </div>
  );
}