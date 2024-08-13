const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">{children}</div>
    </main>
  );
};

export default CommonLayout;
