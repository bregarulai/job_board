"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { recruiterOnboardFormSchema } from "@/types/validation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import { formFieldType } from "@/constants";

const RecruiterOnboardForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof recruiterOnboardFormSchema>>({
    resolver: zodResolver(recruiterOnboardFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      companyRole: "",
      isPremiumUser: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof recruiterOnboardFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          control={form.control}
          name="name"
          fieldType={formFieldType.INPUT}
          label="Name"
          placeholder="Enter your name"
        />
        <CustomFormField
          control={form.control}
          name="companyName"
          fieldType={formFieldType.INPUT}
          label="Company Name"
          placeholder="Enter your company name"
        />
        <CustomFormField
          control={form.control}
          name="companyRole"
          fieldType={formFieldType.INPUT}
          label="Company Role"
          placeholder="Enter your company role"
        />
        <Button type="submit">Onboard as a Recruiter</Button>
      </form>
    </Form>
  );
};

export default RecruiterOnboardForm;
