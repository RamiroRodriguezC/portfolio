export default function MePhoto({ className = "w-36 h-36 md:w-44 md:h-44" }) {
  return (
    <div
      className={`${className} rounded-full border-2 border-primary shrink-0 overflow-hidden`}
      style={{
        backgroundImage: "url(assets/MyFoto.png)",
        backgroundColor: "oklch(0.145 0 0)",
        backgroundSize: "auto 126%",
        backgroundPosition: "58% 29%",
        boxShadow:
          "0 0 2px oklch(0.63 0.24 285), 0 0 8px oklch(0.63 0.24 285)",
      }}
    />
  );
}
