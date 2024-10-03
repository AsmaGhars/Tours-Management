import BaseRoutes from "./base/BaseRouter";
import VehiculeController from "../controller/VehiculeController";
import validate from "../helper/validate";
import {
  createVehiculeSchema,
  updateVehiculeSchema,
} from "../schema/VehiculeSchema";

class VehiculeRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/vehicule:
     *   post:
     *     summary: Create a new vehicule
     *     tags: [Vehicule]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createVehiculeSchema'
     *     responses:
     *       201:
     *         description: Vehicule created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createVehiculeSchema),
      VehiculeController.create
    );
    /**
     * @swagger
     * /api/v1/vehicule/{id}:
     *   patch:
     *     summary: Update a vehicule by ID
     *     tags: [Vehicule]
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
     *             $ref: '#/components/schemas/updateVehiculeSchema'
     *     responses:
     *       200:
     *         description: Vehicule updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateVehiculeSchema),
      VehiculeController.update
    );
    /**
     * @swagger
     * /api/v1/vehicule/{id}:
     *   delete:
     *     summary: Delete a vehicule by ID
     *     tags: [Vehicule]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Vehicule deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", VehiculeController.delete);
    /**
     * @swagger
     * /api/v1/vehicule:
     *   get:
     *     summary: Get all vehicules
     *     tags: [Vehicule]
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
    this.router.get("", VehiculeController.findAll);
    /**
     * @swagger
     * /api/v1/vehicule/{id}:
     *   get:
     *     summary: Get a vehicule by ID
     *     tags: [Vehicule]
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
    this.router.get("/:id", VehiculeController.findById);
  }
}

export default new VehiculeRoutes().router;
