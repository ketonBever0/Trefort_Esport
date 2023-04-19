import { createContext } from "react";

const EventContext = createContext<any | null>(null);

export const EventProvider = ({ children }: any) => {



    

    return <EventContext.Provider value={{

    }}>
        {children}
    </EventContext.Provider>
}

