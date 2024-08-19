import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/constants";
import { fetchJobsForCandidateAction } from "@/features/jobs/actions/job.action";
import { SearchParamsType } from "@/types";

export const useGetJobsForCandidate = ({ searchParams }: SearchParamsType) => {
  const query = useQuery({
    queryKey: [queryKeys.JOBS_FOR_CANDIDATE, searchParams],
    queryFn: async () => {
      const response = await fetchJobsForCandidateAction({ searchParams });
      if (!response) {
        throw new Error("Jobs not found");
      }
      return response;
    },
  });

  return query;
};
