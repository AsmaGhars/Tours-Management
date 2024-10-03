import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     createProviderSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         email:
 *           type: string
 *         category:
 *           type: string
 */
export const createProviderSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 characters!" }),
    address: z
      .string()
      .min(4, { message: "address must be greater than 4 characters!" }),
    email: z
      .string()
      .min(6, { message: "email must be greater than 6 characters!" }),
    category: z
      .string()
      .min(4, { message: "category must be greater than 4 characters!" }),
  }),
});
/**
 * @swagger
 * components:
 *   schemas:
 *     createProviderSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         email:
 *           type: string
 *         category:
 *           type: string
 */
export const updateProviderSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
      address: z
        .string()
        .min(4, { message: "address must be greater than 4 characters!" }),
      email: z
        .string()
        .min(6, { message: "email must be greater than 6 characters!" }),
      category: z
        .string()
        .min(4, { message: "category must be greater than 4 characters!" }),
    })
    .partial(),
});
