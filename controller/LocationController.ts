import { Request, Response } from "express";
import { Location } from "../model/Location";
import { LocationRepo } from "../repository/LocationRepo";

class LocationController {
  /**
   * @swagger
   * /api/v1/location:
   *   post:
   *     summary: Create a new location
   *     tags: [Location]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createLocationSchema'
   *     responses:
   *       201:
   *         description: Location created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_location = new Location();
      (new_location.country = req.body.country),
        (new_location.city = req.body.city),
        (new_location.area = req.body.area),
        (new_location.type = req.body.type),
        (new_location.location = req.body.location),
        (new_location.active = req.body.active),
        (new_location.address = req.body.address),
        await new LocationRepo().save(new_location);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created location!",
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
   * /api/v1/location/{id}:
   *   delete:
   *     summary: Delete a location by ID
   *     tags: [Location]
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
      await new LocationRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted Location!",
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
   * /api/v1/location:
   *   get:
   *     summary: Get all locations
   *     tags: [Location]
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
      const new_location = await new LocationRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all location data!",
        data: new_location,
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
   * /api/v1/location/{id}:
   *   get:
   *     summary: Get a location by ID
   *     tags: [Location]
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
      const new_location = await new LocationRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  location by id!",
        data: new_location,
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
   * /api/v1/location/{id}:
   *   patch:
   *     summary: Update a location by ID
   *     tags: [Location]
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
   *             $ref: '#/components/schemas/updateLocationSchema'
   *     responses:
   *       200:
   *         description: Location updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_location = new Location();

      new_location.id = id;
      (new_location.country = req.body.country),
        (new_location.city = req.body.city),
        (new_location.area = req.body.area),
        (new_location.type = req.body.type),
        (new_location.location = req.body.location),
        (new_location.active = req.body.active),
        (new_location.address = req.body.address),
        await new LocationRepo().update(new_location);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  location by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new LocationController();
