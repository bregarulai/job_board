"use server";

import { parseStringify } from "@/lib/utils";
import { getJobApplicationsForCandidate } from "@/features/activities/repositories/activities.repository";

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
