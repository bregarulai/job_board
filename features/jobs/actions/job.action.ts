"use server";

import { revalidatePath } from "next/cache";

import { parseStringify } from "@/lib/utils";
import {
  addJob,
  addJobApplication,
  getFilterCategories,
  getJobApplicationsForRecruiter,
  getJobById,
  getJobsForCandidate,
  getJobsForRecruiter,
  updaJobApplication,
} from "@/features/jobs/repositories/job.repository";
import {
  JobApplicationType,
  PostNewJobParams,
  UpdateJobApplicationParams,
} from "@/types";

export const postNewJobAction = async ({ job }: PostNewJobParams) => {
  try {
    await addJob(job);
    revalidatePath("/jobs");
  } catch (error) {
    console.error(`Error while posting new job: ${error}`);
  }
};

export const fetchJobsForRecruiterAction = async (
  recruiterId: string | undefined
) => {
  try {
    const jobs = await getJobsForRecruiter(recruiterId);

    return parseStringify(jobs);
  } catch (error) {
    console.error(`Error while fetching jobs for recruiter: ${error}`);
  }
};

export const fetchJobsForCandidateAction = async () => {
  try {
    const jobs = await getJobsForCandidate();
    return parseStringify(jobs);
  } catch (error) {
    console.error(`Error while fetching jobs for candidate: ${error}`);
  }
};

export const fetchJobByIdAction = async (id: string) => {
  try {
    const job = await getJobById(id);
    return parseStringify(job);
  } catch (error) {
    console.error(`Error while fetching job by id: ${error}`);
  }
};

export const addJobApplicationAction = async (
  application: JobApplicationType
) => {
  try {
    const jobApplication = await addJobApplication(application);
    revalidatePath("/jobs");
    return parseStringify(jobApplication);
  } catch (error) {
    console.error(`Error while adding job application: ${error}`);
  }
};

export const fetchJobApplicationsForRecruiterAction = async (
  jobId: string | undefined
) => {
  try {
    const applicants = await getJobApplicationsForRecruiter(jobId);
    return parseStringify(applicants);
  } catch (error) {
    console.error(
      `Error while fetching job applications for recruiter: ${error}`
    );
  }
};

export const updateJobApplicationAction = async ({
  applicationId,
  application,
}: UpdateJobApplicationParams) => {
  try {
    const jobApplication = await updaJobApplication({
      applicationId,
      application,
    });
    revalidatePath("/jobs");
    return parseStringify(jobApplication);
  } catch (error) {
    console.error(`Error while updating job application: ${error}`);
  }
};

export const fetchFilterCategoriesAction = async () => {
  try {
    const categories = await getFilterCategories();
    return parseStringify(categories);
  } catch (error) {
    console.error(`Error while fetching filter categories: ${error}`);
  }
};
