import { features } from "process";

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
    heading: "Basic",
    price: "Free",
    type: "basic",
    description: "Basic membership plan",
    featuresTitle: "Basic user",
    features: [
      "onboarding",
      "recruiter",
      "candidate",
      "job",
      "application",
      "profile",
      "dashboard",
      "5 limit",
    ],
  },
  {
    heading: "Team",
    price: "$1000/yr",
    type: "team",
    description: "Team membership plan +",
    featuresTitle: "Team members",
    features: [
      "onboarding",
      "recruiter",
      "candidate",
      "job",
      "application",
      "profile",
      "dashboard",
      "10 limit",
    ],
  },
  {
    heading: "Enterprise +",
    price: "$5000/yr",
    type: "enterprise",
    description: "Enterprise membership plan",
    featuresTitle: "Enterprise members",
    features: [
      "onboarding",
      "recruiter",
      "candidate",
      "job",
      "application",
      "profile",
      "dashboard",
      "Unlimited",
    ],
  },
];
