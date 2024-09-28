
import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    let [Authorization, setAuthorization] = useState(localStorage.getItem('AuthToken') ? localStorage.getItem('AuthToken') : undefined);
    return (
        <AuthContext.Provider value={[Authorization, setAuthorization]}>
            {children}
        </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)
