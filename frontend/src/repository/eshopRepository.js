import axios from "../custom-axios/axios";

const EshopService = {
    fetchManufacturers: () => {
        return axios.get("/api/manufacturers");
    }
}

export default EshopService;