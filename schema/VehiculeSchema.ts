import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createVehiculeSchema:
 *       type: object
 *       properties:
 *         matricule:
 *           type: string
 *         type:
 *           type: string
 */
export const createVehiculeSchema = z.object({
  body: z.object({
    matricule: z.string(),
    type: z
      .string()
      .min(1, { message: "address must be greater than 4 characters!" }),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     updateVehiculeSchema:
 *       type: object
 *       properties:
 *         matricule:
 *           type: string
 *         type:
 *           type: string
 */
export const updateVehiculeSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      matricule: z.string(),
      type: z
        .string()
        .min(1, { message: "type must be greater than 4 characters!" }),
    })
    .partial(),
});
