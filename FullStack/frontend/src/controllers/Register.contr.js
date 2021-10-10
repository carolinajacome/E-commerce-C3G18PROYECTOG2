import httpClient from "./httpClient";

const END_POINT = "/api/register";

const createUser = (user) => httpClient.post(END_POINT, user);

export {
    createUser
}