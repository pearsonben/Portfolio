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
              src="https://private-user-images.githubusercontent.com/47435728/296617153-16d6cfb8-2e9f-44b4-96f7-9c736b38aff5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUyNjcyOTQsIm5iZiI6MTcwNTI2Njk5NCwicGF0aCI6Ii80NzQzNTcyOC8yOTY2MTcxNTMtMTZkNmNmYjgtMmU5Zi00NGI0LTk2ZjctOWM3MzZiMzhhZmY1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE0VDIxMTYzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMwMWI4ZWI3NDlmNjA2YWE0MjE4ZWQzYmZiZTg3ZjEwYzM3NGM5NGRhNzg0NWQxMjQ4MmQ4ZTJiZGQ5Nzk4ZDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.LPEzABDtVyr9UoAv0W9HbG8eOLZQaqjOiCBUZeqEw_0"
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
