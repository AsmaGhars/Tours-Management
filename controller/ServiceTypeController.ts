import { Request, Response } from "express";
import { ServiceType } from "../model/ServiceType";
import { ServiceTypeRepo } from "../repository/ServiceTypeRepo";

class ServiceTypeController {
  /**
   * @swagger
   * /api/v1/service_type:
   *   post:
   *     summary: Create a new service type
   *     tags: [ServiceType]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createServiceTypeSchema'
   *     responses:
   *       201:
   *         description: ServiceType created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_service_type = new ServiceType();
      new_service_type.name = req.body.name;

      await new ServiceTypeRepo().save(new_service_type);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created service type!",
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
   * /api/v1/service_type/{id}:
   *   delete:
   *     summary: Delete a service type by ID
   *     tags: [ServiceType]
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
      await new ServiceTypeRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted service type!",
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
   * /api/v1/service_type:
   *   get:
   *     summary: Get all service types
   *     tags: [ServiceType]
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
      const new_service_type = await new ServiceTypeRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all service type data!",
        data: new_service_type,
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
   * /api/v1/service_type/{id}:
   *   get:
   *     summary: Get a service type by ID
   *     tags: [ServiceType]
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
      const new_service_type = await new ServiceTypeRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  service type by id!",
        data: new_service_type,
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
   * /api/v1/service_type/{id}:
   *   patch:
   *     summary: Update a service type by ID
   *     tags: [ServiceType]
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
   *             $ref: '#/components/schemas/updateServiceTypeSchema'
   *     responses:
   *       200:
   *         description: ServiceType updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_service_type = new ServiceType();

      new_service_type.id = id;
      new_service_type.name = req.body.name;

      await new ServiceTypeRepo().update(new_service_type);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  service type by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new ServiceTypeController();
