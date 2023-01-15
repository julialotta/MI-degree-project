import express, { Router } from "express";
import {
  get_highscore,
  post_newHighscore,
} from "../controllers/game.controller";

const router: Router = express.Router();

router.get("/", get_highscore);
router.post("/newscore", post_newHighscore);

export default router;
