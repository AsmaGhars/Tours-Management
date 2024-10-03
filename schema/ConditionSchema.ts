import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createConditionSchema:
 *       type: object
 *       properties:
 *         name:
 *           percent: string
 */
export const createConditionSchema = z.object({
  body: z.object({
    percent: z.string(),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateConditionSchema:
 *       type: object
 *       properties:
 *         percent:
 *           type: string
 */
export const updateConditionSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      percent: z.string(),
    })
    .partial(),
});
