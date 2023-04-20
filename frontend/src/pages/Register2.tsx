import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';

function Register2() {

    const [width, setWidth] = useState(50);

    const handleInputChange = () => {
        const inputs = document.querySelectorAll('input');  //textarea

        let count = 0;

        inputs.forEach((input) => {
            if (input.value) {
                count++;
            }
        }
        )
        setWidth(50 + count * 8.33)
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
                                <div className="text-center mb-3 lead">
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
                                <p className="text-center lead">vagy:</p>

                                <div className='container'>
                                    <div className='row justify-content-center gap-4 m-20'>

                                    <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="text" className="form-control required bg-dark" id="username" placeholder="Felhasználónév" onChange={handleInputChange} />
                                                <label htmlFor="username" className='opacity-50'>Felhasználónév</label>
                                            </div>
                                        </div>                                        
                                        <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="text" className="form-control required bg-dark" id="email" placeholder="Vezetéknév" onChange={handleInputChange} />
                                                <label htmlFor="email" className='opacity-50'>E-mail cím</label>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="password" className="form-control required bg-dark" id="password" placeholder="Jelszó" onChange={handleInputChange} />
                                                <label htmlFor="password" className='opacity-50'>Jelszó</label>
                                            </div>
                                        </div>

                                        <div className='col-4'>
                                            <div className="form-floating">
                                                <input type="password" className="form-control required bg-dark" id="passwordagain" placeholder="Vezetéknév" onChange={handleInputChange} />
                                                <label htmlFor="passwordagain" className='opacity-50'>Jelszó mégegyszer</label>
                                            </div>
                                        </div>
                                        
                                        <div className='w-50'>
                                            <div className="form-floating">
                                                <textarea className="form-control required bg-dark" id="leiras" placeholder="Vezetéknév" onChange={handleInputChange} />
                                                <label htmlFor="leiras" className='opacity-50'>Pár szó magamról</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <div className=''>
                                            <label className=''>Profilkép feltöltése</label>
                                            <input
                                                onChange={handleInputChange}
                                                type="file"
                                                className="form-control required bg-dark"
                                            />
                                        </div>
                                    </div>

                                </div>


                                <Button2 content="Regisztrálok!"/>

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