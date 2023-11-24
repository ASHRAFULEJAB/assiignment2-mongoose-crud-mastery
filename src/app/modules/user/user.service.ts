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

const getSingleUserFromDB = async (userId: number) => {
  // checking user is exists or not
  if (await User.isUserExist(userId)) {
    const result = await User.findOne({ userId });
    //   console.log(result);
    return result;
  } else {
    throw new Error("User Doesnot Exist!");
  }
};

// update user
const updateSingleUserFromDB = async (
  userId: number,
  userData: TUser
): Promise<TUser | null | undefined> => {
  // checking user is exists or not
  if (await User.isUserExist(userId)) {
    const updateResult = await User.updateOne({ userId }, userData, {
      runValidators: true,
    });
    if (updateResult.modifiedCount === 1) {
      const result = User.findOne({ userId });

      return result;
    } else if (updateResult.modifiedCount === 0) {
      throw new Error("User doesnot Exist!");
    }
  }
};

// deleting user
const deleteUserFromDB = async (userId: number) => {
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
