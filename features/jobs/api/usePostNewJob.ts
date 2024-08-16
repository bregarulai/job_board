import { toast } from "sonner";

import { postNewJobAction } from "@/features/jobs/actions/job.action";
import { queryKeys } from "@/constants";
import { JobSubmitData } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostNewJob = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (job: JobSubmitData) => {
      const response = await postNewJobAction({ job });

      return response;
    },
    onSuccess: () => {
      toast.success("Job posted successfully");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.JOBS_FOR_RECRUITER],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.JOBS_FOR_CANDIDATE],
      });
    },
    onError: () => {
      toast.error("Failed to post job");
    },
  });

  return mutation;
};
