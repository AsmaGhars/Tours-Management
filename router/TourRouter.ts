import BaseRoutes from "./base/BaseRouter";
import TourController from "../controller/TourController";
import validate from "../helper/validate";
import { createTourSchema, updateTourSchema } from "../schema/TourSchema";
import { createBookingSchema } from "../schema/BookingSchema";

class TourRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/tour:
     *   post:
     *     summary: Create a new tour
     *     tags: [Tour]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createTourSchema'
     *     responses:
     *       201:
     *         description: Tour created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post("", validate(createTourSchema), TourController.create);
    /**
     * @swagger
     * /api/v1/tour/{id}:
     *   patch:
     *     summary: Update a tour by ID
     *     tags: [Tour]
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
     *             $ref: '#/components/schemas/updateTourSchema'
     *     responses:
     *       200:
     *         description: Tour updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateTourSchema),
      TourController.update
    );
    /**
     * @swagger
     * /api/v1/tour/{id}:
     *   delete:
     *     summary: Delete a tour by ID
     *     tags: [Tour]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Tour deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", TourController.delete);
    /**
     * @swagger
     * /api/v1/tour:
     *   get:
     *     summary: Get all tours
     *     tags: [Tour]
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
    this.router.get("", TourController.findAll);
    /**
     * @swagger
     * /api/v1/tour/{id}:
     *   get:
     *     summary: Get a tour by ID
     *     tags: [Tour]
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
    this.router.get("/:id", TourController.findById);
    /**
     * @swagger
     * /api/v1/tour/search/price:
     *   get:
     *     summary: Search tours by price
     *     tags: [Tour]
     *     parameters:
     *       - name: minPrice
     *         in: query
     *         required: true
     *         schema:
     *           type: number
     *       - name: maxPrice
     *         in: query
     *         required: true
     *         schema:
     *           type: number
     *     responses:
     *       200:
     *         description: Successful response
     *         content:
     *           application/json:
     *             example:
     *               data: []
     *       400:
     *         description: Bad request
     *         content:
     *           application/json:
     *             example:
     *               status: "Bad Request"
     *               message: "Please provide both minPrice and maxPrice query parameters."
     *       500:
     *         description: Internal Server Error!
     */
    this.router.get("/search/price", TourController.searchByPrice);
    /**
     * @swagger
     * /api/v1/tour/search/name:
     *   get:
     *     summary: Search tours by name
     *     tags: [Tour]
     *     parameters:
     *       - name: name
     *         in: query
     *         required: true
     *         schema:
     *           type: string
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

    this.router.get("/search/name", TourController.searchByName);
    /**
     * @swagger
     * /api/v1/tour/search/active:
     *   get:
     *     summary: Search tours by status
     *     tags: [Tour]
     *     parameters:
     *       - name: isActive
     *         in: query
     *         required: true
     *         schema:
     *           type: string
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
    this.router.get("/search/active", TourController.searchByActiveStatus);
    /**
     * @swagger
     * /api/v1/tour/{id}/book:
     *   post:
     *     summary: Book a tour
     *     tags: [Tour]
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
     *             $ref: '#/components/schemas/createBookingSchema'
     *     responses:
     *       201:
     *         description: Tour booked successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "/:id/book",
      validate(createBookingSchema),
      TourController.bookTour
    );

    /**
     * @swagger
     * /api/v1/tour/{id}/cancel:
     *   post:
     *     summary: Cancel a tour booking by ID
     *     tags: [Tour]
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
     *             properties:
     *               userId:
     *                 type: integer
     *               reason:
     *                 type: string
     *             required:
     *               - userId
     *               - reason
     *     responses:
     *       200:
     *         description: Tour booking canceled successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */

    this.router.post("/:id/cancel", TourController.cancelTour);
  }
}

export default new TourRoutes().router;
