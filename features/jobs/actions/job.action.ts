"use server";

import { parseStringify } from "@/lib/utils";
import {
  addJob,
  getJobsForCandidate,
  getJobsForRecruiter,
} from "@/features/jobs/repositories/job.repository";
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

export const fetchJobsForCandidate = async () => {
  try {
    const jobs = await getJobsForCandidate();
    return parseStringify(jobs);
  } catch (error) {
    console.error(`Error while fetching jobs for candidate: ${error}`);
  }
};
