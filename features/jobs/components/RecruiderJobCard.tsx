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
            <p className="text-sm text-muted-foreground mb-4">
              {job.applicants.length > 0
                ? job.applicants.length === 1
                  ? `${job.applicants.length} candidate has applied for this job`
                  : `${job.applicants.length} candidates have applied for this job`
                : "0 candidate have applied for this job"}
            </p>
            <Button>Apply</Button>
          </div>
        }
      />
    </div>
  );
};

export default RecruiterJobCard;
