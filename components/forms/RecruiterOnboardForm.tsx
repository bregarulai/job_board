"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { recruiterOnboardFormSchema } from "@/types/validation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/shared/CustomFormField";
import { formFieldType, profileType } from "@/constants";
import { useUser } from "@clerk/nextjs";
import { createProfile } from "@/features/onboard/actions/profile.action";

const RecruiterOnboardForm = () => {
  const { isLoaded, user } = useUser();

  const form = useForm<z.infer<typeof recruiterOnboardFormSchema>>({
    resolver: zodResolver(recruiterOnboardFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      companyRole: "",
    },
  });

  async function onSubmit(values: z.infer<typeof recruiterOnboardFormSchema>) {
    const data = {
      userId: user?.id,
      role: profileType.RECRUITER,
      email: user?.emailAddresses[0].emailAddress,
      isPremiumUser: false,
      recruiterInfo: values,
    };

    await createProfile({ profile: data, pathToRevalidate: "/onboard" });
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
        <Button
          type="submit"
          disabled={!isLoaded || form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Onboarding..."
            : "Onboard as a Recruiter"}
        </Button>
      </form>
    </Form>
  );
};

export default RecruiterOnboardForm;
