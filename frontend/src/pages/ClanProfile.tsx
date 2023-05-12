import React, { useState } from 'react'
import Button2 from '../ui/Button2';
import './_css/clanProfile.css'
import GoBackButton from '../ui/GoBackButton';

function ClanProfile() {

  const [editData, setEditData] = useState(false);

  return (
    <div>
      <section className='bg-dark-1'>
        <div className="container pb-5">
          <div className='row'>
            <div className="justify-content-start d-flex pl-70 mt-40 mb-40">
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

                  <p className="my-3 lead text-white fw-bold text-center">klan_123</p>
                  <hr />
                  <Button2 content="Csatlakozom!" />
                  <hr />

                  <div className='bg-dark-4'>
                    <div className='card-body d-flex justify-content-center gap-2'>
                      <div className=' fw-bold'>
                        Regisztráció dátuma:
                      </div>
                      <div className='col-lg-5 text-start'>
                        valamidátum
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
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold text-center">Név</div>
                          <div className="col-sm-8 row gap-4 d-flex justify-content-center">
                            <div className="col-md-6 col-lg-5 col-9">
                              <div className="form-group myform-group">
                                <label className='mb-5' htmlFor='nev'>Név</label>
                                <input type="text" id="nev" name='nev' className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold text-center">E-mail cím</div>
                          <div className="col-sm-8 row d-flex align-items-center justify-content-center">
                            <div className="col-md-5 col-9">
                              <div className="form-group myform-group">
                                <input type="email" id="email" name='email' className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                            <div className='col-md-6'><i className="bi bi-info-circle-fill lead col-1"></i> pelda@email.com</div>
                          </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-end row gap-4 p-20'>
                          <button className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'>Mentés</button>
                          <button className='col-sm-4 col-lg-3 nk-btn nk-btn-rounded text-dark'
                          // onClick={() => revertEditForm()}
                          >Alaphelyzet</button>
                          <button
                            //onClick={() => { scrollBack(); revertEditForm(); setEditData(false); }} 
                            className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'>Kilépés</button>
                        </div>
                        {/* INPUT VÉGE */}
                      </>
                      :
                      <>
                        {/* DINAMIKUS ADATOK */}
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold">Név</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              {/* {user?.firstName} {user?.lastName} */}
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold">E-mail cím</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              {/* {user?.email} */}
                            </div>
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
              <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span className='text-main-1'>klan_123</span>klán tagjai<span> </span></div>
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
                <div className="nk-info-box d-flex gap-3 pl-30 clanusers_col-lg-custom clanuser">
                  <div className='clanUserImgContainer'>
                    <img width={'100px'} className='clanuserImage' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                  </div>
                  <div className='row align-items-center'>
                    <h3 className='text-main-1'>user_43</h3>
                    <p className='lead mb-10'>klán neve</p>
                    <p>Leírás... It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className='d-flex justify-content-end'> <button className='nk-btn clanKickBtn nk-btn-rounded text-dark'>Eltávolítás</button></div>
                  </div>
                </div>
                <div className="nk-info-box d-flex gap-4 pl-40 clanusers_col-lg-custom">
                  <div>
                    <img width={'100px'} src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                  </div>
                  <div className='row align-items-center '>
                    <h3 className='text-main-1'>user_43</h3>
                    <p className='lead mb-10'>klán neve</p>
                    <p>Leírás... It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </div>
                <div className="nk-info-box d-flex gap-3 pl-30 clanusers_col-lg-custom">
                  <div>
                    <img width={'100px'} src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                  </div>
                  <div className='row align-items-center'>
                    <h3 className='text-main-1'>user_43</h3>
                    <p className='lead mb-10'>klán neve</p>
                    <p>Leírás... It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </div>
                <div className="nk-info-box d-flex gap-3 pl-30 clanusers_col-lg-custom">
                  <div>
                    <img width={'100px'} src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
                  </div>
                  <div className='row align-items-center'>
                    <h3 className='text-main-1'>user_43</h3>
                    <p className='lead mb-10'>klán neve</p>
                    <p>Leírás... It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClanProfile