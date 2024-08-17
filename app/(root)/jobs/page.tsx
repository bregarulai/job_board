import { currentUser } from "@clerk/nextjs/server";

import { fetchProfileAction } from "@/features/onboard/actions/profile.action";
import JobListing from "@/features/jobs/components/JobListing";

const JobsPage = async () => {
  const user = await currentUser();

  let profileInfo;

  if (user) {
    profileInfo = await fetchProfileAction(user.id);
  }

  return (
    <div>
      <JobListing
        role={profileInfo?.role}
        recruiterId={profileInfo?._id}
        userId={profileInfo?._id}
      />
    </div>
  );
};

export default JobsPage;
