"use client";

import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useGetJob } from "@/features/jobs/api/useGetJob";
import { useGetProfile } from "@/features/onboard/api/useGetProfile";
import { applicationStatus } from "@/constants";
import { JobApplicationType } from "@/types";
import { useApplyForNewJob } from "@/features/jobs/api/useApplyForNewJob";

const JobDetails = ({ jobId }: { jobId: string }) => {
  const { data: job, isLoading } = useGetJob(jobId);
  const { user, isLoaded } = useUser();
  const applyForJob = useApplyForNewJob();
  const { data: profileInfo, isLoading: isLoadingProfile } = useGetProfile(
    user?.id
  );

  if (isLoading || isLoadingProfile || !isLoaded) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500 mt-32" />
      </div>
    );
  }
  const {
    companyName,
    title,
    location,
    type,
    skills,
    description,
    experience,
  } = job;

  const skillsList = skills.split(",");

  const handleJobApply = () => {
    const application: JobApplicationType = {
      recruiterId: job.recruiterId,
      name: profileInfo.candidateInfo.name,
      email: profileInfo.email,
      candidateUserId: profileInfo.userId,
      status: [applicationStatus.APPLIED],
      jobId: job._id,
    };

    applyForJob.mutate(application);
  };

  return (
    <div className="pt-6 pb-24">
      <div className="grid gap-4">
        <h2 className="text-xl">{companyName}</h2>
        <h3 className="text-3xl font-semibold">{title}</h3>

        <p className="text-muted-foreground text-sm">{location}</p>
        <p className="text-sm">{type}</p>
        <div>
          <p className="text-lg font-medium">Required skills</p>
          <div className="flex items-center  gap-2 py-2">
            {skillsList.map((skill: string) => (
              <div
                key={skill}
                className="bg-slate-100 rounded-lg px-2 py-1 text-sm"
              >
                <h3 className="text-sm">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4">
        <Button onClick={handleJobApply}>Apply</Button>
      </div>
      <div className="grid gap-4">
        <h4 className="text-xl font-semibold">About the Job</h4>
        <p>{description}</p>
      </div>
      <div className="grid gap-4 mt-4">
        <h5 className="text-xl font-semibold">Required experience</h5>
        <p>{`Must have ${experience} years of experience`}</p>
      </div>
    </div>
  );
};

export default JobDetails;
