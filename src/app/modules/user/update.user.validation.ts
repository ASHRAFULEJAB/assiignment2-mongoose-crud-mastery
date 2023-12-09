import { z } from "zod";

// user validation schema
const fullnameValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const fullAddressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const singleProductValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});
// user validation schema for model
export const updateUserValidationSchema = z.object({
  userId: z.number().optional(),
  username: z.string().optional(),
  password: z.string().min(10).optional(),
  fullName: fullnameValidationSchema.optional(),
  age: z.number().optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).optional(),
  address: fullAddressValidationSchema.optional(),
  orders: z.array(singleProductValidationSchema).optional(),
  isDeleted: z.boolean().optional(),
});
