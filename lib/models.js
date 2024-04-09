import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
let Booking;

if (mongoose.models && mongoose.models.Booking) {
  Booking = mongoose.model("Booking");
} else {
  Booking = mongoose.model("Booking", bookingSchema);
}

export default Booking;
