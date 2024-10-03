import BaseRoutes from "./base/BaseRouter";
import ProviderController from "../controller/ProviderController";
import validate from "../helper/validate";
import {
  createProviderSchema,
  updateProviderSchema,
} from "../schema/ProviderSchema";

class ProviderRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/provider:
     *   post:
     *     summary: Create a new provider
     *     tags: [Provider]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createProviderSchema'
     *     responses:
     *       201:
     *         description: Provider created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createProviderSchema),
      ProviderController.create
    );
    /**
     * @swagger
     * /api/v1/provider/{id}:
     *   patch:
     *     summary: Update a provider by ID
     *     tags: [Provider]
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
     *             $ref: '#/components/schemas/updateProviderSchema'
     *     responses:
     *       200:
     *         description: Provider updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateProviderSchema),
      ProviderController.update
    );
    /**
     * @swagger
     * /api/v1/provider/{id}:
     *   delete:
     *     summary: Delete a provider by ID
     *     tags: [Provider]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Provider deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", ProviderController.delete);
    /**
     * @swagger
     * /api/v1/provider:
     *   get:
     *     summary: Get all providers
     *     tags: [Provider]
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

    this.router.get("", ProviderController.findAll);
    /**
     * @swagger
     * /api/v1/provider/{id}:
     *   get:
     *     summary: Get a provider by ID
     *     tags: [Provider]
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
    this.router.get("/:id", ProviderController.findById);
  }
}

export default new ProviderRoutes().router;
