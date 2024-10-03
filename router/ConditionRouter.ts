import BaseRoutes from "./base/BaseRouter";
import ConditionController from "../controller/ConditionController";
import validate from "../helper/validate";
import {
  createConditionSchema,
  updateConditionSchema,
} from "../schema/ConditionSchema";

class ConditionRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/condition:
     *   post:
     *     summary: Create a new condition
     *     tags: [Condition]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createConditionSchema'
     *     responses:
     *       201:
     *         description: Condition created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createConditionSchema),
      ConditionController.create
    );
    /**
     * @swagger
     * /api/v1/condition/{id}:
     *   patch:
     *     summary: Update a condition by ID
     *     tags: [Condition]
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
     *             $ref: '#/components/schemas/updateConditionSchema'
     *     responses:
     *       200:
     *         description: Condition updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateConditionSchema),
      ConditionController.update
    );
    /**
     * @swagger
     * /api/v1/condition/{id}:
     *   delete:
     *     summary: Delete a condition by ID
     *     tags: [Condition]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Condition deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", ConditionController.delete);
    /**
     * @swagger
     * /api/v1/condition:
     *   get:
     *     summary: Get all conditions
     *     tags: [Condition]
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
    this.router.get("", ConditionController.findAll);
    /**
     * @swagger
     * /api/v1/condition/{id}:
     *   get:
     *     summary: Get a condition by ID
     *     tags: [Condition]
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
    this.router.get("/:id", ConditionController.findById);
  }
}

export default new ConditionRoutes().router;
