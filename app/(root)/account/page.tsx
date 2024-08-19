import AccountInfo from "@/features/account/components/AccountInfo";
import { currentUser } from "@clerk/nextjs/server";

const AccountPage = async () => {
  const user = await currentUser();
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Account Details
        </h1>
      </div>
      <AccountInfo userId={user?.id} />
    </div>
  );
};

export default AccountPage;
