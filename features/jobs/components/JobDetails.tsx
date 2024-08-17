"use client";

import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useGetJob } from "@/features/jobs/api/useGetJob";
import { useGetProfile } from "@/features/onboard/api/useGetProfile";
import { applicationStatus, profileType } from "@/constants";
import { JobApplicationType } from "@/types";
import { useApplyForNewJob } from "@/features/jobs/api/useApplyForNewJob";
import { useGetApplicationsForCandidate } from "../api/useGetApplicationsForCandidate";
import { useGetApplicationsForRecruiter } from "../api/useGetApplicationsForRecruiter";

const JobDetails = ({ jobId }: { jobId: string }) => {
  const router = useRouter();
  const { data: job, isLoading: isLoadingJob } = useGetJob(jobId);
  const { user, isLoaded } = useUser();
  const { data: profileInfo, isLoading: isLoadingProfile } = useGetProfile(
    user?.id
  );
  let role;
  if (profileInfo?.role === profileType.CANDIDATE) {
    role = profileType.CANDIDATE;
  } else if (profileInfo?.role === profileType.RECRUITER) {
    role = profileType.RECRUITER;
  }
  const applyForJob = useApplyForNewJob();

  const applicationResults =
    role === profileType.CANDIDATE
      ? useGetApplicationsForCandidate(user?.id)
      : useGetApplicationsForRecruiter(job?.recruiterId);

  const { data: applicationListing, isLoading: isLoadingApplications } =
    applicationResults;

  if (isLoadingJob || isLoadingProfile || !isLoaded) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500 mt-32" />
      </div>
    );
  }
  const {
    _id,
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
      jobId: _id.toString(),
    };

    applyForJob.mutate(application);
    router.push("/jobs");
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
        <Button
          disabled={
            applicationListing?.findIndex(
              (item: JobApplicationType) => item?.jobId === job?._id
            ) > -1
              ? true
              : false
          }
          onClick={handleJobApply}
        >
          {applicationListing?.findIndex(
            (item: JobApplicationType) => item?.jobId === job?._id
          ) > -1
            ? "Applied"
            : "Apply"}
        </Button>
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
