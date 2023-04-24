import { createContext, useState } from "react";

const EventContext = createContext<any | null>(null);

export const EventProvider = ({ children }: any) => {

    const [isEventsLoading, setIsEventsLoading] = useState<boolean>(false);
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        setIsEventsLoading(true);
        await fetch('http://localhost:8000/api/events/allevents')
            .then(res => res.json())
            .then(data => {
                if (!data.message) setEvents(data);
            })
            .catch(err => console.log(err))
            .finally(() => setIsEventsLoading(false));
    }


    const getEventById = (id: number) => {



    }




    return <EventContext.Provider value={{

        isEventsLoading,
        events,
        getEvents


    }}>
        {children}
    </EventContext.Provider>
}

export default EventContext;