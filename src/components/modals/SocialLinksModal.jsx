import { useState, useEffect } from "react";
import socialData from "../../data/social.json";

export default function SocialLinksModal() {
  const [copiedMsg, setCopiedMsg] = useState("");

  useEffect(() => {
    if (copiedMsg) {
      const t = setTimeout(() => setCopiedMsg(""), 2000);
      return () => clearTimeout(t);
    }
  }, [copiedMsg]);

  return (
    <>
      <h2 className="text-lg font-bold mb-4">Social</h2>
      <div className="flex flex-col gap-3">
        {socialData.map((social) => {
          const isCopy = Boolean(social.copyToClipboard);
          const Cmp = isCopy ? "button" : "a";
          return (
            <Cmp
              key={social.name}
              href={isCopy ? undefined : social.url}
              target={isCopy ? undefined : "_blank"}
              rel={isCopy ? undefined : "noopener noreferrer"}
              onClick={
                isCopy
                  ? async (e) => {
                      e.preventDefault();
                      await navigator.clipboard.writeText(
                        social.copyToClipboard,
                      );
                      setCopiedMsg(
                        `${social.name} copiado: ${social.copyToClipboard}`,
                      );
                    }
                  : undefined
              }
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors text-left"
            >
              <img src={social.icon} alt={social.name} className="w-6 h-6" />
              <span className="text-sm font-medium">{social.name}</span>
              {isCopy && (
                <span className="ml-auto text-xs text-muted-foreground">
                  click para copiar
                </span>
              )}
            </Cmp>
          );
        })}
      </div>
      {copiedMsg && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
          {copiedMsg}
        </div>
      )}
    </>
  );
}
