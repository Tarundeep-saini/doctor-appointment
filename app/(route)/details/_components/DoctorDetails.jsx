import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookAppointment from "./BookAppointment";

const DoctorDetails = ({ doctor }) => {
  const socialMediaList = [
    {
      id: "1",
      icon: "/in.png",
    },
    {
      id: "2",
      icon: "/fb.png",
    },
    {
      id: "3",
      icon: "/x.png",
    },
    {
      id: "4",
      icon: "/yt.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 border-2 border-gray-200 rounded-lg ">
        <div>
          <Image
            src={doctor.imageUrl}
            width={200}
            height={200}
            alt="Doctor Image"
            className=" object-cover rounded-lg h-[270px] w-full  "
          />
        </div>
        <div className=" col-span-2  mt-4 flex flex-col md:px-10 gap-3 items-baseline   ">
          <h2 className="text-2xl font-bold ">{doctor.name}</h2>
          <h2 className="flex gap-2 text-gray-500 text-md  ">
            <GraduationCap />
            <span>{doctor.experience} years of experience </span>
          </h2>
          <h2 className="flex gap-2 text-gray-500 text-md ">
            <MapPin />
            <span>{doctor.address} </span>
          </h2>

          <h2 className="  text-[12px] bg-blue-100 text-primary rounded-xl p-1 px-2   ">
            {doctor.category}
          </h2>
          <div className="flex gap-3">
            {socialMediaList.map((item) => (
              <Image
                src={item.icon}
                width={30}
                height={30}
                key={item.id}
                alt="Socials"
              />
            ))}
          </div>
          <BookAppointment doctorId={doctor.id} />
        </div>
      </div>
      <div className=" mt-4 p-4 border-2 border-gray-200 rounded-lg ">
        <h2 className="text-2xl font-bold ">About Me</h2>
        <p className="text-gray-500 tracking-wider "> {doctor.description}</p>
      </div>
    </>
  );
};

export default DoctorDetails;
