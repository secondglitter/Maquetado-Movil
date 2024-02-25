import axios from "axios";
import Constants from "expo-constants";

const { API_URL } = Constants.expoConfig;

const API = axios.create({
    baseURL: API_URL
})

export { API }