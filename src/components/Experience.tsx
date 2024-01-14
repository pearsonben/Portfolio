import { Tool } from "../badges";
import ExperienceListing from "./ExperienceListing";

const experiences = [
  {
    companyName: "DataScope Systems",
    link: "https://www.datascopesystems.com/",
    timeline: "09/2023 - Current",
    bullets: [],
    description: `Working on various full-stack .NET Core/TypeScript/React applications, ensuring accessibilty and performance requirements are met. Furthermore, I am working with a group of 3 to dockerise the application suite to optimise the developer workflow.`,
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
    description: `In this role I was part of the automation team, where I was responsible for building the entire SDLC of a full-stack application to aggregate release notes, configuration management and metrics tracking for 3 line of business apps. I optimised and migrated a multitude of legacy stored procedures into EF Core which resulted in a 10x reduction in execution across the board. Designed and implemented a multi-stage deployment pipeline in Azure for 2 internal applications. Additionally, I maintained a legacy .NET Framework/JQuery application.`,
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
    description:
      "After joining straight after my degree, I had the opportunity to work on a range of exciting projects which helped me develop my skills and knowledge in a variety of areas. Responsibilities included refactoring a legacy desktop C++ application into C#, designing and building an internal diagnostics tool to identify mechanical failures in production using WPF, as well as maintaining and improving a WPF application used to scan and process large quantities of high voltage cable data.",
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
