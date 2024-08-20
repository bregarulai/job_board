"use client";

import JobIcon from "@/components/JobIcon";
import CommonCard from "@/components/shared/CommonCard";
import { Button } from "@/components/ui/button";
import { membershipPlans } from "@/constants";
import { useGetProfile } from "@/features/onboard/api/useGetProfile";
import { Divide, Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

const MembershipDetails = ({ userId }: { userId: string | undefined }) => {
  const { data: profileInfo, isLoading: isProfileInfoLoading } =
    useGetProfile(userId);

  if (isProfileInfoLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500 mt-32" />
      </div>
    );
  }

  if (!profileInfo) redirect("/onboard");
  return (
    <div className="py-20 pb-24 pt-6">
      <div className="container mx-auto p-0 space-x-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {membershipPlans.map((plan) => (
            <CommonCard
              key={plan.type}
              icon={
                <div className="flex justify-between">
                  <div>
                    <JobIcon />
                  </div>
                  <h2 className="text-2xl font-bold">{plan.heading}</h2>
                </div>
              }
              title={`$${plan.price} /yr`}
              description={plan.type}
              footerContent={<Button>Select Plan</Button>}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipDetails;
