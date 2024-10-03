import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createPrivateSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
export const createPrivateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "name must be greater than 1 characters!" }),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updatePrivateSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */

export const updatePrivateSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "name must be greater than 1 characters!" }),
    })
    .partial(),
});
