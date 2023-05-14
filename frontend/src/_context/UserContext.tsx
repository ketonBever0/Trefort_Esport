import { createContext, useState, useEffect, useContext } from 'react';
import Notify from '../ui/Toasts';


const UserContext = createContext<any | null>(null);

export const UserProvider = ({ children }: any) => {


    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const [isUserBoxOpen, setIsUserBoxOpen] = useState<boolean>(false);



    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem("usertoken"));
    const [tokenRefresh, setTokenRefresh] = useState<boolean>(false);
    const [loggingIn, setLoggingIn] = useState<boolean>(false);

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const tokenUpdate = () => setTokenRefresh(prev => !prev);


    const [isThereLoginError, setIsThereLoginError] = useState<boolean>(false);


    // http://localhost:8000/api/user/login

    const login = async (formData: Object) => {
        setIsThereLoginError(false);
        setLoggingIn(false);
        await fetch('http://localhost:3333/api/auth/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then((token: any) => {
                if (!token.message) {
                    localStorage.setItem("usertoken", token.access_token);
                    setUserToken(token.access_token);
                    tokenUpdate();
                    Notify.tSuccess("Sikeres bejelentkezés!");
                    userUpdate();
                } else {
                    setIsThereLoginError(true);
                    Notify.tError(
                        "Nem megfelelő adatok!"
                        //token.message
                        );
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoggingIn(false));
    }

    const logout = (isInvalidSession: boolean | null = false) => {
        setUserToken(null);
        localStorage.removeItem('usertoken');
        setUserData(null);
        if (!isInvalidSession) Notify.tSuccess("Kijelentkezve!");
        userUpdate();
    }


    const [userData, setUserData] = useState<object | null>(null);
    const [isUserDataLoading, setIsUserDataLoading] = useState<boolean>(false);
    const [userRefresh, setUserRefresh] = useState<boolean>(false);

    const userUpdate = () => setUserRefresh(prev => !prev);

    useEffect(() => {
        if (!userToken) {
            setUserToken(sessionStorage.getItem('usertoken'));
        }
    }, [tokenRefresh])

    const [time, setTime] = useState(0);



    useEffect(() => {
        if (userToken) getUserData(userToken);
    }, [userRefresh])


    const getUserData = async (token: string | null) => {
        setIsUserDataLoading(true);
        await fetch('http://localhost:3333/api/users/me', {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    // console.log(data)
                    Notify.tError(data.message);
                    logout(true);
                } else {
                    setUserData({ user: data });
                }
            })
            .catch(err => console.log(err))
            .finally(() => setIsUserDataLoading(false));
    }


    const [isOtherUserDataLoading, setIsOtherUserDataLoading] = useState<boolean>(false);
    const [otherUser, setOtherUser] = useState<any | null>(null);

    const getOtherUserById = async (id: number | string) => {
        setIsOtherUserDataLoading(true);
        await fetch(`http://localhost:3333/api/users/${id}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userToken}`
            }
        })
            .then(res => res.json())
            .then(data => setOtherUser(data))
            .then(err => console.log(err))
            .finally(() => setIsOtherUserDataLoading(false));
    }

    const [registerFormData, setRegisterFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        educationNumber: null,
        username: "",
        email: "",
        description: "",
        password: ""
    });


    // http://localhost:8000/api/user/register

    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean>(false);

    const register = async (form: any) => {
        // console.log(form);

        await fetch('http://localhost:3333/api/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
            .then((res: Response) => res.json())
            .then((response: any) => {
                console.log(response);
                if (response.success) {
                    setIsRegistrationSuccessful(true);
                    Notify.tSuccess(response.message || response.mesage);
                    localStorage.setItem("usertoken", response.access_token);
                    setUserToken(response.access_token);
                    tokenUpdate();
                    userUpdate();

                    setRegisterFormData({
                        firstName: "",
                        lastName: "",
                        address: "",
                        educationNumber: null,
                        username: "",
                        email: "",
                        description: "",
                        password: ""
                    });
                    sessionStorage.removeItem("regForm");

                }
                else {
                    setIsRegistrationSuccessful(false);
                    Notify.tError(response.message);
                }
            })
            .catch(err => console.log(err));


    };

    const [isDashboardOpen, setIsDashboardOpen] = useState(false);



    return <UserContext.Provider value={{

        isLoginModalOpen, setIsLoginModalOpen,
        isUserBoxOpen, setIsUserBoxOpen,

        userUpdate,
        login,
        loggingIn,
        isThereLoginError,
        userToken,
        userData,
        logout,

        isOtherUserDataLoading,
        otherUser,
        getOtherUserById,

        registerFormData, setRegisterFormData,
        register,
        isRegistrationSuccessful,
        isDashboardOpen,
        setIsDashboardOpen

    }}>{children}</UserContext.Provider>

}

export default UserContext;