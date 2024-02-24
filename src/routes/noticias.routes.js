import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getNoticias,
  getNoticia,
  createNoticia,
  deleteNoticia,
  updateNoticia,
} from "../controllers/noticias.controller.js";

const router = Router();

router.get("/noticias", getNoticias);
router.get("/noticias/:id", getNoticia);
router.post("/noticias", authRequired, createNoticia);
router.delete("/noticias/:id", authRequired, deleteNoticia);
router.put("/noticias/:id", authRequired, updateNoticia);

export default router;
