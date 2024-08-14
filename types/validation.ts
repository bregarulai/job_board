import { z } from "zod";

export const recruiterOnboardFormSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  companyName: z.string().trim().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  companyRole: z.string().trim().min(2, {
    message: "Comapany role must be at least 2 characters.",
  }),
});
export const candidateOnboardFormSchema = z.object({
  resume: z
    .string()
    .trim()
    .endsWith(".pdf", { message: "Resume must be pdf file." }),
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  currentCompany: z.string().trim().min(2, {
    message: "Current Comapany role must be at least 2 characters.",
  }),
  currentJobLoacation: z.string().trim().min(2, {
    message: "Current Location must be at least 2 characters.",
  }),
  preferredJobLoacation: z.string().trim().min(2, {
    message: "Preferred Job Location must be at least 2 characters.",
  }),
  currentSalary: z.string().trim().min(2, {
    message: "Current Salary must be at least 2 characters.",
  }),
  noticePeriod: z.string().trim().min(2, {
    message: "Notice Period must be at least 2 characters.",
  }),
  skills: z.string().trim().min(2, {
    message: "Skills must be at least 2 characters.",
  }),
  previousCompanies: z.string().trim().min(2, {
    message: "Previous Companies must be at least 2 characters.",
  }),
  totalExperience: z.string().trim().min(2, {
    message: "Total Experience must be at least 2 characters.",
  }),
  college: z.string().trim().min(2, {
    message: "college must be at least 2 characters.",
  }),
  collegeLocation: z.string().trim().min(2, {
    message: "College Location must be at least 2 characters.",
  }),
  graduationYear: z.string().trim().min(2, {
    message: "Graduation Year must be at least 2 characters.",
  }),
  linkedinProfile: z.string().trim().min(2, {
    message: "LinkedIn Profile must be at least 2 characters.",
  }),
  githubProfile: z.string().trim().min(2, {
    message: "Github Profile must be at least 2 characters.",
  }),
});
