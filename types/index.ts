import { Database } from "@/database.types";
import { User } from "@clerk/nextjs/server";
import { Control } from "react-hook-form";

export type HeaderProps = {
  userId: string | undefined;
  role: RecruiterType | undefined;
};

export type FormFieldType = "input" | "file";

export type CustomFormFieldProps = {
  fieldType: FormFieldType;
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export type RecruiterType = "candidate" | "recruiter";

export type RecruiterSubmitData = {
  userId: string | undefined;
  role: RecruiterType;
  email: string | undefined;
  isPremiumUser: boolean;
  recruiterInfo?: {
    name: string;
    companyName: string;
    companyRole: string;
    jobsPosted: string[];
  };
  candidateInfo?: {
    resume?: string | undefined;
    name: string;
    currentCompany: string;
    currentJobLoacation: string;
    preferredJobLoacation: string;
    currentSalary: string;
    noticePeriod: string;
    skills: string;
    previousCompanies: string;
    totalExperience: number;
    college: string;
    collegeLocation: string;
    graduationYear: string;
    linkedinProfile: string;
    githubProfile: string;
  };
};

export type CreateProfileParams = {
  profile: RecruiterSubmitData;
};

export type JobSubmitData = {
  applicants: string[];
  companyName: string;
  description: string;
  experience: string;
  location: string;
  recruiterId: string | undefined;
  skills: string;
  title: string;
  type: string;
};

export type PostNewJobParams = {
  job: JobSubmitData;
};

export type RecruiterJobType = {
  _id: string;
  applicants: string[];
  companyName: string;
  description: string;
  experience: string;
  location: string;
  recruiterId: string | undefined;
  skills: string;
  title: string;
  type: string;
};

export type CommonCardProps = {
  title: string;
  companyName?: string;
  location?: string;
  type?: string;
  icon?: React.ReactNode;
  description?: string;
  footerContent?: React.ReactNode;
};

export type CandidateJobCardProps = {
  job: RecruiterJobType;
};

export type RecruiterJobCardProps = {
  job: RecruiterJobType;
};

export type ParamsProps = {
  params: { id: string };
};

export type ApplicantStatusType =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Applied"
  | "Selected";

export type JobApplicationType = {
  recruiterId: string;
  name: string;
  email: string;
  candidateUserId: string;
  status: ApplicantStatusType;
  jobId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CandidateInfoType = {
  _id: string;
  name: string;
  email: string;
  currentCompany: string;
  currentJobLoacation: string;
  preferredJobLoacation: string;
  currentSalary: string;
  noticePeriod: string;
  skills: string;
  previousCompanies: string;
  totalExperience: string;
  college: string;
  collegeLocation: string;
  graduationYear: string;
  linkedinProfile: string;
  githubProfile: string;
};

export type CandidateType = {
  candidateInfo: CandidateInfoType;
};

export type ApplicantColumnType = {
  id: string;
  name: string;
  status: ApplicantStatusType;
  email: string;
  candidateUserId: CandidateType[];
};
export type ActivitiesColumnType = {
  id: string;
  title: string;
  status: ApplicantStatusType;
  company: string;
  location: string;
  applicants: number;
  recruiter: string;
  postedDate: string;
  candidateUserId: CandidateType[];
};

export type ApplicantTableActionsProps = {
  candidateInfo: CandidateInfoType;
  id: string;
};

export type UpdateJobApplicationParams = {
  applicationId: string;
  application: JobApplicationType;
};

export type FilterMenuType = {
  id: string;
  name: string;
  options: string[];
};

export type SearchParamsType = {
  searchParams: { [key: string]: string | string[] | undefined | {} };
};

export type SearchParamsPropType = {
  searchParamsProp: { [key: string]: string | string[] | undefined | {} };
};

export type UserProfileType = {
  _id: string;
  userId: string | undefined;
  role: RecruiterType;
  email: string | undefined;
  isPremiumUser: boolean;
  recruiterInfo?: {
    name: string;
    companyName: string;
    companyRole: string;
    jobsPosted: string[];
  };
  candidateInfo?: {
    resume?: string | undefined;
    name: string;
    currentCompany: string;
    currentJobLoacation: string;
    preferredJobLoacation: string;
    currentSalary: string;
    noticePeriod: string;
    skills: string;
    previousCompanies: string;
    totalExperience: number;
    college: string;
    collegeLocation: string;
    graduationYear: string;
    linkedinProfile: string;
    githubProfile: string;
  };
};

export type CandidateOnboardFormProps = {
  userProfile?: UserProfileType;
};
