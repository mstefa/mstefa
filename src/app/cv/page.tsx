"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./page.module.scss";

const cvData = {
  name: "John Doe",
  title: "Software Engineer",
  contact: {
    email: "john.doe@email.com",
    phone: "+1 234 567 8901",
    location: "Cambridge, MA, USA",
    linkedin: "linkedin.com/in/johndoe",
  },
  education: [
    {
      degree: "M.S. Computer Science",
      institution: "Harvard University",
      year: "2022",
    },
    {
      degree: "B.S. Computer Science",
      institution: "Harvard University",
      year: "2020",
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "TechCorp",
      years: "2022–Present",
      details: [
        "Lead development of scalable web applications.",
        "Mentored junior engineers.",
      ],
    },
    {
      role: "Software Engineer",
      company: "InnovateX",
      years: "2020–2022",
      details: [
        "Built RESTful APIs and React frontends.",
        "Collaborated with cross-functional teams.",
      ],
    },
  ],
  skills: ["TypeScript", "React", "Node.js", "Python", "SQL"],
};

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
          <h3 className={styles.h3}>Education</h3>
          <ul className={styles.ul}>
            {cvData.education.map((edu, i) => (
              <li key={i} className={styles.li}>
                <strong>{edu.degree}</strong>, {edu.institution}
                <span className={styles.span}>{edu.year}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>Experience</h3>
          {cvData.experience.map((exp, i) => (
            <div key={i} className={styles.div}>
              <div>
                <strong>{exp.role}</strong>, {exp.company}
                <span className={styles.span}>{exp.years}</span>
              </div>
              <ul className={styles.ul}>
                {exp.details.map((d, j) => (
                  <li key={j} className={styles.li}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
