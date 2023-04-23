//config express
import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import { createRoles } from "./utils/initialSetup";
import cors from "cors";
//routes
import authRoutes from "./routes/auth.routes";

const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

createRoles();
app.set("pkg", pkg);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").versions,
  });
});
app.use("/auth", authRoutes);

export default app;
