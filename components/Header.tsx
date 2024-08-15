"use client";

import { AlignJustify, Loader2 } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { HeaderProps } from "@/types";
import { profileType } from "@/constants";

const Header = ({ userId, role }: HeaderProps) => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !userId,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !userId,
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: userId,
    },
    {
      label: "Activities",
      path: "/activities",
      show: role === profileType.CANDIDATE,
    },
    {
      label: "Membership",
      path: "/membership",
      show: userId,
    },
    {
      label: "Account",
      path: "/account",
      show: userId,
    },
  ];

  return (
    <header className="flex h-16 w-full shrink-0 items-center px-6 lg:px-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="sm"
            variant="ghost"
            className="cursor-pointer px-1 -ml-1 lg:hidden"
          >
            <AlignJustify />
            <span className="sr-only">Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 flex">
            <h3>BreagaCode Jobs</h3>
          </Link>
          <nav className="grid gap-2 py-6">
            {/* TODO: close drawer after clicking on a menu item */}
            {menuItems.map((menuItem) =>
              menuItem.show ? (
                <Link
                  key={menuItem.path}
                  href={menuItem.path}
                  className="flex w-full items-center py-2 text-md font-semibold hover:underline"
                >
                  {menuItem.label}
                </Link>
              ) : null
            )}
            <div>
              <SignOutButton />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex">
        <h3>BreagaCode Jobs</h3>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {menuItems.map((menuItem) =>
          menuItem.show ? (
            <Link
              key={menuItem.path}
              href={menuItem.path}
              className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:underline"
            >
              {menuItem.label}
            </Link>
          ) : null
        )}
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="size-8 text-slate-400 animate-spin" />
        </ClerkLoading>
      </nav>
    </header>
  );
};

export default Header;
