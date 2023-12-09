"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const createUserIntoDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(user);
    return result;
});
// getting all user
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
// get user by indiviual id
const getSingleUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // checking user is exists or not
    if (yield user_model_1.User.isUserExist(userId)) {
        const result = yield user_model_1.User.findOne({ userId });
        return result;
    }
    else {
        throw new Error("User Doesnot Exist!");
    }
});
// update user
const updateSingleUserFromDB = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    // checking user is exists or not
    if (yield user_model_1.User.isUserExist(userId)) {
        const updateResult = yield user_model_1.User.updateOne({ userId }, userData, {
            runValidators: true,
        });
        if (updateResult.modifiedCount === 1) {
            const result = user_model_1.User.findOne({ userId });
            return result;
        }
        else if (updateResult.modifiedCount === 0) {
            throw new Error("User doesnot Exist!");
        }
    }
});
// deleting user
const deleteUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExist(userId)) {
        const result = yield user_model_1.User.updateOne({ userId }, { isDeleted: true });
        return result;
    }
    else {
        throw new Error("User doesnot Exist!");
    }
});
// crreating order
const createOrders = (userId, order) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExist(userId)) {
        const updatedUser = yield user_model_1.User.findOneAndUpdate({ userId }, { $push: { orders: order } }, { upsert: true }).exec();
        return updatedUser;
    }
    else {
        throw new Error("User doesnot Exist!");
    }
});
// get order by indiviual id
const gettingOrdersFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // checking user is exists or not
    if (yield user_model_1.User.isUserExist(userId)) {
        const result = yield user_model_1.User.findOne({ userId });
        return result;
    }
    else {
        throw new Error("User Doesnot Exist!");
    }
});
// calculating total price
const calculatingOrderTotalPrice = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ userId });
    if (yield user_model_1.User.isUserExist(userId)) {
        if (user && user.orders && user.orders.length > 0) {
            const totalPrice = user.orders.reduce((val, order) => {
                const price = order.price;
                const quantity = order.quantity;
                const totalPrice = price * quantity;
                const finalTotalPrice = val + totalPrice;
                return finalTotalPrice;
            }, 0);
            return totalPrice;
        }
        else if (user && user.orders && user.orders.length <= 0) {
            const totalPrice = 0;
            return totalPrice;
        }
    }
    return [];
});
exports.UserService = {
    createUserIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    deleteUserFromDB,
    updateSingleUserFromDB,
    createOrders,
    gettingOrdersFromDB,
    calculatingOrderTotalPrice,
};
