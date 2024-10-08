"use server";

import { connectToDatabase } from "@/database";
import Application from "@/models/application";
import Job from "@/models/job";
import Profile from "@/models/profile";
import {
  JobApplicationType,
  JobSubmitData,
  SearchParamsType,
  UpdateJobApplicationParams,
} from "@/types";

// Define the type for updatedParams
type QueryParams = { [key: string]: { $in: string[] } };

export const addJob = async (job: JobSubmitData) => {
  try {
    await connectToDatabase();
    await Job.create({
      ...job,
      experience: Number(job.experience),
    });

    const results = await Profile.findByIdAndUpdate(
      { _id: job.recruiterId },
      {
        $push: { "recruiterInfo.jobsPosted": job.recruiterId },
      },
      { new: true, useFindAndModify: false }
    );

    return results;
  } catch (error) {
    console.error(`Error adding job: ${error}`);
  }
};

export const getJobsForRecruiter = async (recruiterId: string | undefined) => {
  try {
    await connectToDatabase();
    const results = await Job.find({ recruiterId: recruiterId });
    return results;
  } catch (error) {
    console.error(`Error getting jobs for recruiter: ${error}`);
  }
};

export const getJobsForCandidate = async ({
  searchParams,
}: SearchParamsType) => {
  try {
    await connectToDatabase();

    // Initialize updatedParams with the correct type
    let updatedParams: QueryParams = {};

    // Iterate over keys in searchParams
    Object.keys(searchParams).forEach((filterKey) => {
      const paramValue: string | undefined = searchParams[
        filterKey as keyof typeof searchParams
      ] as string; // Type assertion to get the correct type

      // Type guard to ensure paramValue is a string before using split
      if (typeof paramValue === "string" && paramValue) {
        updatedParams[filterKey] = { $in: paramValue.split(",") };
      }
    });

    const results = await Job.find(
      searchParams && Object.keys(searchParams).length > 0 ? updatedParams : {}
    );

    return results;
  } catch (error) {
    console.error(`Error getting jobs for candidate: ${error}`);
  }
};

export const getJobById = async (id: string) => {
  try {
    await connectToDatabase();
    const results = await Job.findById(id).populate("applicants");
    return results;
  } catch (error) {
    console.error(`Error getting job by id: ${error}`);
  }
};

export const addJobApplication = async (application: JobApplicationType) => {
  try {
    await connectToDatabase();
    const applicationResult = await Application.create(application);

    const results = await Job.findByIdAndUpdate(
      application.jobId,
      {
        $push: { applicants: applicationResult._id },
      },
      { new: true, useFindAndModify: false }
    );

    return results;
  } catch (error) {
    console.error(`Error adding job application: ${error}`);
  }
};

export const getJobApplicationsForRecruiter = async (
  jobId: string | undefined
) => {
  try {
    await connectToDatabase();

    const results = await Job.findById({
      _id: jobId,
    }).populate({
      path: "applicants",
      populate: {
        path: "candidateUserId",
        select: "-updatedAt -recruiterInfo",
      },
      select: "-updatedAt",
    });

    return results;
  } catch (error) {
    console.error(`Error getting job applications for recruiter: ${error}`);
  }
};

export const updaJobApplication = async ({
  applicationId,
  application,
}: UpdateJobApplicationParams) => {
  try {
    await connectToDatabase();
    const results = await Application.findByIdAndUpdate(
      applicationId,
      application,
      { new: true }
    );
    return results;
  } catch (error) {
    console.error(`Error updating job application: ${error}`);
  }
};

export const getFilterCategories = async () => {
  try {
    await connectToDatabase();
    const results = await Job.find({});
    return results;
  } catch (error) {
    console.error(`Error getting filter categories: ${error}`);
  }
};
