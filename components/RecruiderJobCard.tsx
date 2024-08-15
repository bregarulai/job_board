import { RecruiterJobType } from "@/types";
import JobIcon from "@/components/JobIcon";
import { Button } from "@/components/ui/button";
import CommonCard from "./CommonCard";

const RecruiterJobCard = ({ job }: { job: RecruiterJobType }) => {
  return (
    <CommonCard
      title={job.title}
      icon={<JobIcon />}
      description={job.description}
      footerContent={<Button>12 Aplicants</Button>}
    />
  );
};

export default RecruiterJobCard;
