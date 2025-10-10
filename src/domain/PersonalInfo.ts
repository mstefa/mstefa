export interface PersonalInfo {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website: string;
    twitter: string;
  };
  technologies: string[];
  skills: string[];
}
