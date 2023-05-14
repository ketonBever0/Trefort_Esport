import { createContext, useState } from "react";

const EventContext = createContext<any | null>(null);

export const EventProvider = ({ children }: any) => {

    const [isEventsLoading, setIsEventsLoading] = useState<boolean>(false);
    const [events, setEvents] = useState([]);

    const getEvents = async (token: any) => {
        setIsEventsLoading(true);
        await fetch('http://localhost:3333/api/events/all', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        }
        )
            .then(res => res.json())
            .then(data => {
                if (!data.message) setEvents(data.events);
            })
            .catch(err => console.log(err))
            .finally(() => setIsEventsLoading(false));
    }


    const [isEventLoading, setIsEventLoading] = useState<boolean>(false);
    const [event, setEvent] = useState(null);


    const getEventById = async (id: number, token: any) => {
        setIsEventLoading(true);
        await fetch(`http://localhost:3333/api/events/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => { if (!data.message) setEvent(data) })
            .catch(err => console.log(err))
            .finally(() => setIsEventLoading(false));

    }

    return <EventContext.Provider value={{

        isEventsLoading,
        events,
        getEvents,

        isEventLoading,
        event,
        getEventById


    }}>
        {children}
    </EventContext.Provider>
}

export default EventContext;