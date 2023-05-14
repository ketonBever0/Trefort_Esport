import React, { useEffect } from 'react'
import Button2 from '../ui/Button2';
import image from '../assets/images/team-2.jpg'

function MySessionTeamsPage() {


    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top.png')")
    }, [])




    return (
        <div>



            <div className="c-team h-100">
                <div className='row w-100 px-2 mx-auto'>

                    <div className="c-team-element c-team-logo col-md-2 d-flex align-items-center justify-content-center">
                        <img src={image} alt="" />
                    </div>

                    <div className="c-team-element nk-team-cont col-md-4 c-border py-5">
                        <h3 className="mb-20">
                            <span className="text-main-1 h5">Csapat: <br /><span className='mt-1 h3'></span></span>
                        </h3>
                        <h4 className="h6 mb-5 text-main-1">Eddigi tagok:</h4>
                        <p></p>
                        {/* <div
                    className="nk-team-photo"
                    style={{ backgroundImage: 'url("assets/images/team-photo.png")' }}
                /> */}

                    </div>

                    <div className='c-team-element col-md-4 text-center d-flex align-items-center justify-content-center c-border py-5'>
                        {/* <div className='nk-gap-1' /> */}
                        <p>{ }</p>
                        {/* <div className='nk-gap-1' /> */}
                    </div>

                    <div className='c-team-element my-auto col-md-2 py-5'>
                        <p className='mt-15 text-center h4'></p>
                        <Button2 content="Csatlakozás" myFunct={() => {

                        }} />
                    </div>


                </div>
            </div>


            <p className='text-center my-5'>Nincsenek nyitott és még szabad hellyel rendelkező csapatok.<br />Készíts egyet és hívj meg játékosokat...</p>


        </div>
    )
}

export default MySessionTeamsPage