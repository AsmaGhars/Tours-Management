import BaseRoutes from "./base/BaseRouter";
import CancellationController from "../controller/CancellationController";
import validate from "../helper/validate";
import {
  createCancellationSchema,
  updateCancellationSchema,
} from "../schema/CancellationSchema";

class CancellationRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/cancellation:
     *   post:
     *     summary: Create a new cancellation
     *     tags: [Cancellation]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createCancellationSchema'
     *     responses:
     *       201:
     *         description: Cancellation created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createCancellationSchema),
      CancellationController.create
    );
    /**
     * @swagger
     * /api/v1/cancellation/{id}:
     *   patch:
     *     summary: Update a cancellation by ID
     *     tags: [Cancellation]
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
     *             $ref: '#/components/schemas/updateCancellationSchema'
     *     responses:
     *       200:
     *         description: Cancellation updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateCancellationSchema),
      CancellationController.update
    );
    /**
     * @swagger
     * /api/v1/cancellation/{id}:
     *   delete:
     *     summary: Delete a cancellation by ID
     *     tags: [ Cancellation]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description:  Cancellation deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", CancellationController.delete);
    /**
     * @swagger
     * /api/v1/cancellation:
     *   get:
     *     summary: Get all  cancellations
     *     tags: [ Cancellation]
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
    this.router.get("", CancellationController.findAll);
    /**
     * @swagger
     * /api/v1/cancellation/{id}:
     *   get:
     *     summary: Get a  cancellation by ID
     *     tags: [ Cancellation]
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
    this.router.get("/:id", CancellationController.findById);
  }
}

export default new CancellationRoutes().router;
