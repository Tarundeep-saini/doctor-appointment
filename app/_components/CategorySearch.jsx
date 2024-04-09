import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
import { Categories } from "../_utils/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CategorySearch( ) {
  return (
    <div className="mt-12 flex flex-col items-center gap-2 ">
      <h2 className=" font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl text-center ">
        Search Your Doctor and Book Appointment in one click
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-4 ">
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          <Search className="w-4 h-4 mr-2" /> Search
        </Button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4">
        {Categories.map((Category, index) => (
          <Link
            href={"/search/" + Category.class}
            key={Category.id}
            className="flex flex-col text-center items-center gap-2 p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out hover:bg-blue-100  hover:rounded-2xl"
          >
            <Image src={Category.url} width={40} height={40} alt="logo" />
            <label className="text-blue-600 text-sm">{Category.class}</label>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySearch;
