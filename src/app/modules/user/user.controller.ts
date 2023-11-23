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
};
