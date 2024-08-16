import { queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchJobApplicationsForRecruiterAction } from "@/features/jobs/actions/job.action";

export const useGetApplicationsForRecruiter = (
  recruiterId: string | undefined
) => {
  const query = useQuery({
    queryKey: [queryKeys.APPLICATIONS_FOR_RECRUITER],
    queryFn: async () => {
      const response = await fetchJobApplicationsForRecruiterAction(
        recruiterId
      );

      if (!response) {
        throw new Error("Jobs not found");
      }
      return response;
    },
  });

  return query;
};
