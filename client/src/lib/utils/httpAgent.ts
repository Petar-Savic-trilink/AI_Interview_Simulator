import axios from "axios";

export const httpAgent = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})