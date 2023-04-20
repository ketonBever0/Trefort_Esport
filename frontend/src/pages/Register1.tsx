import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button from '../ui/Button';
import Button2 from '../ui/Button2';

function Register1() {

    const [width, setWidth] = useState(0);

    const navigate = useNavigate();

    const handleInputChange = () => {
        const inputs = document.querySelectorAll('input');

        let count = 0;

        inputs.forEach((input) => {
            if (input.value) {
                count++;
            }
        }
        )
        setWidth(count * 12.5)
    };

    const areInputsFilled = () => {

        const inputs = document.querySelectorAll('input');

        inputs.forEach((input) => {
            if (input.value) {
                navigate("/register2");
            }
        })
    };

    const logging = () => {
        console.log('hi')
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
                            aria-labelledby="tab-login"
                        >
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

                                        <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="text" className="form-control required bg-dark" id="vezeteknev" placeholder="Vezetéknév" onChange={handleInputChange} />
                                                <label htmlFor="vezeteknev" className='opacity-50'>Vezetéknév</label>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="text" className="form-control required bg-dark" id="keresztnev" placeholder="Keresztnév" onChange={handleInputChange} />
                                                <label htmlFor="keresztnev" className='opacity-50'>Keresztnév</label>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="text" className="form-control required bg-dark" id="lakcim" placeholder="Lakcím" onChange={handleInputChange} />
                                                <label htmlFor="lakcim" className='opacity-50'>Lakcím</label>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="text" className="form-control required bg-dark" id="omazonosito" placeholder="OM azonosító" onChange={handleInputChange} />
                                                <label htmlFor="omazonosito" className='opacity-50'>OM azonosító</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button2 content="Következő" myFunct={logging} />

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