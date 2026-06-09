import socialData from "../../data/social.json";

export default function SocialLinksModal() {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">Social</h2>
      <div className="flex flex-col gap-3">
        {socialData.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <img src={social.icon} alt={social.name} className="w-6 h-6" />
            <span className="text-sm font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    </>
  );
}
