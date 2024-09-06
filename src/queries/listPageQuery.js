
import axios from 'axios';

const getProductList = async () => {
    return axios.get('https://dummyjson.com/products', {"Content-Type": "application/json"});
}

export {
    getProductList
}

