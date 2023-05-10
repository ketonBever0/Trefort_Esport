import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';
import UserContext from '../_context/UserContext';
import Notify from '../ui/Toasts';
import GoBackButton from '../ui/GoBackButton';

function Register2() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-3.png')")
    }, [])

    const [width, setWidth] = useState(50);

    const {
        setIsLoginModalOpen,
        registerFormData, setRegisterFormData,
        register, isRegistrationSuccessful
    } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (registerFormData.firstName == "" || registerFormData.lastName == "" || registerFormData.address == "") {
            const regForm: any = sessionStorage.getItem("regForm");

            if (!regForm) {
                navigate('/register1')
                return;
            }
            else {
                setRegisterFormData(JSON.parse(regForm));
            }
        }

    }, [])




    const handleInputChange = (e: any) => {
        const inputs = document.querySelectorAll('input');

        setRegisterFormData((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

        let count = width;

        inputs.forEach((input) => {
            if (input.value) {
                count++;
            }
        }
        )
        setWidth(count * 12.5)
    };



    // const verifyPassword = () => {
    //     var pw:any = document.getElementById("password").value;
    //     var pw2 = document.getElementById("jelszo2").value;
    //     var verify = document.getElementById("pwVerify");
    //     if (pw != pw2) {
    //         verify.classList.add("errorAlert");
    //         verify.innerHTML = " A két jelszó nem egyezik!";
    //         verify.scrollIntoView({
    //             behavior: "smooth",
    //             block: "center",
    //             inline: "center"
    //         });
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // function passwordVisibility() {
    //     var pw = document.getElementById("myInput");
    //     if (pw.type === "password") {
    //         pw.type = "text";
    //     } else {
    //         pw.type = "password";
    //     }
    // }


    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [fileInput, setFileInput] = useState<any | null>(null);


    const submit = async () => {

        if (registerFormData.password != confirmPassword) {
            Notify.tError("A két jelszó nem egyezik!");
            return;
        }
        else {
            // var payload = new FormData();

            // payload.append("form", JSON.stringify(registerFormData));
            // fileInput != null && payload.append("file", fileInput);

            await register(registerFormData);
            if (isRegistrationSuccessful == true) {
                setConfirmPassword("");
                navigate('/');
            }
        }

    }

    const checkIfUsernameExists = async (e: any) => {
        if (e.target.value == "") {
            return;
        } else {
            await fetch('http://localhost:8000/api/user/checkusername', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: e.target.value
                })
            })
                .then(res => res.json())
                .then(response => {
                    if (response.exists) Notify.tError(response.message);
                    else Notify.tSuccess(response.message);
                })
                .catch(err => console.log(err));
        }
    }

    const checkIfEmailExists = async (e: any) => {
        if (e.target.value == "") {
            return;
        } else {
            await fetch('http://localhost:8000/api/user/checkemail', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: e.target.value
                })
            })
                .then(res => res.json())
                .then(response => {
                    if (response.exists) Notify.tError(response.message);
                    else Notify.tSuccess(response.message);
                })
                .catch(err => console.log(err));
        }
    }



    return (
        <div>

            <div className='bg-dark bg-gradient p-30 rounded text-xl'>
                <ProgressBar myWidth={width} />
                <>
                    <div className="tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login">
                            <form>
                                <div className='row d-flex'>
                                    <div className='col row justify-content-center'>
                                        <div className='d-flex m-30 justify-content-center'><GoBackButton/></div>
                                    </div>


                                    <div className="text-center col mb-3 lead">


                                        <p>Regisztráció ezzel:</p>
                                        <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                            <i className="fab fa-facebook-f" />
                                        </button>
                                        <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                            <i className="fab fa-google" />
                                        </button>
                                        <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                            <i className="fab fa-twitter" />
                                        </button>
                                        <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                            <i className="fab fa-github" />
                                        </button>
                                    </div>
                                    <div className='col'>
                                    </div>
                                </div>

                                <p className="text-center lead">vagy:</p>

                                <div className='container justify-content-center row gap-1'>
                                    <div className='row justify-content-center gap-5 m-20'>

                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} onBlur={checkIfUsernameExists} name='username' value={registerFormData.username} type="text" id="felhasznalonev" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="felhasznalonev">Felhasználónév</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} onBlur={checkIfEmailExists} name='email' value={registerFormData.email} type="text" id="email" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="email">E-mail cím</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row justify-content-center gap-5 m-20'>
                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} name='password' value={registerFormData.password} type="password" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="password">Jelszó</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input type="password" id="jelszomegegyszer" value={confirmPassword} onChange={(e: any) => setConfirmPassword(e.target.value)} className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="jelszomegegyszer">Jelszó mégegyszer</label>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-4 m-20">
                                        <div className="form-group myform-group">
                                            <textarea id="leiras" onChange={(e: any) => {
                                                if (e.target.value == "") {
                                                    setRegisterFormData((prev: any) =>
                                                        ({ ...prev, [e.target.name]: null }));
                                                    return;
                                                } else {
                                                    setRegisterFormData((prev: any) =>
                                                        ({ ...prev, [e.target.name]: e.target.value }));
                                                }
                                            }} name='description' className="myform-control form-control required bg-dark p-10" />
                                            <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="leiras">Pár szó magamról...</label>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <div className=''>
                                            <label className=''>Profilkép feltöltése</label>
                                            <input
                                                onChange={(e: any) => setFileInput(e.target.files[0])}
                                                type="file"
                                                accept='image/png, image/jpeg'
                                                className="form-control required bg-dark"
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className='p-30'>
                                    <Button2 content="Regisztrálok!" myFunct={() => submit()} />
                                </div>


                                <div className="text-center">
                                    <p>
                                        Már van fiókod? <a href="#"><Link to='/login'>Jelentkezz be itt!</Link></a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </>

            </div>

        </div>
    )
}

export default Register2