import React, { useState, useEffect, useContext } from 'react'
import Button2 from '../ui/Button2';
import './_css/clanProfile.css'
import GoBackButton from '../ui/GoBackButton';
import { useParams } from 'react-router';
import ClanContext from '../_context/ClanContext';

function ClanProfile() {

  const [editData, setEditData] = useState(false);
  const { getClanById, clanDataByID, getClans, clansData} = useContext(ClanContext);
  const token = localStorage.getItem('usertoken');

  const { id } = useParams();

  useEffect(() => {

    const fetchClanDataByID = async () => {
      await Promise.all([getClanById(id), getClans()]);
      console.log('clanprofile id and clanDataById: ', id, clanDataByID, clansData)
    };
    if (id) {
      fetchClanDataByID();
    }
  }, []);

  return (
    <div>
      <section>
        <div className="container pb-5">
          <div className='row'>
            <div className="justify-content-start d-flex pl-70 mb-40">
              <GoBackButton />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4 bg-dark-4">
                <div className="card-body text-center">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />

                  <p className="my-3 lead text-white fw-bold text-center">{clanDataByID?.name}</p>
                  <hr />
                  <Button2 content="Csatlakozom!" />
                  <hr />

                  <div className='bg-dark-4'>
                    <div className='card-body d-flex justify-content-center gap-2'>
                      <div className=' fw-bold'>
                        Regisztráció dátuma:
                      </div>
                      <div className='col-lg-5 text-start'>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-lg-8">
              <div id='myProfileData' className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Klán adatai<span> </span></div>
              <div className="card mb-4 bg-dark-4">
                <div className="card-body">

                  {
                    editData
                      ?
                      <>
                        {/* INPUTOK */}
                        <form>
                        <div>
                          <div className="row m-5">
                            <div className="col-sm-4 m-auto myProfileLabel fw-bold text-center">Név</div>
                            <div className="col-sm-8 row d-flex align-items-center justify-content-center">
                              <div className="col-md-5 col-9">
                                <div className="form-group myform-group">
                                  <input 
                                  type="nev" 
                                  id="nev" 
                                  name='nev' 
                                  className="myform-control form-control required bg-dark p-10" 
                                  required 
                                  defaultValue={clanDataByID?.name}
                                  />
                                </div>
                              </div>
                              <div className='col-md-6'></div>
                            </div>
                          </div>
                          <hr />
                          <div className="row m-5">
                            <div className="col-sm-4 m-auto myProfileLabel fw-bold text-center">E-mail cím</div>
                            <div className="col-sm-8 row d-flex align-items-center justify-content-center">
                              <div className="col-md-5 col-9">
                                <div className="form-group myform-group">
                                  <input 
                                  type="email" 
                                  id="email" 
                                  name='email' 
                                  className="myform-control form-control required bg-dark p-10" 
                                  required
                                  defaultValue={clanDataByID?.clanEmail}
                                   />
                                </div>
                              </div>
                              <div className='col-md-6 text-center'><i className="bi bi-info-circle-fill lead"></i> pelda@email.com</div>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <div className='d-flex justify-content-end row gap-4 p-20'>
                          <button className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'>Mentés</button>
                          <button className='col-sm-4 col-lg-3 nk-btn nk-btn-rounded text-dark'
                          // onClick={() => revertEditForm()}
                          type="reset" 
                          value="Reset"
                          >Alaphelyzet</button>
                          <button
                            onClick={() => {
                              // scrollBack(); 
                              // revertEditForm(); 
                              setEditData(false);
                            }}
                            className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'>Kilépés</button>
                        </div>
                        </form>
                        {/* INPUT VÉGE */}
                      </>
                      :
                      <>
                        {/* DINAMIKUS ADATOK */}
                        <div>

                          <div className="row m-5">
                            <div className="col-sm-4 m-auto myProfileLabel fw-bold">Név</div>
                            <div className="col-sm-8 row">
                              <div className="sm-col-6 myProfileData">
                                {clanDataByID?.name}
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="row m-5">
                            <div className="col-sm-4 m-auto myProfileLabel fw-bold">E-mail cím</div>
                            <div className="col-sm-8 row">
                              <div className="sm-col-6 myProfileData">
                                {clanDataByID?.clanEmail}
                              </div>
                            </div>
                          </div>

                          <div className='d-flex row justify-content-end gap-5 p-20'>
                            <button onClick={() => { setEditData(true); }} style={{ whiteSpace: 'normal' }} className='col-sm-4 col-lg-3 nk-btn nk-btn-rounded nk-btn-color-main-1'>Adatok módosítása</button>
                          </div>
                        </div>

                      </>
                  }

                </div>
              </div>
              <div className='row d-flex justify-content-center'>
                <div className="card p-0 bg-transparent w-50">
                  <div className="card-body p-0 ">
                    <ul className="list-group list-group-flush rounded-3 lead">
                      <li className="list-group-item bg-dark-4 d-flex justify-content-between align-items-center p-10 text-white">
                        <i
                          className="fab fa-discord fa-2xl"
                          style={{ color: "#5865F2" }}
                        />
                        <p className="mb-0">discorduser</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span className='text-main-1'>{clanDataByID?.name}</span>klán tagjai<span> </span></div>
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
                  clansData && clansData.map((user: any, index: React.Key) => (
                    <div className="nk-info-box d-flex gap-3 pl-30 clanusers_col-lg-custom clanuser border">
                    <div className='clanUserImgContainer'>
                      <img width={'100px'} className='clanuserImage' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                    </div>
                    <div className='row align-items-center'>
                      <h3 className='text-main-1'>hi</h3>
                      <p className='lead mb-10'>klán neve</p>
                      <p>Leírás... It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      <div className='d-flex justify-content-end'> <button className='nk-btn clanKickBtn nk-btn-rounded text-dark'>Eltávolítás</button></div>
                    </div>
                  </div>
            ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClanProfile