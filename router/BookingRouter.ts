import BaseRoutes from "./base/BaseRouter";
import BookingController from "../controller/BookingController";
import validate from "../helper/validate";
import {
  createBookingSchema,
  updateBookingSchema,
} from "../schema/BookingSchema";

class BookingRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/booking:
     *   post:
     *     summary: Create a new booking
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
    this.router.post(
      "",
      validate(createBookingSchema),
      BookingController.create
    );
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
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
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
    this.router.patch(
      "/:id",
      validate(updateBookingSchema),
      BookingController.update
    );
    /**
     * @swagger
     * /api/v1/booking/{id}:
     *   delete:
     *     summary: Delete a booking by ID
     *     tags: [ Booking]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description:  Booking deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", BookingController.delete);
    /**
     * @swagger
     * /api/v1/booking:
     *   get:
     *     summary: Get all  bookings
     *     tags: [ Booking]
     *     responses:
     *       200:
     *         description: Successful response
     *         content:
     *           application/json:
     *             example:
     *               data: []
     *       500:
     *         description: Internal Server Error!
     */
    this.router.get("", BookingController.findAll);
    /**
     * @swagger
     * /api/v1/booking/{id}:
     *   get:
     *     summary: Get a  booking by ID
     *     tags: [ Booking]
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
    this.router.get("/:id", BookingController.findById);
  }
}

export default new BookingRoutes().router;
