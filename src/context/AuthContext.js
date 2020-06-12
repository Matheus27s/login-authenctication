import React, { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext({
    user: {},
    signed: true,
    signIn: () => {},
    signOut: () => {},
});

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        function getStorage() {

            const storagedUser = localStorage.getItem('@RNAuth:user');

            if( storagedUser ) {
                setUser(JSON.parse(storagedUser))
            }
        }
        
        setLoading(false);
        getStorage();

    }, [])

    const signIn = ( user ) => {
        console.log('User: ' + user)
        localStorage.setItem('@RNAuth:user', JSON.stringify( user ))
        setUser(user)
    }
    const signOut = () => {
        localStorage.clear();
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext( AuthContext );
    return context;
}