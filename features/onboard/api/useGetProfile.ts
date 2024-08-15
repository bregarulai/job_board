import { useQuery } from "@tanstack/react-query";

import { fetchProfileAction } from "@/features/onboard/actions/profile.action";
import { queryKeys } from "@/constants";

export const useGetProfile = (userId: string | undefined) => {
  const query = useQuery({
    enabled: !!userId,
    queryKey: [queryKeys.PROFILE, userId],
    queryFn: async () => {
      const response = await fetchProfileAction(userId);

      if (!response) {
        throw new Error("Profile not found");
      }
      return response;
    },
  });
  return query;
};
