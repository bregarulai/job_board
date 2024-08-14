import { currentUser } from "@clerk/nextjs/server";

import { fetchProfileAction } from "@/actions/profile.action";
import JobListing from "@/components/JobListing";

const JobsPage = async () => {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);
  return (
    <div>
      <JobListing role={profileInfo?.role} />
    </div>
  );
};

export default JobsPage;
