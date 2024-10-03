import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createOrdinarySchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
export const createOrdinarySchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 characters!" }),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateOrdinarySchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
export const updateOrdinarySchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
    })
    .partial(),
});
