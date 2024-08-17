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
        footerContent={
          <div>
            <Button>
              {" "}
              {job.applicants.length > 0
                ? job.applicants.length === 1
                  ? `${job.applicants.length} Applicant`
                  : `${job.applicants.length} Applicants`
                : "0 Applicant"}
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default RecruiterJobCard;
