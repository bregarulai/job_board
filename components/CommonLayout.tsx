import { currentUser } from "@clerk/nextjs/server";

import Header from "@/components/Header";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8 ">
      <Header userId={user?.id} />
      <main className="h-[calc(100vh-7rem)] overflow-y-auto">{children}</main>
    </div>
  );
};

export default CommonLayout;
