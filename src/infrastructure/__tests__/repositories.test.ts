import { describe, it, expect } from "vitest";
import { getJobs } from "../JobRepository";
import { getProjects } from "../ProjectRepository";
import { getEducation } from "../EducationRepository";
import { getPersonalInfo } from "../PersonaInfoRepository";

describe("Infrastructure Repositories", () => {
  it("getJobs returns non-empty array of valid Job entities", () => {
    const jobs = getJobs();
    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs.length).toBeGreaterThan(0);

    for (const job of jobs) {
      expect(job).toHaveProperty("id");
      expect(typeof job.company).toBe("string");
      expect(typeof job.title).toBe("string");
      expect(typeof job.timeRange).toBe("string");
      expect(typeof job.showOnCv).toBe("boolean");
      expect(typeof job.showOnWeb).toBe("boolean");
      expect(Array.isArray(job.itemsDescriptions)).toBe(true);
      expect(Array.isArray(job.usedSkills)).toBe(true);
    }
  });

  it("getProjects returns non-empty array of valid Project entities", () => {
    const projects = getProjects();
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);

    for (const project of projects) {
      expect(project).toHaveProperty("id");
      expect(typeof project.name).toBe("string");
      expect(typeof project.description).toBe("string");
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(typeof project.main).toBe("boolean");
      expect(typeof project.show).toBe("boolean");
    }
  });

  it("getEducation returns non-empty array of valid Education entities", () => {
    const education = getEducation();
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);

    for (const edu of education) {
      expect(typeof edu.degree).toBe("string");
      expect(typeof edu.institution).toBe("string");
      expect(typeof edu.year).toBe("string");
    }
  });

  it("getPersonalInfo returns complete PersonalInfo object", () => {
    const info = getPersonalInfo();
    expect(info.name).toBe("Matias Stefanutti");
    expect(info.title).toContain("Software Engineer");
    expect(info.contact.email).toBe("mstefanutti24@gmail.com");
    expect(Array.isArray(info.skills)).toBe(true);
    expect(info.skills.length).toBeGreaterThan(0);
  });
});
