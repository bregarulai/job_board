import JobIcon from "@/components/JobIcon";
import CommonCard from "@/components/shared/CommonCard";
import { Button } from "@/components/ui/button";
import { CandidateJobCardProps } from "@/types";
import Link from "next/link";

const CandidateJobCard = ({ job }: CandidateJobCardProps) => {
  return (
    <>
      <CommonCard
        title={job.title}
        description={job.companyName}
        icon={<JobIcon />}
        footerContent={
          <Button asChild>
            <Link href={`/jobs/${job._id}`}>View Details</Link>
          </Button>
        }
      />
    </>
  );
};

export default CandidateJobCard;
