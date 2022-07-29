import { createContext, useContext, useState } from "react";

const fakeAuth = {
    isAuthenticated: false,
    signin(cb: any) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb: any) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext<any>(null);

function ProvideAuth({ children }: any) {
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


function useProvideAuth() {
    const [user, setUser] = useState<string | null>(null);

    const signin = (cb: any) => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = (cb: any) => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}

export default {
    ProvideAuth
}

// function AuthButton() {
//     let history = useHistory();
//     let auth = useAuth();

//     return auth.user ? (
//         <p>
//         Welcome!{ " " }
//     <button
//           onClick={
//         () => {
//             auth.signout(() => history.push("/"));
//         }
//     }
//         >
//         Sign out
//             < /button>
//             < /p>
//     ) : (
//         <p>You are not logged in.< /p>
//     );
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//     let auth = useAuth();
//     return (
//         <Route
//         { ...rest }
//         render = {({ location }) =>
//     auth.user ? (
//         children
//     ) : (
//         <Redirect
//               to= {{
//         pathname: "/login",
//             state: { from: location }
//     }
// }
// />
//           )
//         }
// />
//     );
//   }

// function PublicPage() {
//     return <h3>Public < /h3>;
// }

// function ProtectedPage() {
//     return <h3>Protected < /h3>;
// }

// function LoginPage() {
//     let history = useHistory();
//     let location = useLocation();
//     let auth = useAuth();

//     let { from } = location.state || { from: { pathname: "/" } };
//     let login = () => {
//         auth.signin(() => {
//             history.replace(from);
//         });
//     };

//     return (
//         <div>
//         <p>You must log in to view the page at { from.pathname } </p>
//             < button onClick = { login } > Log in </button>
//                 < /div>
//     );
// }