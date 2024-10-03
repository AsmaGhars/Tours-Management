import { Request, Response } from "express";
import { Ordinary } from "../model/Ordinary";
import { OrdinaryRepo } from "../repository/OrdinaryRepo";

class OrdinaryController {
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
  async create(req: Request, res: Response) {
    try {
      const new_ordinary = new Ordinary();
      new_ordinary.capacity = req.body.capacity;
      new_ordinary.name = req.body.name;
      await new OrdinaryRepo().save(new_ordinary);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created ordinary!",
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
   * /api/v1/ordinary/{id}:
   *   delete:
   *     summary: Delete a ordinary by ID
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
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new OrdinaryRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted ordinary!",
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
   * */
  async findAll(req: Request, res: Response) {
    try {
      const new_ordinary = await new OrdinaryRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all ordinary data!",
        data: new_ordinary,
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
  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_ordinary = await new OrdinaryRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  ordinary by id!",
        data: new_ordinary,
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
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_ordinary = new Ordinary();

      new_ordinary.id = id;
      new_ordinary.capacity = req.body.capacity;
      new_ordinary.name = req.body.name;

      await new OrdinaryRepo().update(new_ordinary);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  ordinary by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new OrdinaryController();
