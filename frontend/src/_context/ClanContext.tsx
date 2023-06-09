import { createContext, useState, useEffect, useContext } from 'react';
import Notify from '../ui/Toasts';


const ClanContext = createContext<any | null>(null);



export const ClanProvider = ({ children }: any) => {

    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem("usertoken"));
    const [clansData, setClansData] = useState([]);
    const [clanDataByID, setClanDataByID] = useState({});
    const [isClansLoading, setisClansLoading] = useState<boolean>(false);

    const getClans = async (token: any) => {
        setisClansLoading(true);
        await fetch('http://localhost:3333/api/clans/all', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${userToken}`

            }
        }
        )
            .then(res => res.json())
            .then(data => {
                if (!data.message) {setClansData(data.clans)}
            })
            .catch(err => Notify.tError(err))
            .finally(() => setisClansLoading(false));
    }

    const getClanById = async (id: number, token: any) => {
        setisClansLoading(true);
        await fetch(`http://localhost:3333/api/clans/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => { if (!data.message) {setClanDataByID(data.clan); console.log('context data:', data, "context clanData state: ", clanDataByID)} })
            .catch(err => Notify.tError(err))
            .finally(() => setisClansLoading(false));
    }

    return <ClanContext.Provider value={{

        clansData,
        clanDataByID,
        isClansLoading,
        getClans,
        getClanById
        
    }}>{children}</ClanContext.Provider>

}

export default ClanContext;