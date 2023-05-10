
import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';
import GoBackButton from '../ui/GoBackButton';

function SubmitOrganisation2() {

  const [width, setWidth] = useState(50);

  const handleInputChange = () => {
    const inputs = document.querySelectorAll('input');

    let count = 0;

    inputs.forEach((input) => {
      if (input.value) {
        count++;
      }
    }
    )
    setWidth(50 + count * 8.33)
  };


  return (
    <div>
      <div className='bg-dark bg-gradient p-30 rounded text-xl'>
      <div className='row d-flex'>
          <div className='col row justify-content-center'>
            <div className='d-flex m-30 justify-content-center'><GoBackButton/></div>
          </div>
          <div className='col'>
          </div>
          <div className='col'>
          </div>
        </div>
        <ProgressBar myWidth={width} />
        <>
          <div className="tab-content">
            <div className="tab-pane fade show active"id="pills-login"role="tabpanel"aria-labelledby="tab-login">
              <h3 className='nk-decorated-h-2 m-30 text-sm-h6'>
                <span className='text-main'>Új szervezet beküldése</span>
              </h3>
              <form>
                <div className='container mt-50'>
                  <div className='row justify-content-center gap-5 m-30'>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-8">
                      <div className="form-group myform-group">
                        <input type="text"
                          name="adoszam" id="adoszam" className="myform-control form-control required bg-dark p-10" required />
                        <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="adoszam">Adószám</label>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-8">
                      <div className="form-group myform-group">
                        <input type="text" name="email" id="email" className="myform-control form-control required bg-dark p-10" required />
                        <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="email">E-mail cím</label>
                      </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-4 col-8">
                      <div className="form-group myform-group">
                        <input type="text" name="telefonszam" id="telefonszam" className="myform-control form-control required bg-dark p-10" required />
                        <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="telefonszam">Telefonszám</label>
                      </div>
                    </div>
                  </div>
                  <div className='container'>
                    <div className='row justify-content-center gap-4 p-20'>
                      <div className="col-xl-3 col-md-5 col-lg-4 col-8">
                        <div className="form-group myform-group">
                          <textarea name="leiras" id="leiras" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="leiras">Cég leírása</label>
                        </div>
                        </div>
                        <div className="col-xl-4 col-md-5 col-lg-4 col-10">
                          <label className=''>Profilkép feltöltése</label>
                          <input onChange={handleInputChange} type="file" className="form-control required bg-dark"/>
                        </div>
                    </div>
                  </div>
                </div>
                <div className='p-20'>
                  <Button2 content="Beküldés" />
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default SubmitOrganisation2