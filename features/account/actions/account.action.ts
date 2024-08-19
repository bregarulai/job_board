"use server";

import { updateCandidateProfile } from "@/features/account/repositories/account.repository";
import { parseStringify } from "@/lib/utils";
import { UserProfileType } from "@/types";
import { revalidatePath } from "next/cache";

export const updateCandidateProfileAction = async (
  userProfile: UserProfileType
) => {
  try {
    const updatedProfile = await updateCandidateProfile(userProfile);

    revalidatePath("/account");
    return parseStringify(updatedProfile);
  } catch (error) {
    console.error(`Error while updating profile: ${error}`);
  }
};
