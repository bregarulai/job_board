import { postNewJobAction } from "@/actions/job.action";
import { queryKeys } from "@/constants";
import { JobSubmitData } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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
    },
    onError: () => {
      toast.error("Failed to post job");
    },
  });

  return mutation;
};
