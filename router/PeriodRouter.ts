import BaseRoutes from "./base/BaseRouter";
import PeriodController from "../controller/PeriodController";
import validate from "../helper/validate";
import { createPeriodSchema, updatePeriodSchema } from "../schema/PeriodSchema";

class PeriodRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/period:
     *   post:
     *     summary: Create a new period
     *     tags: [Period]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createPeriodSchema'
     *     responses:
     *       201:
     *         description: Period created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post("", validate(createPeriodSchema), PeriodController.create);
    /**
     * @swagger
     * /api/v1/period/{id}:
     *   patch:
     *     summary: Update a period by ID
     *     tags: [Period]
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
     *             $ref: '#/components/schemas/updatePeriodSchema'
     *     responses:
     *       200:
     *         description: Period updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updatePeriodSchema),
      PeriodController.update
    );
    /**
     * @swagger
     * /api/v1/period/{id}:
     *   delete:
     *     summary: Delete a period by ID
     *     tags: [Period]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Period deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", PeriodController.delete);
    /**
     * @swagger
     * /api/v1/period:
     *   get:
     *     summary: Get all periods
     *     tags: [Period]
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
    this.router.get("", PeriodController.findAll);
    /**
     * @swagger
     * /api/v1/period/{id}:
     *   get:
     *     summary: Get a period by ID
     *     tags: [Period]
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
    this.router.get("/:id", PeriodController.findById);
  }
}

export default new PeriodRoutes().router;
