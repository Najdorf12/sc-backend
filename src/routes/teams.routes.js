//import { authRequired } from "../middlewares/validateToken.js";
import { Router } from "express";
import {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/teams.controller.js";

const router = Router();

router.get("/teams", getTeams);
router.post("/teams", createTeam);
router.get("/teams/:id", getTeam);
router.delete("/teams/:id", deleteTeam);
router.put("/teams/:id", updateTeam);

export default router;
