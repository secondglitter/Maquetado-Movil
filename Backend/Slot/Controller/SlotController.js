import Slot from "../Models/SlotModel.js";

const GetAll = async (req, res) => {
    try {
        const slots = await Slot.GetAll();
        res.json(slots);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

const GetSlotID = async (req, res) => {
    try {
        const slots = await Slot.GetSlotID(req);
        res.json(slots);
    } catch (error) {
        res.status(500).send('Error interno del servidor')
    }
}

export default {GetAll, GetSlotID};