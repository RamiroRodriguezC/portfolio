import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TYPESPEED = 90;
const DELETESPEED = 50;
const PAUSE = 1600;

export default function TypewriterTitle({ className = "" }) {
  const { t } = useTranslation();
  const words = t("hero.typewriter.words", { returnObjects: true });
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const full = words[idx];
    if (!deleting && text === full) {
      const timeout = setTimeout(() => setDeleting(true), PAUSE);
      return () => clearTimeout(timeout);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((p) => (p + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setText(
        deleting
          ? full.substring(0, text.length - 1)
          : full.substring(0, text.length + 1)
      );
    }, deleting ? DELETESPEED : TYPESPEED);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return (
    <span className={className}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
