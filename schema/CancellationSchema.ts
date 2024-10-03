import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createCancellationSchema:
 *       type: object
 *       properties:
 *         reason:
 *           type: string
 */
export const createCancellationSchema = z.object({
  body: z.object({
    reason: z.string(),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateCancellationSchema:
 *       type: object
 *       properties:
 *         reason:
 *           type: string
 */
export const updateCancellationSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      reason: z.string(),
    })
    .partial(),
});
