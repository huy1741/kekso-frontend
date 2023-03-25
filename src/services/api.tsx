import axios from 'axios';
const dbURL = "http://localhost:5000/api/orders"
//const dbURL = "/api/orders"

const getData = async () => {
    const request = axios.get(dbURL)
    const response = await request;
    return response.data;
}
const getProductData = async (orderId: number) => {
    const request = axios.get(dbURL + "/" + orderId)
    const response = await request;
    return response.data;
}

const apiUtils = {
    getData,
    getProductData,
    dbURL
}

export default apiUtils