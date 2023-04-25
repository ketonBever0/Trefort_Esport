import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';
import Notify from '../ui/Toasts';
import UserContext from '../_context/UserContext';

function Register1() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-3.png')")
    }, [])

    const [progressWidth, setProgressWidth] = useState(0);

    const navigate = useNavigate();


    const {
        registerFormData, setRegisterFormData
    } = useContext(UserContext);


    const handleInputChange = (e: any) => {
        const inputs = document.querySelectorAll('input');

        setRegisterFormData((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

        // let count = 0;

        // inputs.forEach((input) => {
        //     if (input.value) {
        //         count++;
        //     }
        // }
        // )
        if (e.target.required == true) {
            setProgressWidth(prev => prev + 20);
        }
    };


    const areInputsFilled = () => {

        const inputs = document.querySelectorAll('input');

        inputs.forEach((input) => {
            if (input.value) {
                navigate("/register2");
            } else {
                Notify.tError("Töltsd kia mezőket!");
            }
        })
    };

    const logging = () => {
        console.log('hi')
    }

    return (
        <div>


            <div className='bg-dark bg-gradient p-30 rounded text-xl'>
                <ProgressBar myWidth={progressWidth} />

                <>

                    <div className="tab-content">
                        <div
                            className="tab-panel fade show active">
                            <form>
                                <div className="text-center mb-3">
                                    <p className='lead'>Regisztráció ezzel:</p>
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
                                <p className="text-center lead">vagy:</p>

                                <div className='container'>
                                    <div className='row justify-content-center gap-5 m-20'>
                                        <div className="col-md-4">
                                            <div className="form-group myform-group">
                                                <input onChange={(e) => {
                                                    handleInputChange(e);

                                                }} type="text"
                                                    name="firstName" value={registerFormData.firstName} id="vezeteknev" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="vezeteknev">Vezetéknév</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} type="text"
                                                    name="lastName" value={registerFormData.lastName} id="keresztnev" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="keresztnev">Keresztnév</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} type="text"
                                                    name="address" value={registerFormData.address} id="lakcim" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="lakcim">Lakcím</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} type="text"
                                                    name="educationIdNum" value={registerFormData.educationIdNum} id="omazonosito" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="omazonosito">Oktatási azonosító</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='p-30'>
                                    <Button2 content="Következő" myFunct={areInputsFilled} />
                                </div>


                                <div className="text-center">
                                    <p>
                                        Már van fiókod? <a href="#!">Jelentkezz be itt!</a>
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

export default Register1