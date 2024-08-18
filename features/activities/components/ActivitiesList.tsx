"use client";

import { Loader2 } from "lucide-react";

import { useGetApplicationsForCandidate } from "@/features/activities/api/useGetApplicationsForCandidate";
import { useGetProfile } from "@/features/onboard/api/useGetProfile";
import { ActivitiesDataTable } from "@/features/activities/components/ActivitiesDataTable";
import { activitiesColumns } from "@/features/activities/components/activitiesColumns";

const ActivitiesList = ({
  candidateId,
}: {
  candidateId: string | undefined;
}) => {
  const { data: userProfile, isLoading: userProfileIsLoading } =
    useGetProfile(candidateId);
  const { data: applications, isLoading: applicationsIsLoading } =
    useGetApplicationsForCandidate(userProfile?._id);

  if (userProfileIsLoading || applicationsIsLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500 mt-32" />
      </div>
    );
  }

  const applicationTableData = applications.map((application: any) => {
    const data = {
      title: application.jobId.title,
      company: application.jobId.companyName,
      location: application.jobId.location,
      applicants: application.jobId.applicants.length,
      recruiter: application.recruiterId.recruiterInfo.name,
      postedDate: Intl.DateTimeFormat("en-us").format(
        new Date(application.createdAt)
      ),
      candidateUserId: application.candidateUserId,
      status: application.status,
    };
    return data;
  });

  return (
    <div>
      <ActivitiesDataTable
        data={applicationTableData}
        columns={activitiesColumns}
      />
    </div>
  );
};

export default ActivitiesList;
