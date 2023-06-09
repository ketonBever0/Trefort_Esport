import { useContext, useEffect, useState } from 'react';
import './_css/input.css';
import './_css/myProfile.css'
import UserContext from '../_context/UserContext';
import Button2 from '../ui/Button2';
import GoBackButton from '../ui/GoBackButton';
import Notify from '../ui/Toasts';

function MyProfile() {

  const [editData, setEditData] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editDescr, setEditDescr] = useState(false);

  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-3.png')")
  }, [])


  // function myFunction() {
  //   var pwinput: any = document.getElementById("regijelszo");

  //   if (pwinput.type === "password") {
  //     pwinput.type = "text";
  //   } else {
  //     pwinput.type = "password";
  //   }
  // }

  const {
    userUpdate,
    userData,
    userToken
  } = useContext(UserContext);


  // const string = "5650\nTelepülés\nUtca út\nházszám";

  // const stringArray = string.split("\n");
  // useEffect(() => {
  //   console.log(stringArray)
  //   stringArray.forEach((i) => {
  //     console.log(i)
  //   })

  //   console.log("Tömb hossza: " + stringArray.length)

  //   // console.log(stringArray[1]);

  // }, [])

  const [updateUserPayload, setUpdateUserPayload] = useState(userData?.user);

  useEffect(() => {
    if (!userData) {
      userUpdate();
    }
  }, [])

  const [description, setDescription] = useState<string | null>(null);
  const [isDescrSaving, setIsDescrSaving] = useState(false);

  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (userData) {
      setUpdateUserPayload(userData.user);
      setDescription(userData.user?.description)
      setAddress(userData.user?.address?.split('\n'));
    }
  }, [userData])

  if (userData) {
    var { user } = userData;
  }



  const saveDescr = async () => {
    setIsDescrSaving(true);


    await fetch("http://localhost:3333/api/users", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify(updateUserPayload)
    })
      .then(res => res.json())
      .then(response => {
        if (response.message?.includes("Sikeres")) {
          Notify.tSuccess(response.message);
          userUpdate();
          setDescription(null);
          setEditDescr(false);
          setDescription(userData.user?.description);
          revertEditForm();
        } else {
          Notify.tError(response.message);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setIsDescrSaving(false));
  }

  const [editDataForm, setEditDataForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    educationNumber: "",
    username: "",
    email: ""
  });


  const [editAddress, setEditAddress] = useState({
    postcode: "",
    city: "",
    street: "",
    address: ""
  });

  const handleEditAddressChange = (e: any) => {

    setEditAddress((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

  }

  const updateEditAddress = () => {
    setUpdateUserPayload((prev: any) => ({
      ...prev,
      address: `${editAddress.postcode}\n${editAddress.city}\n${editAddress.street}\n${editAddress.address}`
    }));
  }

  useEffect(() => {
    address && setEditAddress({
      postcode: address[0],
      city: address[1],
      street: address[2],
      address: address[3]
    })

    setEditDataForm(
      {
        firstName: user?.firstName,
        lastName: user?.lastName,
        address: user?.address,
        educationNumber: user?.educationNumber,
        username: user?.username,
        email: user?.email
      })
  }, [userData, address])


  const handleEditDataFormChange = (e: any) => {
    setEditDataForm((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const revertEditForm = () => {
    setEditDataForm({
      firstName: user?.firstName,
      lastName: user?.lastName,
      address: user?.address,
      educationNumber: user?.educationNumber || "",
      username: user?.username,
      email: user?.email
    });

    setUpdateUserPayload(userData?.user);

    address && setEditAddress({
      postcode: address[0],
      city: address[1],
      street: address[2],
      address: address[3]
    })

  }

  const scrollBack = () => {

    document.getElementById("myProfileData")!.scrollIntoView({ behavior: 'smooth' });
  }


  const changePayload = (e: any) => {
    setUpdateUserPayload((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [isUserDataSaving, setIsUserDataSaving] = useState(false);

  const updateUser = async () => {
    setIsUserDataSaving(true);
    await fetch("http://localhost:3333/api/users", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify(updateUserPayload)
    })
      .then(res => res.json())
      .then(response => {
        if (response.message?.includes("Sikeres")) {
          Notify.tSuccess(response.message);
          userUpdate();
          setEditData(false);
          revertEditForm();
        } else {
          Notify.tError(response.message);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setIsUserDataSaving(false));
  }



  return (
    <div>
      <section id='main-container'>
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
                  <img
                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    src={
                      user?.username ?
                        `http://localhost:8000/profilepicture/${user?.username}_profile_picture.png`
                        :
                        '/src/assets/avatar_placeholder.png'
                    }
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/src/assets/avatar_placeholder.png";
                    }}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />

                  <p className="my-3 lead text-white fw-bold text-center">{user?.username}</p>
                  <hr />

                  <div className='mt-20 d-flex justify-content-center gap-3'>
                    <p className='lead fw-bold'>RANG:</p> <p className='d-flex align-items-center'>felhasználó</p>
                  </div>
                  {/* <p className=''>ONLINE<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle-fill h6 position-absolute mt-4 m-auto text-success m-auto"></i></p>
                  <p className=''>Legutóbb online: 26 perce<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle h6 position-absolute mt-4 m-auto text-success m-auto"></i></p>
                  <p className=''>OFFLINE<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle-fill h6 position-absolute mt-4 m-auto text-secondary m-auto"></i></p>
                  <p>BANNED<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle-fill h6 position-absolute mt-4 m-auto text-danger m-auto"></i></p> */}
                  <hr />
                  {
                    editDescr ?
                      <>
                        <div>
                          <div className="form-group myform-group row justify-content-center">
                            <p className='m-0 p-4'>Írj valamit magadról vagy arról, amit éppen gondolsz:</p>
                            <textarea id="leiras" value={updateUserPayload.description} onChange={(e: any) => {
                              if (e.target.value == "") {
                                setDescription(null);
                                setUpdateUserPayload((prev: any) => ({
                                  ...prev,
                                  description: null
                                }))
                              }
                              else {
                                setDescription(e.target.value);
                                setUpdateUserPayload((prev: any) => ({
                                  ...prev,
                                  description: e.target.value
                                }))
                              }


                            }} className="myform-control form-control required bg-dark w-75 m-10" />
                            <div className='row gap-4 p-20 justify-content-center'>
                              <button onClick={() => { saveDescr(); }} className='col-sm-3 col-md-6 nk-btn nk-btn-rounded nk-btn-color-main-1'>Mentés</button>
                              <button onClick={() => { setDescription(userData.user?.description); setEditDescr(false); revertEditForm(); }} className='col-sm-3 col-md-6 col-lg-5 nk-btn nk-btn-sm nk-btn-rounded nk-btn-color-white'>Mégse</button>
                            </div>

                          </div>
                        </div>
                      </>
                      :
                      <>
                        {user?.description == null || user?.description == "" ? <h6>(Nincs megadva leírás)</h6> : <p className='myProfileData p-15 mb-5'>{user?.description}</p>}
                        {
                          <div className='row justify-content-center mb-20'>
                            <button onClick={() => { setDescription(userData.user?.description); setEditDescr(true) }} className='col-sm-4 col-md-3 col-lg-6 nk-btn nk-btn-rounded nk-btn-color-main-1'>Szerkesztés</button>
                          </div>
                        }

                      </>
                  }
                  <hr />
                  <div className='bg-dark-4'>
                    <div className='card-body d-flex justify-content-center gap-2'>
                      <div className=' fw-bold'>
                        Regisztráció dátuma:
                      </div>
                      <div className='col-lg-5 text-start'>
                        {user && user?.registrationDate.slice(0, 10).replaceAll('-', '. ') + '.'}
                      </div>
                    </div>
                    <hr />
                    <div className='card-body  d-flex justify-content-center gap-2 gap-lg-0'>
                      <div className='col-lg-8 fw-bold'>
                        Legutolsó bejelentkezés:
                      </div>
                      <div className='col-lg-5 text-start'>
                        {user && user?.lastLogin.slice(0, 10).replaceAll('-', '. ') + '.'}
                      </div>
                    </div>
                    <hr />
                    <div className='card-body  d-flex justify-content-center gap-2 gap-lg-0'>
                      <Button2 content="Profilom törlése" />
                    </div>
                  </div>



                </div>
                <div className='p-30 bg-dark-2'>
                  <div className='h3 text-sm-h6'>#TAGEK</div>
                  <div className='badges'>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                    <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                  </div>
                </div>

              </div>
              <div className="card mb-4 mb-lg-0 bg-transparent">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3 lead">
                    <li className="list-group-item bg-dark-4 d-flex justify-content-between align-items-center p-10 text-white">
                      <i
                        className="fab fa-discord fa-2xl"
                        style={{ color: "#5865F2" }}
                      />
                      <p className="mb-0">discorduser</p>
                    </li>
                    <li className="list-group-item bg-dark-2 d-flex justify-content-center gap-3 align-items-center p-10">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 50 }}
                      />
                      <p className='mb-0 lead fw-bold  text-main-1'>clan_name</p>
                      <div className="mb-0 text-white">klán tagja</div>
                    </li>

                  </ul>
                </div>
              </div>
              <table className="nk-table mt-30">
                <thead>
                  <tr className='text-center'>
                    <th colSpan={3}>Eredmények</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-bottom'>
                    <th>Játék neve</th>
                    <th>Dátum</th>
                    <th className="text-center">Helyezés</th>
                  </tr>
                  <tr>
                    <td>Valorant</td>
                    <td>2023.11.01.</td>
                    <td className="text-center"><strong>#3</strong></td>
                  </tr>
                  <tr>
                    <td>LOL</td>
                    <td>2023.03.13.</td>
                    <td className="text-center"><strong>#7</strong></td>
                  </tr>
                  <tr>
                    <td>LOL</td>
                    <td>2022.10.04.</td>
                    <td className="text-center"><strong>#5</strong></td>
                  </tr>
                  <tr>
                    <td>Rocket League</td>
                    <td>2022.08.19.</td>
                    <td className="text-center"><strong>#12</strong></td>
                  </tr>
                  <tr>
                    <td>Valorant</td>
                    <td>2022.03.14.</td>
                    <td className="text-center"><strong>#10</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-8">
              <div id='myProfileData' className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Profil adataim<span> </span></div>
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
                                <label className='mb-5' htmlFor='vezeteknev'>Vezetéknév</label>
                                <input type="text" id="vezeteknev" name='firstName' value={editDataForm.firstName} onChange={handleEditDataFormChange}
                                  onBlur={changePayload} defaultValue={user?.firstName} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-9">
                              <div className="form-group myform-group">
                                <label className='mb-5' htmlFor='vezeteknev'>Keresztnév</label>
                                <input type="text" id="keresztnev" name='lastName' value={editDataForm.lastName} onChange={handleEditDataFormChange}
                                  onBlur={changePayload} defaultValue={user?.lastName} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold text-center">Lakcím</div>
                          <div className="col-sm-8 row gap-4 d-flex justify-content-center">
                            <div className="col-md-6 col-lg-5 col-9 d-flex justify-content-center align-items-center">
                              <div className="form-group myform-group">
                                <label className='mb-10' htmlFor='iranyitoszam'>Irányítószám</label>
                                <input type="text" id="iranyitoszam" name='postcode'
                                  value={editAddress?.postcode} onChange={(e: any) => {
                                    handleEditAddressChange(e);
                                  }} onBlur={() => updateEditAddress()}
                                  defaultValue={editAddress?.postcode} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-9 d-flex justify-content-center align-items-center">
                              <div className="form-group myform-group">
                                <label className='mb-10' htmlFor='telepules'>Település</label>
                                <input type="text" id="telepules" name='city'
                                  value={editAddress?.city} onChange={(e: any) => {
                                    handleEditAddressChange(e);
                                  }} onBlur={() => updateEditAddress()}
                                  defaultValue={editAddress?.city} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-9 d-flex justify-content-center align-items-center">
                              <div className="form-group myform-group">
                                <label className='mb-10' htmlFor='kozterulet_nev'>Közterület neve</label>
                                <input type="text" id="kozterulet_nev" name='street'
                                  value={editAddress?.street} onChange={(e: any) => {
                                    handleEditAddressChange(e);
                                  }} onBlur={() => updateEditAddress()}
                                  defaultValue={editAddress?.street} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                            {/* <div className="col-md-6 col-lg-5 col-9 d-flex justify-content-center align-items-center">
                              <div className="form-group myform-group">
                                <label className='mb-10' htmlFor='kozterulet_fajta'>Közterület jellege</label>
                                <input type="text" id="kozterulet_fajta" className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div> */}
                            <div className="col-md-3 col-6">
                              <div className="form-group myform-group">
                                <label className='mb-10' htmlFor='hazszam'>Házszám</label>
                                <input type="text" id="hazszam" name='address'
                                  value={editAddress?.address} onChange={(e: any) => {
                                    handleEditAddressChange(e);
                                  }} onBlur={() => updateEditAddress()}
                                  defaultValue={editAddress?.address} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold text-center">Oktatási azonosító</div>
                          <div className="col-sm-8 row d-flex align-items-center justify-content-center">
                            <div className="col-md-5 col-9">
                              <div className="form-group myform-group">
                                <input type="text" id="omazonosito" name='educationNumber' value={editDataForm.educationNumber}
                                  onChange={(e: any) => {
                                    if (e.target.value == "") setEditDataForm((prev: any) => ({ ...prev, [e.target.name]: "" }));
                                    else setEditDataForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
                                  }} onBlur={(e: any) => {
                                    if (e.target.value == "") setUpdateUserPayload((prev: any) => ({ ...prev, [e.target.name]: null }))
                                    else setUpdateUserPayload((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
                                  }} defaultValue={user?.educationNumber} className="myform-control form-control required bg-dark p-10 align-items-center" />
                              </div>
                            </div>
                            <div className='col-md-6'><i className="bi bi-info-circle-fill lead col-1"></i> A diákigazolvány hátulján található 11 jegyű számsor.</div>
                          </div>
                        </div>
                        <hr />
                        {/* <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold text-center">E-mail cím</div> */}
                        {/* <div className="col-sm-8 row d-flex align-items-center justify-content-center">
                            <div className="col-md-10 col-9">
                              <div className="form-group myform-group">
                                <input type="email" id="email" name='email' value={editDataForm.email} onChange={handleEditDataFormChange}
                                  onBlur={changePayload} defaultValue={user?.email} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div> */}
                        {/* <div className='col-md-6'><i className="bi bi-info-circle-fill lead col-1"></i> pelda@email.com</div> */}
                        {/* </div> */}
                        {/* <hr /> */}
                        <div className="row m-5">
                          <div style={{ hyphens: "auto", WebkitHyphens: 'auto', msHyphens: 'auto' }} className="col-sm-4 m-auto myProfileLabel fw-bold text-center">Felhasználó­­név</div>
                          <div className="col-sm-8 row d-flex justify-content-center align-items-center">
                            <div className="col-md-5 col-9">
                              <div className="form-group myform-group">
                                <input type="text" id="felhasznalonev" name='username' value={editDataForm.username} onChange={handleEditDataFormChange}
                                  onBlur={changePayload} defaultValue={user?.username} className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                            <div className='col-md-6'> <i className="bi bi-info-circle-fill lead col-1"></i> A felhasználónév nem tartalmazhat szóközt.</div>
                          </div>
                        </div>
                        <div className='d-flex justify-content-end row gap-4 p-20'>
                          <button onClick={() => { scrollBack(); revertEditForm(); setEditData(false); }} className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'>Kilépés</button>
                          <button className='col-sm-4 col-lg-3 nk-btn nk-btn-rounded text-dark'
                            onClick={() => revertEditForm()}>Alaphelyzet</button>
                          <button className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'
                            onClick={() => updateUser()}>Mentés</button>
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
                              {user?.firstName} {user?.lastName}
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold">Lakcím</div>
                          <div className="col-sm-8 row">
                            <div className="sm-sm-col-6 myProfileData">
                              {/* {stringArray[0]} {stringArray[1]} {stringArray[2]} {stringArray[3]} */}
                              {address && <>{address[0]} {address[1]} {address[2]} {address[3]}</>}

                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold">Oktatási azonosító</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              {(user?.educationNumber == null || user?.educationNumber == "") ? "Nincs megadva" : user?.educationNumber}
                              {/* 71608965663 */}
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold">E-mail cím</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              {user?.email}
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel fw-bold">Felhasználónév</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              {user?.username}
                            </div>
                          </div>
                        </div>
                        <div className='d-flex row justify-content-end gap-5 p-20'>
                          {
                            editPassword ?
                              <></>
                              :
                              <button onClick={() => { setEditPassword(true) }} style={{ whiteSpace: 'normal' }} className="col-sm-4 col-lg-3 nk-btn nk-btn-sm nk-btn-rounded nk-btn-color-white">Jelszó módosítása</button>
                          }

                          <button onClick={() => { scrollBack(); setEditData(true); }} style={{ whiteSpace: 'normal' }} className='col-sm-4 col-lg-3 nk-btn nk-btn-rounded nk-btn-color-main-1'>Adatok módosítása</button>
                        </div>

                        {
                          editPassword ?
                            <>
                              <hr />
                              <div className="row m-5">
                                <div className="col-sm-4 m-auto myProfileLabel fw-bold">Régi jelszó</div>
                                <div className="col-sm-8 row">
                                  <div className="col-md-6">
                                    <div className="form-group myform-group row">
                                      <input type="password" id="regijelszo" className="myform-control form-control required bg-dark p-10 col" required />
                                      <span className='col-2 h4 m-auto row justify-content-center'><i className="bi bi-eye-slash"></i></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row m-5">
                                <div className="col-sm-4 m-auto myProfileLabel fw-bold">Új jelszó</div>
                                <div className="col-sm-8 row">
                                  <div className="col-md-6">
                                    <div className="form-group myform-group">
                                      <input type="password" id="ujjelszo" className="myform-control form-control required bg-dark p-10" required />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='d-flex row justify-content-end gap-5 p-20'>
                                <button style={{ whiteSpace: 'normal' }} className='col-sm-4 col-lg-3 nk-btn nk-btn-rounded nk-btn-color-main-1'>Jelszó módosítása</button>
                                <button onClick={() => { setEditPassword(false) }} className='col-sm-3 col-lg-2 nk-btn nk-btn-sm nk-btn-rounded nk-btn-color-white'>Mégsem</button>
                              </div>
                            </>
                            :

                            <></>
                        }
                      </>
                  }
                </div>
              </div>
              <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Saját bejegyzéseim<span> </span></div>
              <div className="nk-blog-grid p-20 row d-flex justify-content-center">
                <div className="nk-blog-post col-md-6 col-12">
                  <a href="blog-article.html" className="nk-post-img">
                    <img
                      src="assets/images/post-5-mid.jpg"
                      alt="He made his passenger captain of one"
                    />
                    <span className="nk-post-comments-count">13</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-5">Indie</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4">
                    <a href="blog-article.html">He made his passenger captain of one</a>
                  </h2>
                  <div className="nk-post-text">
                    <p>
                      Just then her head struck against the roof of the hall: in fact
                      she was now more than nine feet high, and she at once took up the
                      little golden key and hurried off to the garden door...
                    </p>
                  </div>
                  <div className="nk-gap" />
                  <a
                    href="blog-article.html"
                    className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >
                    Read More
                  </a>
                  <div className="nk-post-date float-right">
                    <span className="fa fa-calendar" /> Jul 23, 2018
                  </div>
                </div>
                <div className="nk-blog-post col-md-6 col-12">
                  <a href="blog-article.html" className="nk-post-img">
                    <img
                      src="assets/images/post-5-mid.jpg"
                      alt="He made his passenger captain of one"
                    />
                    <span className="nk-post-comments-count">13</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-5">Indie</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4">
                    <a href="blog-article.html">He made his passenger captain of one</a>
                  </h2>
                  <div className="nk-post-text">
                    <p>
                      Just then her head struck against the roof of the hall: in fact
                      she was now more than nine feet high, and she at once took up the
                      little golden key and hurried off to the garden door...
                    </p>
                  </div>
                  <div className="nk-gap" />
                  <a
                    href="blog-article.html"
                    className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >
                    Read More
                  </a>
                  <div className="nk-post-date float-right">
                    <span className="fa fa-calendar" /> Jul 23, 2018
                  </div>
                </div>
                <div className="nk-blog-post col-md-6 col-12">
                  <a href="blog-article.html" className="nk-post-img">
                    <img
                      src="assets/images/post-5-mid.jpg"
                      alt="He made his passenger captain of one"
                    />
                    <span className="nk-post-comments-count">13</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-5">Indie</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4">
                    <a href="blog-article.html">He made his passenger captain of one</a>
                  </h2>
                  <div className="nk-post-text">
                    <p>
                      Just then her head struck against the roof of the hall: in fact
                      she was now more than nine feet high, and she at once took up the
                      little golden key and hurried off to the garden door...
                    </p>
                  </div>
                  <div className="nk-gap" />
                  <a
                    href="blog-article.html"
                    className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >
                    Read More
                  </a>
                  <div className="nk-post-date float-right">
                    <span className="fa fa-calendar" /> Jul 23, 2018
                  </div>
                </div>
                <div className="nk-blog-post col-md-6 col-12">
                  <a href="blog-article.html" className="nk-post-img">
                    <img
                      src="assets/images/post-5-mid.jpg"
                      alt="He made his passenger captain of one"
                    />
                    <span className="nk-post-comments-count">13</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-5">Indie</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4">
                    <a href="blog-article.html">He made his passenger captain of one</a>
                  </h2>
                  <div className="nk-post-text">
                    <p>
                      Just then her head struck against the roof of the hall: in fact
                      she was now more than nine feet high, and she at once took up the
                      little golden key and hurried off to the garden door...
                    </p>
                  </div>
                  <div className="nk-gap" />
                  <a
                    href="blog-article.html"
                    className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >
                    Read More
                  </a>
                  <div className="nk-post-date float-right">
                    <span className="fa fa-calendar" /> Jul 23, 2018
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

export default MyProfile