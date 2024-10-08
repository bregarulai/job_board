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
  resume: z.optional(z.string().trim()),
  // resume: z
  //   .string()
  //   .trim()
  //   .endsWith(".pdf", { message: "Resume must be pdf file." })
  //   .optional(),
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
  totalExperience: z
    .number()
    .min(1, { message: "Total Experience must be at least 1 characters." }),
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

export const postNewJobFormSchema = z.object({
  companyName: z.string().trim().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  title: z.string().trim().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  type: z.string().trim().min(2, {
    message: "Type must be at least 2 characters.",
  }),
  location: z.string().trim().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  experience: z.string().trim().min(1, {
    message: "Experience must be at least 1 characters.",
  }),
  description: z.string().trim().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  skills: z.string().trim().min(2, {
    message: "Type must be at least 2 characters.",
  }),
});
