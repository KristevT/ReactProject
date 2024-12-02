import { URLs } from "../components/const";
import axios from "axios";

export const getNewsListAction = async function(){
    let response = await axios.get(URLs.news);
    return await response.data
}

export const getServicesListAction = async function(id='') {
    let response = await axios.get(`${URLs.services}/${id}`);
    return response.data
}

export const getAuthToken = async (username, password) => {
    const response = await fetch(URLs.login, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 10
        })
    });

    if (!response.ok) {
        throw new Error("This user doesn't exist.")
    }

    return await response.json()
}

export const signin = async function(user) {
    const url = URLs.login
    console.log(user)
    let response = await axios.post(url, user, {headers: {'Content-Type': 'application/json'}})
    return response
}

// export const getAuthTokenAction = async (username, password) => {
//     const response = await fetch(URLs.login, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             username: username,
//             password: password,
//             expiresInMins: 10
//         })
//     });

//     return await response.json()
// }

// export const getUserInfoAction = async (token) => {
//     const response = await fetch(URLs.me, {
//         method: 'GET',
//         headers: {'Authorization': `Bearer ${token}`}
//     });

//     if (!response.ok) {
//         return null;
//     }

//     return await response.json()
// }