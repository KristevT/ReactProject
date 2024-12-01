// import { NewsListData } from "../components/news/News";
// import { ServiceListData } from "../types/service"
// import { data } from "react-router";
import { URLs } from "../components/const";
import axios from "axios";

export const getNewsListAction = async function(){
    let response = await axios.get(URLs.news);
    return await response.data
}

export const getServicesListAction = async function () {
    let response = await axios.get(URLs.services);
    return response.data
}

// export const signin = async function(user) {
//     const url = API_AUTH_PATH + '/login'
//     console.log(user)
//     let response = await axios.post(url, user, {headers: {'Content-Type': 'application/json'}})
//     return response
// }

// export const getAuthTokenAction = async (username: string, password: string) => {
//     const response = await fetch('https://dummyjson.com/auth/login', {
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

// export const getUserInfoAction = async (token: string) => {
//     const response = await fetch('https://dummyjson.com/auth/me', {
//         method: 'GET',
//         headers: {'Authorization': `Bearer ${token}`}
//     });

//     if (!response.ok) {
//         return null;
//     }

//     return await response.json()
// }