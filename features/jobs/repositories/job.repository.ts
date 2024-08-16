"use server";

import { connectToDatabase } from "@/database";
import Job from "@/models/job";
import { JobSubmitData } from "@/types";

export const addJob = async (job: JobSubmitData) => {
  try {
    await connectToDatabase();
    const results = await Job.create({
      ...job,
      experience: Number(job.experience),
    });
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

export const getJobsForCandidate = async () => {
  try {
    await connectToDatabase();
    const results = await Job.find();
    return results;
  } catch (error) {
    console.error(`Error getting jobs for candidate: ${error}`);
  }
};
