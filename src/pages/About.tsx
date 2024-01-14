const About = () => {
  return (
    <>
      <section className="about">
        <h4>About</h4>
        <article>
          <p>
            Full-Stack Developer based in Chester with 3 years of experience,
            building backends in .NET, frontends in React/TypeScript and
            managing deployments using Docker/Azure. Currently, I work for{" "}
            <span>
              <a href="https://www.datascopesystems.com/">DataScope Systems</a>
            </span>{" "}
            where I was brought in to help develop a new delivery management
            system to be served to hundreds of large scale clients in the
            construction industry. Previosly, I worked at{" "}
            <span>
              <a href="https://www.sgsco.com/">SGS&CO</a>
            </span>{" "}
            and{" "}
            <span>
              <a href="https://www.acuityultrasonics.com/">Acuity Ultrasonics</a>
            </span>.
          </p>
          <br></br>
          <p>
            When not working, I spend most of my time reading, rock climbing,
            and playing video games. I also have a working breed dog who takes
            up a lot of my time with training and walking.
          </p>
          <figure className="image-figure">
            <img
              width="600px"
              src="/assets/BOG.jpg"
              alt="reggie-in-field"
            ></img>
            <figcaption>(bonus dog picture)</figcaption>
          </figure>
        </article>
      </section>
    </>
  );
};

export default About;
