import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  //   console.log(result)
  return result;
};
// getting all user
const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  //   console.log(result)
  return result;
};

// get user by indiviual id

const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });
  //   console.log(result);
  return result;
};

// deleting user
const deleteUserFromDB = async (userId: string) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  //   console.log(result);
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
};
