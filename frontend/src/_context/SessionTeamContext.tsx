import { createContext, useState } from "react";
import Notify from "../ui/Toasts";

const SessionTeamContext = createContext<any | null>(null);

export const SessionTeamProvider = ({ children }: any) => {


    const [sessionTeams, setSessionTeams] = useState([]);
    const [isSessionTeamsLoading, setIsSessionTeamLoading] = useState(false);


    const getPublicSessionTeams = async (competition: any, token: string) => {
        setIsSessionTeamLoading(true);
        await fetch(`http://localhost:3333/api/sessionteams/competition/${competition.id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setSessionTeams(data.sessionTeamsByCompetition
                    .filter((x: any) => x.members?.length < competition?.maxMemberCount)
                    .filter((y: any) => y.public))
            })
            .catch(err => console.log(err))
            .finally(() => setIsSessionTeamLoading(false));
    }



    const createSessionTeam = async (form: any, token: string) => {
        await fetch(`http://localhost:3333/api/sessionteams`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then(response => {
                if (response?.message?.includes('Csapat sikeresen')) Notify.tSuccess(response.message);
                else (Notify.tError(response?.message));
            })
            .catch(err => console.log(err));
    }


    const joinSessionTeam = async (team: any | null, token: string) => {
        await fetch(`http://localhost:3333/api/sessionteams/join/${team.id}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(team)
        })
            .then(res => res.json())
            .then(response => {
                if (response?.message?.includes('Sikeres csatlakozás')) Notify.tSuccess(response.message);
                else (Notify.tError(response?.message));
            })
            .catch(err => console.log(err));
    }



    const joinPrivateSessionTeam = async (competition: any, token: string, joinCreds: any) => {
        await fetch(`http://localhost:3333/api/sessionteams/competition/${competition.id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(async data => {
                if (data.sessionTeamsByCompetition) {
                    const team = data.sessionTeamsByCompetition.filter((x: any) => x.teamName == joinCreds.teamName);
                    if (team.length == 1) {
                        await fetch(`http://localhost:3333/api/sessionteams/join/${team[0].id}`, {
                            method: 'POST',
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": `Bearer ${token}`
                            },
                            body: JSON.stringify(joinCreds)
                        })
                            .then(res => res.json())
                            .then(response => {
                                if (response?.message?.includes('Sikeres csatlakozás')) Notify.tSuccess(response.message);
                                else (Notify.tError(response?.message));
                            })
                    } else {
                        Notify.tError("Nem nevezett ilyen csapat ezen a versenyen!");
                    }
                }
            })
            .catch(err => console.log(err));
    }


    const [mySessionTeams, setMySessionTeams] = useState([]);
    const [mySessionTeamsOfThisCompetition, setMySessionTeamsOfThisCompetition] = useState([]);


    // const getMyCompetitionTeams




    return <SessionTeamContext.Provider value={{
        isSessionTeamsLoading,
        getPublicSessionTeams,
        sessionTeams,

        createSessionTeam,

        joinSessionTeam,
        joinPrivateSessionTeam
    }}>{children}</SessionTeamContext.Provider>



}

export default SessionTeamContext;