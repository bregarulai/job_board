import JobDetails from "@/features/jobs/components/JobDetails";
import { ParamsProps } from "@/types";

const JobDetailsPage = ({ params: { id } }: ParamsProps) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Job Details
        </h1>
      </div>
      <JobDetails jobId={id} />
    </div>
  );
};

export default JobDetailsPage;
