import express from "express";
import WebSocketController from "../Controller/WebSocketController.js";

const router = express.Router();

router.get('/View', WebSocketController.View);

export default router;