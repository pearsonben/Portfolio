import { Tool } from "../assets/badges";
import ExperienceListing from "./ExperienceListing";

const experiences = [
  {
    companyName: "DataScope Systems",
    link: "https://www.datascopesystems.com/",
    timeline: "09/2023 - Current",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        recusandae corporis totam, quod exercitationem officiis nostrum et est
        iste voluptates placeat dolorum explicabo laudantium dolor dolore ipsum
        optio quibusdam voluptas molestiae magni doloremque obcaecati aliquam
        quidem facilis.`,
    tools: [
      Tool.CSharp,
      Tool.Dotnet,
      Tool.TypeScript,
      Tool.React,
      Tool.Docker,
      Tool.SqlServer,
      Tool.Octopus,
      Tool.TeamCity,
    ],
  },
  {
    companyName: "SGS&CO",
    link: "https://www.sgsco.com/",
    timeline: "04/2022 - 09/2023",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur vitae voluptatum repellendus suscipit sunt odio dignissimos! Exercitationem, ipsam quas! Ea incidunt magni quam perspiciatis sint reiciendis mollitia voluptatum facilis asperiores, quasi numquam aperiam est perferendis! Nesciunt doloremque labore perspiciatis quam?`,
    tools: [
      Tool.CSharp,
      Tool.Dotnet,
      Tool.TypeScript,
      Tool.JavaScript,
      Tool.React,
      Tool.JQuery,
      Tool.Azure,
      Tool.SqlServer,
    ],
  },
  {
    companyName: "Acuity Ultrasonics",
    link: "https://www.acuityultrasonics.com/",
    timeline: "08/2020 - 04/2022",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptas commodi? Non est voluptate eius, voluptatum cum magni inventore dignissimos aut corporis! Incidunt animi earum doloribus ea molestias maxime? Sed voluptates tenetur, explicabo, omnis impedit provident nisi eius aspernatur eaque, quae beatae.`,
    tools: [Tool.CSharp, Tool.Dotnet, Tool.CPlusPlus, Tool.Unity, Tool.MySql],
  },
];

function Experience() {
  return (
    <section className="experience">
      <h4>Experience</h4>
      <hr></hr>

      {experiences.map((x) => (
        <ExperienceListing
          key={x.companyName}
          companyName={x.companyName}
          link={x.link}
          description={x.description}
          timeline={x.timeline}
          tools={x.tools}
        />
      ))}
    </section>
  );
}

export default Experience;
