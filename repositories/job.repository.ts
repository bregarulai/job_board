"use server";

import { connectToDatabase } from "@/database";
import Job from "@/models/job";
import { JobSubmitData } from "@/types";

export const addJob = async (job: JobSubmitData) => {
  try {
    await connectToDatabase();
    const results = await Job.create(job);
    return results;
  } catch (error) {
    console.error(`Error adding job: ${error}`);
  }
};

export const getJobsForRecruiter = async (recruiterId: string) => {
  try {
    await connectToDatabase();
    const results = await Job.find({ recruiterId: recruiterId });
    return results;
  } catch (error) {
    console.error(`Error getting jobs for recruiter: ${error}`);
  }
};
