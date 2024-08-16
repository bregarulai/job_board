import { useMutation, useQueryClient } from "@tanstack/react-query";

import { JobApplicationType } from "@/types";
import { addJobApplicationAction } from "@/features/jobs/actions/job.action";
import { queryKeys } from "@/constants";
import { toast } from "sonner";

export const useApplyForNewJob = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: JobApplicationType) => {
      const response = await addJobApplicationAction(data);

      return response;
    },
    onSuccess: () => {
      toast.success("Applied for job Successfully");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.APPLICATIONS_FOR_RECRUITER],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.APPLICATIONS_FOR_CANDIDATE],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.JOBS_FOR_RECRUITER],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.JOBS_FOR_CANDIDATE],
      });
    },
    onError: () => {
      toast.error("Error while applying for job");
    },
  });

  return mutation;
};
