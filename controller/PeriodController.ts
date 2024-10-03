import { Request, Response } from "express";
import { Period } from "../model/Period";
import { PeriodRepo } from "../repository/PeriodRepo";

class PeriodController {
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
  async create(req: Request, res: Response) {
    try {
      const new_period = new Period();
      new_period.base_price = req.body.base_price;
      new_period.type = req.body.type;
      new_period.times = req.body.times;
      new_period.every_day = req.body.every_day;
      new_period.operation = req.body.operation;
      new_period.margin = req.body.margin;
      new_period.percent = req.body.percent;
      new_period.from = req.body.from;
      new_period.to = req.body.to;
      new_period.id_condition = req.body.id_condition;
      new_period.id_price = req.body.id_price;

      await new PeriodRepo().save(new_period);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created period!",
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
   *         description: Driver deleted successfully
   *       500:
   *         description: Internal Server Error!
   */
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new PeriodRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted period!",
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
  async findAll(req: Request, res: Response) {
    try {
      const new_period = await new PeriodRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all period data!",
        data: new_period,
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
  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_period = await new PeriodRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  period by id!",
        data: new_period,
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
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_period = new Period();

      new_period.id = id;
      new_period.base_price = req.body.base_price;
      new_period.type = req.body.type;
      new_period.times = req.body.times;
      new_period.every_day = req.body.every_day;
      new_period.operation = req.body.operation;
      new_period.margin = req.body.margin;
      new_period.percent = req.body.percent;
      new_period.from = req.body.from;
      new_period.to = req.body.to;
      new_period.id_condition = req.body.id_condition;
      new_period.id_price = req.body.id_price;

      await new PeriodRepo().update(new_period);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  period by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new PeriodController();
