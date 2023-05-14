import { createContext, useState, useEffect, useContext } from 'react';
import Notify from '../ui/Toasts';


const ClanContext = createContext<any | null>(null);



export const ClanProvider = ({ children }: any) => {

    const [ClansData, setClansData] = useState([]);

    // const getClans = async (token: any) => {
    //     await fetch('http://localhost:3333/api/clans/all', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //         }
    //     }
    //     )
    //         .then(res => res.json())
    //         .then(data => {
    //             if (!data.message) setClans(data.events);
    //         })
    //         .catch(err => console.log(err))
    //         .finally(() => );
    // }


    return <ClanContext.Provider value={{

        
    }}>{children}</ClanContext.Provider>

}

export default ClanContext;