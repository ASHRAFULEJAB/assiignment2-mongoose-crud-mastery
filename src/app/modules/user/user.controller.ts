import { Request, Response } from "express";
import { UserService } from "./user.service";
import userValidationSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const UserData = req.body;

    // creating zod validation
    const zodParseData = userValidationSchema.parse(UserData);

    const result = await UserService.createUserIntoDB(zodParseData);

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

    const zodParseData = userValidationSchema.parse(userData);
    const result = await UserService.updateSingleUserFromDB(
      userId,
      zodParseData
    );

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
    console.log(result);

    res.status(200).json({
      success: true,
      message: "Users deleted successfully!",
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

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const orderData = req.body;

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

// calculate total price

const calculateTotalPrice = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserService.calculatingOrderTotalPrice(userId);

    if (typeof result === "number") {
      res.status(200).json({
        success: true,
        message: "Total price calculated successfully!",
        data: {
          totalPrice: result.toFixed(2),
        },
      });
    } else {
      throw new Error("No order for Total price");
    }

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
  calculateTotalPrice,
};
