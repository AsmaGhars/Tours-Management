import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createServiceTypeSchema:
 *       type: object
 *       properties:
 *         type:
 *           name: string
 */
export const createServiceTypeSchema = z.object({
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
 *     updateServiceTypeSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
export const updateServiceTypeSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "name must be greater than 1 characters!" }),
    })
    .partial(),
});
