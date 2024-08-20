export enum formFieldType {
  INPUT = "input",
  FILE = "file",
}

export enum profileType {
  CANDIDATE = "candidate",
  RECRUITER = "recruiter",
}

export enum queryKeys {
  PROFILE = "profile",
  JOBS_FOR_RECRUITER = "jobsForRecruiter",
  JOBS_FOR_CANDIDATE = "jobsForCandidate",
  JOB = "job",
  APPLICATIONS_FOR_RECRUITER = "applicationsForRecruiter",
  APPLICATIONS_FOR_CANDIDATE = "applicationsForCandidate",
  APPLICATION = "application",
  FILTER_CATEGORIES = "filterCategories",
}

export enum applicationStatus {
  PENDING = "Pending",
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
  APPLIED = "Applied",
  SELECTED = "Selected",
}

export const filterMenuOptions = [
  { id: "companyName", label: "Company Name" },
  { id: "title", label: "Job Title" },
  { id: "location", label: "Location" },
  { id: "type", label: "Type" },
];

export const membershipPlans = [
  {
    heading: "Tier 1",
    price: 100,
    type: "basic",
  },
  {
    heading: "Tier 2",
    price: 1000,
    type: "teams",
  },
  {
    heading: "Tier 3",
    price: 5000,
    type: "enterprise",
  },
];
