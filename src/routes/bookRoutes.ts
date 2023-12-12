import express, { Router } from "express";
import * as bookController from "../controllers/bookController";

const router: Router = express.Router();

router.get("/", bookController.getAllBooks);

export default router;
