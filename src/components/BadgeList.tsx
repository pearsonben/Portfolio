import { Tool, LanguageBadge, LanguageBadges } from "../assets/badges";

interface BadgeListProps {
  badges: Tool[];
}

function BadgeList({ badges }: BadgeListProps) {
  const badgesToDisplay: LanguageBadge[] = badges.map(
    (key) => LanguageBadges[key]
  );

  return (
    <>
      <div className="tools-list">
        {badgesToDisplay.map((badge) => (
          <img key={badge.name} className="badge" height="16px" alt={badge.name} src={badge.link}></img>
        ))}
      </div>
    </>
  );
}

export default BadgeList;
