import React from "react";
import Reveal from "../components/Reveal";

const About = () => (
  <section className="container">
    <Reveal>
    <h2>About Me</h2>
    </Reveal>
    <Reveal delay={0.2}>
    <p>
      I'm a passionate fullstack developer with 3 years of experience building scalable and user-friendly interfaces.
      I love React, performance optimization, and working on user-centric design.
    </p>
    </Reveal>
    <Reveal delay={0.4}>
    <p>
      Tech Stack: React, JavaScript, Html, C#, .NetCore MVC, .NetCore Web API ,SQL, Git, REST APIs, etc.
    </p>
    </Reveal>
  </section>
);

export default About;
