import React, { useContext, useState } from 'react'
import Button2 from '../ui/Button2'
import ProgressBar from '../ui/ProgressBar'
import UserContext from '../_context/UserContext';
import ApprovalModal from './AddClanApprovalModal';

function AddClan() {
  const [width, setWidth] = useState(0);
  const [approvalModalOpen, setApprovalModalOpen] = useState(false);


  const handleInputChange = () => {
    const inputs = document.querySelectorAll('input');

    let count = 0;

    inputs.forEach((input) => {
      if (input.value) {
        count++;
      }
    }
    )
    setWidth(count * 33.3)
  };


  function modalOpener() {
    setApprovalModalOpen(true);

  }
  return (
    <div>
      <div>
        {
          approvalModalOpen ? 
          <ApprovalModal/> 
          :
          <>
          </>
        }
        <div className='bg-dark bg-gradient p-30 rounded text-xl'>
          <ProgressBar myWidth={width} />
          <>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <h3 className='nk-decorated-h-2 m-30 text-sm-h6'>
                  <span className='text-main'>Új klán létrehozása</span>
                </h3>
                <form>
                  <div className='container mt-50'>
                    <div className='row justify-content-center gap-5 m-30'>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-10">
                        <div className="form-group myform-group">
                          <input onChange={handleInputChange} type="text"
                            name="nev" id="nev" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="nev">Klán neve</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-10">
                        <div className="form-group myform-group">
                          <input onChange={handleInputChange} type="text" name="email" id="email" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="email">E-mail cím</label>
                        </div>
                      </div>
                    </div>
                    <div className='container'>
                      <div className='row justify-content-center gap-4 p-20'>
                        <div className="col-xl-4 col-md-5 col-lg-4 col-10">
                          <label>Logó feltöltése <span className='opacity-50 fw-normal'>(opcionális)</span></label>
                          <input onChange={handleInputChange} type="file" className="form-control required bg-dark" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='p-20'>
                    <Button2 content="Létrehozás" myFunct={modalOpener} />
                  </div>
                </form>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  )
}

export default AddClan