import { toast } from "sonner";

import { RecruiterSubmitData } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProfileAction } from "@/features/onboard/actions/profile.action";
import { queryKeys } from "@/constants";

export const useCreateProfile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (profile: RecruiterSubmitData) => {
      const response = await createProfileAction({ profile });

      return response;
    },
    onSuccess: () => {
      toast.success("Profile created successfully");
      queryClient.invalidateQueries({ queryKey: [queryKeys.PROFILE] });
    },
    onError: () => {
      toast.error("Failed to create profile");
    },
  });

  return mutation;
};
