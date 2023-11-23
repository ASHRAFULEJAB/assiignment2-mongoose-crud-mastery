import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();
// creating user here
router.post("/users", UserControllers.createUser);

export const UserRoutes = router;
