"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./page.module.scss";
import { getJobs } from "@/src/infrastructure/JobRepository";
import { getEducation } from "@/src/infrastructure/EducationRepository";
import { getPersonalInfo } from "@/src/infrastructure/PersonaInfoRepository";

const experience = getJobs();
const education = getEducation();

const cvData = getPersonalInfo();

//TODO: terminar de agregar educacion y skills al json
// revisar los trabajos que no quiero que se vean en el cv pero si en la web y viceversa
// agregar skills al json como en el CV al este CV

export default function CvPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <>
      <main className={styles.main} ref={contentRef}>
        <header className={styles.header}>
          <h1 className={styles.h1}>{cvData.name}</h1>
          <h2 className={styles.h2}>{cvData.title}</h2>
          <div className={styles.div}>
            <span>{cvData.contact.email} | </span>
            <span>{cvData.contact.phone} | </span>
            <span>{cvData.contact.location} | </span>
            <span>
              <a
                href={`https://${cvData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvData.contact.linkedin}
              </a>
            </span>
          </div>
        </header>

        <section className={styles.section}>
          <p className={styles.mainDescription}>
            As a Software Engineer, I prioritize creating robust and valuable
            software, specializing in the development of scalable and
            intelligent systems. I have experience leading high-performance
            teams developing full-stack web applications and building projects
            with NodeJS, TypeScript, Go, Java, and React. I am committed to
            continual growth and embrace best practices such as TDD, CI/CD,
            Hexagonal architecture, and Agile methodologies, while actively
            exploring and integrating cutting-edge technologies, including
            Generative AI. I thrive on challenges and am dedicated to fostering
            an environment of innovation and excellence.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>Experience</h3>
          {experience
            .filter((exp) => exp.showOnCv)
            .map((exp, i) => (
              <div key={i} className={styles.div}>
                <div>
                  <strong>{exp.title}</strong>, {exp.company}
                  <span className={styles.span}>{exp.timeRange}</span>
                </div>
                <ul className={styles.ul}>
                  {exp.itemsDescriptions.map((d, j) => (
                    <li key={j} className={styles.li}>
                      - {d.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>Education</h3>
          <ul className={styles.ul}>
            {education.map((edu, i) => (
              <li key={i} className={styles.li}>
                <strong>{edu.degree}</strong>, {edu.institution}
                <span className={styles.span}>{edu.year}</span>
                <p>{edu.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>Skills</h3>
          <div>{cvData.skills.join(" · ")}</div>
        </section>
      </main>
      <button className={styles.downloadButton} onClick={handlePrint}>
        Download CV as PDF
      </button>
    </>
  );
}
