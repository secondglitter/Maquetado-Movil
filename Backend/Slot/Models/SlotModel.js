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


export default Slot;