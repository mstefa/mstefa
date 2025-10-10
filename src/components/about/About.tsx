import React from "react";
import styles from "./about.module.scss";
import { Icon } from "../icon/Icon";
import { SectionTitle } from "../atoms/section-title/SectionTitle";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <SectionTitle referenceId="about">About Me</SectionTitle>
      <div>
        <div className={styles.textContainer}>
          <p>
            I&apos;m a passionate Software Engineer who loves building platforms
            that truly stand out and deliver great user experiences. My main
            focus is backend development, where I&apos;ve worked with{" "}
            <b>TypeScript</b>, <b>GoLang</b>, and <b>Java </b> to design and
            scale modern microservices. On the frontend, I enjoy crafting clean,
            engaging interfaces with React. I&apos;m also experienced and
            excited about working with AI, exploring how intelligent systems can
            enhance products and make them smarter.
          </p>
          <p>
            Above all, I&apos;m driven to push platform quality and performance
            to the next level while creating meaningful, forward-thinking
            solutions.
          </p>
          <p>
            From my root as an aeronautical engineer, my journey has been a
            transformative one, molding me into a versatile Software Engineer.
            On my journey, I got the chance to dive into the role of a Teaching
            Assistant, mentoring emerging talents and guiding into the
            development world. My focus on effective leadership and ability to
            adapt to various cultures have consistently led to successful
            outcomes across a wide range of domains.
          </p>
          <p>
            <b>
              <a
                href="https://www.linkedin.com/in/matiasstefanutti/"
                target="blank"
              >
                Let&apos;s connect{" "}
              </a>
            </b>{" "}
            to explore new horizons and drive transformative tech solutions.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="./images/profilePic.webp" alt="profile"></img>
          <a
            href="https://drive.google.com/uc?export=download&id=1MefuFpnNeeRATLesxyDzKNAkfP0jxA_T"
            target="blank"
          >
            {" "}
            <button className="mainButton">Resume</button>{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
