import { useState } from "react";
import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import socialData from "../../data/social.json";
import Modal from "../modals/Modal.jsx";
import SocialLinksModal from "../modals/SocialLinksModal.jsx";

function MiniCard({ icon: Icon, label, onClick, href, index, imgSrc }) {
  const Cmp = href ? "a" : "button";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <Cmp
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noreferrer" : undefined}
        onClick={onClick}
        className="glass rounded-2xl p-4 h-full w-full flex flex-col items-center justify-center gap-2 group hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 breathe"
      >
        {imgSrc ? (
          <img src={imgSrc} alt={label} className="h-6 w-6" />
        ) : (
          <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
          {label}
        </span>
      </Cmp>
    </motion.div>
  );
}

export default function SocialCards() {
  const { t } = useTranslation();
  const [moreOpen, setMoreOpen] = useState(false);

  const github = socialData.find((s) => s.name === "GitHub");
  const linkedin = socialData.find((s) => s.name === "LinkedIn");

  return (
    <>
      <div className="grid grid-cols-3 gap-3 h-full">
        <MiniCard
          imgSrc={github?.icon}
          label="GitHub"
          href={github?.url}
          index={0}
        />
        <MiniCard
          imgSrc={linkedin?.icon}
          label="LinkedIn"
          href={linkedin?.url}
          index={1}
        />
        <MiniCard
          icon={MoreHorizontal}
          label={t("about.clickMe")}
          onClick={() => setMoreOpen(true)}
          index={2}
        />
      </div>

      <Modal open={moreOpen} onClose={() => setMoreOpen(false)}>
        <SocialLinksModal />
      </Modal>
    </>
  );
}
