import jobsData from "../../data/personalData.json";
import { PersonalInfo } from "../domain/PersonalInfo";

export function getPersonalInfo(): PersonalInfo {
  return jobsData as any as PersonalInfo[];
}
