import { z } from "zod";

export const recruiterFormSchema = z.object({
  name: z.string().trim().min(2, {
    message: "name must be at least 2 characters.",
  }),
  companyName: z.string().trim().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  companyRole: z.string().trim().min(2, {
    message: "Comapany role must be at least 2 characters.",
  }),
});
