import React from "react";
import Image from "next/image";
import Link from "next/link";
import { doctorsArray } from "@/app/_utils/actions";

function DoctorList({ Category = "Popular" }) {
  let updatedList = [];
  if (Category === "Popular") {
    updatedList = doctorsArray;
  } else {
    updatedList = doctorsArray.filter((doctor) => Category === doctor.params);
  }
  return (
    <div className="px-8 mb-8">
      <h2 className="font-bold text-2xl"> {Category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  mt-6 ">
        {updatedList.length > 0 &&
          updatedList.map((doctor, index) => {
            return (
              <div
                key={index}
                className="border-[1px]  rounded-md p-3 hover:border-blue-400 cursor-pointer transition-all ease-out "
              >
                <Image
                  src={doctor.imageUrl}
                  width={500}
                  height={200}
                  alt="doctor"
                  className="h-[200px] w-full object-cover rounded-xl "
                />
                <div className=" mt-2 flex flex-col items-baseline gap-1 ">
                  <h2 className="  text-sm bg-blue-100 text-primary rounded-xl px-2  ">
                    {doctor.category}
                  </h2>
                  <h2 className="font-bold ">{doctor.name}</h2>
                  <h2 className="text-primary">{doctor.experience}</h2>
                  <h2 className=" text-sm text-gray-500">{doctor.address}</h2>
                  <Link href={"/details/" + doctor?.id} className="w-full">
                    <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[13px] mt-2 hover:bg-primary hover:text-white  ">
                      Book Now
                    </h2>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DoctorList;
