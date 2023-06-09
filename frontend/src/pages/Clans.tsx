import React, { useEffect, useContext } from 'react'
import GoBackButton from '../ui/GoBackButton'
import ClanContext from '../_context/ClanContext';
import { Link } from 'react-router-dom';

function Clans() {

  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
  }, [])

  const { isClansLoading, clansData, ClansDataByID, getClans, getClanById } = useContext(ClanContext);

  useEffect(() => {
    getClans();
    console.log('clansData: ', clansData)
  }, [])


  return (
    <div className='container'>
      <div className='d-flex'>
        <GoBackButton />
      </div>

      <div className='row gap-1 container justify-content-center'>
        <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span>Klánok</span></div>
        <table className="nk-table mb-20">
          <tbody className='container bg-transparent border-none'>
            <tr className='row bg-transparent text-center'>
              <th className='col-md'>Ábécé sorrend</th>
              <th className='col-md'>Legutolsó regisztráció</th>
              <th className='col-md'>
                <form action="#" method="post" className="nk-form nk-form-style-2">
                  <div className="input-group">
                    <input type="text" name="s" className="form-control bg-dark" placeholder="Keresés..." />
                    <button className="nk-btn nk-btn-color-main-1">
                      <span className="fa fa-search" />
                    </button>
                  </div>
                </form>
              </th>
            </tr>
          </tbody>
        </table>

        <div className='row d-flex gap-3 p-5 justify-content-center'>


          {
            clansData && (
              clansData.map((clan: any, index: React.Key) => (
                <Link style={{ textDecoration: 'none' }} to={`/clanprofile/${clan?.id}`}>
                <div className="nk-info-box d-flex gap-3 pl-30 clanusers_col-lg-custom clanuser">
                  <div className='clanUserImgContainer'>
                    <img width={'100px'} className='clanuserImage' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                  </div>
                  <div className='row align-items-center'>
                    <h3 className='text-main-1'>{clan?.name}</h3>
                    <p>Státusz: {clan?.status}</p>
                    <p>Leader: {clan?.leaderId}</p>
                  </div>
                </div>
                </Link>
              )
              )
            )
          }



        </div>
      </div>
    </div>


  )
}

export default Clans