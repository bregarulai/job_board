import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./globals.css";
import CommonLayout from "@/components/CommonLayout";
import Loading from "@/components/Loading";
import { QueryProvider } from "@/providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bregacode | Jobs",
  description: "Find the best job in your area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/" signInFallbackRedirectUrl="/">
      <html lang="en">
        <body className={inter.className}>
          <QueryProvider>
            <Toaster />
            <Suspense fallback={<Loading />}>
              <CommonLayout>{children}</CommonLayout>
            </Suspense>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
