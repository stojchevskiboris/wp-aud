import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:9080/",
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
})

// const instance = axios.create({
//     baseURL : "http://localhost:9080/"
// })

export default instance;