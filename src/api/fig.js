import axios from "axios";

const insten = axios.create({
    baseURL: "http://localhost:3000",
});
export default insten;