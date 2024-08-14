"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { candidateOnboardFormSchema } from "@/types/validation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import { formFieldType } from "@/constants";

const CandidateOnboardForm = () => {
  const form = useForm<z.infer<typeof candidateOnboardFormSchema>>({
    resolver: zodResolver(candidateOnboardFormSchema),
    defaultValues: {
      resume: undefined,
      name: "",
      currentCompany: "",
      currentJobLoacation: "",
      preferredJobLoacation: "",
      currentSalary: "",
      noticePeriod: "",
      skills: "",
      previousCompanies: "",
      totalExperience: "",
      college: "",
      collegeLocation: "",
      graduationYear: "",
      linkedinProfile: "",
      githubProfile: "",
    },
  });

  function onSubmit(values: z.infer<typeof candidateOnboardFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pr-3">
        <CustomFormField
          control={form.control}
          name="resume"
          fieldType={formFieldType.FILE}
        />
        <CustomFormField
          control={form.control}
          name="name"
          fieldType={formFieldType.INPUT}
          label="Name"
          placeholder="Enter your name"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomFormField
            control={form.control}
            name="currentCompany"
            fieldType={formFieldType.INPUT}
            label="Current Company"
            placeholder="Enter your current company"
          />
          <CustomFormField
            control={form.control}
            name="currentJobLoacation"
            fieldType={formFieldType.INPUT}
            label="Current Job Loacation"
            placeholder="Enter your current job loacation"
          />
          <CustomFormField
            control={form.control}
            name="preferredJobLoacation"
            fieldType={formFieldType.INPUT}
            label="Preferred Job Loacation"
            placeholder="Enter your preferred job loacation"
          />
          <CustomFormField
            control={form.control}
            name="currentSalary"
            fieldType={formFieldType.INPUT}
            label="Current Salary"
            placeholder="Enter your current salary"
          />
        </div>

        <CustomFormField
          control={form.control}
          name="skills"
          fieldType={formFieldType.INPUT}
          label="Skills"
          placeholder="Enter your skills"
        />

        <CustomFormField
          control={form.control}
          name="previousCompanies"
          fieldType={formFieldType.INPUT}
          label="Previous Companies"
          placeholder="Enter your previous companies"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomFormField
            control={form.control}
            name="totalExperience"
            fieldType={formFieldType.INPUT}
            label="Total Experience"
            placeholder="Enter your total experience"
          />
          <CustomFormField
            control={form.control}
            name="noticePeriod"
            fieldType={formFieldType.INPUT}
            label="Notice Period"
            placeholder="Enter your notice period"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomFormField
            control={form.control}
            name="college"
            fieldType={formFieldType.INPUT}
            label="College"
            placeholder="Enter your college"
          />
          <CustomFormField
            control={form.control}
            name="graduationYear"
            fieldType={formFieldType.INPUT}
            label="Graduation Year"
            placeholder="Enter your graduation year"
          />
        </div>

        <CustomFormField
          control={form.control}
          name="collegeLocation"
          fieldType={formFieldType.INPUT}
          label="College Location"
          placeholder="Enter your college location"
        />

        <CustomFormField
          control={form.control}
          name="linkedinProfile"
          fieldType={formFieldType.INPUT}
          label="LinkedIn Profile"
          placeholder="Enter your linkedin profile"
        />
        <CustomFormField
          control={form.control}
          name="githubProfile"
          fieldType={formFieldType.INPUT}
          label="Github Profile"
          placeholder="Enter your github profile"
        />
        <Button type="submit">Onboard as a Cadidate</Button>
      </form>
    </Form>
  );
};

export default CandidateOnboardForm;
