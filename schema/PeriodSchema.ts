import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createLocationSchema:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *         operation:
 *           type: string
 *         percent:
 *           type: string
 *         from:
 *           type: string
 *         to:
 *           type: string
 */
export const createPeriodSchema = z.object({
  body: z.object({
    type: z.string(),
    operation: z.string(),
    percent: z.string(),
    from: z.string(),
    to: z.string(),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateLocationSchema:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *         operation:
 *           type: string
 *         percent:
 *           type: string
 *         from:
 *           type: string
 *         to:
 *           type: string
 */
export const updatePeriodSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      type: z.string(),

      operation: z.string(),
      percent: z.string(),
      from: z.string(),
      to: z.string(),
    })
    .partial(),
});
