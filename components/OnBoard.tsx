import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsTriggerType } from "@/constants";
import RecruiterOnboardForm from "@/components/forms/RecruiterOnboardForm";
import CandidateOnboardForm from "@/components/forms/CandidateOnboardForm";

const OnBoard = () => {
  return (
    <div>
      <Tabs defaultValue={tabsTriggerType.CANDIDATE}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24 pr-3">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to onboarding
            </h1>
            <TabsList>
              <TabsTrigger
                value={tabsTriggerType.CANDIDATE}
                className="capitalize"
              >
                {tabsTriggerType.CANDIDATE}
              </TabsTrigger>
              <TabsTrigger
                value={tabsTriggerType.RECRUITER}
                className="capitalize"
              >
                {tabsTriggerType.RECRUITER}
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value={tabsTriggerType.CANDIDATE}>
          <div className="flex flex-col gap-6 mt-6">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-600">
              Candidate Onboarding
            </h2>

            <CandidateOnboardForm />
          </div>
        </TabsContent>
        <TabsContent value={tabsTriggerType.RECRUITER}>
          <div className="flex flex-col gap-6 mt-6">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-600">
              Recruiter Onboarding
            </h2>

            <RecruiterOnboardForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OnBoard;
