import { Request, Response } from "express";
import { Condition } from "../model/Condition";
import { ConditionRepo } from "../repository/ConditionRepo";

class ConditionController {
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
  async create(req: Request, res: Response) {
    try {
      const new_condition = new Condition();
      new_condition.value = req.body.value;
      new_condition.percent = req.body.percent;
      new_condition.before = req.body.before;
      new_condition.all_seasons = req.body.all_seasons;

      await new ConditionRepo().save(new_condition);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created condition!",
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
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new ConditionRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted condition!",
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
   * */
  async findAll(req: Request, res: Response) {
    try {
      const new_condition = await new ConditionRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all condition data!",
        data: new_condition,
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
   * /api/v1/condition/{id}:
   *   get:
   *     summary: Get an condition by ID
   *     tags: [condition]
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
      const new_condition = await new ConditionRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  condition by id!",
        data: new_condition,
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
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_condition = new Condition();

      new_condition.id = id;
      new_condition.value = req.body.value;
      new_condition.percent = req.body.percent;
      new_condition.before = req.body.before;
      new_condition.all_seasons = req.body.all_seasons;

      await new ConditionRepo().update(new_condition);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  condition by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new ConditionController();
