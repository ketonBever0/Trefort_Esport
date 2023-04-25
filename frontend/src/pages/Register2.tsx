import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';

function Register2() {

    const [width, setWidth] = useState(50);

    var navigate = useNavigate();

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

    const handleTextareaChange = () => {
        const textarea:any = document.querySelectorAll('textarea');

        if (textarea.value) {
            console.log(width);
            setWidth(width + 8.33);
        }
    }

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
                <div className= 'd-flex m-30 w-25 justify-content-center'><Button2 content="Vissza"/></div>
                <>
                    <div className="tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login">
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

                                <div className='container justify-content-center row gap-1'>
                                    <div className='row justify-content-center gap-5 m-20'>

                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} type="text" id="felhasznalonev" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="felhasznalonev">Felhasználónév</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} type="email" id="email" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="email">E-mail cím</label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className='row justify-content-center gap-5 m-20'>
                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} type="password" id="jelszo" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="jelszo">Jelszó</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="form-group myform-group">
                                                <input onChange={handleInputChange} type="password" id="jelszomegegyszer" className="myform-control form-control required bg-dark p-10" required />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="jelszomegegyszer">Jelszó mégegyszer</label>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-4 m-20">
                                        <div className="form-group myform-group">
                                            <textarea id="leiras" onChange={handleTextareaChange} className="myform-control form-control required bg-dark p-10" required />
                                            <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="leiras">Pár szó magamról...</label>
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

                                    <div className='p-30'>
                                        <Button2 content="Regisztrálok!" myFunct={console.log('hello')}/>
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