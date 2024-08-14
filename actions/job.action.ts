"use server";

import { addJob } from "@/repositories/job.repository";
import { PostNewJobParams } from "@/types";
import { revalidatePath } from "next/cache";

export const postNewJobAction = async ({
  job,
  pathToRevalidate,
}: PostNewJobParams) => {
  try {
    await addJob(job);
    revalidatePath(pathToRevalidate);
  } catch (error) {
    console.error(`Error while posting new job: ${error}`);
  }
};
