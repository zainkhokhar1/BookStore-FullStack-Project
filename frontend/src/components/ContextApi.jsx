
import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();
export const IdContext = createContext();
export const AuthProvider = ({ children }) => {
    let [Authorization, setAuthorization] = useState(localStorage.getItem('AuthToken') ? localStorage.getItem('AuthToken') : undefined);
    let [Id, setId] = useState(localStorage.getItem('userId') ? localStorage.getItem('userId') : undefined);
    return (
        <AuthContext.Provider value={[Authorization, setAuthorization]}>
            <IdContext.Provider value={[Id, setId]}>
                {children}
            </IdContext.Provider>
        </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)
export const useId = () => useContext(IdContext);
