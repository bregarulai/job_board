import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { UserProfileType } from "@/types";
import { updateCandidateProfileAction } from "../actions/account.action";
import { queryKeys } from "@/constants";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (userProfile: UserProfileType) => {
      const response = await updateCandidateProfileAction(userProfile);
      return response;
    },
    onSuccess: () => {
      toast.success("You have successfully updated your profile");
      queryClient.invalidateQueries({ queryKey: [queryKeys.PROFILE] });
    },
    onError: () => {
      toast.error("Something went wrong while updating profile");
    },
  });

  return mutation;
};
