import db from '../../Connection/db.js';

const WebSocket = {};

WebSocket.View = () => {

    return new Promise ((resolve, reject ) => {
        const query = "SELECT * FROM slot_park"
        db.query(query, (error, results)=> {
            if(error) {
                reject('Error en la query')
            } else {
                resolve(results);
            }
        })
    })

}

export default WebSocket;