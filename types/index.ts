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
