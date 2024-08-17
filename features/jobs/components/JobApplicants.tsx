"use client";

import { Loader2 } from "lucide-react";
import { useGetApplicationsForRecruiter } from "@/features/jobs/api/useGetApplicationsForRecruiter";
import { ApplicantDataTable } from "./applicants/ApplicantDataTable";
import { candidateTableData } from "@/data/candidateTableData";
import { applicantColumns } from "@/features/jobs/components/applicants/applicantColumns";

const JobApplicants = ({ jobId }: { jobId: string }) => {
  const { data: applicants, isLoading } = useGetApplicationsForRecruiter(jobId);
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-36">
        <Loader2 className="animate-spin text-muted-foreground size-10" />
      </div>
    );
  }
  return (
    <div>
      <ApplicantDataTable
        data={candidateTableData}
        columns={applicantColumns}
      />
    </div>
  );
};

export default JobApplicants;
