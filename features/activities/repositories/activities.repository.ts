"use server";

import { connectToDatabase } from "@/database";
import Application from "@/models/application";
// Nextjs needs to know about the referenced models
import "@/models/job";
import "@/models/profile";

export const getJobApplicationsForCandidate = async (
  candidateId: string | undefined
) => {
  try {
    await connectToDatabase();
    const results = await Application.find({
      candidateUserId: candidateId,
    })
      .populate("jobId")
      .populate("recruiterId", "recruiterInfo.name");

    return results;
  } catch (error) {
    console.error(`Error getting job applications for candidate: ${error}`);
  }
};
