"use server";

import { revalidatePath } from "next/cache";

import { parseStringify } from "@/lib/utils";
import {
  addJob,
  addJobApplication,
  getJobApplicationsForCandidate,
  getJobApplicationsForRrecruiter,
  getJobById,
  getJobsForCandidate,
  getJobsForRecruiter,
} from "@/features/jobs/repositories/job.repository";
import { JobApplicationType, PostNewJobParams } from "@/types";

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

export const fetchJobApplicationsForCandidateAction = async (
  candidateId: string | undefined
) => {
  try {
    const jobApplications = await getJobApplicationsForCandidate(candidateId);
    return parseStringify(jobApplications);
  } catch (error) {
    console.error(
      `Error while fetching job applications for candidate: ${error}`
    );
  }
};

export const fetchJobApplicationsForRecruiterAction = async (
  recruiterId: string | undefined
) => {
  try {
    const jobApplications = await getJobApplicationsForRrecruiter(recruiterId);
    return parseStringify(jobApplications);
  } catch (error) {
    console.error(
      `Error while fetching job applications for recruiter: ${error}`
    );
  }
};
