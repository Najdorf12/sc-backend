import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getNoticias,
  getNoticia,
  createNoticia,
  deleteNoticia,
  updateNoticia,
} from "../controllers/noticias.controller.js";
import { noticiasSchema } from "../schemas/noticias.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/noticias", getNoticias);
router.get("/noticias/:id", getNoticia);
router.post(
  "/noticias",
  authRequired,
  validateSchema(noticiasSchema),
  createNoticia
);
router.delete("/noticias/:id", authRequired, deleteNoticia);
router.put(
  "/noticias/:id",
  authRequired,
  validateSchema(noticiasSchema),
  updateNoticia
);

export default router;
