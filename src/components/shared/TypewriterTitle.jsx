import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TYPESPEED = 90;
const DELETESPEED = 50;
const PAUSE = 1600;
const GAP = 400;

export default function TypewriterTitle({ className = "" }) {
  const { t } = useTranslation();
  const words = t("hero.typewriter.words", { returnObjects: true });
  const suffix = t("hero.typewriter.suffix");
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const full = words[idx];
    if (!deleting && text === full) {
      setTimeout(() => setDeleting(true), PAUSE);
      return;
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((p) => {
        const next = (p + 1) % words.length;
        if (next === 0) setDone(true);
        return next;
      });
      return;
    }
    const timeout = setTimeout(() => {
      if (deleting) {
        setText(full.substring(0, text.length - 1));
      } else {
        setText(full.substring(0, text.length + 1));
      }
    }, deleting ? DELETESPEED : TYPESPEED);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words, done]);

  return (
    <span className={className}>
      <span className="text-primary font-semibold">{text}</span>
      <span className="typewriter-cursor text-primary">|</span>
      {" " + suffix}
    </span>
  );
}
