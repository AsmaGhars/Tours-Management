import BaseRoutes from "./base/BaseRouter";
import PriceController from "../controller/PriceController";
import validate from "../helper/validate";
import { createPriceSchema, updatePriceSchema } from "../schema/PriceSchema";

class PriceRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/price:
     *   post:
     *     summary: Create a new price
     *     tags: [Price]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createPriceSchema'
     *     responses:
     *       201:
     *         description: Price created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post("", validate(createPriceSchema), PriceController.create);
    /**
     * @swagger
     * /api/v1/price/{id}:
     *   patch:
     *     summary: Update a price by ID
     *     tags: [Price]
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
     *             $ref: '#/components/schemas/updatePriceSchema'
     *     responses:
     *       200:
     *         description: Price updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updatePriceSchema),
      PriceController.update
    );
    /**
     * @swagger
     * /api/v1/price/{id}:
     *   delete:
     *     summary: Delete a price by ID
     *     tags: [Price]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Price deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", PriceController.delete);
    /**
     * @swagger
     * /api/v1/price:
     *   get:
     *     summary: Get all prices
     *     tags: [Price]
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
    this.router.get("", PriceController.findAll);
    /**
     * @swagger
     * /api/v1/price/{id}:
     *   get:
     *     summary: Get a price by ID
     *     tags: [Price]
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
    this.router.get("/:id", PriceController.findById);
  }
}

export default new PriceRoutes().router;
