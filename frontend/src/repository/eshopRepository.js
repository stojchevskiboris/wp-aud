import axios from "../custom-axios/axios";

const EshopService = {
    fetchManufacturers: () => {
        return axios.get("/manufacturers");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchProducts: () => {
        return axios.get("/products");
    }
}

export default EshopService;