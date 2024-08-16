import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/constants";
import { fetchJobsForCandidateAction } from "@/features/jobs/actions/job.action";

export const useGetJobsForCandidate = () => {
  const query = useQuery({
    queryKey: [queryKeys.JOBS_FOR_CANDIDATE],
    queryFn: async () => {
      const response = await fetchJobsForCandidateAction();
      if (!response) {
        throw new Error("Jobs not found");
      }
      return response;
    },
  });

  return query;
};
