import { Router } from "express";
import { gcRoutes } from "./gc.routes.js";

export const routes = Router();

routes.use("/gcs", gcRoutes);
