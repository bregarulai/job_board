"use client";

import { profileType } from "@/constants";
import PostNewJob from "@/components/PostNewJob";
import { useGetJobsForRecruiter } from "@/apiHooks/useGetJobsForRecruiter";

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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {role === profileType.CANDIDATE
              ? "Explore All Jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center">
            {role === profileType.CANDIDATE ? <p>Filters</p> : <PostNewJob />}
          </div>
        </div>
        <div>Job Listing</div>
      </div>
    </div>
  );
};

export default JobListing;
