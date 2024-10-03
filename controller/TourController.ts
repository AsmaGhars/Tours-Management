import { Request, Response } from "express";
import { Tour } from "../model/Tour";
import { TourRepo } from "../repository/TourRepo";
import { Op } from "sequelize";
import { Period } from "../model/Period";
import { Booking } from "../model/Booking";
import { Cancellation } from "../model/Cancellation";
import { User } from "../model/User";

class TourController {
  /**
   * @swagger
   * /api/v1/tour:
   *   post:
   *     summary: Create a new tour
   *     tags: [Tour]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createTourSchema'
   *     responses:
   *       201:
   *         description: Tour created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_tour = new Tour();
      new_tour.operates = req.body.operates;
      new_tour.name = req.body.name;
      new_tour.starts = req.body.starts;
      new_tour.duration = req.body.duration;
      new_tour.meeting_point = req.body.meeting_point;
      new_tour.unit = req.body.unit;
      new_tour.active = req.body.active;
      new_tour.baby = req.body.baby;
      new_tour.child = req.body.child;
      new_tour.max_pax = req.body.max_pax;
      new_tour.min_adult_age = req.body.min_adult_age;
      new_tour.min_child_age = req.body.min_child_age;
      new_tour.max_child_age = req.body.max_child_age;
      new_tour.description = req.body.description;
      new_tour.highlight = req.body.highlight;
      new_tour.what_is_included = req.body.what_is_included;
      new_tour.what_is_excluded = req.body.what_is_excluded;
      new_tour.paragraph_1 = req.body.paragraph_1;
      new_tour.paragraph_2 = req.body.paragraph_2;
      new_tour.paragraph_3 = req.body.paragraph_3;
      new_tour.paragraph_4 = req.body.paragraph_4;
      new_tour.paragraph_5 = req.body.paragraph_5;
      new_tour.id_service_type = req.body.id_service_type;
      new_tour.id_location = req.body.id_location;
      new_tour.id_period = req.body.id_period;
      new_tour.id_provider = req.body.id_provider;
      new_tour.id_image = req.body.id_image;

      await new TourRepo().save(new_tour);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created tour!",
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
   * /api/v1/tour/{id}:
   *   delete:
   *     summary: Delete a tour by ID
   *     tags: [Tour]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Tour deleted successfully
   *       500:
   *         description: Internal Server Error!
   */
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new TourRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted tour!",
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
   * /api/v1/tour:
   *   get:
   *     summary: Get all tours
   *     tags: [Tour]
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
      const new_tour = await new TourRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all tour data!",
        data: new_tour,
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
   * /api/v1/tour/{id}:
   *   get:
   *     summary: Get a tour by ID
   *     tags: [Tour]
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
      const new_tour = await new TourRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  tour by id!",
        data: new_tour,
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
   * /api/v1/tour/{id}:
   *   patch:
   *     summary: Update a tour by ID
   *     tags: [Tour]
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
   *             $ref: '#/components/schemas/updateTourSchema'
   *     responses:
   *       200:
   *         description: Tour updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_tour = new Tour();

      new_tour.id = id;
      new_tour.operates = req.body.operates;
      new_tour.name = req.body.name;
      new_tour.starts = req.body.starts;
      new_tour.duration = req.body.duration;
      new_tour.meeting_point = req.body.meeting_point;
      new_tour.unit = req.body.unit;
      new_tour.active = req.body.active;
      new_tour.baby = req.body.baby;
      new_tour.child = req.body.child;
      new_tour.max_pax = req.body.max_pax;
      new_tour.min_adult_age = req.body.min_adult_age;
      new_tour.min_child_age = req.body.min_child_age;
      new_tour.max_child_age = req.body.max_child_age;
      new_tour.description = req.body.description;
      new_tour.highlight = req.body.highlight;
      new_tour.what_is_included = req.body.what_is_included;
      new_tour.what_is_excluded = req.body.what_is_excluded;
      new_tour.paragraph_1 = req.body.paragraph_1;
      new_tour.paragraph_2 = req.body.paragraph_2;
      new_tour.paragraph_3 = req.body.paragraph_3;
      new_tour.paragraph_4 = req.body.paragraph_4;
      new_tour.paragraph_5 = req.body.paragraph_5;
      new_tour.id_service_type = req.body.id_service_type;
      new_tour.id_location = req.body.id_location;
      new_tour.id_period = req.body.id_period;
      new_tour.id_provider = req.body.id_provider;
      new_tour.id_image = req.body.id_image;

