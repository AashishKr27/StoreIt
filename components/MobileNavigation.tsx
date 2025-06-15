/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";

interface Props {
  ownerId: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}

const MobileNavigation = ({
  ownerId,
  accountId,
  fullName,
  avatar,
  email,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="mobile-header">
      <Image
        src={"/assets/icons/logo-full-brand.svg"}
        alt={"Logo"}
        width={120}
        height={52}
        className="h-auto"
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src={"/assets/icons/menu.svg"}
            alt={"Search"}
            width={30}
            height={30}
            className=""
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatar}
                alt={"Avatar"}
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ url, name, icon }) => (
                <Link className="lg:w-full" key={name} href={url}>
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathname === url && "shad-active"
                    )}
                  >
                    <Image
                      className={cn(
                        "nav-icon",
                        pathname === url && "nav-icon-active"
                      )}
                      src={icon}
                      alt={name}
                      width={24}
                      height={24}
                    />
                    <p>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className="my-5 bg-light-200/20" />
          <div className="flex flex-col justify-between gap-5 pb-5">
            <FileUploader />
            <Button
              type="submit"
              onClick={() => {}}
              className="mobile-sign-out-button"
            >
              <Image
                src={"/assets/icons/logout.svg"}
                alt={"Logout"}
                width={24}
                height={24}
              />
              <p className="">Logout</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
