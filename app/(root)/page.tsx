import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

import { fetchProfileAction } from "@/features/onboard/actions/profile.action";
import { Button } from "@/components/ui/button";
import HomePageImage from "@/components/HomePageImage";
import { profileType } from "@/constants";

const HomePage = async () => {
  const user = await currentUser();

  let profileInfo;

  if (user) {
    profileInfo = await fetchProfileAction(user.id);
  }

  if (user && !profileInfo?._id) redirect("/onboard");

  console.log("Profile Info: ", profileInfo);

  return (
    <section>
      <div className="relative w-full">
        <div className="min-h-[calc(100vh-7rem)] flex">
          <div className="container m-auto p-0">
            <div className="flex items-center flex-wrap gap-12 lg:gap-0 -mt-[7rem]">
              <div className="lg:w-5/12 space-y-8">
                <span className="flex space-x-2">
                  <span className="block w-14 mb-2 border-b-2 border-gray-700"></span>
                  <span className="font-medium text-gray-600">
                    One Stop Solution to Find Jobs
                  </span>
                </span>
                <h1 className="text-4xl font-bold md:text-6xl text-gray-900">
                  The Best <br /> Job Portal App
                </h1>
                <p className="text-xl text-gray-700">
                  Find the Best Jobs From Top Product Based Companies and Build
                  Your Career
                </p>
                <div className="flex space-x-4">
                  <Button asChild>
                    <Link href="/jobs">Browse jobs</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href={
                        profileInfo?.role === profileType.CANDIDATE
                          ? "/activities"
                          : "/jobs"
                      }
                    >
                      {profileInfo?.role === profileType.CANDIDATE
                        ? "Activies"
                        : "Post New Job"}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden relative md:block lg:w-7/12">
                <HomePageImage />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
