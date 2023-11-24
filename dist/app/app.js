"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./modules/user/user.router");
// import { StudentRoutes } from "./modules/student/student.route";
const app = (0, express_1.default)();
// const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// applicagtion routes here
// application routes
app.use("/api", user_router_1.UserRoutes);
const getRootResponse = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Crud Mastery is running successfully",
    });
};
app.get("/", getRootResponse);
exports.default = app;
