import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Button2 from '../ui/Button2';

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
              <h3 className='nk-decorated-h'>
                <span className='text-main'>Új szervezet beküldése</span>
              </h3>
              <form>
                <div className='container'>
                  <div className='row justify-content-center gap-5 m-20'>
                  <div className='col-md-4'>
                      <div className="form-floating">
                        <input type="text" className="form-control required bg-dark" id="nev" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="nev" className='opacity-50'>Név</label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="form-floating">
                        <input type="text" className="form-control required bg-dark" id="elerhetoseg" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="elerhetoseg" className='opacity-50'>Elérhetőség</label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="form-floating">
                        <input type="text" className="form-control required bg-dark" id="kepviselo" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="kepviselo" className='opacity-50'>Képviselő neve</label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="form-floating">
                        <input type="text" className="form-control required bg-dark" id="cim" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="cim" className='opacity-50'>Cím</label>
                      </div>
                    </div>
                  </div>
                </div>
                  <button className=''>vissza</button>
                  <Button2 content="Következő"/>
                
              </form>
            </div>
          </div>
        </>

      </div>


    </div>
  )
}

export default SubmitOrganisation1