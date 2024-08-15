"use server";

import { revalidatePath } from "next/cache";

import { parseStringify } from "@/lib/utils";
import { addJob, getJobsForRecruiter } from "@/repositories/job.repository";
import { PostNewJobParams } from "@/types";

export const postNewJobAction = async ({ job }: PostNewJobParams) => {
  try {
    await addJob(job);
  } catch (error) {
    console.error(`Error while posting new job: ${error}`);
  }
};

export const fetchJobsForRecruiter = async (
  recruiterId: string | undefined
) => {
  try {
    const jobs = await getJobsForRecruiter(recruiterId);

    return parseStringify(jobs);
  } catch (error) {
    console.error(`Error while fetching jobs for recruiter: ${error}`);
  }
};
