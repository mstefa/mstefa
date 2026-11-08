import React from "react";
import styles from "./presentation.module.scss";
import { Icon } from "../icon/Icon";

export default function Presentation() {
  return (
    <section className={styles.container}>
      <div className={styles.heroContent}>
        <h1 className={styles.name}>Matías Stefanutti</h1>
        <h2 className={styles.role}>
          <span className={styles.rolePrimary}>Senior Software Engineer</span>
          <span className={styles.roleDivider} aria-hidden="true">
            {" "}
            —{" "}
          </span>
          <span className={styles.roleSpecialty}>
            AI Agents &amp; Process Automation
          </span>
        </h2>
        <p className={styles.lead}>
          Designing and orchestrating{" "}
          <strong>scalable backend architectures</strong>, custom{" "}
          <strong>Model Context Protocol (MCP) servers</strong>, and{" "}
          <strong>autonomous AI workflows</strong> that streamline complex
          engineering and business operations.
        </p>
      </div>
      <div className={styles.arrow}>
        <a href="#about" aria-label="Scroll to About section">
          <Icon icon="chevronDown" size="large"></Icon>
        </a>
      </div>
    </section>
  );
}
