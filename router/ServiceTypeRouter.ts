import BaseRoutes from "./base/BaseRouter";
import ServiceTypeController from "../controller/ServiceTypeController";
import validate from "../helper/validate";
import {
  createServiceTypeSchema,
  updateServiceTypeSchema,
} from "../schema/ServiceTypeSchema";

class ServiceTypeRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/service_type:
     *   post:
     *     summary: Create a new service type
     *     tags: [ServiceType]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createServiceTypeSchema'
     *     responses:
     *       201:
     *         description: Service Type created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createServiceTypeSchema),
      ServiceTypeController.create
    );
    /**
     * @swagger
     * /api/v1/service_type/{id}:
     *   patch:
     *     summary: Update a service type by ID
     *     tags: [ServiceType]
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
     *             $ref: '#/components/schemas/updateServiceTypeSchema'
     *     responses:
     *       200:
     *         description: Service type updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateServiceTypeSchema),
      ServiceTypeController.update
    );
    /**
     * @swagger
     * /api/v1/service_type/{id}:
     *   delete:
     *     summary: Delete a service type by ID
     *     tags: [ServiceType]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Service Type deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", ServiceTypeController.delete);
    /**
     * @swagger
     * /api/v1/service_type:
     *   get:
     *     summary: Get all service types
     *     tags: [ServiceType]
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
    this.router.get("", ServiceTypeController.findAll);
    /**
     * @swagger
     * /api/v1/service_type/{id}:
     *   get:
     *     summary: Get a service type by ID
     *     tags: [ServiceType]
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
    this.router.get("/:id", ServiceTypeController.findById);
  }
}

export default new ServiceTypeRoutes().router;
