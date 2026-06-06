import { useTranslation } from "react-i18next";

const COLORS = [
  "from-cyan-500 to-blue-500",
  "from-yellow-400 to-orange-500",
  "from-sky-400 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-400 to-emerald-500",
  "from-red-500 to-pink-500",
  "from-violet-500 to-purple-500",
  "from-blue-500 to-indigo-500",
];

export default function TechStackModal() {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true });

  return (
    <>
      <h2 className="text-lg font-bold mb-4">{t("about.techStack.title")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, i) => (
          <div
            key={skill}
            className={`flex items-center gap-2 p-3 rounded-xl bg-gradient-to-br ${COLORS[i % COLORS.length]} text-white`}
          >
            <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold">
              {skill.charAt(0)}
            </span>
            <span className="text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </>
  );
}
