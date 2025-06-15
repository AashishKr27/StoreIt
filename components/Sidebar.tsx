"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href={"/"}>
        <Image
          src={"/assets/icons/logo-full-brand.svg"}
          alt={"Logo"}
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />
        <Image
          src={"/assets/icons/logo-brand.svg"}
          alt={"Logo"}
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link className="lg:w-full" key={name} href={url}>
              <li
                className={cn(
                  "sidebar-nav-item",
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
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
