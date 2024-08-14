"use server";

import { revalidatePath } from "next/cache";

import { addProfile, getProfile } from "@/repositories/profile.repository";
import { CreateProfileParams } from "@/types";
import { parse } from "path";
import { parseStringify } from "@/lib/utils";

export const createProfile = async ({
  profile,
  pathToRevalidate,
}: CreateProfileParams) => {
  try {
    await addProfile(profile);
    revalidatePath(pathToRevalidate);
  } catch (error) {
    console.error(`Error while creating profile: ${error}`);
  }
};

export const fetchProfileAction = async (userId: string | undefined) => {
  try {
    const profile = await getProfile(userId);
    if (!profile) {
      throw new Error(`User with id ${userId} not found`);
    }
    return parseStringify(profile);
  } catch (error) {
    console.error(`Error while getting profile: ${error}`);
  }
};
