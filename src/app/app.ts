import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.router";
// import { StudentRoutes } from "./modules/student/student.route";
const app: Application = express();
// const port = 3000;
app.use(express.json());
app.use(cors());
// applicagtion routes here

// application routes
app.use("/api", UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", getAController);
export default app;
