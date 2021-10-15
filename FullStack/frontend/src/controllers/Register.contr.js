import httpClient from "./httpClient";

const END_POINT = "/api/registers";

const createUser = (user) => httpClient.post(END_POINT, user);

const getEmail = (email) => httpClient.get(END_POINT + "/" + email);

export {
    createUser,
    getEmail
}