import { currentUser } from "@clerk/nextjs/server";

import { fetchProfileAction } from "@/features/onboard/actions/profile.action";
import JobListing from "@/features/jobs/components/JobListing";

const JobsPage = async () => {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <div>
      <JobListing role={profileInfo?.role} recruiterId={user?.id} />
    </div>
  );
};

export default JobsPage;
