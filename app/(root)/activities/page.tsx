import { currentUser } from "@clerk/nextjs/server";

import ActivitiesList from "@/features/activities/components/ActivitiesList";

const ActivitiesPage = async () => {
  const user = await currentUser();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Activities
        </h1>
      </div>
      <ActivitiesList candidateId={user?.id} />
    </div>
  );
};

export default ActivitiesPage;
