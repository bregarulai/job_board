"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { filterMenuOptions, profileType } from "@/constants";
import PostNewJob from "@/features/jobs/components/PostNewJob";
import { useGetJobsForRecruiter } from "@/features/jobs/api/useGetJobsForRecruiter";
import RecruiterJobCard from "@/features/jobs/components/RecruiderJobCard";
import { RecruiterJobType } from "@/types";
import { useGetJobsForCandidate } from "@/features/jobs/api/useGetJobsForCandidate";
import CandidateJobCard from "@/features/jobs/components/CandidateJobCard";
import { useGetApplicationsForCandidate } from "@/features/activities/api/useGetApplicationsForCandidate";
import { useGetApplicationsForRecruiter } from "@/features/jobs/api/useGetApplicationsForRecruiter";
import { useGetFilterCategories } from "@/features/jobs/api/useGetFilterCategories";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Label } from "@/components/ui/label";
import { cn, formUrlQuery } from "@/lib/utils";

const JobListing = ({
  role,
  recruiterId,
  userId,
}: {
  role: profileType;
  recruiterId: string | undefined;
  userId: string | undefined;
}) => {
  const [filterParams, setFilterParams] = useState<any>({});
  const searchParams = useSearchParams();
  const router = useRouter();

  const jobResults =
    role === profileType.CANDIDATE
      ? useGetJobsForCandidate()
      : useGetJobsForRecruiter(recruiterId);

  // TODO: Check if this is needed
  const applicationResults =
    role === profileType.CANDIDATE
      ? useGetApplicationsForCandidate(userId)
      : useGetApplicationsForRecruiter(recruiterId);

  useEffect(() => {
    setFilterParams(JSON.parse(sessionStorage.getItem("filterParams") || "{}"));
  }, []);

  useEffect(() => {
    if (filterParams && Object.keys(filterParams).length > 0) {
      let url = "";
      url = formUrlQuery({
        params: searchParams.toString(),
        dataToAdd: filterParams,
      });
      router.push(url, { scroll: false });
    }
  }, [filterParams, searchParams]);

  const { data: ApplicationListing, isLoading: isLoadingApplications } =
    applicationResults;

  const { data: jobListing, isLoading: isLoadingJobs } = jobResults;

  const { data: filterCategories, isLoading: isLoadingFilterCategories } =
    useGetFilterCategories();
  if (isLoadingJobs || isLoadingFilterCategories) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500 mt-32" />
      </div>
    );
  }

  const handleFilter = (id: string, option: string) => {
    let copyFilterParams = { ...filterParams };

    const indexOfCurrentSection = Object.keys(copyFilterParams).indexOf(id);
    if (indexOfCurrentSection === -1) {
      copyFilterParams = {
        ...copyFilterParams,
        [id]: [option],
      };
    } else {
      const indexOfCurrentOption = copyFilterParams[id].indexOf(option);
      if (indexOfCurrentOption === -1) {
        copyFilterParams[id].push(option);
      } else {
        copyFilterParams[id].splice(indexOfCurrentOption, 1);
      }
    }
    setFilterParams(copyFilterParams);
    sessionStorage.setItem("filterParams", JSON.stringify(copyFilterParams));
  };

  const filterMenus = filterMenuOptions?.map((option) => ({
    id: option.id,
    name: option.label,
    options: [
      // Map over each category in the filterCategories array to extract the value corresponding to option.id
      ...new Set(filterCategories.map((category: any) => category[option.id])),
    ],
  }));

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            {role === profileType.CANDIDATE
              ? "Explore All Jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center">
            {role === profileType.CANDIDATE ? (
              <Menubar>
                {filterMenus.map((menu) => (
                  <MenubarMenu key={menu.id}>
                    <MenubarTrigger className="cursor-pointer">
                      {menu.name}
                    </MenubarTrigger>
                    <MenubarContent>
                      {menu.options.map((option: any, optionIndex) => (
                        <MenubarItem
                          key={optionIndex}
                          className="flex items-center gap-2"
                          onClick={() => handleFilter(menu.id, option)}
                        >
                          <div
                            className={cn(
                              "size-4 border rounded border-gray-400 text-indigo-600",
                              filterParams &&
                                Object.keys(filterParams).length > 0 &&
                                filterParams[menu.id] &&
                                filterParams[menu.id].indexOf(option) > -1
                                ? "bg-blue-800/60 text-muted-foreground"
                                : ""
                            )}
                          />
                          <Label className="text-sm cursor-pointer text-gray-600">
                            {option}
                          </Label>
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  </MenubarMenu>
                ))}
              </Menubar>
            ) : (
              <PostNewJob />
            )}
          </div>
        </div>
        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-4">
              <div className="container mx-auto p-0 space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {jobListing && jobListing.length > 0
                    ? jobListing.map((job: RecruiterJobType) =>
                        role === profileType.CANDIDATE ? (
                          <CandidateJobCard job={job} key={job?._id} />
                        ) : (
                          <RecruiterJobCard job={job} key={job?._id} />
                        )
                      )
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
