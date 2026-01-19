import { Router } from "express";
import { protectRoutes } from "../middleware/auth";
import { getMessages } from "../controllers/messageControllers";

const router = Router();

router.get("/chat/:chatId", protectRoutes, getMessages);

export default router;
