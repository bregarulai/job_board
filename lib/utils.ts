import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

// Function to generate a URL with updated query parameters
export const formUrlQuery = ({
  params,
  dataToAdd,
}: {
  params: any; // Existing query parameters (could be a query string)
  dataToAdd: any; // New data to add or update in the query parameters
}) => {
  // Parse the current query parameters into an object
  let currentUrl = qs.parse(params);

  // If there is any data to add or update in the query parameters
  if (Object.keys(dataToAdd).length > 0) {
    // Iterate over the keys of the data to add
    Object.keys(dataToAdd).map((key) => {
      // If the value associated with the key is an empty array, remove the key from the currentUrl object
      if (dataToAdd[key].length === 0) {
        delete currentUrl[key];
      } else {
        // Otherwise, update the currentUrl object with the new value (as a comma-separated string)
        currentUrl[key] = dataToAdd[key].join(",");
      }
    });
  }

  // Convert the updated query parameters back into a query string and return the full URL
  return qs.stringifyUrl(
    {
      url: window.location.pathname, // Keep the current path
      query: currentUrl, // The updated query parameters
    },
    {
      skipNull: true, // Skip parameters that have null values
    }
  );
};
