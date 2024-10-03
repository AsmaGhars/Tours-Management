import { Request, Response } from "express";
import { Driver } from "../model/Driver";
import { DriverRepo } from "../repository/DriverRepo";

class DriverController {
  /**
   * @swagger
   * /api/v1/driver:
   *   post:
   *     summary: Create a new driver
   *     tags: [Driver]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createDriverSchema'
   *     responses:
   *       201:
   *         description: Driver created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_driver = new Driver();
      new_driver.name = req.body.name;

      await new DriverRepo().save(new_driver);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created driver!",
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
   * /api/v1/driver/{id}:
   *   delete:
   *     summary: Delete a driver by ID
   *     tags: [Driver]
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
      await new DriverRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted driver!",
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
   * /api/v1/driver:
   *   get:
   *     summary: Get all drivers
   *     tags: [Driver]
   *     responses:
   *       200:
   *         description: Drivers retrieved successfully
   *       500:
   *         description: Internal Server Error!
   */
  async findAll(req: Request, res: Response) {
    try {
      const new_driver = await new DriverRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all driver data!",
        data: new_driver,
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
   * /api/v1/driver/{id}:
   *   get:
   *     summary: Get a driver by ID
   *     tags: [Driver]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Driver retrieved successfully
   *       404:
   *         description: Driver not found
   *       500:
   *         description: Internal Server Error!
   */
  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_driver = await new DriverRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  driver by id!",
        data: new_driver,
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
   * /api/v1/driver/{id}:
   *   patch:
   *     summary: Update a driver by ID
   *     tags: [Driver]
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
   *             $ref: '#/components/schemas/updateDriverSchema'
   *     responses:
   *       200:
   *         description: Driver updated successfully
   *       500:
   *         description: Internal Server Error!
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_driver = new Driver();

      new_driver.id = id;
      new_driver.name = req.body.name;

      await new DriverRepo().update(new_driver);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  driver by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new DriverController();
