"use server";

import {
  addProfile,
  getProfile,
} from "@/features/onboard/repositories/profile.repository";
import { CreateProfileParams } from "@/types";
import { parseStringify } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const createProfileAction = async ({ profile }: CreateProfileParams) => {
  try {
    await addProfile(profile);
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
    revalidatePath("/onboard");
    return parseStringify(profile);
  } catch (error) {
    console.error(`Error while getting profile: ${error}`);
  }
};
