import { TSingleProduct, TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);

  return result;
};
// getting all user
const getAllUserFromDB = async () => {
  const result = await User.find();

  return result;
};

// get user by indiviual id

const getSingleUserFromDB = async (userId: number) => {
  // checking user is exists or not
  if (await User.isUserExist(userId)) {
    const result = await User.findOne({ userId });

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
  if (await User.isUserExist(userId)) {
    const result = await User.updateOne({ userId }, { isDeleted: true });

    return result;
  } else {
    throw new Error("User doesnot Exist!");
  }
};

// crreating order
const createOrders = async (userId: number, order: TSingleProduct) => {
  if (await User.isUserExist(userId)) {
    const updatedUser = await User.findOneAndUpdate(
      { userId },
      { $push: { orders: order } },
      { upsert: true }
    ).exec();

    return updatedUser;
  } else {
    throw new Error("User doesnot Exist!");
  }
};
// get order by indiviual id

const gettingOrdersFromDB = async (userId: number) => {
  // checking user is exists or not
  if (await User.isUserExist(userId)) {
    const result = await User.findOne({ userId });

    return result;
  } else {
    throw new Error("User Doesnot Exist!");
  }
};

// calculating total price
const calculatingOrderTotalPrice = async (
  userId: number
): Promise<number | []> => {
  const user = await User.findOne({ userId });
  if (await User.isUserExist(userId)) {
    if (user && user.orders && user.orders.length > 0) {
      const totalPrice = user.orders.reduce(
        (val: number, order: TSingleProduct) => {
          const price = parseFloat(order.price);
          const quantity = parseFloat(order.quantity);
          const totalPrice = price * quantity;
          const finalTotalPrice = val + totalPrice;
          return finalTotalPrice;
        },
        0
      );
      return totalPrice;
    }
  }
  return [];
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
  updateSingleUserFromDB,
  createOrders,
  gettingOrdersFromDB,
  calculatingOrderTotalPrice,
};
