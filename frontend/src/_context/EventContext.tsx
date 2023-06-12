import { createContext, useState } from "react";
import Notify from "../ui/Toasts";

const EventContext = createContext<any | null>(null);

export const EventProvider = ({ children }: any) => {

    const [isEventsLoading, setIsEventsLoading] = useState<boolean>(false);
    const [events, setEvents] = useState([]);

    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem("usertoken"));

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
                if (!data.message) {setEvents(data.events); sessionStorage.setItem("eventsNumberSSN", data.events.length)};
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
            .then(data => { 
                if (!data.message) {
                setEvent(data);
                sessionStorage.removeItem("eventByIdSSN");
                const eventByIdStringified = JSON.stringify(data);
                sessionStorage.setItem("eventByIdSSN", eventByIdStringified);
            } 
        })
            .catch(err => console.log(err))
            .finally(() => setIsEventLoading(false));

    }

    const updateEvent = (id:any, adat:any) => {
        fetch(`http://localhost:3333/api/events/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify(adat)
        })
            .then(res => res.json())
            .then(response => {
                if (response.message?.includes("Sikeres")) {
                    Notify.tSuccess(response.message);
                } else {
                    Notify.tError("A dátum helyes formátuma: év-hónap-nap");
                }
            })
            .catch(err => console.log(err));

    }

    return <EventContext.Provider value={{

        isEventsLoading,
        events,
        getEvents,
        isEventLoading,
        event,
        getEventById,
        updateEvent

    }}>
        {children}
    </EventContext.Provider>
}

export default EventContext;