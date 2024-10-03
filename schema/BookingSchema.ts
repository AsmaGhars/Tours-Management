import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createBookingSchema:
 *       type: object
 *       properties:
 *         startDate:
 *           type: string
 *         endDate:
 *           type: string
 */
export const createBookingSchema = z.object({
  body: z.object({
    startDate: z.string(),
    endDate: z.string(),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateBookingSchema:
 *       type: object
 *       properties:
 *         startDate:
 *           type: string
 *         endDate:
 *           type: string
 */
export const updateBookingSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      startDate: z.string(),
      endDate: z.string(),
    })
    .partial(),
});
