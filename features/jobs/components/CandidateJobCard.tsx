import JobIcon from "@/components/JobIcon";
import CommonCard from "@/components/shared/CommonCard";
import { Button } from "@/components/ui/button";
import { CandidateJobCardProps } from "@/types";

const CandidateJobCard = ({ job }: CandidateJobCardProps) => {
  return (
    <>
      <CommonCard
        title={job.title}
        description={job.companyName}
        icon={<JobIcon />}
        footerContent={<Button>View Details</Button>}
      />
    </>
  );
};

export default CandidateJobCard;
