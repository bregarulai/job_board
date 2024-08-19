"use server";

import { connectToDatabase } from "@/database";
import Profile from "@/models/profile";
import { UserProfileType } from "@/types";

export const updateCandidateProfile = async (userProfile: UserProfileType) => {
  console.log("User Profile", userProfile);
  try {
    await connectToDatabase();
    const updatedProfile = await Profile.findByIdAndUpdate(
      userProfile._id,
      userProfile,
      {
        new: true,
        runValidators: true,
      }
    );
    return updatedProfile;
  } catch (error) {
    console.error(`Error updating profile: ${error}`);
  }
};
