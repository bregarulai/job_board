"use client";

import { Loader2 } from "lucide-react";
import { useGetApplicationsForRecruiter } from "@/features/jobs/api/useGetApplicationsForRecruiter";

import { applicantColumns } from "@/features/jobs/components/applicants/applicantColumns";
import { ApplicantDataTable } from "@/features/jobs/components/applicants/ApplicantDataTable";

const JobApplicants = ({ jobId }: { jobId: string }) => {
  const { data, isLoading } = useGetApplicationsForRecruiter(jobId);
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-36">
        <Loader2 className="animate-spin text-muted-foreground size-10" />
      </div>
    );
  }
  return (
    <div className="grid gap-4 mt-4">
      <div className="grid gap-2">
        <h2 className="text-lg font-normal text-gray-900">
          {data.companyName}
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800">{data.title}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">{data.location}</p>
          <div className="size-1 bg-slate-400 rounded-full" />
          <p className="text-sm text-muted-foreground">{data.type}</p>
        </div>
      </div>
      <ApplicantDataTable
        jobId={data._id}
        recruiterId={data.recruiterId}
        data={data.applicants}
        columns={applicantColumns}
      />
    </div>
  );
};

export default JobApplicants;
