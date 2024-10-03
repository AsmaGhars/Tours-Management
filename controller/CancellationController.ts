import { Request, Response } from "express";
import { Cancellation } from "../model/Cancellation";
import { CancellationRepo } from "../repository/CancellationRepo";

class CancellationController {
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
  async create(req: Request, res: Response) {
    try {
      const new_cancellation = new Cancellation();
      new_cancellation.userId = req.body.userId;
      new_cancellation.tourId = req.body.tourId;
      new_cancellation.reason = req.body.reason;
      new_cancellation.refundAmount = req.body.refundAmount;

      await new CancellationRepo().save(new_cancellation);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created cancellation!",
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
   * /api/v1/cancellation/{id}:
   *   delete:
   *     summary: Delete a cancellation by ID
   *     tags: [Cancellation]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Cancellation deleted successfully
   *       500:
   *         description: Internal Server Error!
   */
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new CancellationRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted cancellation!",
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
   * /api/v1/cancellation:
   *   get:
   *     summary: Get all cancellations
   *     tags: [Cancellation]
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
      const new_cancellation = await new CancellationRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all cancellation data!",
        data: new_cancellation,
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
   * /api/v1/cancellation/{id}:
   *   get:
   *     summary: Get an cancellation by ID
   *     tags: [Cancellation]
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
      const new_cancellation = await new CancellationRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  cancellation by id!",
        data: new_cancellation,
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
   * /api/v1/cancellation/{id}:
   *   patch:
   *     summary: Update a cancellation by ID
   *     tags: [Cancellation]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
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
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_cancellation = new Cancellation();

      new_cancellation.id = id;
      new_cancellation.userId = req.body.userId;
      new_cancellation.tourId = req.body.tourId;
      new_cancellation.reason = req.body.reason;
      new_cancellation.refundAmount = req.body.refundAmount;

      await new CancellationRepo().update(new_cancellation);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  cancellation by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new CancellationController();
