import React from "react";
import { doctorsArray } from "@/app/_utils/actions";
import DoctorDetails from "../_components/DoctorDetails";
import DoctorSugesstions from "../_components/DoctorSugesstions";
function Details({ params }) {
  const doctor = doctorsArray[params.recordId];
  return (
    <div className="p-5 md:p-[20px]">
      <h2 className=" font-bold text-2xl ">Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 pt-5 ">
        <div className=" col-span-3  ">
          <DoctorDetails doctor={doctor} />
        </div>
        <div className="">
          <DoctorSugesstions />
        </div>
      </div>
    </div>
  );
}

export default Details;
