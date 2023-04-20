
import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';

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
              <ProgressBar myWidth={width} />
        <>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <h3 className='nk-decorated-h'>
                <span className='text-main'>Új szervezet beküldése</span>
              </h3>
              <form>
                <div className='container'>
                  <div className='row justify-content-center gap-5 m-20'>
                  <div className='col-md-4'>
                      <div className="form-floating border3">
                        <input type="text" className="form-control required bg-dark" id="adoszam" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="adoszam" className='opacity-50'>Adószám</label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="form-floating border3">
                        <input type="email" className="form-control required bg-dark" id="email" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="email" className='opacity-50'>E-mail cím</label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="form-floating border3">
                        <input type="text" className="form-control required bg-dark" id="telefonszam" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="telefonszam" className='opacity-50'>Telefonszám</label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="form-floating border3">
                        <textarea  className="form-control required bg-dark" id="leiras" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="leiras" className='opacity-50'>Leírás</label>
                      </div>
                    </div>
                  </div>
                </div>

                <Button2 content="Beküldés"/>
              </form>
            </div>
          </div>
        </>

      </div>

    </div>
  )
}

export default SubmitOrganisation2