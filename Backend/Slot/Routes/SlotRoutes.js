import express from 'express';
import SlotController from '../Controller/SlotController.js';

const router = express.Router();

router.get('/getAll', SlotController.GetAll)

router.get('/getSlotID/:id', SlotController.GetSlotID);

export default router;

