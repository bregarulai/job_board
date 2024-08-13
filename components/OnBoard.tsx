import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsTriggerType } from "@/constants";
import RecruiterOnboardForm from "@/components/forms/RecruiterOnboardForm";

const OnBoard = () => {
  return (
    <div>
      <Tabs defaultValue={tabsTriggerType.CANDIDATE}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
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
        <TabsContent value={tabsTriggerType.CANDIDATE}>Candidate</TabsContent>
        <TabsContent value={tabsTriggerType.RECRUITER}>
          <RecruiterOnboardForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OnBoard;
