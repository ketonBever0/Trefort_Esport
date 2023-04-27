import { createContext, useState, useEffect } from 'react';
import Notify from '../ui/Toasts';


const UserContext = createContext<any | null>(null);

export const UserProvider = ({ children }: any) => {


    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const [isUserBoxOpen, setIsUserBoxOpen] = useState<boolean>(false);



    const [userToken, setUserToken] = useState<string | null>(null);
    const [tokenRefresh, setTokenRefresh] = useState<boolean>(false);
    const [loggingIn, setLoggingIn] = useState<boolean>(false);

    const tokenUpdate = () => setTokenRefresh(prev => !prev);

    useEffect(() => {
        if (userToken != null) {
            sessionStorage.setItem('usertoken', userToken);
        } else {
            setUserToken(sessionStorage.getItem('usertoken'));
        }
    }, [tokenRefresh])

    const [isThereLoginError, setIsThereLoginError] = useState<boolean>(false);

    const login = async (formData: Object) => {
        setIsThereLoginError(false);
        setLoggingIn(false);
        await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then((token: any) => {
                if (!token.message) {
                    setUserToken(token);
                    tokenUpdate();
                } else {
                    setIsThereLoginError(true);
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoggingIn(false));
    }

    const logout = () => {
        setUserToken(null);
        sessionStorage.removeItem('usertoken');
        setUserData(null);
    }


    const [userData, setUserData] = useState<object | null>(null);
    const [userRefresh, setUserRefresh] = useState<boolean>(false);


    useEffect(() => {
        if (userToken) getUserData(userToken);
    }, [userToken])

    const getUserData = async (token: string | null) => {
        await fetch('http://localhost:8000/api/user/userdata', {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.log(err));
    }


    const [isOtherUserDataLoading, setIsOtherUserDataLoading] = useState<boolean>(false);
    const [otherUser, setOtherUser] = useState<any | null>(null);

    const getOtherUserByUsername = async (username: string) => {
        setIsOtherUserDataLoading(true);
        await fetch(`http://localhost:8000/api/user/otheruserdata/${username}`)
            .then(res => res.json())
            .then(data => setOtherUser(data))
            .then(err => console.log(err))
            .finally(() => setIsOtherUserDataLoading(false));
    }

    const [registerFormData, setRegisterFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        educationIdNum: "",
        username: "",
        email: "",
        description: ""
    });



    const register = async (form: any) => {
        // console.log(form);


        await fetch('http://localhost:8000/api/user/register', {
            method: 'POST',
            // headers: { 'Content-Type': "multipart/form-data" },
            body: form 
        })
            .then(res => res.json())
            .then(response => console.log(response))
            .catch(err => console.log(err));


    }



    return <UserContext.Provider value={{

        isLoginModalOpen, setIsLoginModalOpen,
        isUserBoxOpen, setIsUserBoxOpen,

        login,
        loggingIn,
        isThereLoginError,
        userToken,
        userData,
        logout,

        isOtherUserDataLoading,
        otherUser,
        getOtherUserByUsername,

        registerFormData, setRegisterFormData,
        register

    }}>{children}</UserContext.Provider>

}

export default UserContext;