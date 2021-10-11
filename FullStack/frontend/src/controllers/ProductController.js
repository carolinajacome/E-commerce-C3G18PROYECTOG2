import httpClient from "./httpClient";

const END_POINT = "/api/products";

const getAllProducts = () => httpClient.get(END_POINT);
export {
    getAllProducts,
   
}