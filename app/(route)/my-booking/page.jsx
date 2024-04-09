"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getAppointments } from "@/lib/db_operations";
import BookingList from "./_components/BookingList";

function MyBooking() {
  const { user } = useKindeBrowserClient();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBookings = async () => {
    setLoading(true);
    try {
      const appointments = await getAppointments(user.id);
      setBookings(appointments);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getBookings();
    }
  }, [user]);

  const filterUserBooking = (type) => {
    const result = bookings.filter((item) =>
      type === "upcoming"
        ? new Date(item.date) >= new Date()
        : new Date(item.date) <= new Date()
    );

    return result;
  };

  return (
    <div className="px-4 md:px-10 py-2 ">
      <h2 className=" font-bold text-3xl">MyBooking</h2>
      <Tabs defaultValue="upcoming" className="w-full mt-6 ">
        <TabsList className="w-full justify-start ">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookingList
              list={filterUserBooking("upcoming")}
              expired={false}
              updateRecord={getBookings}
            />
          )}
        </TabsContent>
        <TabsContent value="expired">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookingList list={filterUserBooking("expired")} expired={true} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
