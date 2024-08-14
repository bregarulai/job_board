"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { postNewJobFormSchema } from "@/types/validation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import { formFieldType, profileType } from "@/constants";
import { useUser } from "@clerk/nextjs";

const PostNewJobForm = () => {
  const { isLoaded, user } = useUser();

  const form = useForm<z.infer<typeof postNewJobFormSchema>>({
    resolver: zodResolver(postNewJobFormSchema),
    defaultValues: {
      companyName: "",
      title: "",
      type: "",
      location: "",
      experince: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof postNewJobFormSchema>) {
    const data = {};
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          control={form.control}
          name="companyName"
          fieldType={formFieldType.INPUT}
          label="Company Name"
          placeholder="Enter company name"
        />
        <CustomFormField
          control={form.control}
          name="title"
          fieldType={formFieldType.INPUT}
          label="Title"
          placeholder="Enter job title"
        />
        <CustomFormField
          control={form.control}
          name="type"
          fieldType={formFieldType.INPUT}
          label="Type"
          placeholder="Enter job type"
        />
        <CustomFormField
          control={form.control}
          name="location"
          fieldType={formFieldType.INPUT}
          label="Locaton"
          placeholder="Enter job location"
        />
        <CustomFormField
          control={form.control}
          name="experince"
          fieldType={formFieldType.INPUT}
          label="Experince"
          placeholder="Enter experince required"
        />
        <CustomFormField
          control={form.control}
          name="description"
          fieldType={formFieldType.INPUT}
          label="Description"
          placeholder="Enter job description"
        />
        <Button type="submit" disabled={!isLoaded}>
          Post New Job
        </Button>
      </form>
    </Form>
  );
};

export default PostNewJobForm;
