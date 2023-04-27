import { Link } from "react-router-dom"
import './_css/reviewOrg.css'
import Button2 from "../ui/Button2"

function ReviewOrganisations() {
    return (
        <div>
            {/* START: Latest News */}
            <div className="m-100">.</div><div className="m-100">.</div>
            <div className="nk-gap-2" />
            <h3 className="nk-decorated-h-2 text-sm-h6">
                <span>
                    Beküldött <span className="text-main-1">szervezetek</span>
                </span>
            </h3>
            <div className="nk-gap" />
            <div className="nk-news-box h-lg d-flex">
                <div className="nk-news-box-list">
                    <div className="nano">
                        <div className="nano-content">
                            
                        <div className="nk-news-box-item d-flex">
                                <div className="nk-news-box-item-img">
                                    <div className="border">
                                        <img
                                            src="https://lh5.googleusercontent.com/p/AF1QipOR5XURlA81HnIPtdh_-4Qiq5I3_IBVbeNrSRIm=w650-h486-k-no"
                                            alt="Smell magic in the air. Or maybe barbecue"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="nk-news-box-item-title" >Szervezet neve</h3>
                                    <div className="nk-news-box-item-text">
                                        <p>Intézmény</p>
                                    </div>
                                    <div className="nk-news-box-item-date">
                                        <span className="fa fa-calendar" /> date of submit 2022.02.02.
                                    </div>

                                </div>
                                <div className="col text-center m-auto fw-bold text-warning">Függőben <span className="lead">&#10710;</span></div>
                            </div>
                            <div className="nk-news-box-item d-flex">
                                <div className="nk-news-box-item-img">
                                    <div className="border">
                                        <img
                                            src="https://lh5.googleusercontent.com/p/AF1QipOR5XURlA81HnIPtdh_-4Qiq5I3_IBVbeNrSRIm=w650-h486-k-no"
                                            alt="Smell magic in the air. Or maybe barbecue"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="nk-news-box-item-title" >Szervezet neve</h3>
                                    <div className="nk-news-box-item-text">
                                        <p>Intézmény</p>
                                    </div>
                                    <div className="nk-news-box-item-date">
                                        <span className="fa fa-calendar" /> date of submit 2022.02.02.
                                    </div>

                                </div>
                                <div className="col text-center m-auto fw-bold text-success">Elfogadva &#x2714;</div>
                            </div>
                            <div className="nk-news-box-item d-flex">
                                <div className="nk-news-box-item-img">
                                    <div className="border">
                                        <img
                                            src="https://lh5.googleusercontent.com/p/AF1QipOR5XURlA81HnIPtdh_-4Qiq5I3_IBVbeNrSRIm=w650-h486-k-no"
                                            alt="Smell magic in the air. Or maybe barbecue"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="nk-news-box-item-title" >Szervezet neve</h3>
                                    <div className="nk-news-box-item-text">
                                        <p>Intézmény</p>
                                    </div>
                                    <div className="nk-news-box-item-date">
                                        <span className="fa fa-calendar" /> date of submit 2022.02.02.
                                    </div>

                                </div>
                                <div className="col text-center m-auto fw-bold text-danger">Elutasítva ☓</div>
                            </div>
                            <div className="nk-news-box-item">
                                <div className="nk-news-box-item-img">
                                    <img
                                        src="assets/images/post-1-sm.jpg"
                                        alt="Smell magic in the air. Or maybe barbecue"
                                    />
                                </div>
                                <img
                                    src="assets/images/post-1.jpg"
                                    alt="Smell magic in the air. Or maybe barbecue"
                                    className="nk-news-box-item-full-img"
                                />
                                <h3 className="nk-news-box-item-title" >Szervezet neve</h3>
                                <span className="nk-news-box-item-categories">
                                    <span className="bg-main-4">hello</span>
                                </span>
                                <div className="nk-news-box-item-text">
                                    <p>Intézmény</p>
                                    <p>Képviselő</p>
                                    <p>Cég leírása</p>
                                </div>
                                <div className="nk-news-box-item-date">
                                    <span className="fa fa-calendar" /> date of submit 2022.02.02.
                                </div>
                            </div>
                            <div className="nk-news-box-item">
                                <div className="nk-news-box-item-img">
                                    <img
                                        src="assets/images/post-1-sm.jpg"
                                        alt="Smell magic in the air. Or maybe barbecue"
                                    />
                                </div>
                                <img
                                    src="assets/images/post-1.jpg"
                                    alt="Smell magic in the air. Or maybe barbecue"
                                    className="nk-news-box-item-full-img"
                                />
                                <h3 className="nk-news-box-item-title" >Szervezet neve</h3>
                                <span className="nk-news-box-item-categories">
                                    <span className="bg-main-4">hello</span>
                                </span>
                                <div className="nk-news-box-item-text">
                                    <p>Intézmény</p>
                                    <p>Képviselő</p>
                                    <p>Cég leírása</p>
                                </div>
                                <div className="nk-news-box-item-date">
                                    <span className="fa fa-calendar" /> date of submit 2022.02.02.
                                </div>
                            </div>
                            <div className="nk-news-box-item">
                                <div className="nk-news-box-item-img">
                                    <img
                                        src="assets/images/post-1-sm.jpg"
                                        alt="Smell magic in the air. Or maybe barbecue"
                                    />
                                </div>
                                <img
                                    src="assets/images/post-1.jpg"
                                    alt="Smell magic in the air. Or maybe barbecue"
                                    className="nk-news-box-item-full-img"
                                />
                                <h3 className="nk-news-box-item-title" >Szervezet neve</h3>
                                <span className="nk-news-box-item-categories">
                                    <span className="bg-main-4">hello</span>
                                </span>
                                <div className="nk-news-box-item-text">
                                    <p>Intézmény</p>
                                    <p>Képviselő</p>
                                    <p>Cég leírása</p>
                                </div>
                                <div className="nk-news-box-item-date">
                                    <span className="fa fa-calendar" /> date of submit 2022.02.02.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="details-box" className="nk-news-box-each-info w-lg border">
                    <div className="nano">
                        <div className="nano-content">
                            {/* There will be inserted info about selected news*/}
                            <div className="nk-news-box-item-image">
                                <img src="https://taszi.hu/kepek/fooldali_banner/19_1.jpg" alt="" />
                                {/* <span className="nk-news-box-item-categories">
                                    <span className="bg-main-4">MMO</span>
                                </span> */}
                            </div>
                            <div className="p-5">
                                <h4>Szervezet neve:</h4>
                                <h3 className="nk-news-box-item-title fw-normal">Trefort Ágoston Technikum, Szakképző Iskola és Kollégium</h3>
                            </div>

                            <hr />
                            <div className="p-5">
                                <h4>Szervezet adatai:</h4>
                                <ul>
                                    <li className="text-lg">Típus: <span className="text-white text-lg"> Iskola</span></li>
                                    <li className="text-lg">Képviselő személy:<span className="text-white text-lg">  John Doe</span></li>
                                    <li className="text-lg">Cím:<span className="text-white text-lg">  5600 Békéscsaba, Gyulai út 32.</span></li>
                                    <li className="text-lg">E-mail cím:<span className="text-white text-lg"> user@outlook.com</span></li>
                                    <li className="text-lg">Telefonszám:<span className="text-white text-lg"> +36 (20) 476-2340</span></li>
                                    <li className="text-lg">Adószám:<span className="text-white text-lg"> 12345678-2-10</span></li>

                                </ul>
                            </div>

                            <hr />
                            <div className="p-5">
                                <h4>Szervezet leírása:</h4>
                                <p className="lead">Cég leírása Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>

                            <div className="m-20 border d-flex justify-content-around">
                            <button className="button2" style={{c:"green"}}>Intézmény elfogadása</button>
                                {/* <Button2 content="Intézmény elutasítása" />
                                <Button2 content="Intézmény elfogadása" /> */}
                            </div>
                            <div className="nk-news-box-item-date">
                                <span className="fa fa-calendar" /> Sep 18, 2018
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-100">.</div><div className="m-100">.</div>
        </div>
    )
}

export default ReviewOrganisations