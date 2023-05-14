import React, { useContext, useEffect } from 'react'
import Button2 from '../ui/Button2'
import './_css/competitionRegister.css'
import image from '../assets/images/team-2.jpg'
import GoBackButton from '../ui/GoBackButton'
import { useNavigate, useParams } from 'react-router'
import SessionTeamContext from '../_context/SessionTeamContext'
import UserContext from '../_context/UserContext'
import CompetitionContext from '../_context/CompetitionContext'

function CompetitionRegister() {


    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top.png')")
    }, [])


    const navigate = useNavigate();

    const { id: eventId, competitionid: competitionId } = useParams();

    const {
        userToken
    } = useContext(UserContext);

    const {
        getSessionTeams,
        isSessionTeamsLoading,
        sessionTeams
    } = useContext(SessionTeamContext);

    const {
        getOneCompetitionById,
        oneCompetition
    } = useContext(CompetitionContext);


    useEffect(() => {
        getSessionTeams(competitionId, userToken);
        getOneCompetitionById(competitionId);
    }, [])


    return (
        <div>

            <div className="nk-gap-3" />

            <h3 className="nk-decorated-h m-20">
                <span>
                    <span className="text-main-1">Eddig jelentkezett csapatok</span>
                </span>
            </h3>

            <div className="nk-gap-2" />

            <div className='row'>
                <div className='col'><GoBackButton /></div>
                <div className='col'><Button2 content="Belépés privát csapatba" myFunct={() => navigate('')} /></div>
                <div className='col'><Button2 content="Új csapat ➕" myFunct={() => navigate(`/events/${eventId}/register/${competitionId}/create`)} /></div>
            </div>


            <div className="nk-gap-2" />

            <div>
                <div className="vertical-gap">
                    {/* <div className="col-lg-8"> */}


                    {/* START: Teams */}

                    {
                        !isSessionTeamsLoading &&
                        (sessionTeams?.length > 0 ?
                            sessionTeams.map((team: any, index: React.Key) => (
                                <div className="c-team h-100">
                                    <div className='row w-100 px-2 mx-auto'>

                                        <div className="c-team-element c-team-logo col-md-2 d-flex align-items-center justify-content-center">
                                            <img src={image} alt="" />
                                        </div>

                                        <div className="c-team-element nk-team-cont col-md-4 c-border py-5">
                                            <h3 className="mb-20">
                                                <span className="text-main-1 h5">Csapat: <br /><span className='mt-1 h3'>{team.teamName}</span></span>
                                            </h3>
                                            <h4 className="h6 mb-5 text-main-1">Eddigi tagok:</h4>
                                            <p>Tag, Tag, Tag, Tag, Tag</p>
                                            {/* <div
                                    className="nk-team-photo"
                                    style={{ backgroundImage: 'url("assets/images/team-photo.png")' }}
                                /> */}

                                        </div>

                                        <div className='c-team-element my-auto col-md-4 text-center d-flex align-items-center justify-content-center py-5'>
                                            {/* <div className='nk-gap-1' /> */}
                                            <p>{team.description}</p>
                                            {/* <div className='nk-gap-1' /> */}
                                        </div>

                                        <div className='c-team-element my-auto col-md-2 py-5'>
                                            <p className='mt-15 text-center h4'>4/{oneCompetition?.maxMemberCount}</p>
                                            <Button2 content="Csatlakozás" />
                                        </div>


                                    </div>
                                    {/* END: Teams */}
                                </div>
                            ))
                            :
                            <p className='text-center my-5'>Nem jelentkezett még egy csapat se erre a versenyre.<br />Készíts egyet és hívj meg játékosokat...</p>
                        )
                    }

                    {/* </div> */}
                </div>
            </div>



        </div>
    )
}

export default CompetitionRegister