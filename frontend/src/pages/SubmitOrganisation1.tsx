import { useContext, useEffect, useRef, useState, } from 'react';
import Button2 from '../ui/Button2';
import { useNavigate } from 'react-router';
import Notify from '../ui/Toasts';
import UserContext from '../_context/UserContext';

function SubmitOrganisation1() {


  const navigate = useNavigate();

  const {
    userToken
  } = useContext(UserContext);


  // const inputRefs: any = {
  //   name: useRef(null),
  //   type: useRef(null),
  //   kepviselo_nev: useRef(null),
  //   iranyitoszam: useRef(null),
  //   telepules: useRef(null),
  //   kozterulet_nev: useRef(null),
  //   kozterulet_jelleg: useRef(null),
  //   hazszam: useRef(null)

  // };

  const [filledStatus, setFilledStatus] = useState({});


  const [orgFormData, setOrgFormData] = useState({
    name: "",
    picture: "nincs még",
    location: "",
    email: "",
    phoneNumber: "",
    type: "",
    description: ""
  })


  const [location, setLocation] = useState({
    postcode: "",
    city: "",
    street: "",
    number: ""
  });


  const handleLocationChange = (e: any) => {
    setLocation((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  useEffect(() => {
    // console.log(location);
    setOrgFormData((prev: any) => ({
      ...prev,
      location: `${location.postcode}\n${location.city}\n${location.street}\n${location.number}`
    }))
  }, [location]);


  const handleInputChange = (e: any) => {
    // console.log(inputRefs[fieldName]);
    // const inputRef = inputRefs[fieldName];
    // const inputValue = inputRef && inputRef.current ? inputRef.current.value : 'g';
    // setFilledStatus((prevStatus) => ({ ...prevStatus, [fieldName]: inputValue }));
    // console.log(filledStatus);


    setOrgFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value

    }));


  };

  const areInputsFilled = async () => {
    // const values = Object.values(filledStatus);
    // const allFilled = values.every(value => !!value);

    const { name, phoneNumber, email, type, description } = orgFormData;

    if (name != "" && type != "" && type != null && email != "" && phoneNumber != "" && description != "") {
      await fetch('http://localhost:3333/api/organizations/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`
        },
        body: JSON.stringify(orgFormData)
      })
        .then(res => res.json())
        .then(response => {
          if (response.message?.includes("Sikeres")) {
            Notify.tSuccess(response.message);
          } else {
            Notify.tError(response.message);
          }
        })

    } else {
      Notify.tError("Nincs minden kötelező mező kitöltve!");
    }
  };

  return (
    <div>

      <div className='bg-dark bg-transparent rounded text-xl'>
        <>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <h3 className='nk-decorated-h-2 m-30 mb-30 text-sm-h6'>
                <span className='text-main'>Új szervezet beküldése</span>
              </h3>

              <form>


                <div className='container mt-50 whiteLabels'>
                  <div className='m-30 gap-5 row'>
                    <div className='row justify-content-center gap-5 gap-md-4'>

                      <div className="">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange(e)

                            }}
                            name="name" id="name" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="name">Szervezet neve</label>
                        </div>
                      </div>

                      <div className='nk-gap-1' />

                      <div className="">
                        <div className="form-group myform-group">
                          <select
                            onChange={e => {
                              handleInputChange(e)

                            }}
                            name="type" id="type" className="myform-control form-control required bg-dark p-10 submitorg1" required style={{ height: "3rem", cursor: "pointer" }} >
                            <option className='text-white' value={""} disabled ></option>
                            <option className='text-white' value={"Oktatási intézmény"} >Oktatási intézmény</option>
                            <option className='text-white' value={"Szponzor"} >Szponzor</option>
                          </select>
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="type">Típus</label>
                        </div>
                      </div>

                      <div className='nk-gap-1' />

                      {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <select
                            onChange={e => {
                              handleInputChange(e)
                            }}
                            name="kepviselo_nev" id="kepviselo_nev" className="myform-control form-control required bg-dark p-10 submitorg1" style={{ height: "3rem" }} required >
                            
                          </select>
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kepviselo_nev">Képviselő neve</label>
                        </div>
                      </div> */}

                      {/* <div className='row justify-content-center gap-5 gap-md-4'> */}
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleLocationChange(e)

                            }}
                            name="postcode" id="iranyitoszam" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="iranyitoszam">Irányítószám</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleLocationChange(e)

                            }}
                            name="city" id="telepules" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="telepules">Település neve</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleLocationChange(e)
                            }}
                            name="street" id="kozterulet_nev" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kozterulet_nev">Közterület</label>
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleLocationChange(e)

                            }}
                            name="number" id="hazszam" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="hazszam">Házszám</label>
                        </div>
                      </div>

                      {/* </div> */}

                      {/* <div className='row justify-content-center gap-5 gap-md-4'>
                      </div> */}

                      <div className='nk-gap-1' />

                      <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 col-12">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange(e)

                            }}
                            name="email" id="email" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="email">Email-cím</label>
                        </div>
                      </div>

                      <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 col-12">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange(e)

                            }}
                            name="phoneNumber" id="phoneNumber" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="phoneNumber">Telefonszám</label>
                        </div>
                      </div>



                      <div className="col-lg-4 m-20">
                        <div className="form-group myform-group">
                          <textarea id="leiras" onChange={(e: any) => {
                            handleInputChange(e);
                          }}
                            name='description' className="myform-control form-control required bg-dark p-10" />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="leiras">Szervezetleírás</label>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <div className=''>
                          <label className=''>Kép feltöltése</label>
                          <input

                            type="file"
                            accept='image/png, image/jpeg'
                            className="form-control required bg-dark"
                          />
                        </div>
                      </div>




                    </div>
                  </div>
                </div>
                <div className='p-10'>
                  <Button2 content="Tovább" myFunct={() => { areInputsFilled() }} />
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default SubmitOrganisation1