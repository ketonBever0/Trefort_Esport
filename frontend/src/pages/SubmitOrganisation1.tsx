import { useRef, useState,  } from 'react';
import Button2 from '../ui/Button2';

function SubmitOrganisation1() {

    const inputRefs:any = {
      name: useRef(null),
      type: useRef(null),
      kepviselo_nev: useRef(null),
      iranyitoszam: useRef(null),
      telepules: useRef(null),
      kozterulet_nev: useRef(null),
      kozterulet_jelleg: useRef(null),
      hazszam: useRef(null)
      
    };
  
    const [filledStatus, setFilledStatus] = useState({});

    const handleInputChange = (fieldName: any) => {
      console.log(inputRefs[fieldName]);
      const inputRef = inputRefs[fieldName];
      const inputValue = inputRef && inputRef.current ? inputRef.current.value : 'g';
      setFilledStatus((prevStatus) => ({ ...prevStatus, [fieldName]: inputValue }));
      console.log(filledStatus);
    };
  
    const areInputsFilled = () => {
      const values = Object.values(filledStatus);
      const allFilled = values.every(value => !!value);
      
      if (allFilled) {
        console.log('All fields are filled');
      } else {
        console.log(filledStatus,'Not all fields are filled');
      }
      
      return allFilled;
    };

  return (
    <div>

      <div className='bg-dark  bg-transparent rounded text-xl'>
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
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('name')

                            }}
                            name="name" id="name" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="name">Teljes név</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('type')

                            }}
                            name="type" id="type" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="type">Típus</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('kepviselo_nev')

                            }}
                            name="kepviselo_nev" id="kepviselo_nev" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kepviselo_nev">Képviselő neve</label>
                        </div>
                      </div>
                    </div>
                    <div className='row justify-content-center gap-5 gap-md-4'>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('iranyitoszam')

                            }}
                            name="iranyitoszam" id="iranyitoszam" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="iranyitoszam">Irányítószám</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('telepules')

                            }}
                            name="telepules" id="telepules" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="telepules">Település neve</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('kozterulet_nev')

                            }}
                            name="kozterulet_nev" id="kozterulet_nev" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kozterulet_nev">Közterület neve</label>
                        </div>
                      </div>
                    </div>
                    <div className='row justify-content-center gap-5 gap-md-4'>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('kozterulet_jelleg')

                            }}
                            name="kozterulet_jelleg" id="kozterulet_jelleg" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kozterulet_jelleg">Közterület jellege</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange('hazszam')

                            }}
                            name="hazszam" id="hazszam" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="hazszam">Házszám</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-10'>
                  <Button2 content="Tovább &#x279D;" myFunct={() => { areInputsFilled()}} />
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