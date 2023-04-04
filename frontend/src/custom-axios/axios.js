import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:9080/api",
    headers : {
        'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // 'Access-Control-Allow-Credentials':true
    }
})

// const instance = axios.create({
//     baseURL : "http://localhost:9080/"
// })

export default instance;