import BaseRoutes from "./base/BaseRouter";
import DriverController from "../controller/DriverController";
import validate from "../helper/validate";
import { createDriverSchema, updateDriverSchema } from "../schema/DriverSchema";

class DriverRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/driver:
     *   post:
     *     summary: Create a new driver
     *     tags: [Driver]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createDriverSchema'
     *     responses:
     *       201:
     *         description: Driver created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post("", validate(createDriverSchema), DriverController.create);
    /**
     * @swagger
     * /api/v1/driver/{id}:
     *   patch:
     *     summary: Update a driver by ID
     *     tags: [Driver]
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
     *             $ref: '#/components/schemas/updateDriverSchema'
     *     responses:
     *       200:
     *         description: Driver updated successfully
     *       400:
     *         description: Bad request
     *       404:
     *         description: Driver not found
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateDriverSchema),
      DriverController.update
    );
    /**
     * @swagger
     * /api/v1/driver/{id}:
     *   delete:
     *     summary: Delete a driver by ID
     *     tags: [Driver]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Driver deleted successfully
     *       404:
     *         description: Driver not found
     *       500:
     *         description: Internal server error
     */
    this.router.delete("/:id", DriverController.delete);
    /**
     * @swagger
     * /api/v1/driver:
     *   get:
     *     summary: Get all drivers
     *     tags: [Driver]
     *     responses:
     *       200:
     *         description: Drivers retrieved successfully
     *       500:
     *         description: Internal server error
     */
    this.router.get("", DriverController.findAll);
    /**
     * @swagger
     * /api/v1/driver/{id}:
     *   get:
     *     summary: Get a driver by ID
     *     tags: [Driver]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Driver retrieved successfully
     *       404:
     *         description: Driver not found
     *       500:
     *         description: Internal server error
     */
    this.router.get("/:id", DriverController.findById);
  }
}

export default new DriverRoutes().router;
