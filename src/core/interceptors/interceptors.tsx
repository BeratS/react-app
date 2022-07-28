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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
    baseURL:  "https://example.com"
})

const AxiosInterceptor = ({ children, dispatchAlert }: any) => {

    const navigate = useNavigate();

    useEffect(() => {

        console.log('INTERCEPTOR', instance);

        const resInterceptor = (response: any) => {
            console.log('-***Interceptor response', response);
            return response;
        }

        const errInterceptor = (error: any) => {
            console.log('-***Interceptor error', error);
            if (error.response.status === 401) {
                navigate('/login');
            }

            dispatchAlert({
                type: 'error',
                msg: 'Interceptor Error'
            });

            return Promise.reject(error);
        }


        const interceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

        return () => instance.interceptors.response.eject(interceptor);

    }, [navigate, dispatchAlert])

    return children;
}


export default instance;
export { AxiosInterceptor };
