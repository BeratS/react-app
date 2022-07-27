// export function jwtInterceptor() {
//     axios.interceptors.request.use(request => {
//         // add auth header with jwt if account is logged in and request is to the api url
//         const account = accountService.accountValue;
//         const isLoggedIn = account?.token;
//         const isApiUrl = request.url.startsWith(process.env.REACT_APP_API_URL);

//         if (isLoggedIn && isApiUrl) {
//             request.headers.common.Authorization = `Bearer ${account.token}`;
//         }

//         return request;
//     });
// }

import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const instance = axios.create({
    baseURL:  "https://example.com"
})

const AxiosInterceptor = ({ children }: any) => {

    const navigate = useNavigate();

    useEffect(() => {

        const resInterceptor = (response: any) => {
            return response;
        }

        const errInterceptor = (error: any) => {

            if (error.response.status === 401) {
                navigate('/login');
            }

            return Promise.reject(error);
        }


        const interceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

        return () => instance.interceptors.response.eject(interceptor);

    }, [navigate])

    return children;
}


export default instance;
export { AxiosInterceptor }