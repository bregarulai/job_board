import MembershipDetails from "@/features/membership/components/MembershipDetails";

import { currentUser } from "@clerk/nextjs/server";

const MembershipPage = async () => {
  const user = await currentUser();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Choose Your Best Plan
        </h1>
      </div>
      <MembershipDetails userId={user?.id} />
    </div>
  );
};

export default MembershipPage;
