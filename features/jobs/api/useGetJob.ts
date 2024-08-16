import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/constants";
import { fetchJobByIdAction } from "@/features/jobs/actions/job.action";

export const useGetJob = (id: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: [queryKeys.JOB, id],
    queryFn: async () => {
      const response = await fetchJobByIdAction(id);
      if (!response) {
        throw new Error(`Failed to fetch job by id: ${id}`);
      }
      return response;
    },
  });

  return query;
};
