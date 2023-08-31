import React from "react";
import styles from "./blogHeader.module.scss";

export default function BlogHeader() {
  return (
    <section className={styles.container}>
      <h1>Matias&apos;s Blog</h1>
      <h3>🚧👷‍♂️ This blog is under construction 👷‍♀️🚧</h3>
      <h3>Please excuse the mess 🧹 </h3>
      <p>
        Welcome to my blog! as a software developer I&apos;ve worked on a
        variety of projects, from small personal projects to large enterprise
        applications. In this blog, I intend to share the lessons I&apos;ve
        learned from my hands-on experience and dedicated study. I hope you find
        these articles interesting.
      </p>
      <p>
        This blog is a work in progress and I&apos;m always looking for new
        topics to write about, so if you have any suggestions,
        <b>
          <a
            href="https://www.linkedin.com/in/matiasstefanutti/"
            target="blank"
          >
            &nbsp; please let me know.
          </a>
        </b>
      </p>
      <p>I hope you enjoy my blog!</p>
    </section>
  );
}
