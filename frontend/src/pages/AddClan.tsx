import React, { useContext, useState, useEffect } from 'react'
import Button2 from '../ui/Button2'
import ProgressBar from '../ui/ProgressBar'
import UserContext from '../_context/UserContext';
import ApprovalModal from './AddClanApprovalModal';
import Notify from '../ui/Toasts';

function AddClan() {

  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')");
  }, []);
  const [width, setWidth] = useState(0);
  const [approvalModalOpen, setApprovalModalOpen] = useState(false);

  const token = localStorage.getItem('usertoken');

  const clanAdatKuldes = (adat: any, method: any) => {
    fetch('http://localhost:3333/api/clans', {
      method: method,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(adat)
    })
      .then(res => res.json())
      .then(data => {
        if (data.exists) Notify.tSuccess(data.message);
        else { Notify.tError("Hiba történt.")};
      })
      .catch(err => { console.log(err); Notify.tError(err) });
  }

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

  const [clanformData, setclanFormData] = useState({
    name: "",
    clanEmail: ""
  });


  const writeClanData = (e: any) => {
    setclanFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    console.log(e.target.value, e.target.type);
    console.log(clanformData)
  }

  const onSubmit = () => {
    //e.preventDefault();
    clanAdatKuldes(clanformData, 'POST');
  }


  return (
    <div>
      <div>
        {
          approvalModalOpen ?
            <ApprovalModal />
            :
            <>
            </>
        }
        <div className='p-30 rounded text-xl'>
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
                          <input onChange={e => {
                            handleInputChange();
                            writeClanData(e);
                          }} type="text"
                          id="name" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="nev">Klán neve</label>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-4 col-10">
                        <div className="form-group myform-group">
                          <input onChange={e => {
                            handleInputChange();
                            writeClanData(e);
                          }} type="text" id="clanEmail" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10" htmlFor="email">E-mail cím</label>
                        </div>
                      </div>
                    </div>
                    <div className='container'>
                      <div className='row justify-content-center gap-4 p-20'>
                        <div className="col-xl-4 col-md-5 col-lg-4 col-10">
                          <label>Logó feltöltése <span className='opacity-50 fw-normal'>(opcionális)</span></label>
                          <input  onChange={() => {
                            handleInputChange();
                            //writeClanData;
                          }} type="file" className="form-control required bg-dark" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='p-20'>
                    <Button2 content="Létrehozás" myFunct={onSubmit}
                    //myFunct={modalOpener} 
                    />
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