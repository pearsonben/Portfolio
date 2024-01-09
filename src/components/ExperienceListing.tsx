import { Tool } from "../badges";
import BadgeList from "./BadgeList";

interface ExperienceListingProps {
  companyName: string;
  timeline: string;
  description: string;
  link: string;
  tools: Tool[]
}

function ExperienceListing({
  companyName,
  timeline,
  description,
  link,
  tools
}: ExperienceListingProps) {
  return (
    <>
      <header>
        <h5><a href={link}>{companyName}</a></h5>
        <h5 className="job-timeline">{timeline}</h5>
      </header>
      <BadgeList badges={tools} />

      <article>{description}</article>
    </>
  );
}

export default ExperienceListing;
