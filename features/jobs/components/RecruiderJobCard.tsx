import { RecruiterJobCardProps } from "@/types";
import JobIcon from "@/components/JobIcon";
import { Button } from "@/components/ui/button";
import CommonCard from "@/components/shared/CommonCard";

const RecruiterJobCard = ({ job }: RecruiterJobCardProps) => {
  return (
    <div>
      <CommonCard
        title={job.title}
        icon={<JobIcon />}
        description={job.description}
        footerContent={<Button>12 Aplicants</Button>}
      />
    </div>
  );
};

export default RecruiterJobCard;
