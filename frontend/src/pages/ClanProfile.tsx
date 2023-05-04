import React, { useState } from 'react'
import Button2 from '../ui/Button2';
import './_css/clanProfile.css'

function ClanProfile() {

  const [editData, setEditData] = useState(false);

  return (
    <div>
      <section className='bg-dark-1'>
        <div className="container pb-5">
          <div className='row'>
            <div className="justify-content-start d-flex pl-70 mt-40 mb-40">
              <Button2 content="⭠ Vissza" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4 bg-dark-4">
                <div className="card-body text-center">
                  <img src='data:image/png;base64,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'
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />

                  <p className="my-3 lead text-white fw-bold text-center">klan_123</p>
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


              <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span><span className='text-main-1'>klan_123</span>klán tagjai<span> </span></div>
                <table className="nk-table">
                  <tbody className='container'>
                    <tr className='d-flex row overflow-hidden'>
                      <th className='col-md'>Ábécé sorrend</th>
                      <th className='col-md'>Legutolsó regisztráció</th>
                      <th className='col-md col-lg-3'>
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