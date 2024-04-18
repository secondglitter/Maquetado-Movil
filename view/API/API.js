import axios from "axios";

const API = axios.create({
    baseURL: "http://192.168.12.19:4000"
});

const API_Metods = {

    async Data_Post(endpoint, data){
        try {
            if(endpoint){
                const response = await API.post(endpoint, data);
                return response.data;
            } else {
                console.log('Error en el endpoint, no existe');
            }
        } catch (error) {
            console.error(error)
        }
    },

    async Get_Data(endpoint) {
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
    async Patch_Data(endpoint, data) {
        try {
            if (endpoint) {
                const response = await API.patch(endpoint, data);
                return response.data
            } else {
                console.log('Error en tu endpoint, no existe');
            }
        } catch (error) {
            console.error(error)
        }
    }    
}

export default API_Metods;