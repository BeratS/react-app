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

import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const AxiosInterceptor = ({ children, dispatchAlert }: any) => {

    const navigate = useNavigate();

    useEffect(() => {

        /**
         * Request -----------------------------------
         */

        const reqInterceptor = (response: any) => {
            const token = localStorage.getItem("token");

            if (token) {
                response.headers = {
                    authorization: `Bearer ${token}`
                };
            }
            return response;
        }

        // const errReqInterceptor = (error: any) => {}

        /**
         * Response -----------------------------------
         */
        const resInterceptor = (response: any) => response

        const errInterceptor = (error: AxiosError) => {
            let msg = error?.message || 'Server Error';

            if (error?.response?.status === 401) {
                navigate('/login');
                msg = 'Server Error: User is not authenticated';
            }

            dispatchAlert({ type: 'error', msg });

            return Promise.reject(error);
        }

        /**
         * Axios use interceptors --------------------------
         */
        const interceptor = axios.interceptors.request.use(reqInterceptor, errInterceptor);
        const interceptorResp = axios.interceptors.response.use(resInterceptor, errInterceptor);

        return () => {
            axios.interceptors.request.eject(interceptor);
            axios.interceptors.response.eject(interceptorResp);
        }

    }, [navigate, dispatchAlert])

    return children;
}


// export default instance;
export { AxiosInterceptor };
