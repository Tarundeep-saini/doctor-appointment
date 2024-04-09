"use server";

import mongoose from "mongoose";
import Booking from "./models";

let isConnected = false;

export const connectToDb = async () => {
  if (isConnected) {
    console.log("Database is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.DB_URL);

    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting db:", error);
  }
};

export const makeNewBooking = async (data) => {
  try {
    await connectToDb();
    const booking = new Booking({
      userId: data.userId,
      doctorId: data.doctorId,
      date: data.date,
      time: data.time,
    });
    await booking.save();
    return true;
  } catch (error) {
    console.error("Error creating booking:", error);
    return false;
  }
};

export const getAppointments = async (userId) => {
  try {
    await connectToDb();
    const appointments = await Booking.find({ userId });
    return JSON.parse(JSON.stringify(appointments));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAppointment = async (id) => {
  try {
    await connectToDb();
    await Booking.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};
