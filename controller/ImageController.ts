import { Request, Response } from "express";
import { Image } from "../model/Image";
import { ImageRepo } from "../repository/ImageRepo";

class ImageController {
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
  async create(req: Request, res: Response) {
    try {
      const new_image = new Image();
      (new_image.name = req.body.name),
        (new_image.profile = req.body.profile),
        (new_image.slider = req.body.slider),
        (new_image.map = req.body.map),
        await new ImageRepo().save(new_image);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created image!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
  /**
   * @swagger
   * /api/v1/image/{id}:
   *   delete:
   *     summary: Delete a image by ID
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
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new ImageRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted Image!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
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
   * */
  async findAll(req: Request, res: Response) {
    try {
      const new_image = await new ImageRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all Image data!",
        data: new_image,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
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
  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_image = await new ImageRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  Image by id!",
        data: new_image,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

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
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_image = new Image();

      new_image.id = id;
      (new_image.name = req.body.name),
        (new_image.profile = req.body.profile),
        (new_image.slider = req.body.slider),
        (new_image.map = req.body.map),
        await new ImageRepo().update(new_image);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  image by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new ImageController();
