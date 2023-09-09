import axios from "axios"
 
const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTQ1N2NjMjE4MDIwZjA3NGRiMzAzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODc4MzcyNSwiZXhwIjoxNjg5MDQyOTI1fQ.YuncgQYaUw2bDbKyaq-A81QGet0dXrlFddeKkO06wHs"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});