import React from "react";
import starIcon from "../img/starIcon.png";
import lightningIcon from "../img/lightningIcon.png";
import heartIcon from "../img/heartIcon.png";
import "../styles/global.css";

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <h2>About Me</h2> <br />
      <div className="aboutme-container">
        <article className="aboutme-article">
          <img
            className="icon-img"
            src={starIcon}
            alt="icon of purple box with white star shape in the middle"
          />
          <br />
          <br />
          <p>
            As a <strong>Software developer</strong>, and a freelance web dev, I have honed my skills in
            <strong> coding architecture</strong> and <strong>frameworks</strong>. I am capable of
            developing <strong>dynamic software applications</strong> and I continuously enhance my understanding of these technologies. My experience
            extends to <strong>data management</strong> as well, having worked
            with both SQL and NoSQL databases.
          </p>
        </article>
        <article className="aboutme-article">
          <img
            className="icon-img"
            src={heartIcon}
            alt="icon of green box with white heart in the middle"
          />
          <br />
          <br />
          <p>
            Colleagues know me as {""}
            <strong>friendly and compassionate team player</strong> who strives
            to create an inclusive environment for all. I am passionately
            curious, driven to comprehend intricate topics, and enjoy turning
            challenges into opportunities for growth.
            <strong> Positivity</strong> is my fuel, and I believe it is
            instrumental in building effective and happy teams. Let's connect
            and create meaningful tech solutions together.
          </p>
        </article>
        <article className="aboutme-article">
          <img
            className="icon-img"
            src={lightningIcon}
            alt="icon of blue box with white lightning bolt in the middle"
          />
          <br />
          <br />
          <p>
            As a <strong>diligent and detail-oriented professional</strong>, I
            am committed to meeting deadlines and exceeding expectations. I
            strive to <strong>understand the nuances</strong> of every
            assignment and client, ensuring the deliverables align with their
            precise needs. Furthermore, I place great emphasis on {""}
            <strong>open communication</strong>, believing it to be a
            cornerstone for <strong>efficient collaboration</strong> and <strong>streamlined project
            execution</strong>.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
