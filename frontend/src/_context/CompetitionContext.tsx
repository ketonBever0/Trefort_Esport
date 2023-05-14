import { createContext, useState } from "react";

const CompetitionContext = createContext<any | null>(null);

export const CompetitionProvider = ({ children }: any) => {


    const [eventCompetitions, setEventCompetitions] = useState([]);
    const [isEventCompetitionsLoading, setIsEventCompetitionsLoading] = useState(false);


    const getAllCompetitionsByEventId = async (id: number) => {
        setIsEventCompetitionsLoading(true);
        await fetch(`http://localhost:3333/api/competitions/event/${id}`)
            .then(res => res.json())
            .then(data => setEventCompetitions(data.competitions))
            .catch(err => console.log(err))
            .finally(() => setIsEventCompetitionsLoading(false));
    }


    const [oneCompetition, setOneCompetition] = useState(null);

    const getOneCompetitionById = async (id: number) => {
        setIsEventCompetitionsLoading(true);
        await fetch(`http://localhost:3333/api/competitions/${id}`)
            .then(res => res.json())
            .then(data => setOneCompetition(data.competition))
            .catch(err => console.log(err))
            .finally(() => setIsEventCompetitionsLoading(false));
    }



    return <CompetitionContext.Provider value={{
        getAllCompetitionsByEventId,
        eventCompetitions,
        isEventCompetitionsLoading,

        getOneCompetitionById,
        oneCompetition
    }}>{children}</CompetitionContext.Provider>


}

export default CompetitionContext;