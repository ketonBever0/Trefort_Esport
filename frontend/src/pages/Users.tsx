import React from 'react'
import GoBackButton from '../ui/GoBackButton'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Users() {

  const token = localStorage.getItem('usertoken');

  const [userData, setuserData] = React.useState([]);

  const [userID, setuserID] = React.useState();

  const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:3333/api/users/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => { console.log(data); setuserData(data.users); })
      .catch(error => console.error(error));
  }, [])

  function navigateToUserProfile(clickedID:any) {
    fetch(`http://localhost:3333/api/users/${clickedID}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => { console.log(data); navigate('/')})
      .catch(error => console.error(error));
  }


  return (
    <div className='container'>
      <div className='d-flex'>
        <GoBackButton />
      </div>

      <div className='row gap-1 container justify-content-center'>
        <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span>Felhasználók</span></div>
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
            userData && userData.map(user => (

              <div className="nk-info-box d-flex gap-3 pl-30 clanusers_col-lg-custom clanuser">
                <div className='clanUserImgContainer'>
                  <img width={'100px'} className='clanuserImage' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                </div>
                <div className='row align-items-center'>
                  <h3 className='text-main-1'>{user.username}</h3>
                  <p className='lead mb-10'>klán neve</p>
                  <p>{user.description}</p>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>


  )
}

export default Users