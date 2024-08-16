"use client";

import { profileType } from "@/constants";
import PostNewJob from "@/features/jobs/components/PostNewJob";
import { useGetJobsForRecruiter } from "@/features/jobs/api/useGetJobsForRecruiter";
import RecruiterJobCard from "@/features/jobs/components/RecruiderJobCard";
import { RecruiterJobType } from "@/types";
import { useGetJobsForCandidate } from "@/features/jobs/api/useGetJobsForCandidate";
import CandidateJobCard from "./CandidateJobCard";

const JobListing = ({
  role,
  recruiterId,
}: {
  role: profileType;
  recruiterId: string | undefined;
}) => {
  const { data: recruiterJobs, isLoading } =
    useGetJobsForRecruiter(recruiterId);
  const { data: candidateJobs } = useGetJobsForCandidate();

  const jobListing =
    role === profileType.CANDIDATE ? candidateJobs : recruiterJobs;
  console.log(jobListing);
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
