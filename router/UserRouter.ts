import BaseRoutes from "./base/BaseRouter";
import UserController from "../controller/UserController";
import validate from "../helper/validate";
import { createUserSchema, updateUserSchema } from "../schema/UserSchema";

class UserRoutes extends BaseRoutes {
  public routes(): void {
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
    this.router.post("", validate(createUserSchema), UserController.create);
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
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
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
    this.router.patch(
      "/:id",
      validate(updateUserSchema),
      UserController.update
    );
    /**
     * @swagger
     * /api/v1/user/{id}:
     *   delete:
     *     summary: Delete a user by ID
     *     tags: [ User]
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description:  User deleted successfully
     *       500:
     *         description: Internal Server Error!
     */
    this.router.delete("/:id", UserController.delete);
    /**
     * @swagger
     * /api/v1/user:
     *   get:
     *     summary: Get all  users
     *     tags: [ User]
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
    this.router.get("", UserController.findAll);
    /**
     * @swagger
     * /api/v1/user/{id}:
     *   get:
     *     summary: Get a  user by ID
     *     tags: [ User]
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
    this.router.get("/:id", UserController.findById);
  }
}

export default new UserRoutes().router;
