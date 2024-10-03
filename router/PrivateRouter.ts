import BaseRoutes from "./base/BaseRouter";
import PrivateController from "../controller/PrivateController";
import validate from "../helper/validate";
import {
  createPrivateSchema,
  updatePrivateSchema,
} from "../schema/PrivateSchema";

class PrivateRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/private:
     *   post:
     *     summary: Create a new private
     *     tags: [Private]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createPrivateSchema'
     *     responses:
     *       201:
     *         description: Private created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "",
      validate(createPrivateSchema),
      PrivateController.create
    );
    /**
     * @swagger
     * /api/v1/private/{id}:
     *   patch:
     *     summary: Update a private by ID
     *     tags: [Private]
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
     *             $ref: '#/components/schemas/updatePrivateSchema'
     *     responses:
     *       200:
     *         description: Private updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updatePrivateSchema),
      PrivateController.update
    );
    /**
     * @swagger
     * /api/v1/private/{id}:
     *   delete:
     *     summary: Delete a private by ID
     *     tags: [Private]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Private deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", PrivateController.delete);
    /**
     * @swagger
     * /api/v1/private:
     *   get:
     *     summary: Get all privates
     *     tags: [Private]
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
    this.router.get("", PrivateController.findAll);
    /**
     * @swagger
     * /api/v1/private/{id}:
     *   get:
     *     summary: Get a private by ID
     *     tags: [Private]
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
    this.router.get("/:id", PrivateController.findById);
  }
}

export default new PrivateRoutes().router;
