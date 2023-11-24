import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();
// creating user here
router.post("/users", UserControllers.createUser);
router.get("/users", UserControllers.gettingAllUser);
router.get("/users/:userId", UserControllers.gettingSingleUser);
router.put("/users/:userId", UserControllers.updateSingleUser);
router.delete("/users/:userId", UserControllers.deleteUser);
router.put("/users/:userId/orders", UserControllers.createOrder);
router.get("/users/:userId/orders", UserControllers.gettingOrders);

export const UserRoutes = router;
