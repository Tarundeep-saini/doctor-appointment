"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/",
    },
  ];
  const { user } = useKindeBrowserClient();

  return (
    <div
      id="Navbar"
      className="flex items-center justify-between p-4 shadow-sm"
    >
      <div className="flex items-center gap-12 ">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={180} height={150} />
        </Link>
        <ul className="md:flex gap-8 hidden  ">
          {menu.map((item, index) => (
            <Link key={item.id} href={item.path}>
              <li className=" hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out ">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {!user ? (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      ) : (
        <Popover>
          <PopoverTrigger>
            <Image
              src={user.picture}
              className="rounded-full"
              width={40}
              height={40}
              alt="Image in Header"
            />
          </PopoverTrigger>
          <PopoverContent>
            <ul className="flex flex-col gap-1">
              <Link
                href={"/my-booking"}
                className=" cursor-pointer hover:bg-slate-100 p-2 text-lg "
              >
                My Bookings
              </Link>
              <li className=" cursor-pointer hover:bg-slate-100 p-2 text-lg ">
                <LogoutLink>Log Out</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

export default Header;
