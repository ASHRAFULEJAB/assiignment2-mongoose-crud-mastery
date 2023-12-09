"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserValidationSchema = void 0;
const zod_1 = require("zod");
// user validation schema
const fullnameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
const fullAddressValidationSchema = zod_1.z.object({
    street: zod_1.z.string(),
    city: zod_1.z.string(),
    country: zod_1.z.string(),
});
const singleProductValidationSchema = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
// user validation schema for model
exports.updateUserValidationSchema = zod_1.z.object({
    userId: zod_1.z.number().optional(),
    username: zod_1.z.string().optional(),
    password: zod_1.z.string().min(10).optional(),
    fullName: fullnameValidationSchema.optional(),
    age: zod_1.z.number().optional(),
    email: zod_1.z.string().email().optional(),
    isActive: zod_1.z.boolean().optional(),
    hobbies: zod_1.z.array(zod_1.z.string()).optional(),
    address: fullAddressValidationSchema.optional(),
    orders: zod_1.z.array(singleProductValidationSchema).optional(),
    isDeleted: zod_1.z.boolean().optional(),
});
