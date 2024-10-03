import { Request, Response } from "express";
import { Vehicule } from "../model/Vehicule";
import { VehiculeRepo } from "../repository/VehiculeRepo";

class VehiculeController {
  /**
   * @swagger
   * /api/v1/vehicule:
   *   post:
   *     summary: Create a new vehicule
   *     tags: [Vehicule]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createVehiculeSchema'
   *     responses:
   *       201:
   *         description: Vehicule created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_vehicule = new Vehicule();
      new_vehicule.matricule = req.body.matricule;
      new_vehicule.type = req.body.type;
      new_vehicule.capacity = req.body.capacity;
      new_vehicule.id_driver = req.body.id_driver;

      await new VehiculeRepo().save(new_vehicule);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created vehicule!",
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
   * /api/v1/vehicule/{id}:
   *   delete:
   *     summary: Delete a vehicule by ID
   *     tags: [Vehicule]
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
      await new VehiculeRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted vehicule!",
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
   * /api/v1/vehicule:
   *   get:
   *     summary: Get all vehicules
   *     tags: [Vehicule]
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
      const new_vehicule = await new VehiculeRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all vehicule data!",
        data: new_vehicule,
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
   * /api/v1/vehicule/{id}:
   *   get:
   *     summary: Get a vehicule by ID
   *     tags: [Vehicule]
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
      const new_vehicule = await new VehiculeRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  vehicule by id!",
        data: new_vehicule,
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
   * /api/v1/vehicule/{id}:
   *   patch:
   *     summary: Update a vehicule by ID
   *     tags: [Vehicule]
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
   *             $ref: '#/components/schemas/updateVehiculeSchema'
   *     responses:
   *       200:
   *         description: Vehicule updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_vehicule = new Vehicule();

      new_vehicule.id = id;
      new_vehicule.matricule = req.body.matricule;
      new_vehicule.type = req.body.type;
      new_vehicule.capacity = req.body.capacity;
      new_vehicule.id_driver = req.body.id_driver;

      await new VehiculeRepo().update(new_vehicule);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  vehicule by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new VehiculeController();
