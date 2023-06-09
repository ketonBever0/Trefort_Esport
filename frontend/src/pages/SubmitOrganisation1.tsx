import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';
import './_css/input.css'
import './_css/submitOrg.css'
import GoBackButton from '../ui/GoBackButton';
import Notify from '../ui/Toasts';

function SubmitOrganisation1() {

  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
  }, [])

  const [width, setWidth] = useState(0);

  const navigate = useNavigate();

  const handleInputChange = () => {
    const inputs = document.querySelectorAll('input');

    let count = 0;

    inputs.forEach((input) => {
      if (input.value) {
        count++;
      }
    }
    )
    setWidth(count * 10)
  };

  const [areInputsFilledBool, setareInputsFilledBool] = useState(true)

  const inputs: any = document.querySelectorAll('.submitorg1');

  const areInputsFilled = () => {

    console.log('you pushed the button. areInputsFilledBool looks like this: ', areInputsFilledBool);

    //inputs.forEach((input: any) => {
    console.log('analysing inputs...');

    const isFilled = Array.from(inputs).some((input: any) => !input.value);

    setareInputsFilledBool(!isFilled);
    // if (!input.value) {
    //   console.log('this input is not filled: ', input);
    // }
    // })
    console.log('forEach is DONE. areInputsFilled looks like this: ', areInputsFilledBool)
    // if (!areInputsFilledBool) {
    //   Notify.tError('Az összes mezőt ki kell tölteni.');
    // } else {
    //   console.log("areInputsFilledBool: ", areInputsFilledBool);
    //   alert('okay')
    //   //Notify.tSuccess("oks");
    //   //onSubmit();
    // }
  };

  const goingFurther = () => {
    console.log('going further; areInputsfilled:', areInputsFilledBool)
  };



  //sessionStorage.setItem("orgsNumberSSN", formObj)
  const [submitOrg1FormData, setSubmitOrg1FormData] = useState({
    name: "",
    location: "",
    email: "",
    phoneNumber: "",
    type: "",
    description: "",
    contributions: ""
  });


  const [location, setLocation] = useState(
    {
      iranyitoszam: "",
      telepules: "",
      kozterulet_nev: "",
      kozterulet_jelleg: "",
      hazszam: ""
    }
  );

  const writeLocationString = (e: any) => {
    setLocation((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));

  }

  const writeOrg1Data = (e: any) => {
    setSubmitOrg1FormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));

  };

  const onSubmit = () => {
    console.log(submitOrg1FormData)
    sessionStorage.setItem("orgsNumberSSN", JSON.stringify(submitOrg1FormData))

  }

  return (
    <div>

      <div className='bg-dark  bg-transparent rounded text-xl'>
        <div className='row d-flex'>
          <div className='col row justify-content-center'>
            <div className='d-flex mb-30 justify-content-start'><GoBackButton /></div>
          </div>
          <div className='col'>
          </div>
          <div className='col'>
          </div>
        </div>
        <ProgressBar myWidth={width} />
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
                              handleInputChange();
                              writeOrg1Data(e);
                            }}
                            name="name" id="name" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="name">Teljes név</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange();
                              writeOrg1Data(e);
                            }}
                            name="type" id="type" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="type">Típus</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange();
                              writeOrg1Data(e);
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
                              handleInputChange();
                              writeOrg1Data(e);
                            }}
                            name="iranyitoszam" id="iranyitoszam" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="iranyitoszam">Irányítószám</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange();
                              writeOrg1Data(e);
                            }}
                            name="telepules" id="telepules" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="telepules">Település neve</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange();
                              writeOrg1Data(e);
                            }}
                            name="kozterulet_nev" id="kozterulet_nev" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kozterulet_nev">Közterület neve</label>
                        </div>
                      </div>
                    </div>
                    <div className='row justify-content-center gap-5 gap-md-4'>
                      <div className="col-lg-custom col-md-custom col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange();
                              writeOrg1Data(e);
                            }}
                            name="kozterulet_jelleg" id="kozterulet_jelleg" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kozterulet_jelleg">Közterület jellege</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            onChange={e => {
                              handleInputChange();
                              writeOrg1Data(e);
                            }}
                            name="hazszam" id="hazszam" className="myform-control form-control required bg-dark p-10 submitorg1" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="hazszam">Házszám</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-10'>
                  <Button2 content="Tovább &#x279D;" myFunct={() => { areInputsFilled(); goingFurther() }} />
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