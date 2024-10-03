import { Booking } from "../model/Booking";

interface IBookingRepo {
  save(booking: Booking): Promise<void>;
  update(Booking: Booking): Promise<void>;
  delete(bookingId: number): Promise<void>;
  retrieveById(bookingId: number): Promise<Booking>;
  retrieveAll(): Promise<Booking[]>;
}

export class BookingRepo implements IBookingRepo {
  async save(booking: Booking): Promise<void> {
    try {
      await Booking.create({
        userId: booking.userId,
        tourId: booking.tourId,
        startDate: booking.startDate,
        endDate: booking.endDate,
      });
    } catch (error) {
      throw new Error("Failed to create booking!");
    }
  }
  async update(booking: Booking): Promise<void> {
    try {
      const new_booking = await Booking.findOne({
        where: {
          id: booking.id,
        },
      });
      if (!new_booking) {
        throw new Error("Booking not found!");
      }

      new_booking.userId = booking.userId;
      new_booking.tourId = booking.tourId;
      new_booking.startDate = booking.startDate;
      new_booking.endDate = booking.endDate;

      await new_booking.save();
    } catch (error) {
      throw new Error("Failed to update booking!");
    }
  }
  async delete(bookingId: number): Promise<void> {
    try {
      const new_booking = await Booking.findOne({
        where: {
          id: bookingId,
        },
      });
      if (!new_booking) {
        throw new Error("Booking not found!.");
      }

      await new_booking.destroy();
    } catch (error) {
      throw new Error("Failed to delete booking!");
    }
  }
  async retrieveById(bookingId: number): Promise<Booking> {
    try {
      const new_booking = await Booking.findOne({
        where: {
          id: bookingId,
        },
      });
      if (!new_booking) {
        throw new Error("Gooking not found!.");
      }
      return new_booking;
    } catch (error) {
      throw new Error("Failed to retrieve booking by id!");
    }
  }
  async retrieveAll(): Promise<Booking[]> {
    try {
      return await Booking.findAll();
    } catch (error) {
      throw new Error("Failed to find all bookings!");
    }
  }
}
