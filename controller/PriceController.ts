import { Request, Response } from "express";
import { Price } from "../model/Price";
import { PriceRepo } from "../repository/PriceRepo";

class PriceController {
  /**
   * @swagger
   * /api/v1/price:
   *   post:
   *     summary: Create a new price
   *     tags: [Price]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createPriceSchema'
   *     responses:
   *       201:
   *         description: Price created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_price = new Price();
      new_price.price = req.body.price;
      new_price.price_to_show = req.body.price_to_show;
      new_price.child_price = req.body.child_price;
      new_price.child_price_to_show = req.body.child_price_to_show;
      new_price.times = req.body.times;
      new_price.operation = req.body.operation;
      new_price.margin = req.body.margin;
      new_price.percent = req.body.percent;
      new_price.operation_b2c = req.body.operation_b2c;
      new_price.margin_b2c = req.body.margin_b2c;
      new_price.percent_b2c = req.body.percent_b2c;

      await new PriceRepo().save(new_price);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created price!",
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
   * /api/v1/price/{id}:
   *   delete:
   *     summary: Delete a price by ID
   *     tags: [Price]
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
      await new PriceRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted price!",
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
   * /api/v1/price:
   *   get:
   *     summary: Get all prices
   *     tags: [Price]
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
      const new_price = await new PriceRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all price data!",
        data: new_price,
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
   * /api/v1/price/{id}:
   *   get:
   *     summary: Get a price by ID
   *     tags: [Price]
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
      const new_price = await new PriceRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  price by id!",
        data: new_price,
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
   * /api/v1/price/{id}:
   *   patch:
   *     summary: Update a price by ID
   *     tags: [Price]
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
   *             $ref: '#/components/schemas/updatePriceSchema'
   *     responses:
   *       200:
   *         description: Price updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_price = new Price();

      new_price.id = id;
      new_price.price = req.body.price;
      new_price.price_to_show = req.body.price_to_show;
      new_price.child_price = req.body.child_price;
      new_price.child_price_to_show = req.body.child_price_to_show;
      new_price.times = req.body.times;
      new_price.operation = req.body.operation;
      new_price.margin = req.body.margin;
      new_price.percent = req.body.percent;
      new_price.operation_b2c = req.body.operation_b2c;
      new_price.margin_b2c = req.body.margin_b2c;
      new_price.percent_b2c = req.body.percent_b2c;

      await new PriceRepo().update(new_price);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  price by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new PriceController();
