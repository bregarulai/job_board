import { Database } from "@/database.types";
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
    resume: string | undefined;
    name: string;
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
  | "Applied";

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

export type ApplicantTableActionsProps = {
  candidateInfo: CandidateInfoType;
  id: string;
};
