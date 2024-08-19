"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { candidateOnboardFormSchema } from "@/types/validation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/shared/CustomFormField";
import { formFieldType, profileType } from "@/constants";
import { useUser } from "@clerk/nextjs";
import { useCreateProfile } from "@/features/onboard/api/useCreateProfile";
import supabase from "@/lib/supabase/client";
import { CandidateOnboardFormProps } from "@/types";
import { useUpdateProfile } from "@/features/account/api/useUpdateProfile";

const CandidateOnboardForm = ({ userProfile }: CandidateOnboardFormProps) => {
  const { isLoaded, user } = useUser();
  const createProfileMutation = useCreateProfile();
  const updateProfileMutation = useUpdateProfile();

  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof candidateOnboardFormSchema>>({
    resolver: zodResolver(candidateOnboardFormSchema),
    defaultValues: {
      resume: "",
      name: userProfile ? userProfile.candidateInfo?.name : "",
      currentCompany: userProfile
        ? userProfile.candidateInfo?.currentCompany
        : "",
      currentJobLoacation: userProfile
        ? userProfile.candidateInfo?.currentJobLoacation
        : "",
      preferredJobLoacation: userProfile
        ? userProfile.candidateInfo?.preferredJobLoacation
        : "",
      currentSalary: userProfile
        ? userProfile.candidateInfo?.currentSalary
        : "",
      noticePeriod: userProfile ? userProfile.candidateInfo?.noticePeriod : "",
      skills: userProfile ? userProfile.candidateInfo?.skills : "",
      previousCompanies: userProfile
        ? userProfile.candidateInfo?.previousCompanies
        : "",
      totalExperience: userProfile
        ? userProfile.candidateInfo?.totalExperience
        : 0,
      college: userProfile ? userProfile.candidateInfo?.college : "",
      collegeLocation: userProfile
        ? userProfile.candidateInfo?.collegeLocation
        : "",
      graduationYear: userProfile
        ? userProfile.candidateInfo?.graduationYear
        : "",
      linkedinProfile: userProfile
        ? userProfile.candidateInfo?.linkedinProfile
        : "",
      githubProfile: userProfile
        ? userProfile.candidateInfo?.githubProfile
        : "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleUploadPdfToSupabase = async (file: File) => {
    const { data, error } = await supabase()
      .storage.from("job-board")
      .upload(`/public/${file.name}`, file, {
        cacheControl: "3600",
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error(`There was an error uploading the file: ${error.message}`);
      return;
    }

    if (data) {
      return data.path;
    }
  };

  async function onSubmit(values: z.infer<typeof candidateOnboardFormSchema>) {
    if (!!userProfile) {
      const candidateInfo = {
        ...values,
        resume: userProfile.candidateInfo?.resume,
      };

      const profileData = {
        _id: userProfile._id,
        userId: user?.id,
        role: profileType.CANDIDATE,
        email: user?.emailAddresses[0].emailAddress,
        isPremiumUser: false,
        candidateInfo: candidateInfo,
      };
      updateProfileMutation.mutate(profileData);
    } else {
      const filePath = await handleUploadPdfToSupabase(file!);
      const candidateInfo = {
        ...values,
        resume: filePath,
      };

      const data = {
        userId: user?.id,
        role: profileType.CANDIDATE,
        email: user?.emailAddresses[0].emailAddress,
        isPremiumUser: false,
        candidateInfo: candidateInfo,
      };

      createProfileMutation.mutate(data);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pr-3">
        {!userProfile && (
          <CustomFormField
            control={form.control}
            name="resume"
            fieldType={formFieldType.FILE}
            handleFileChange={handleFileChange}
          />
        )}
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
            type="number"
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
            type="number"
          />
          <CustomFormField
            control={form.control}
            name="noticePeriod"
            fieldType={formFieldType.INPUT}
            label="Notice Period"
            placeholder="Enter your notice period"
            type="number"
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
        <Button
          type="submit"
          disabled={!isLoaded || form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Onboarding..."
            : userProfile
            ? "Update Profile"
            : "Onboard as a Cadidate"}
        </Button>
      </form>
    </Form>
  );
};

export default CandidateOnboardForm;
