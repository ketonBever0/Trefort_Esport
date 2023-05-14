import { createContext, useState, useEffect, useContext } from 'react';
import Notify from '../ui/Toasts';


const OrganisationContext = createContext<any | null>(null);

export const OrganisationProvider = ({ children }: any) => {



    return <OrganisationContext.Provider value={{

        
    }}>{children}</OrganisationContext.Provider>

}

export default OrganisationContext;