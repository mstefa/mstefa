"use client";
import { CSSProperties, useState, useEffect } from "react";
import styles from "./jobs.module.scss";
import { getJobs } from "@/src/infrastructure/JobRepository";
import { SectionTitle } from "../atoms/section-title/SectionTitle";

export default function Jobs() {
  const jobsData = getJobs();

  const [activeTabId, setActiveTabId] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--activeTabId",
      String(activeTabId),
    );
  }, [activeTabId]);

  const tabStyleVars = {
    "--activeTabId": activeTabId,
  } as CSSProperties;

  return (
    <section className={styles.jobSection}>
      <SectionTitle referenceId="jobs">Where I’ve Worked</SectionTitle>
      <div className={styles.inner} style={tabStyleVars}>
        <div
          className={styles.tabList}
          role="tablist"
          aria-label="Job tabs"
          style={tabStyleVars}
        >
          {jobsData &&
            jobsData.map((e, i) => {
              const company = e.company;
              const isSelected = activeTabId === i;
              return (
                <button
                  type="button"
                  className={
                    isSelected ? styles.tabButtonActive : styles.tabButton
                  }
                  key={e.id}
                  onClick={() => setActiveTabId(i)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={isSelected ? 0 : -1}
                  aria-selected={isSelected}
                  aria-controls={`panel-${i}`}
                >
                  <span>{company}</span>
                </button>
              );
            })}
          <div className={styles.highlight} style={tabStyleVars} />
        </div>
        <div className={styles.tabPanels}>
          {jobsData &&
            jobsData.map((e, i) => {
              const {
                title,
                companyWebSite,
                company,
                timeRange,
                itemsDescriptions,
                usedSkills,
              } = e;
              const isActive = activeTabId === i;

              return (
                <div
                  className={
                    isActive ? styles.tabPanel : styles.tabPanelHidden
                  }
                  key={e.id}
                  id={`panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={!isActive}
                  hidden={!isActive}
                >
                  <h4>
                    <span>{title}</span>
                    {company && (
                      <span className={styles.company}>
                        &nbsp;@&nbsp;
                        {companyWebSite ? (
                          <a
                            href={companyWebSite}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {company}
                          </a>
                        ) : (
                          <span>{company}</span>
                        )}
                      </span>
                    )}
                  </h4>
                  <p className={styles.timeRange}>{timeRange}</p>
                  <ul className={styles.itemsList}>
                    {itemsDescriptions &&
                      itemsDescriptions.map((item) => {
                        return (
                          <li key={item.description}>{item.description}</li>
                        );
                      })}
                  </ul>
                  <ul className={styles.skillsList}>
                    {usedSkills &&
                      usedSkills.map((skill) => {
                        return <li key={skill.name}>{skill.name}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
