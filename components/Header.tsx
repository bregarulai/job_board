"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: true,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: true,
    },
  ];
  return (
    <header className="flex h-16 w-full shrink-0 items-center">
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
      </nav>
    </header>
  );
};

export default Header;
