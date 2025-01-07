import { Router } from "express";
import { GCController } from "../controllers/GCController.js";
import { validateGCData } from "../middlewares/validateGCData.js";

export const gcRoutes = Router();
const gcController = new GCController();

gcRoutes.get("/", gcController.list);
gcRoutes.get("/:id", gcController.findById);
gcRoutes.post("/", validateGCData, gcController.create);
gcRoutes.put("/:id", validateGCData, gcController.update);
gcRoutes.delete("/:id", gcController.delete);
