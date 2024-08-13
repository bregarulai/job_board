import { SignIn } from "@clerk/nextjs";

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn />
    </div>
  );
};

export default SigninPage;
