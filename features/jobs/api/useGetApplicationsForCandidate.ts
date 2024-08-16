import { useQuery } from "@tanstack/react-query";

import { fetchJobApplicationsForCandidateAction } from "@/features/jobs/actions/job.action";
import { queryKeys } from "@/constants";

export const useGetApplicationsForCandidate = (candidateId: string) => {
  const query = useQuery({
    queryKey: [queryKeys.APPLICATIONS_FOR_CANDIDATE, candidateId],
    queryFn: async () => {
      const response = await fetchJobApplicationsForCandidateAction(
        candidateId
      );
      if (!response) {
        throw new Error("Applications not found");
      }
      return response;
    },
  });
  return query;
};
