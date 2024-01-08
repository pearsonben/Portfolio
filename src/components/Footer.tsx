import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <Link to={"https://github.com/pearsonben"}>
          <img
            className="badge"
            height="32px"
            alt="GitHub"
            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
          ></img>
        </Link>

        <Link to={"https://www.linkedin.com/in/pearsonben98/"}>
          <img
            className="badge"
            height="32px"
            alt={"LinkedIn"}
            src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
          ></img>
        </Link>
      </div>

      <h5>2024 Ben Pearson</h5>
    </footer>
  );
}

export default Footer;
