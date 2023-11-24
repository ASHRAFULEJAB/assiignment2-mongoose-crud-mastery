"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// creating user here
router.post("/users", user_controller_1.UserControllers.createUser);
router.get("/users", user_controller_1.UserControllers.gettingAllUser);
router.get("/users/:userId", user_controller_1.UserControllers.gettingSingleUser);
router.put("/users/:userId", user_controller_1.UserControllers.updateSingleUser);
router.delete("/users/:userId", user_controller_1.UserControllers.deleteUser);
router.put("/users/:userId/orders", user_controller_1.UserControllers.createOrder);
router.get("/users/:userId/orders", user_controller_1.UserControllers.gettingOrders);
exports.UserRoutes = router;
