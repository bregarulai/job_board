import { currentUser } from "@clerk/nextjs/server";

import Header from "@/components/Header";
import { fetchProfileAction } from "@/features/onboard/actions/profile.action";
import { redirect } from "next/navigation";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  let profileInfo;

  if (user) {
    profileInfo = await fetchProfileAction(user.id);
  }

  return (
    <div className="mx-auto max-w-7xl py-6 lg:px-8 ">
      <Header userId={user?.id} role={profileInfo?.role} />
      <main className="h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default CommonLayout;
