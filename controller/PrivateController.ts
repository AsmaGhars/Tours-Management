import { Request, Response } from "express";
import { Private } from "../model/Private";
import { PrivateRepo } from "../repository/PrivateRepo";

class PrivateController {
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
  async create(req: Request, res: Response) {
    try {
      const new_private = new Private();
      new_private.id_vehicule = req.body.id_vehicule;
      new_private.name = req.body.name;

      await new PrivateRepo().save(new_private);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created private!",
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
   *         description: Driver deleted successfully
   *       500:
   *         description: Internal Server Error!
   */
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new PrivateRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted private!",
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
  async findAll(req: Request, res: Response) {
    try {
      const new_private = await new PrivateRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all private data!",
        data: new_private,
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
  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_private = await new PrivateRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  private by id!",
        data: new_private,
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
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_private = new Private();

      new_private.id = id;
      new_private.id_vehicule = req.body.id_vehicule;
      new_private.name = req.body.name;

      await new PrivateRepo().update(new_private);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  private by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new PrivateController();
