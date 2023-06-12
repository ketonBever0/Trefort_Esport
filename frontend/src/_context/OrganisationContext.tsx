import { createContext, useState, useEffect, useContext } from 'react';
import Notify from '../ui/Toasts';


const OrganisationContext = createContext<any | null>(null);

export const OrganisationProvider = ({ children }: any) => {

    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem("usertoken"));
    const [isOrgsLoading, setIsOrgsLoading] = useState<boolean>(false);
    const [orgs, setOrgs] = useState([]);

    const getOrganizations = async (token: any) => {
        setIsOrgsLoading(true);
        await fetch('http://localhost:3333/api/organizations', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${userToken}`
            }
        }
        )
            .then(res => res.json())
            .then(data => {
                if (!data.message) {setOrgs(data.orgs); sessionStorage.setItem("orgsNumberSSN", data.orgs.length)};
            })
            .catch(err => console.log(err))
            .finally(() => setIsOrgsLoading(false));
    }

    const acceptOrg = async (id:any) => {
        await fetch(`http://localhost:3333/api/organizations/accept/${id}`, {
          method: 'PATCH',
          headers: {
              'Content-type': 'application/json',
              "Authorization": `Bearer ${userToken}`
          }
      }
      )
          .then(res => res.json())
          .then(data => {
              if (!data.message) {Notify.tSuccess("Elfogadva!")}
              else {Notify.tSuccess(data.message)}
              ;
          })
          .catch(err => console.log(err));
      }

      const rejectOrg = async (id:any) => {
        await fetch(`http://localhost:3333/api/organizations/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-type': 'application/json',
              "Authorization": `Bearer ${userToken}`
          }
      }
      )
          .then(res => res.json())
          .then(data => {
              if (!data.message) {Notify.tError("Hiba történt.")}
              else {Notify.tSuccess(data.message)}
              ;
          })
          .catch(err => console.log(err));
      }

      const [crumbs, setCrumbs] = useState(
        [
            { title: '', path: '/' },
            { title: '', path: '/' },
            { title: '', path: '/' }
          ]
      );

    return <OrganisationContext.Provider value={{
        getOrganizations,
        isOrgsLoading,
        orgs,
        acceptOrg,
        rejectOrg,
        crumbs,
        setCrumbs

    }}>{children}</OrganisationContext.Provider>

}

export default OrganisationContext;