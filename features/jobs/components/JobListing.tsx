"use client";

import { Loader2 } from "lucide-react";

import { profileType } from "@/constants";
import PostNewJob from "@/features/jobs/components/PostNewJob";
import { useGetJobsForRecruiter } from "@/features/jobs/api/useGetJobsForRecruiter";
import RecruiterJobCard from "@/features/jobs/components/RecruiderJobCard";
import { RecruiterJobType } from "@/types";
import { useGetJobsForCandidate } from "@/features/jobs/api/useGetJobsForCandidate";
import CandidateJobCard from "@/features/jobs/components/CandidateJobCard";
import { useGetApplicationsForCandidate } from "@/features/jobs/api/useGetApplicationsForCandidate";
import { useGetApplicationsForRecruiter } from "@/features/jobs/api/useGetApplicationsForRecruiter";

const JobListing = ({
  role,
  recruiterId,
  userId,
}: {
  role: profileType;
  recruiterId: string | undefined;
  userId: string | undefined;
}) => {
  console.log(recruiterId);
  const jobResults =
    role === profileType.CANDIDATE
      ? useGetJobsForCandidate()
      : useGetJobsForRecruiter(recruiterId);

  const applicationResults =
    role === profileType.CANDIDATE
      ? useGetApplicationsForCandidate(userId)
      : useGetApplicationsForRecruiter(recruiterId);

  const { data: ApplicationListing, isLoading: isLoadingApplications } =
    applicationResults;

  const { data: jobListing, isLoading: isLoadingJobs } = jobResults;
  console.log(jobListing);

  if (isLoadingJobs || isLoadingApplications) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500 mt-32" />
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            {role === profileType.CANDIDATE
              ? "Explore All Jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center">
            {role === profileType.CANDIDATE ? <p>Filters</p> : <PostNewJob />}
          </div>
        </div>
        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-4">
              <div className="container mx-auto p-0 space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {jobListing && jobListing.length > 0
                    ? jobListing.map((job: RecruiterJobType) =>
                        role === profileType.CANDIDATE ? (
                          <CandidateJobCard job={job} key={job?._id} />
                        ) : (
                          <RecruiterJobCard job={job} key={job?._id} />
                        )
                      )
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
