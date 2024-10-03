import { Request, Response } from "express";
import { User } from "../model/User";
import { UserRepo } from "../repository/UserRepo";

class UserController {
  /**
   * @swagger
   * /api/v1/user:
   *   post:
   *     summary: Create a new user
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/createUserSchema'
   *     responses:
   *       201:
   *         description: User created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async create(req: Request, res: Response) {
    try {
      const new_user = new User();
      new_user.name = req.body.name;
      new_user.email = req.body.email;
      new_user.password = req.body.password;

      await new UserRepo().save(new_user);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created user!",
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
   * /api/v1/user/{id}:
   *   delete:
   *     summary: Delete a user by ID
   *     tags: [User]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: User deleted successfully
   *       500:
   *         description: Internal Server Error!
   */
  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new UserRepo().delete(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully deleted user!",
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
   * /api/v1/user:
   *   get:
   *     summary: Get all users
   *     tags: [User]
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
      const new_user = await new UserRepo().retrieveAll();

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched all user data!",
        data: new_user,
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
   * /api/v1/user/{id}:
   *   get:
   *     summary: Get an user by ID
   *     tags: [User]
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
      const new_user = await new UserRepo().retrieveById(id);

      res.status(200).json({
        status: "ok!",
        message: "Successfully fetched  user by id!",
        data: new_user,
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
   * /api/v1/user/{id}:
   *   patch:
   *     summary: Update a user by ID
   *     tags: [User]
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/updateUserSchema'
   *     responses:
   *       200:
   *         description: User updated successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Internal server error
   */
  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_user = new User();

      new_user.id = id;
      new_user.name = req.body.name;
      new_user.email = req.body.email;
      new_user.password = req.body.password;

      await new UserRepo().update(new_user);

      res.status(200).json({
        status: "ok!",
        message: "Successfully updated  user by id!",
      });
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new UserController();
