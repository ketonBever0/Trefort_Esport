import React, { useContext, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import UserContext from '../_context/UserContext';

function LoginModal({ closeModal }: any) {

    const {
        login,
        loggingIn,
        userToken,
        isThereLoginError
    } = useContext(UserContext);

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    const handleLoginFormChange = (e: any) => {
        setLoginFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        if (userToken) {
            closeModal();
            setLoginFormData({
                email: "",
                password: ""
            });
        }
    }, [userToken])



    return (

        <div
            className="nk-modal"
            id="modalLogin"
            tabIndex={-1}
            role="dialog"
            onClick={(e) => {
                e.stopPropagation();
                // closeModal();
            }}
        // aria-hidden="true"
        >
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-body">
                        <button
                            type="button"
                            className="nostyle-button closebutton"
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            {/* <span className="ion-android-close" /> */}
                            <IoMdClose size={25} />
                        </button>
                        <h4 className="mb-0">
                            <span className="text-main-1">Bejelentkezés</span>
                        </h4>
                        <div className="nk-gap-1" />
                        <form className="nk-form text-white">
                            <div className="row vertical-gap">
                                <div className="col-md-7">
                                    <div className="nk-gap" />
                                    <input
                                        type="email"
                                        value={loginFormData.email}
                                        onChange={handleLoginFormChange}
                                        // defaultValue={loginFormData.email}
                                        name="email"
                                        className=" form-control"
                                        placeholder="E-mail cím"
                                        required
                                    />
                                    <div className="nk-gap" />
                                    <input
                                        type="password"
                                        value={loginFormData.password}
                                        onChange={handleLoginFormChange}
                                        // defaultValue=""
                                        name="password"
                                        className="required form-control"
                                        placeholder="Jelszó"
                                        required
                                    />
                                </div>
                                <div className="col-md-5">
                                    Egyéb lehetőségek: <div className="nk-gap" />
                                    <ul className="nk-social-links-2">
                                        <li>
                                            <a className="nk-social-facebook" href="#">
                                                <span className="fab fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-google-plus" href="#">
                                                <span className="fab fa-google-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-twitter" href="#">
                                                <span className="fab fa-twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="nk-gap-1" />
                            <div className="row vertical-gap">
                                <div className="col-md-7">
                                    <button onClick={async (e: any) => {
                                        e.preventDefault();
                                        await login(loginFormData);
                                    }}
                                        className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-block"
                                        disabled={loggingIn}>
                                        Tovább
                                    </button>
                                </div>
                                <div className="col-md-5">
                                    <div className="mnt-5">
                                        <small>
                                            <a href="#" className='normal-link' > Elfelejtett jelszó...</a>
                                        </small>
                                    </div>
                                    <div className="mnt-5">
                                        <small>
                                            <a href="#" className='normal-link'>Nincs fiókod? Regisztrálj!</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >

        // </div>
    )
}

export default LoginModal