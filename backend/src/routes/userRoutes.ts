import { Router } from "express";
import { protectRoutes } from "../middleware/auth";
import { getUsers } from "../controllers/userControllers";

const router = Router();

router.get("/", protectRoutes, getUsers);

export default router;
