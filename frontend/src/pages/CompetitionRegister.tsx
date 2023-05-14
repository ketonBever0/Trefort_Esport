import React, { useContext, useEffect, useState } from 'react'
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
        getPublicSessionTeams,
        isSessionTeamsLoading,
        sessionTeams,

        joinSessionTeam,
        joinPrivateSessionTeam
    } = useContext(SessionTeamContext);

    const {
        getOneCompetitionById,
        oneCompetition
    } = useContext(CompetitionContext);


    useEffect(() => {
        getOneCompetitionById(competitionId);
    }, [])

    useEffect(() => {
        oneCompetition && getPublicSessionTeams(oneCompetition, userToken);
    }, [oneCompetition])


    const [joinToPrivateTeam, setJoinToPrivateTeam] = useState(false);
    const [joinCreds, setJoinCreds] = useState({
        teamName: "",
        password: ""
    })





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
                <div className='col'><Button2 content={joinToPrivateTeam ? "Nyitott csapatok" : "Belépés privát csapatba"} myFunct={() => setJoinToPrivateTeam((prev: boolean) => !prev)} /></div>
                <div className='col'><Button2 content="Új csapat ➕" myFunct={() => navigate(`/events/${eventId}/register/${competitionId}/create`)} /></div>
            </div>


            <div className="nk-gap-2" />

            <div>
                <div className="vertical-gap">
                    {/* <div className="col-lg-8"> */}


                    {
                        joinToPrivateTeam ?
                            <div className='bg-dark bg-gradient p-30 rounded text-xl'>
                                <div className='container justify-content-center row gap-1'>
                                    <form>
                                        <div className='row justify-content-center gap-5 m-20'>

                                            <div className="col-lg-3">
                                                <div className="form-group myform-group">
                                                    <input name='teamName' type="text" id="teamName" className="myform-control form-control required bg-dark p-10" required onChange={(e: any) => {
                                                        setJoinCreds((prev: any) => ({
                                                            ...prev,
                                                            teamName: e.target.value
                                                        }))
                                                    }} />
                                                    <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="teamName">Csapatnév</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-3">
                                                <div className="form-group myform-group">
                                                    <input name='password' type="password" id="password" className="myform-control form-control required bg-dark p-10" required onChange={(e: any) => {
                                                        setJoinCreds((prev: any) => ({
                                                            ...prev,
                                                            password: e.target.value
                                                        }))
                                                    }} />
                                                    <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="password">Jelszó</label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='nk-gap-2' />
                                        <Button2 content="Csatlakozás" myFunct={async (e: any) => {
                                            await joinPrivateSessionTeam(oneCompetition, userToken, joinCreds);
                                        }} />
                                    </form>
                                </div>
                            </div>
                            :

                            !isSessionTeamsLoading &&
                            (sessionTeams?.length > 0 ?
                                sessionTeams.map((team: any, index: React.Key) => (
                                    <div className="c-team h-100" key={index}>
                                        <div className='row w-100 px-2 mx-auto'>

                                            <div className="c-team-element c-team-logo col-md-2 d-flex align-items-center justify-content-center">
                                                <img src={image} alt="" />
                                            </div>

                                            <div className="c-team-element nk-team-cont col-md-4 c-border py-5">
                                                <h3 className="mb-20">
                                                    <span className="text-main-1 h5">Csapat: <br /><span className='mt-1 h3'>{team.teamName}</span></span>
                                                </h3>
                                                <h4 className="h6 mb-5 text-main-1">Eddigi tagok:</h4>
                                                <p>{team?.members?.map((member: any, index: React.Key) => (<>{member?.user?.username} </>))}</p>
                                                {/* <div
                                            className="nk-team-photo"
                                            style={{ backgroundImage: 'url("assets/images/team-photo.png")' }}
                                        /> */}

                                            </div>

                                            <div className='c-team-element col-md-4 text-center d-flex align-items-center justify-content-center c-border py-5'>
                                                {/* <div className='nk-gap-1' /> */}
                                                <p>{team.description}</p>
                                                {/* <div className='nk-gap-1' /> */}
                                            </div>

                                            <div className='c-team-element my-auto col-md-2 py-5'>
                                                <p className='mt-15 text-center h4'>{team?.members?.length}/{oneCompetition?.maxMemberCount}</p>
                                                <Button2 content="Csatlakozás" myFunct={() => {
                                                    joinSessionTeam(team, userToken);
                                                }} />
                                            </div>


                                        </div>
                                    </div>
                                ))
                                :
                                <p className='text-center my-5'>Nincsenek nyitott és még szabad hellyel rendelkező csapatok.<br />Készíts egyet és hívj meg játékosokat...</p>
                            )
                    }





                </div>
            </div>



        </div>
    )
}

export default CompetitionRegister