import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/constants";
import { fetchJobApplicationsForCandidateAction } from "@/features/activities/actions/activities.action";

export const useGetApplicationsForCandidate = (
  candidateId: string | undefined
) => {
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
