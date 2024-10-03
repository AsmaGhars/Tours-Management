import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createPriceSchema:
 *       type: object
 *       properties:
 *         operation:
 *           type: string
 *         percent:
 *           type: string
 *         operation_b2c:
 *           type: string
 *         percent_b2c:
 *           type: string
 */
export const createPriceSchema = z.object({
  body: z.object({
    operation: z
      .string()
      .min(1, { message: "Operation must be greater than 1 characters!" }),
    percent: z
      .string()
      .min(1, { message: "Percent must be greater than 1 characters!" }),
    operation_b2c: z
      .string()
      .min(1, { message: "Operation b2c must be greater than 1 characters!" }),
    percent_b2c: z
      .string()
      .min(1, { message: "Percent_b2c must be greater than 1 characters!" }),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updatePriceSchema:
 *       type: object
 *       properties:
 *         operation:
 *           type: string
 *         percent:
 *           type: string
 *         operation_b2c:
 *           type: string
 *         percent_b2c:
 *           type: string
 */
export const updatePriceSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      operation: z
        .string()
        .min(1, { message: "Operation must be greater than 1 characters!" }),
      percent: z
        .string()
        .min(1, { message: "Percent must be greater than 1 characters!" }),
      operation_b2c: z
        .string()
        .min(1, {
          message: "Operation b2c must be greater than 1 characters!",
        }),
      percent_b2c: z
        .string()
        .min(1, { message: "Percent_b2c must be greater than 1 characters!" }),
    })
    .partial(),
});
