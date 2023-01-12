import express, { Router } from "express";
import {
  get_portfolioProjectsController,
  get_portfolioProjectByIDController,
  get_allTechController,
} from "../controllers/portfolio.controller";

const router: Router = express.Router();

router.get("/", get_portfolioProjectsController);
router.get("/id/:id", get_portfolioProjectByIDController);
router.get("/tech", get_allTechController);

export default router;
