import React from 'react';
import GoBackButton from '../ui/GoBackButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

function Users() {

  const token = localStorage.getItem('usertoken');

  const [userData, setuserData] = React.useState<string[]>([]);

  const [userID, setuserID] = React.useState();

  const navigate = useNavigate();


  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")

    fetch('http://localhost:3333/api/users/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => { console.log(data); setuserData(data.users); })
      .catch(error => {console.error(error); navigate('*')});
  }, []);

  function navigateToUserProfile(clickedID: any) {
    fetch(`http://localhost:3333/api/users/${clickedID}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => { console.log(data); navigate('/') })
      .catch(error => console.error(error));
  };

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
              <th className='col-md hoverMain'>Ábécé sorrend</th>
              <th className='col-md hoverMain'>Legutolsó regisztráció</th>
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
        <div className='container'>
          <div className='row d-flex gap-3 justify-content-center'>

            {
              userData.length != 0
                ?
                userData.map((user: any, index: React.Key) => (

                  <div className='col'>
                    <Link style={{ textDecoration: 'none' }} to={`/profile/${user.id}`}>

                      <div className="nk-info-box d-flex gap-3 pl-30 users_col-custom clanuser">
                        <div className='clanUserImgContainer'>
                          <img width={'100px'} className='clanuserImage' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                        </div>
                        <div className='row align-items-center'>
                          <h4 className='text-main-1'>{user.username}</h4>
                          {/* {
                        user?.userClan[0].clan.name ? <li className="list-group-item bg-dark-2 d-flex justify-content-center gap-3 align-items-center p-10 ">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            style={{ width: 50 }}
                          />
                          <p className='mb-0 lead fw-bold  text-main-1'>{user?.userClan[0].clan.name}</p>
                          <div className="mb-0 text-white">klán tagja</div>
                        </li>
                          :
                          <></>
                      } */}

                          <p>{user.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                ))
                :
                <div className='d-flex justify-content-center'>
                  <BeatLoader color="#dd163b" className='mt-30' />
                </div>
            }
          </div>
        </div>

      </div>
    </div>


  )
}

export default Users