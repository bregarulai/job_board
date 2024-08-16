"use server";

import { connectToDatabase } from "@/database";
import Application from "@/models/application";
import Job from "@/models/job";
import { JobApplicationType, JobSubmitData } from "@/types";

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

export const getJobById = async (id: string) => {
  try {
    await connectToDatabase();
    const results = await Job.findById(id);
    return results;
  } catch (error) {
    console.error(`Error getting job by id: ${error}`);
  }
};

export const addJobApplication = async (application: JobApplicationType) => {
  try {
    await connectToDatabase();
    const results = await Application.create(application);
    return results;
  } catch (error) {
    console.error(`Error adding job application: ${error}`);
  }
};

export const getJobApplicationsForCandidate = async (candidateId: string) => {
  try {
    await connectToDatabase();
    const results = await Application.find({
      candidateUserId: candidateId,
    });
    return results;
  } catch (error) {
    console.error(`Error getting job applications for candidate: ${error}`);
  }
};

export const getJobApplicationsForRrecruiter = async (recruiterId: string) => {
  try {
    await connectToDatabase();
    const results = await Application.find({
      recruiterId,
    });
    return results;
  } catch (error) {
    console.error(`Error getting job applications for recruiter: ${error}`);
  }
};
