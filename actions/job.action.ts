"use server";

import { parseStringify } from "@/lib/utils";
import { addJob, getJobsForRecruiter } from "@/repositories/job.repository";
import { PostNewJobParams } from "@/types";
import { revalidatePath } from "next/cache";

export const postNewJobAction = async ({
  job,
  pathToRevalidate,
}: PostNewJobParams) => {
  try {
    await addJob(job);
    revalidatePath(pathToRevalidate);
  } catch (error) {
    console.error(`Error while posting new job: ${error}`);
  }
};

export const fetchJobsForRecruiter = async (recruiterId: string) => {
  try {
    const jobs = await getJobsForRecruiter(recruiterId);

    return parseStringify(jobs);
  } catch (error) {
    console.error(`Error while fetching jobs for recruiter: ${error}`);
  }
};
