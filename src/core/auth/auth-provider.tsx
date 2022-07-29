import { createContext, useContext } from "react";
import { useProvideAuth } from "./auth-fake";

const authContext = createContext<any>(null);

const AuthProvider = ({ children }: {
    children: React.ReactElement
}) => {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={ auth } >
        { children }
        </authContext.Provider>
    );
}

function useAuth() {
    return useContext(authContext);
}

// export default instance;
export { AuthProvider, useAuth, authContext };

