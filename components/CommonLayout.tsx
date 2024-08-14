import { currentUser } from "@clerk/nextjs/server";

import Header from "@/components/Header";
import { fetchProfileAction } from "@/actions/profile.action";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8 ">
      <Header userId={user?.id} role={profileInfo?.role} />
      <main className="h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar">
        {children}
      </main>
    </div>
  );
};

export default CommonLayout;
