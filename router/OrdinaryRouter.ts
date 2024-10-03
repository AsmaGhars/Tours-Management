import BaseRoutes from "./base/BaseRouter";
import OrdinaryController from "../controller/OrdinaryController";
import validate from "../helper/validate";
import {
  createOrdinarySchema,
  updateOrdinarySchema,
} from "../schema/OrdinarySchema";

class OrdinaryRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/ordinary:
     *   post:
     *     summary: Create a new ordinary
     *     tags: [Ordinary]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createOrdinarySchema'
     *     responses:
     *       201:
     *         description: Ordinary created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createOrdinarySchema),
      OrdinaryController.create
    );
    /**
     * @swagger
     * /api/v1/ordinary/{id}:
     *   patch:
     *     summary: Update an ordinary by ID
     *     tags: [Ordinary]
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
     *             $ref: '#/components/schemas/updateOrdinarySchema'
     *     responses:
     *       200:
     *         description: Ordinary updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateOrdinarySchema),
      OrdinaryController.update
    );
    /**
     * @swagger
     * /api/v1/ordinary/{id}:
     *   delete:
     *     summary: Delete an ordinary by ID
     *     tags: [Ordinary]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Ordinary deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", OrdinaryController.delete);
    /**
     * @swagger
     * /api/v1/ordinary:
     *   get:
     *     summary: Get all ordinarys
     *     tags: [Ordinary]
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
    this.router.get("", OrdinaryController.findAll);
    /**
     * @swagger
     * /api/v1/ordinary/{id}:
     *   get:
     *     summary: Get an ordinary by ID
     *     tags: [Ordinary]
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
    this.router.get("/:id", OrdinaryController.findById);
  }
}

export default new OrdinaryRoutes().router;
