import axios from "axios";

const API = axios.create({
    url: "http://localhost:3000",
});

const API_Metods = {
    async GetData(endpoint) {
        try {
            if(endpoint) {
                const response = await API.get(endpoint);
                return response.data
            } else {
                console.log('Error en tu endpoint, no existe');
            }
        } catch (error) {
            console.error(error);
        }
    },

    async Update_Data(endpoint) {
        try {
            if(endpoint) {
                const response = await API.post(endpoint, data);
                return response.data
            } else {
                console.log('Error en tu endpoint, no existe');
            }
        } catch (error) {
            console.error(error)
        }
    },

    async Delete_Data() {
        try {
            if(endpoint){
                const response = await API.delete(endpoint, data);
                return response.data
            } else {
                console.log('Error en tu endpoint, no existe');
            }
        } catch (error) {
            console.error(error);   
        }
    },
    
}