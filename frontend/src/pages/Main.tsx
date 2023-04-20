import React, { useEffect } from 'react'
import UpComingEvents from '../components/Main/UpComingEvents'
import UpComingMatches from '../components/Main/UpComingMatches'
import NowPlaying from '../components/Main/NowPlaying'
import LatestMatches from '../components/Main/LatestMatches'
import LatestNews from '../components/Main/LatestNews'
import Sidebar from '../components/Sidebar'
import Dashboard from '../ui/Dashboard'

function Main() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top.png')")
    }, [])

    return (
        <div>
            <div className="nk-gap" />
            <Dashboard />
            <div className='m-10'>
                {/* START: Image Slider */}
                <div className="nk-image-slider" data-autoplay={8000}>
                    <div className="nk-image-slider-item">
                        <div className=''>Images</div>
                    </div>
                </div>
            </div>
            {/* END: Image Slider */}

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

            <div className="nk-gap-6" />
            <div className="row vertical-gap">
                <div className="col-lg-8">
                    <UpComingEvents />

                    <div className="nk-gap-2" />

                </div>



                <div className="col-lg-4">
                    <Sidebar />
                </div>
            </div>

            <div className="nk-gap-2" />

            <UpComingMatches />

            <div className='nk-gap-3' />

            <NowPlaying />

            <div className="nk-gap-2" />

            <LatestMatches />

            <LatestNews />

            <div className="nk-gap-3" />


        </div >
    )
}

export default Main