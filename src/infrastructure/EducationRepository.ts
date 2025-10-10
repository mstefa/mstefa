import jobsData from "../../data/education.json";
import EducationData from "../domain/Education";

export function getEducation(): EducationData[] {
  return jobsData as any as EducationData[];
}
