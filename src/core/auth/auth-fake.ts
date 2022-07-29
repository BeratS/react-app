import { useState } from "react";

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

export {
    useProvideAuth
}
