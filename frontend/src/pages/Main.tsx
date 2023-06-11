import React, { useEffect } from 'react'
import UpComingEvents from '../components/Main/UpComingEvents'
import UpComingMatches from '../components/Main/UpComingMatches'
import NowPlaying from '../components/Main/NowPlaying'
import LatestMatches from '../components/Main/LatestMatches'
import LatestNews from '../components/Main/LatestNews'
import Sidebar from '../components/Sidebar'
import Dashboard from '../ui/Dashboard'
import trefortImg from './images/esport_kep.png';
import Header from '../components/Main/Header'

function Main() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top.png')")
    }, [])

    return (
        <div>
            <div className="container-fluid">
                <div className="">
                    <div>
                        {/* <div className="nk-gap" /> */}

                        <div className='m-10'>
                            {/* START: Image Slider */}
                            {/* <div className="nk-image-slider" data-autoplay={8000}>
                                <div className="nk-image-slider-item" style={{height: "40rem"}}>
                                    <img
                                        src={trefortImg}
                                        alt=""
                                        className="nk-image-slider-img"
                                        style={{objectFit:"contain", width: "100%"}}
                                    // data-thumb="assets/images/slide-1-thumb.jpg"
                                    />
                                    <div className="nk-image-slider-content">
                                        <h3 className="h4">As we Passed, I remarked</h3>
                                        <p className="text-white">
                                            As we passed, I remarked a beautiful church-spire rising above some old
                                            elms in the park; and before them, in the midst of a lawn, chimneys
                                            covered with ivy, and the windows shining in the sun.
                                        </p>
                                        <a
                                            href="#"
                                            className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-hover-color-main-1"
                                        >
                                            Read More
                                        </a>

                                    </div>
                                </div>

                                <div className="nk-image-slider-item" style={{height: "40rem"}}>
                                    <img
                                        src="assets/images/slide-1.jpg"
                                        alt=""
                                        className="nk-image-slider-img"
                                        style={{objectFit:"contain", width: "100%"}}
                                    // data-thumb="assets/images/slide-1-thumb.jpg"
                                    />
                                    <div className="nk-image-slider-content">
                                        <h3 className="h4">As we Passed, I remarked</h3>
                                        <p className="text-white">
                                            As we passed, I remarked a beautiful church-spire rising above some old
                                            elms in the park; and before them, in the midst of a lawn, chimneys
                                            covered with ivy, and the windows shining in the sun.
                                        </p>
                                        <a
                                            href="#"
                                            className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-hover-color-main-1"
                                        >
                                            Read More
                                        </a>

                                    </div>
                                </div>



                            </div> */}


                        </div>
                        {/* END: Image Slider */}



                        <Header />




                        {/* START: Categories */}
                        {/* <div className="nk-gap-2" />
                <div className="row vertical-gap">
                    <div className="col-lg-4">
                        <div className="nk-feature-1">
                            <div className="nk-feature-icon">
                                <img src="assets/images/icon-mouse.svg" alt="" />
                            </div>
                            <div className="nk-feature-cont">
                                <h3 className="nk-feature-title">
                                    <a href="#">PC</a>
                                </h3>
                                <h4 className="nk-feature-title text-main-1">
                                    <a href="#">View Games</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="nk-feature-1">
                            <div className="nk-feature-icon">
                                <img src="assets/images/icon-gamepad.svg" alt="" />
                            </div>
                            <div className="nk-feature-cont">
                                <h3 className="nk-feature-title">
                                    <a href="#">PS4</a>
                                </h3>
                                <h4 className="nk-feature-title text-main-1">
                                    <a href="#">View Games</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="nk-feature-1">
                            <div className="nk-feature-icon">
                                <img src="assets/images/icon-gamepad-2.svg" alt="" />
                            </div>
                            <div className="nk-feature-cont">
                                <h3 className="nk-feature-title">
                                    <a href="#">Xbox</a>
                                </h3>
                                <h4 className="nk-feature-title text-main-1">
                                    <a href="#">View Games</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div> */}

                        <div className="nk-gap-4" />
                        <div className="row vertical-gap">
                            <div className="col-lg-8">
                                <UpComingEvents />

                                <div className="nk-gap-2" />

                            </div>



                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                        </div>

                        {/* <div className="nk-gap-2" />

                        <UpComingMatches /> */}

                        <div className='nk-gap-3' />

                        <NowPlaying />

                        <div className="nk-gap-2" />

                        <LatestMatches />

                        <LatestNews />

                        <div className="nk-gap-3" />

                    </div >
                </div >
            </div >
        </div >
    )
}

export default Main