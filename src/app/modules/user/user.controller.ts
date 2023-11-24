import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const UserData = req.body;
    // console.log(UserData);
    const result = await UserService.createUserIntoDB(UserData);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
        message: error.message,
      },
    });
  }
};

// getting all user

const gettingAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
        message: error.message,
      },
    });
  }
};

// get single user
const gettingSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserService.getSingleUserFromDB(userId);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
        message: error.message,
      },
    });
  }
};

// update single user
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const userData = req.body;
    // console.log(userId, userData);
    const result = await UserService.updateSingleUserFromDB(userId, userData);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: "Users updated successfully!",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
        message: error.message,
      },
    });
  }
};

// delete user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserService.deleteUserFromDB(userId);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: "Users deleted successfully!",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
        message: error.message,
      },
    });
  }
};
const createOrder = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const userId = parseInt(req.params.userId);
    const orderData = req.body;
    // console.log(userId, orderData);
    const result = await UserService.createOrders(userId, orderData);
    console.log(result);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
        message: error.message,
      },
    });
  }
};

// get orders
const gettingOrders = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserService.gettingOrdersFromDB(userId);
    // console.log(result);
    const updatedResult = { orders: result?.orders };
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: updatedResult,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
        message: error.message,
      },
    });
  }
};

export const UserControllers = {
  createUser,
  gettingAllUser,
  gettingSingleUser,
  deleteUser,
  updateSingleUser,
  createOrder,
  gettingOrders,
};
