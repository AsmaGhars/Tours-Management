import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createTourSchema:
 *       type: object
 *       properties:
 *         operates:
 *           type: string
 *         name:
 *           type: string
 *         starts:
 *           type: string
 *         unit:
 *           type: string
 *         meeting_point:
 *           type: string
 *         description:
 *           type: string
 *         highlight:
 *           type: string
 *         what_is_included:
 *           type : string
 *         what_is_excluded:
 *           type : string
 *          paragraph_1:
 *           type: string
 *         paragraph_2:
 *           type: string
 *         paragraph_3:
 *           type: string
 *          paragraph_4:
 *           type: string
 *         paragraph_5:
 *           type: string
 */
export const createTourSchema = z.object({
  body: z.object({
    operates: z
      .string()
      .min(1, { message: "Operates must be greater than 1 characters!" }),
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 characters!" }),
    starts: z.string(),
    unit: z.string(),
    meeting_point: z
      .string()
      .min(6, { message: "meeting point must be greater than 6 characters!" }),
    description: z.string(),
    highlight: z.string(),
    what_is_included: z.string(),

    what_is_excluded: z.string(),
    paragraph_1: z.string(),
    paragraph_2: z.string(),
    paragraph_3: z.string(),
    paragraph_4: z.string(),
    paragraph_5: z.string(),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateTourSchema:
 *       type: object
 *       properties:
 *         operates:
 *           type: string
 *         name:
 *           type: string
 *         starts:
 *           type: string
 *         unit:
 *           type: string
 *         meeting_point:
 *           type: string
 *         description:
 *           type: string
 *         highlight:
 *           type: string
 *         what_is_included:
 *           type : string
 *         what_is_excluded:
 *           type : string
 *          paragraph_1:
 *           type: string
 *         paragraph_2:
 *           type: string
 *         paragraph_3:
 *           type: string
 *          paragraph_4:
 *           type: string
 *         paragraph_5:
 *           type: string
 */
export const updateTourSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      operates: z
        .string()
        .min(1, { message: "Operates must be greater than 1 characters!" }),
      name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
      starts: z.string(),
      unit: z.string(),
      meeting_point: z.string().min(6, {
        message: "meeting point must be greater than 6 characters!",
      }),
      description: z.string(),
      highlight: z.string(),
      what_is_included: z.string(),

      what_is_excluded: z.string(),
      paragraph_1: z.string(),
      paragraph_2: z.string(),
      paragraph_3: z.string(),
      paragraph_4: z.string(),
      paragraph_5: z.string(),
    })
    .partial(),
});

export const searchTourSchema = z.object({
  query: z.object({
    minPrice: z.number().int().min(0),
    maxPrice: z.number().int().min(0),
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 character!" }),
    isActive: z.boolean(),
  }),
});
