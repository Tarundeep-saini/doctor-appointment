import Image from "next/image";
import React from "react";
import { doctorsArray } from "@/app/_utils/actions";
import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment/moment";
import { Button } from "@/components/ui/button";
import CancelAppointment from "./CancelAppointment";
import { deleteAppointment } from "@/lib/db_operations";

function BookingList({ list, expired, updateRecord }) {
  const getImageURL = (doctorId) => {
    const doctor = doctorsArray.find((doctor) => doctor.id === doctorId);
    return doctor;
  };

  return (
    <div>
      {list &&
        list.map((booking) => {
          const doctor = getImageURL(booking.doctorId);
          return (
            <div
              key={booking._id}
              className="flex gap-2 items-center border p-3 m-3 rounded-lg "
            >
              <Image
                src={doctor.imageUrl}
                width={80}
                height={80}
                className=" rounded-full  h-[80px] w-[80px] object-cover "
                alt="doctor-boooking-list"
              />
              <div className=" flex flex-col gap-2 w-full">
                <h2 className="  flex justify-between items-center  font-bold text-xl ">
                  {doctor.name}
                  {!expired && (
                    <CancelAppointment
                      id={booking._id}
                      updateRecord={updateRecord}
                    />
                  )}
                </h2>
                <h2 className="flex items-center gap-2 text-gray-500  ">
                  <MapPin className=" h-5 w-5 text-primary  " />
                  {doctor.address}
                </h2>
                <h2 className="flex items-center gap-2 ">
                  <Calendar className=" h-5 w-5 text-primary  " /> appointment
                  on :{moment(booking.date).format("MMM Do YY")}
                </h2>
                <h2 className="flex items-center gap-2 ">
                  <Clock className=" h-5 w-5 text-primary  " /> at :{" "}
                  {booking.time}
                </h2>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default BookingList;
