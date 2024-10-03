import BaseRoutes from "./base/BaseRouter";
import ImageController from "../controller/ImageController";
import validate from "../helper/validate";
import { createImageSchema, updateImageSchema } from "../schema/ImageSchema";

class ImageRoutes extends BaseRoutes {
  public routes(): void {
    /**
     * @swagger
     * /api/v1/image:
     *   post:
     *     summary: Create a new image
     *     tags: [Image]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/createImageSchema'
     *     responses:
     *       201:
     *         description: Image created successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.post("", validate(createImageSchema), ImageController.create);
    /**
     * @swagger
     * /api/v1/image/{id}:
     *   patch:
     *     summary: Update an image by ID
     *     tags: [Image]
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
     *             $ref: '#/components/schemas/updateImageSchema'
     *     responses:
     *       200:
     *         description: Image updated successfully
     *       400:
     *         description: Bad request
     *       500:
     *         description: Internal server error
     */
    this.router.patch(
      "/:id",
      validate(updateImageSchema),
      ImageController.update
    );
    /**
     * @swagger
     * /api/v1/image/{id}:
     *   delete:
     *     summary: Delete an image by ID
     *     tags: [Image]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Image deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", ImageController.delete);
    /**
     * @swagger
     * /api/v1/image:
     *   get:
     *     summary: Get all images
     *     tags: [Image]
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
    this.router.get("", ImageController.findAll);
    /**
     * @swagger
     * /api/v1/image/{id}:
     *   get:
     *     summary: Get an image by ID
     *     tags: [Image]
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
    this.router.get("/:id", ImageController.findById);
  }
}

export default new ImageRoutes().router;
