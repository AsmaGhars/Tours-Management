import { z } from "zod";

/**
 * @swagger
 * components:
 *   schemas:
 *     createImageSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
export const createImageSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateImageSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
export const updateImageSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z.string(),
    })
    .partial(),
});
