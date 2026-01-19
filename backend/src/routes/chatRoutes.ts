import { Router } from "express";
import { getChats, getOrCreateChat } from "../controllers/chatControllers";

const router = Router();

router.get("/", getChats);
router.post("/with/:participantId", getOrCreateChat);

export default router;
