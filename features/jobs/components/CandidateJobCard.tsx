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
        companyName={job.companyName}
        location={job.location}
        type={job.type}
        description={job.description}
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
