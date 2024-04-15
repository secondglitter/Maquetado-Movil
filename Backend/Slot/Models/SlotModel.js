import db from '../../Connection/db.js';

const Slot = {};

Slot.GetAll = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT slot_park.*, slots.slot_name FROM slot_park JOIN slots ON slot_park.slot_id = slots.id"; 
        db.query(query, (error, results) => {
            if (error) {
                console.log('Error al obtener ranuras', error);
                reject('Error al obtener ranuras');
            } else {
                resolve(results);
            }
        });
    });
}

Slot.GetSlotID = async(id) => {
    return new Promise((resolve, reject) => {
        const slotId = id.body.id;
        const query = "SELECT s.slot_name, TIMESTAMPDIFF(SECOND, sp.start_time, sp.end_time) AS time_elapsed FROM slot_park sp INNER JOIN slots s ON sp.slot_id = s.id WHERE sp.user_id = ?";
        db.query(query, [slotId], (err, results) => {
            if (err) {
                console.error("Error al calcular el tiempo transcurrido y obtener el nombre del slot:", err);
                reject({ error: "Error al calcular el tiempo transcurrido y obtener el nombre del slot" });
            } else if (results.length === 0) {
                reject({ error: "Slot no encontrado" });
            } else {
                const { slot_name, time_elapsed } = results[0];
                resolve({ slot_name, time_elapsed });
            }
        });
    });
}

export default Slot;