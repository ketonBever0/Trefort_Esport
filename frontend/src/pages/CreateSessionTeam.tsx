import React, { useContext, useEffect, useState } from 'react'
import GoBackButton from '../ui/GoBackButton'
import SessionTeamContext from '../_context/SessionTeamContext';
import { useParams } from 'react-router';
import UserContext from '../_context/UserContext';
import Button2 from '../ui/Button2';

function CreateSessionTeam() {


    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top.png')")
    }, [])


    const { id: eventId, competitionid: competitionId } = useParams();

    const {
        createSessionTeam
    } = useContext(SessionTeamContext);


    // const [isPublic, setIsPublic] = useState(true);


    const [payload, setPayload] = useState({
        teamName: "",
        clanId: null,
        competitionId: null,
        password: null,
        public: true,
        description: null
    })

    useEffect(() => {
        if (eventId && competitionId) {
            setPayload((prev: any) => ({
                ...prev,
                competitionId: parseInt(competitionId)
            }))
        }
    }, [eventId, competitionId])


    const {
        userData,
        userToken
    } = useContext(UserContext);


    useEffect(() => {
        if (payload.public == true) {
            setPayload((prev: any) => ({
                ...prev,
                password: null
            }))
        }
    }, [payload.public])


    return (
        <div>


            <div className='bg-dark bg-gradient p-30 rounded text-xl'>

                <div className='nk-gap-2' />


                <div className='row'>
                    <div className='col'><GoBackButton /></div>
                    <div className='col'>
                        <p>Ezen az oldalon készíthetsz csapatot a versenyre.<br />Beállíthatod, hogy...</p>
                        <ul className='list-group list-group-flush'>
                            <li className=''>...csak a klánodból léphessenek be (persze csak ha bentvagy)</li>
                            <li className=''>...zárt legyen a csapat, ebben az esetben jelszavas védelemre lesz szükség</li>
                        </ul>
                        <p>Figyelem! Csak akkor indulhattok a versenyre, ha megtelik a csapat, szóval jó tagvadászatot... 😉</p>
                    </div>
                </div>

                <div className='nk-gap-2' />



                <div className='container justify-content-center row gap-1'>
                    <form>
                        <div className='row justify-content-center gap-5 m-20'>


                            <div className="col-lg-3">
                                <div className="form-group myform-group">
                                    <input name='teamName' type="text" id="teamName" className="myform-control form-control required bg-dark p-10" required onChange={(e: any) => {
                                        setPayload((prev: any) => ({
                                            ...prev,
                                            teamName: e.target.value
                                        }))
                                    }} />
                                    <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="teamName">Csapatnév</label>
                                </div>
                            </div>

                            {/* <div className='col-lg-3'> */}

                            <div className='col-lg-3'>
                                <div className="form-check">
                                    <input className="form-check-input c-checkbox" type="checkbox" value="" id="public" onChange={(e: any) => {
                                        // setIsPublic((prev: boolean) => !prev);
                                        setPayload((prev: any) => ({
                                            ...prev,
                                            public: !e.target.checked
                                        }))
                                    }} />
                                    <label className="form-check-label" htmlFor="public">Zárt csapat?</label>
                                </div>

                                {/* {
                                userData?.user?.clanId != null && (
                                    <div className="form-check">
                                        <input className="form-check-input c-checkbox" type="checkbox" id="clanonly" onChange={(e: any) => {
                                            if (e.target.checked) {
                                                setPayload((prev: any) => ({
                                                    ...prev,
                                                    clanId: userData?.user?.clanId
                                                }))
                                            } else {
                                                setPayload((prev: any) => ({
                                                    ...prev,
                                                    clanId: null
                                                }))
                                            }
                                        }} />
                                        <label className="form-check-label" htmlFor="clanonly">Csak klántagok léphessenek be?</label>
                                    </div>
                                )
                            } */}

                            </div>

                            <div className='col-lg-3'>
                                {
                                    !payload.public && (
                                        <div className="">
                                            <div className="form-group myform-group">
                                                <input name='password' type="password" id="password" className="myform-control form-control required bg-dark p-10" required onChange={(e: any) => {
                                                    if (e.target.value == "") {
                                                        setPayload((prev: any) => ({
                                                            ...prev,
                                                            password: null
                                                        }))
                                                    } else {
                                                        setPayload((prev: any) => ({
                                                            ...prev,
                                                            password: e.target.value
                                                        }))
                                                    }
                                                }} />
                                                <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="password">Jelszó</label>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            <textarea className='myform-control form-control required bg-dark p-10 w-50' onChange={(e: any) => {
                                if (e.target.value == "") {
                                    setPayload((prev: any) => ({
                                        ...prev,
                                        description: null
                                    }))
                                } else {
                                    setPayload((prev: any) => ({
                                        ...prev,
                                        description: e.target.value
                                    }))
                                }
                            }} />

                            <Button2 content="Létrehozás" myFunct={async (e: any) => {
                                // e.preventDefault();
                                await createSessionTeam(payload, userToken);
                            }} />

                        </div>

                    </form>



                    {/* </div> */}

                </div>

            </div>








        </div >
    )
}

export default CreateSessionTeam