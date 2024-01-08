import { Link } from "react-router-dom";
import IMAGES from "../images/images";

function About() {
  return (
    <>
      <section className="about">
        <h4>About</h4>
        <article>
          <p>
            I'm a Chester-based software developer with full-stack experience. I
            mostly work with ASP.NET Core on the backend, TypeScript/React on
            the frontend and Azure/Github for CI/CD. I really enjoy learning
            stuff, and at some point when I find a bit of free time (😅) I would
            love to add <Link to="https://elixir-lang.org/">elixir</Link> to my
            skillset, as well as learn more about microservices.
          </p>
          <p>
            When not working, I spend most of my time reading, rock climbing,
            and playing the occasional indie game. I also have a working breed
            dog who I spend a lot of time training and walking.
          </p>
          <figure className="image-figure">
            <img width="800px" src={IMAGES.bog} alt="reggie-in-field"></img>
            <figcaption>Me teasing the dog.</figcaption>
          </figure>
        </article>
      </section>
    </>
  );
}

export default About;
