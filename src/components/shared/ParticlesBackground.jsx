import { useState, useEffect, useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const COLORS = {
  dark:  { particle: "#a855f7", links: "#a855f7" },
  light: { particle: "#6d28d9", links: "#6d28d9" },
};

export default function ParticlesBackground() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme || "dark");
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  const { particle, links: linksColor } = COLORS[theme];

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 60,
      particles: {
        number: { value: 60 },
        color: particle,
        opacity: { value: { min: 0.15, max: 0.4 } },
        size: { value: { min: 2, max: 4 } },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: "bounce" },
        },
        links: {
          enable: true,
          distance: 100,
          color: linksColor,
          opacity: 0.25,
          width: 1.5,
        },
      },
      detectRetina: true,
    }),
    [particle, linksColor]
  );

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles key={theme} id="tsparticles" options={options} />
    </ParticlesProvider>
  );
}
