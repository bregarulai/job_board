"use client";

import { profileType } from "@/constants";
import PostNewJob from "@/components/PostNewJob";
import { useGetJobsForRecruiter } from "@/apiHooks/useGetJobsForRecruiter";
import RecruiterJobCard from "@/components/RecruiderJobCard";
import { RecruiterJobType } from "@/types";

const JobListing = ({
  role,
  recruiterId,
}: {
  role: profileType;
  recruiterId: string | undefined;
}) => {
  const { data: jobs, isLoading } = useGetJobsForRecruiter(recruiterId);
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
                  {jobs && jobs.length > 0
                    ? jobs.map((job: RecruiterJobType) =>
                        role === profileType.CANDIDATE ? (
                          <p>Candidate Card</p>
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
