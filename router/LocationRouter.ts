import BaseRoutes from "./base/BaseRouter";
import LocationController from "../controller/LocationController";
import validate from "../helper/validate";
import {
  createLocationSchema,
  updateLocationSchema,
} from "../schema/LocationSchema";

class LocationRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/location:
     *   post:
     *     summary: Create a new location
     *     tags: [Location]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createLocationSchema'
     *     responses:
     *       201:
     *         description: Location created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createLocationSchema),
      LocationController.create
    );
    /**
     * @swagger
     * /api/v1/location/{id}:
     *   patch:
     *     summary: Update a location by ID
     *     tags: [Location]
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
     *             $ref: '#/components/schemas/updateLocationSchema'
     *     responses:
     *       200:
     *         description: Location updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateLocationSchema),
      LocationController.update
    );
    /**
     * @swagger
     * /api/v1/location/{id}:
     *   delete:
     *     summary: Delete a location by ID
     *     tags: [Location]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Location deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", LocationController.delete);
    /**
     * @swagger
     * /api/v1/location:
     *   get:
     *     summary: Get all locations
     *     tags: [Location]
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
    this.router.get("", LocationController.findAll);
    /**
     * @swagger
     * /api/v1/location/{id}:
     *   get:
     *     summary: Get a location by ID
     *     tags: [Location]
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
    this.router.get("/:id", LocationController.findById);
  }
}

export default new LocationRoutes().router;
