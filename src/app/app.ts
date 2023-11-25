import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.router";

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use("/api", UserRoutes);

const getRootResponse = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Crud Mastery is running successfully",
  });
};

app.get("/", getRootResponse);
export default app;
