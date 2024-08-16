import { Control } from "react-hook-form";

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
}
