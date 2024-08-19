"use client";

import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

import { useGetProfile } from "@/features/onboard/api/useGetProfile";
import { profileType } from "@/constants";
import CandidateOnboardForm from "@/components/forms/CandidateOnboardForm";
import RecruiterOnboardForm from "@/components/forms/RecruiterOnboardForm";

const AccountInfo = ({ userId }: { userId: string | undefined }) => {
  const { data: userProfile, isLoading: userProfileIsLoading } =
    useGetProfile(userId);

  if (userProfileIsLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500 mt-32" />
      </div>
    );
  }

  if (!userProfile) redirect("/onboard");
  return (
    <div className="py-20 pb-24 pt-6">
      <div className="container mx-auto p-0 space-x-8">
        {userProfile?.role === profileType.CANDIDATE ? (
          <CandidateOnboardForm userProfile={userProfile} />
        ) : (
          <RecruiterOnboardForm />
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
