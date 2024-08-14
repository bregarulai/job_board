import { fetchJobsForRecruiter } from "@/actions/job.action";
import { queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetJobsForRecruiter = (recruiterId: string | undefined) => {
  const query = useQuery({
    enabled: !!recruiterId,
    queryKey: [queryKeys.JOBS_FOR_RECRUITER, recruiterId],
    queryFn: async () => {
      const response = await fetchJobsForRecruiter(recruiterId);

      if (!response) {
        throw new Error("Jobs not found");
      }
      return response;
    },
  });
  return query;
};
