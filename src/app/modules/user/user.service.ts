import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
//   console.log(result)
  return result;
};

export const UserService = {
  createUserIntoDB,
};
