import { Control } from "react-hook-form";

export enum formFieldType {
  INPUT = "input",
  FILE = "file",
}

export enum tabsTriggerType {
  CANDIDATE = "candidate",
  RECRUITER = "recruiter",
}

export type CustomFormFieldProps = {
  fieldType: formFieldType;
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};
