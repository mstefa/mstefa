export default interface JobData {
  id: string,
  company: string,
  title: string,
  companyWebSite: string,
  timeRange: string,
  showOnCv: boolean,
  showOnWeb: boolean,
  shortDescription: string,
  itemsDescriptions: jobItemsDescriptions[],
  usedSkills: techSkills[]
}

interface techSkills {
  name: string
}

interface jobItemsDescriptions {
  description: string
}
