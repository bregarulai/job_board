import { useQuery } from "@tanstack/react-query";

import { fetchJobsForRecruiterAction } from "@/features/jobs/actions/job.action";
import { queryKeys } from "@/constants";

export const useGetJobsForRecruiter = (recruiterId: string | undefined) => {
  const query = useQuery({
    enabled: !!recruiterId,
    queryKey: [queryKeys.JOBS_FOR_RECRUITER, recruiterId],
    queryFn: async () => {
      const response = await fetchJobsForRecruiterAction(recruiterId);

      if (!response) {
        throw new Error("Jobs not found");
      }
      return response;
    },
  });
  return query;
};
