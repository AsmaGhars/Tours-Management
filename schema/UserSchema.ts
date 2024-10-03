import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createUserSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 */
export const createUserSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateUserSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *        password:
 *           type: string
 */
export const updateUserSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    })
    .partial(),
});
