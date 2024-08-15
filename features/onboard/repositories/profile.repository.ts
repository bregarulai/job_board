"use server";

import { connectToDatabase } from "@/database";
import Profile from "@/models/profile";
import { RecruiterSubmitData } from "@/types";

export const addProfile = async (profile: RecruiterSubmitData) => {
  console.log("Profile: ", profile);
  try {
    await connectToDatabase();
    const results = await Profile.create({
      ...profile,
      totalExperience: Number(profile.candidateInfo?.totalExperience),
    });
    return results;
  } catch (error) {
    console.error(`Error adding profile: ${error}`);
  }
};

export const getProfile = async (userId: string | undefined) => {
  try {
    await connectToDatabase();
    const results = await Profile.findOne({
      userId,
    });
    return results;
  } catch (error) {
    console.error(`Error getting profile: ${error}`);
  }
};
