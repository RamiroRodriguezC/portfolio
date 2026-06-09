import PlatformCard from "./PlatformCard.jsx";
import MoreCard from "./MoreCard.jsx";

export default function SocialMediaCard({ onOpenMore }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <PlatformCard name="LinkedIn" />
      <PlatformCard name="GitHub" />
      <MoreCard onOpen={onOpenMore} />
    </div>
  );
}
