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
  price: z.string(),
  quantity: z.string(),
});
// user validation schema for model
export const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().min(10),
  fullName: fullnameValidationSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: fullAddressValidationSchema,
  orders: z.array(singleProductValidationSchema).optional(),
  isDeleted: z.boolean(),
});

export default userValidationSchema;
