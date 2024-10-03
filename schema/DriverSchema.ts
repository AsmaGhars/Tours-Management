import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createDriverSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *       required:
 *         - name
 */
export const createDriverSchema = z.object({
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
 *     updateDriverSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *       required:
 *         - name
 */
export const updateDriverSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
    })
    .partial(),
});
