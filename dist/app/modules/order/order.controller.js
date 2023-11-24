"use strict";
// import { Request, Response } from "express";
// import { OrderServices } from "./order.service";
// const createOrder = async (req: Request, res: Response) => {
//   try {
//     // console.log(req.body);
//     const orderData = req.body;
//     // console.log(UserData);
//     const result = await OrderServices.createOrders(orderData);
//     res.status(200).json({
//       success: true,
//       message: "User created successfully!",
//       data: result,
//     });
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: "User not found",
//       error: {
//         code: 404,
//         description: "User not found!",
//         message: error.message,
//       },
//     });
//   }
// };
// export const OrderController = {
//   createOrder,
// };
