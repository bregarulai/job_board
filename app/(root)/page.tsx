import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const user = await currentUser();

  const profileInfo: any = null;

  if (user && !profileInfo?._id) redirect("/onboard");

  return <section>Home page</section>;
};

export default HomePage;
