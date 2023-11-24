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
    //   console.log(result)
    return result;
});
// getting all user
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    //   console.log(result)
    return result;
});
// get user by indiviual id
const getSingleUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // checking user is exists or not
    if (yield user_model_1.User.isUserExist(userId)) {
        const result = yield user_model_1.User.findOne({ userId });
        //   console.log(result);
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
    const result = yield user_model_1.User.updateOne({ userId }, { isDeleted: true });
    //   console.log(result);
    return result;
});
// crreating order
const createOrders = (userId, order) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_model_1.User.findOneAndUpdate({ userId }, { $push: { orders: order } }, { upsert: true } // Return the updated document
    ).exec();
    ;
    // if (!updatedUser) {
    //   throw new Error("User not found");
    // }
    // console.log(updatedUser);
    return updatedUser;
    // return updatedOrders;
    // return result;
});
// get order by indiviual id
const gettingOrdersFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // checking user is exists or not
    if (yield user_model_1.User.isUserExist(userId)) {
        const result = yield user_model_1.User.findOne({ userId });
        //   console.log(result);
        return result;
    }
    else {
        throw new Error("User Doesnot Exist!");
    }
});
exports.UserService = {
    createUserIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    deleteUserFromDB,
    updateSingleUserFromDB,
    createOrders,
    gettingOrdersFromDB,
};
