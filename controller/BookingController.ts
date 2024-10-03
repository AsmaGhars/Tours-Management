import { Request, Response } from "express";
import { Booking } from "../model/Booking";
import { BookingRepo } from "../repository/BookingRepo";

class BookingController {
  /**
   * @swagger
   * /api/v1/booking:
   *   post:
   *     summary: Create a new Booking
   *     tags: [Booking]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createBookingSchema'
   *     responses:
   *       201:
   *         description: Booking created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_booking = new Booking();
      new_booking.userId = req.body.userId;
      new_booking.tourId = req.body.tourId;
      new_booking.startDate = req.body.startDate;
      new_booking.endDate = req.body.endDate;

      await new BookingRepo().save(new_booking);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created booking!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
  /**
   * @swagger
   * /api/v1/booking/{id}:
   *   delete:
   *     summary: Delete a booking by ID
   *     tags: [Booking]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Booking deleted successfully
   *       500:
   *         description: Internal Server Error!
   */
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new BookingRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted Booking!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
  /**
   * @swagger
   * /api/v1/booking:
   *   get:
   *     summary: Get all bookings
   *     tags: [Booking]
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             example:
   *               data: []
   *       500:
   *         description: Internal Server Error!
   * */
  async findAll(req: Request, res: Response) {
    try {
      const new_booking = await new BookingRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all Booking data!",
        data: new_booking,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
  /**
   * @swagger
   * /api/v1/booking/{id}:
   *   get:
   *     summary: Get an booking by ID
   *     tags: [Booking]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             example:
   *               data: {}
   *       500:
   *         description: Internal Server Error!
   */
  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_booking = await new BookingRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  Booking by id!",
        data: new_booking,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  /**
   * @swagger
   * /api/v1/booking/{id}:
   *   patch:
   *     summary: Update a booking by ID
   *     tags: [Booking]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/updateBookingSchema'
   *     responses:
   *       200:
   *         description: Booking updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_booking = new Booking();

      new_booking.id = id;
      new_booking.userId = req.body.userId;
      new_booking.tourId = req.body.tourId;
      new_booking.startDate = req.body.startDate;
      new_booking.endDate = req.body.endDate;

      await new BookingRepo().update(new_booking);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  booking by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new BookingController();