      await new TourRepo().update(new_tour);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  tour by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  /**
   * @swagger
   * /api/v1/tour/search/active:
   *   get:
   *     summary: Search tours by status
   *     tags: [Tour]
   *     parameters:
   *       - name: isActive
   *         in: query
   *         required: true
   *         schema:
   *           type: string
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

  async searchByActiveStatus(req: Request, res: Response) {
    try {
      const { isActive } = req.query;

      if (typeof isActive !== "string") {
        return res.status(400).json({
          status: "Bad Request",
          message: "Please provide the isActive query parameter as a string.",
        });
      }

      const activeStatus = isActive.toLowerCase() === "true";

      const tours = await Tour.findAll({
        where: {
          active: activeStatus,
        },
      });

      res.status(200).json({
        status: "OK",
        message: "Tours found based on active status!",
        data: tours,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error",
        message: "Failed to search tours based on active status!",
      });
    }
  }
  /**
   * @swagger
   * /api/v1/tour/search/price:
   *   get:
   *     summary: Search tours by price
   *     tags: [Tour]
   *     parameters:
   *       - name: minPrice
   *         in: query
   *         required: true
   *         schema:
   *           type: number
   *       - name: maxPrice
   *         in: query
   *         required: true
   *         schema:
   *           type: number
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             example:
   *               data: []
   *       400:
   *         description: Bad request
   *         content:
   *           application/json:
   *             example:
   *               status: "Bad Request"
   *               message: "Please provide both minPrice and maxPrice query parameters."
   *       500:
   *         description: Internal Server Error!
   */
  async searchByPrice(req: Request, res: Response) {
    try {
      const { minPrice, maxPrice } = req.query;

      if (!minPrice || !maxPrice) {
        return res.status(400).json({
          status: "Bad Request",
          message:
            "Please provide both minPrice and maxPrice query parameters.",
        });
      }

      const tours = await Tour.findAll({
        include: [
          {
            model: Period,
            where: {
              base_price: {
                [Op.gte]: minPrice,
                [Op.lte]: maxPrice,
              },
            },
          },
        ],
      });

      res.status(200).json({
        status: "OK",
        message: "Tours found based on price range!",
        data: tours,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error",
        message: "Failed to search tours based on price range!",
      });
    }
  }

  /**
   * @swagger
   * /api/v1/tour/search/name:
   *   get:
   *     summary: Search tours by name
   *     tags: [Tour]
   *     parameters:
   *       - name: name
   *         in: query
   *         required: true
   *         schema:
   *           type: string
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
  async searchByName(req: Request, res: Response) {
    try {
      const { name } = req.query;

      if (!name) {
        return res.status(400).json({
          status: "Bad Request",
          message: "Please provide the name query parameter.",
        });
      }

      const tours = await Tour.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

      res.status(200).json({
        status: "OK",
        message: "Tours found based on name!",
        data: tours,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error",
        message: "Failed to search tours based on name!",
      });
    }
  }
  /**
   * @swagger
   * /api/v1/tour/{id}/book:
   *   post:
   *     summary: Book a tour
   *     tags: [Tour]
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
   *             $ref: '#/components/schemas/createBookingSchema'
   *     responses:
   *       201:
   *         description: Tour booked successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async bookTour(req: Request, res: Response) {
    try {
      const tourId = parseInt(req.params.id);
      const userId = req.body.userId;

      const tour = await Tour.findOne({ where: { id: tourId } });
      if (!tour) {
        return res.status(404).json({
          status: "Not Found",
          message: "Tour not found!",
        });
      }

      if (tour.max_pax <= 0) {
        return res.status(400).json({
          status: "Bad Request",
          message: "No available slots for this tour!",
        });
      }

      const bookingDetails = {
        tourId: tourId,
        userId: userId,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        bookingDate: new Date(),
      };
      await Booking.create(bookingDetails);
      tour.max_pax--;
      await tour.save();

      res.status(200).json({
        status: "OK",
        message: "Tour booked successfully!",
        data: bookingDetails,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Failed to book tour!",
      });
    }
  }

  /**
   * @swagger
   * /api/v1/tour/{id}/cancel:
   *   post:
   *     summary: Cancel a tour booking by ID
   *     tags: [Tour]
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
   *             properties:
   *               userId:
   *                 type: integer
   *               reason:
   *                 type: string
   *             required:
   *               - userId
   *               - reason
   *     responses:
   *       200:
   *         description: Tour booking canceled successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async cancelTour(req: Request, res: Response) {
    try {
      const tourId = parseInt(req.params.id);
      const userId = req.body.userId;

      const tour = await Tour.findOne({ where: { id: tourId } });
      if (!tour) {
        return res.status(404).json({
          status: "Not Found",
          message: "Tour not found!",
        });
      }

      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({
          status: "Not Found",
          message: "User not found!",
        });
      }

      const booking = await Booking.findOne({
        where: { tourId: tourId, userId: userId },
      });
      if (!booking) {
        return res.status(404).json({
          status: "Not Found",
          message: "Booking not found!",
        });
      }

      const tourDate = new Date(booking.startDate);
      const cancelDate = new Date();
      const daysDifference = Math.floor(
        (tourDate.getTime() - cancelDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const refundPercentage = daysDifference * 10;
      const refundAmount = (refundPercentage / 100) * 500;

      const cancellationDetails = {
        tourId: tourId,
        userId: userId,
        reason: req.body.reason,
        refundAmount: refundAmount,
        cancellationDate: new Date(),
      };

      await Cancellation.create(cancellationDetails);

      tour.max_pax++;
      await tour.save();
      await booking.destroy();

      res.status(200).json({
        status: "OK",
        message: "Tour canceled successfully!",
        data: {
          tourId: booking.tourId,
          userId,
          refundAmount,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Failed to cancel tour!",
      });
    }
  }
}

export default new TourController();
