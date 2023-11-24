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
exports.UserControllers = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.body);
        const UserData = req.body;
        // console.log(UserData);
        const result = yield user_service_1.UserService.createUserIntoDB(UserData);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
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
});
// getting all user
const gettingAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getAllUserFromDB();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully!",
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
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
});
// get single user
const gettingSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const result = yield user_service_1.UserService.getSingleUserFromDB(userId);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "Users fetched successfully!",
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
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
});
// update single user
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const userData = req.body;
        // console.log(userId, userData);
        const result = yield user_service_1.UserService.updateSingleUserFromDB(userId, userData);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "Users updated successfully!",
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
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
});
// delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const result = yield user_service_1.UserService.deleteUserFromDB(userId);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "Users deleted successfully!",
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
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
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.body);
        const userId = parseInt(req.params.userId);
        const orderData = req.body;
        // console.log(userId, orderData);
        const result = yield user_service_1.UserService.createOrders(userId, orderData);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: null,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
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
});
// get orders
const gettingOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const result = yield user_service_1.UserService.gettingOrdersFromDB(userId);
        // console.log(result);
        const updatedResult = { orders: result === null || result === void 0 ? void 0 : result.orders };
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: updatedResult,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
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
});
exports.UserControllers = {
    createUser,
    gettingAllUser,
    gettingSingleUser,
    deleteUser,
    updateSingleUser,
    createOrder,
    gettingOrders,
};