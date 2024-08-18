import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import JobDetails from "@/features/jobs/components/JobDetails";
import { fetchProfileAction } from "@/features/onboard/actions/profile.action";
import { ParamsProps } from "@/types";

const JobDetailsPage = async ({ params: { id } }: ParamsProps) => {
  const user = await currentUser();

  let profileInfo;

  if (user) {
    profileInfo = await fetchProfileAction(user.id);
  }
  if (user && !profileInfo?._id) redirect("/onboard");
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Job Details
        </h1>
      </div>
      <JobDetails jobId={id} />
    </div>
  );
};

export default JobDetailsPage;
