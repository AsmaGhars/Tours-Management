import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createLocationSchema:
 *       type: object
 *       properties:
 *         country:
 *           type: string
 *         city:
 *           type: string
 *         area:
 *           type: string
 *         type:
 *           type: string
 *         location:
 *           type: string
 *         address:
 *           type: string
 */
export const createLocationSchema = z.object({
  body: z.object({
    country: z
      .string()
      .min(1, { message: "Name must be greater than 1 characters!" }),
    city: z
      .string()
      .min(1, { message: "city must be greater than 4 characters!" }),
    area: z
      .string()
      .min(1, { message: "area must be greater than 4 characters!" }),
    type: z
      .string()
      .min(1, { message: "type must be greater than 4 characters!" }),
    location: z
      .string()
      .min(1, { message: "location must be greater than 4 characters!" }),
    address: z
      .string()
      .min(1, { message: "address must be greater than 4 characters!" }),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateLocationSchema:
 *       type: object
 *       properties:
 *         country:
 *           type: string
 *         city:
 *           type: string
 *         area:
 *           type: string
 *         type:
 *           type: string
 *         location:
 *           type: string
 *         address:
 *           type: string
 */
export const updateLocationSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      country: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
      city: z
        .string()
        .min(1, { message: "city must be greater than 4 characters!" }),
      area: z
        .string()
        .min(1, { message: "area must be greater than 4 characters!" }),
      type: z
        .string()
        .min(1, { message: "type must be greater than 4 characters!" }),
      location: z
        .string()
        .min(1, { message: "location must be greater than 4 characters!" }),
      address: z
        .string()
        .min(1, { message: "address must be greater than 4 characters!" }),
    })
    .partial(),
});
