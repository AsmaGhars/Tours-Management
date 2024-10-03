import { Request, Response } from "express";
import { Provider } from "../model/Provider";
import { ProviderRepo } from "../repository/ProviderRepo";

class ProviderController {
  /**
   * @swagger
   * /api/v1/provider:
   *   post:
   *     summary: Create a new provider
   *     tags: [Provider]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createProviderSchema'
   *     responses:
   *       201:
   *         description: Provider created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_provider = new Provider();
      new_provider.name = req.body.name;
      new_provider.address = req.body.address;
      new_provider.phone = req.body.phone;
      new_provider.email = req.body.email;
      new_provider.category = req.body.category;

      await new ProviderRepo().save(new_provider);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created provider!",
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
   * /api/v1/provider/{id}:
   *   delete:
   *     summary: Delete a provider by ID
   *     tags: [Provider]
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
      await new ProviderRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted provider!",
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
   * /api/v1/provider:
   *   get:
   *     summary: Get all providers
   *     tags: [Provider]
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
      const new_provider = await new ProviderRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all provider data!",
        data: new_provider,
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
   * /api/v1/provider/{id}:
   *   get:
   *     summary: Get a provider by ID
   *     tags: [Provider]
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
      const new_provider = await new ProviderRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  provider by id!",
        data: new_provider,
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
   * /api/v1/provider/{id}:
   *   patch:
   *     summary: Update a provider by ID
   *     tags: [Provider]
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
   *             $ref: '#/components/schemas/updateProviderSchema'
   *     responses:
   *       200:
   *         description: Provider updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_provider = new Provider();

      new_provider.id = id;
      new_provider.name = req.body.name;
      new_provider.address = req.body.address;
      new_provider.phone = req.body.phone;
      new_provider.email = req.body.email;
      new_provider.category = req.body.category;

      await new ProviderRepo().update(new_provider);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  provider by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new ProviderController();
