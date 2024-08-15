import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { fetchProfileAction } from "@/features/onboard/actions/profile.action";
import { profileType } from "@/constants";

import OnBoard from "@/features/onboard/components/OnBoard";

const OnboardPage = async () => {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);

  if (profileInfo?._id) {
    if (
      profileInfo?.role === profileType.RECRUITER &&
      !profileInfo.isPremiumUser
    )
      redirect("/membership");
    else redirect("/");
  } else return <OnBoard />;
};

export default OnboardPage;
