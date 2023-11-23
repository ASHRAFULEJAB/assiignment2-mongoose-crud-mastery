import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();
// creating user here
router.post("/users", UserControllers.createUser);
router.get("/users", UserControllers.gettingAllUser);
router.get("/users/:userId", UserControllers.gettingSingleUser);
router.delete("/users/:userId", UserControllers.deleteUser);

export const UserRoutes = router;
