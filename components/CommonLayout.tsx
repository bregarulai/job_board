import Header from "@/components/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;
