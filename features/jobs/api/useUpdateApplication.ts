import { UpdateJobApplicationParams } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJobApplicationAction } from "../actions/job.action";
import { toast } from "sonner";
import { queryKeys } from "@/constants";

export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      applicationId,
      application,
    }: UpdateJobApplicationParams) => {
      const response = await updateJobApplicationAction({
        applicationId,
        application,
      });
      return response;
    },
    onSuccess: () => {
      toast.success("Application updated successfully");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.APPLICATIONS_FOR_CANDIDATE],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.APPLICATIONS_FOR_RECRUITER],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.JOBS_FOR_CANDIDATE],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.JOBS_FOR_RECRUITER],
      });
      queryClient.invalidateQueries({ queryKey: [queryKeys.JOB] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.APPLICATION] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.PROFILE] });
    },
  });

  return mutation;
};
