import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  //   console.log(result)
  return result;
};
// getting all user
const getAllUserFromDB = async () => {
  const result = await User.find();
  //   console.log(result)
  return result;
};

// get user by indiviual id

const getSingleUserFromDB = async (userId: string) => {
  // checking user is exists or not
  if (await User.isUserExist(userId)) {
    throw new Error("User Already Exist!");
  }

  const result = await User.findOne({ userId });
  //   console.log(result);
  return result;
};

// update user
const updateSingleUserFromDB = async (userId: string) => {
  // checking user is exists or not
  //   if (await User.isUserExist(userId)) {
  //     throw new Error("User Already Exist!");
  //   }

  const result = await User.findByIdAndUpdate( userId );
  //   console.log(result);
  return result;
};

// deleting user
const deleteUserFromDB = async (userId: string) => {
  const result = await User.updateOne({ userId }, { isDeleted: true });
  //   console.log(result);
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
  updateSingleUserFromDB,
};
