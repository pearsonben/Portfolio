import BadgeList from "./BadgeList";
import { Tool } from "../assets/badges";

const tools: Tool[] = [Tool.Java, Tool.C, Tool.Python];

function Education() {
  return (
    <section className="experience">
      <h4>Education</h4>
      <hr></hr>

      <header>
        <h5>
          The University of York -{" "}
          <span className="job-timeline">BEng Electronic Engineering</span>
        </h5>
        <h5 className="job-timeline">09/2017 - 07/2020</h5>
      </header>
      <BadgeList badges={tools} />

      <article>
        Throughout my undergraduate degree, I had the opportunity to work on a
        variety of software projects. Some notable projects include building a
        flocking simulator in Java, designing and implementing a multimeter in
        C, as well as building various physics games. I also used Python for
        data analysis as part of my final year thesis.
      </article>
    </section>
  );
}

export default Education;
