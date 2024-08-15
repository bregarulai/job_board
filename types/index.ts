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
};

export type RecruiterType = "candidate" | "recruiter";

export type RecruiterSubmitData = {
  userId: string | undefined;
  role: RecruiterType;
  email: string | undefined;
  isPremiumUser: boolean;
  recruiterInfo: {
    name: string;
    companyName: string;
    companyRole: string;
  };
};

export type CreateProfileParams = {
  profile: RecruiterSubmitData;
  pathToRevalidate: string;
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
