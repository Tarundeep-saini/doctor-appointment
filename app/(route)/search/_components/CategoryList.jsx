"use client";
import React from "react";
import Image from "next/image";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Categories } from "@/app/_utils/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const params = usePathname();
  const currentCategory = params.split("/")[2];

  return (
    <div className="  h-screen flex  flex-col  ">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {Categories.map((Category, index) => (
              <CommandItem key={Category.id}>
                <Link
                  href={"/search/" + Category.class}
                  className={` flex gap-2   items-center  text-blue-600 p-2 rounded-md cursor-pointer w-full ${
                    Category.params === currentCategory && "bg-blue-100"
                  } `}
                >
                  <Image src={Category.url} width={23} height={23} alt="logo" />
                  <label className="text-lg">{Category.class}</label>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
