import { createContext, useState } from 'react';

const AuthContext = createContext();

function createSession(user, access_token, expiry) {
    const session_obj = {
        user: user,
        access_token: access_token,
        expiry: expiry,
        is_authenticated: true
    }
    localStorage.setItem("session", JSON.stringify(session_obj))
    return session_obj;
}

function getSession() {
    const session = localStorage.getItem("session");
    return JSON.parse(session)
}

function clearSession() {
    localStorage.removeItem("session");
}

function AuthProvider({ children }) {
    const [session, setSession] = useState(getSession());

    if (session) {
        const timestamp = Math.floor(Date.now() / 1000);

        if (session.expiry > timestamp) {
            setTimeout(() => {
                clearSession();
                setSession(null);
            }, (session.expiry - timestamp) * 1000)
        };
    }

    return (
        <AuthContext.Provider value={{ session, setSession }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext, createSession, clearSession }