import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PostNewJobForm from "@/components/forms/PostNewJobForm";
import { useUser } from "@clerk/nextjs";
import { useGetProfile } from "@/features/onboard/api/useGetProfile";

const PostNewJob = () => {
  const { isLoaded, user } = useUser();
  const { data: profile, isLoading } = useGetProfile(user?.id);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={!isLoaded || isLoading}>Post A Job</Button>
        </DialogTrigger>
        <DialogContent
          aria-describedby={undefined}
          className="sm:max-w-screen-md h-[70vh] overflow-auto"
        >
          <DialogHeader>
            <DialogTitle>Post New Job</DialogTitle>
            <div className="grid gap-4 py-4">
              <PostNewJobForm />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostNewJob;
