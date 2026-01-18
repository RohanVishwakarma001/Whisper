import { Router } from "express";
import { authCallback, getMe } from "../controllers/authControllers";
import { protectRoutes } from "../middleware/auth";

const router = Router();

router.get("/me", protectRoutes, getMe);
router.post("/callback", authCallback);

export default router;
