import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div>
            <>
                <div className="nk-main">
                    <div className="nk-fullscreen-block">
                        {/* <div className="nk-fullscreen-block-top">
                            <div className="text-center"> */}
                        {/* <div className="nk-gap-4" /> */}
                        {/* <a href="index.html">
                                    <img src="assets/images/logo.svg" alt="GoodGames" />
                                </a> */}
                        {/* <div className="nk-gap-2" /> */}
                        {/* </div>
                        </div> */}
                        <div className="nk-fullscreen-block-middle">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                                        <h1 className="text-main-1" style={{ fontSize: 150 }}>
                                            404
                                        </h1>
                                        <div className="nk-gap" />
                                        <h2 className="h4">Oldal nem található!</h2>
                                        <div>
                                            Nem létező útvonalat írtál be <br />
                                            vagy (már) nem létező bejegyzést nyitottál meg.
                                        </div>
                                        <div className="nk-gap-3" />
                                        <Link to="/"
                                            className="nk-btn nk-btn-rounded nk-btn-color-white"
                                        >
                                            Vissza a Főoldalra
                                        </Link>
                                    </div>
                                </div>
                                <div className="nk-gap-3" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* START: Page Background */}
                {/* <div
                    className="nk-page-background-fixed"
                    style={{ backgroundImage: 'url("src/assets/images/bg-fixed-2.jpg")' }}
                /> */}
                {/* END: Page Background */}

            </>

        </div>
    )
}

export default NotFoundPage