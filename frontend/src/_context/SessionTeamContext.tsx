import { createContext, useState } from "react";
import Notify from "../ui/Toasts";

const SessionTeamContext = createContext<any | null>(null);

export const SessionTeamProvider = ({ children }: any) => {


    const [sessionTeams, setSessionTeams] = useState([]);
    const [isSessionTeamsLoading, setIsSessionTeamLoading] = useState(false);


    const getSessionTeams = async (id: number, token: string) => {
        setIsSessionTeamLoading(true);
        await fetch(`http://localhost:3333/api/sessionteams/competition/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setSessionTeams(data.sessionTeamsByCompetition))
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



    return <SessionTeamContext.Provider value={{
        isSessionTeamsLoading,
        getSessionTeams,
        sessionTeams,

        createSessionTeam
    }}>{children}</SessionTeamContext.Provider>



}

export default SessionTeamContext;