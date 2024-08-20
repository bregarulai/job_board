"use client";

import { Check, Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

import JobIcon from "@/components/JobIcon";
import CommonCard from "@/components/shared/CommonCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { membershipPlans } from "@/constants";
import { useGetProfile } from "@/features/onboard/api/useGetProfile";

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
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{plan.heading}</CardTitle>
                <CardDescription className="text-center">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <h2 className="text-3xl font-light">{plan.price}</h2>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-lg font-normal">{plan.featuresTitle}</p>
                  <ul className="font-light grid gap-2 mt-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span>
                          <Check className="size-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    <Button className="mt-4">Select Plan</Button>
                  </ul>
                </div>
              </CardFooter>
            </Card>

            // <CommonCard
            //   key={plan.type}
            //   icon={
            //     <div className="flex justify-between">
            //       <div>
            //         <JobIcon />
            //       </div>
            //       <h2 className="text-2xl font-bold">{plan.heading}</h2>
            //     </div>
            //   }
            //   title={`$${plan.price} /yr`}
            //   description={plan.type}
            //   footerContent={<Button>Select Plan</Button>}
            // />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipDetails;
