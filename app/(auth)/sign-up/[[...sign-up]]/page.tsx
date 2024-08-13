import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp />
    </div>
  );
};

export default SignupPage;
