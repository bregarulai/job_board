import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ApplicantTableActionsProps } from "@/types";

const ApplicantTableActions = ({
  candidateInfo,
}: ApplicantTableActionsProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>View Details</DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle className="text-2xl">{candidateInfo.name}</DialogTitle>

            <div className="flex flex-col py-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <p className="text-xl leading-3">{` ${candidateInfo.currentCompany}`}</p>
                  <p className="text-sm text-muted-foreground">{`${candidateInfo.currentJobLoacation}`}</p>
                  <p className="mt-4">{`Current Salary: $${candidateInfo.currentSalary}`}</p>
                  <p>{`${candidateInfo.totalExperience} years of experience`}</p>
                  <p className="flex flex-row flex-wrap gap-2 my-2">
                    {candidateInfo.skills.split(",").map((skill) => (
                      <span
                        className="bg-gray-200 py-1 px-2 text-sm rounded-md"
                        key={skill}
                      >
                        {skill}{" "}
                      </span>
                    ))}
                  </p>
                  <p>{`${candidateInfo.noticePeriod} weeks notice period`}</p>
                  <p className="flex flex-row flex-wrap gap-2 my-2">
                    {candidateInfo.previousCompanies
                      .split(",")
                      .map((company) => (
                        <span
                          className="bg-gray-200 py-1 px-2 text-sm rounded-md"
                          key={company}
                        >
                          {company}
                        </span>
                      ))}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {candidateInfo.college}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <a
                    className="cursor-pointer underline text-blue-400 hover:text-blue-500"
                    href={candidateInfo.linkedinProfile}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn profile
                  </a>
                  <a
                    className="cursor-pointer underline text-blue-400 hover:text-blue-500"
                    href={candidateInfo.githubProfile}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github page
                  </a>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicantTableActions;
