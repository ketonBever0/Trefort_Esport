import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';
import './_css/input.css'
import './_css/submitOrg.css'

function SubmitOrganisation1() {

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

  const areInputsFilled = () => {

    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      if (input.value) {
        navigate("/submitorganisation2");
      }
    })
  };

  return (
    <div>

      <div className='bg-dark bg-gradient p-30 rounded text-xl'>
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
                <div className='container mt-50'>
                  <div className='m-30 gap-5 row'>
                    <div className='row justify-content-center gap-5 gap-md-4'>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="nev" id="nev" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="nev">Teljes név</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="tipus" id="tipus" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="tipus">Típus</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="kepviselo_nev" id="kepviselo_nev" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kepviselo_nev">Képviselő neve</label>
                        </div>
                      </div>
                    </div>
                    <div className='row justify-content-center gap-5 gap-md-4'>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="iranyitoszam" id="iranyitoszam" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="iranyitoszam">Irányítószám</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="telepules" id="telepules" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="telepules">Település neve</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="kozterulet_nev" id="kozterulet_nev" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kozterulet_nev">Közterület neve</label>
                        </div>
                      </div>
                    </div>
                    <div className='row justify-content-center gap-5 gap-md-4'>
                      <div className="col-lg-custom col-md-custom col-sm-8 col-11">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="kozterulet_jelleg" id="kozterulet_jelleg" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="kozterulet_jelleg">Közterület jellege</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10">
                        <div className="form-group myform-group">
                          <input type="text"
                            name="hazszam" id="hazszam" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="hazszam">Házszám</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-10'>
                  <Button2 content="Tovább	&#x279D;" />
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