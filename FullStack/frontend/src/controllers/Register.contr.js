import httpClient from "./httpClient";

const END_POINT = "/api/registers";

const createUser = (user) => httpClient.post(END_POINT, user);

export {
    createUser
}