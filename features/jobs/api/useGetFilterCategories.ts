import { queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchFilterCategoriesAction } from "../actions/job.action";

export const useGetFilterCategories = () => {
  const query = useQuery({
    queryKey: [queryKeys.FILTER_CATEGORIES],
    queryFn: async () => {
      const response = await fetchFilterCategoriesAction();

      if (!response) {
        throw new Error("Error while fetching filter categories");
      }
      return response;
    },
  });

  return query;
};
