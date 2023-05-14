import React from 'react'
import Button2 from '../ui/Button2'
import { useNavigate } from 'react-router'
import GoBackButton from '../ui/GoBackButton';
import { useEffect } from 'react';

function OrganisationProfile() {
  const navigate = useNavigate();
  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
  }, [])


  return (
    <div>
      <div className='row d-flex'>
        <div className='col row justify-content-center'>
          <div className='d-flex mb-40 justify-content-start'><GoBackButton /></div>
        </div>
        <div className='col'>
        </div>
        <div className='col'>
        </div>
      </div>
      <div className="nk-news-box-item-image">
        <img src="https://taszi.hu/kepek/fooldali_banner/19_1.jpg" alt="" />
      </div>
      <div className="nk-gap-4" />
      <div className="p-5">
        <h4>Szervezet neve:</h4>
        <h3 className="nk-news-box-item-title fw-normal">Trefort Ágoston Technikum, Szakképző Iskola és Kollégium</h3>
      </div>

      <hr />
      <div className='container'>


        <div className='d-flex row'>


          <div className="p-5 col-md">
            <h4>Szervezet adatai:</h4>
            <ul>
              <li className="text-lg">Típus: <span className="text-white text-lg"> Iskola</span></li>
              <li className="text-lg">Képviselő személy:<span className="text-white text-lg">  John Doe</span></li>
              <li className="text-lg">Cím:<span className="text-white text-lg">  5600 Békéscsaba, Gyulai út 32.</span></li>
              <li className="text-lg">E-mail cím:<span className="text-white text-lg"> user@outlook.com</span></li>
              <li className="text-lg">Telefonszám:<span className="text-white text-lg"> +36 (20) 476-2340</span></li>
              <li className="text-lg">Adószám:<span className="text-white text-lg"> 12345678-2-10</span></li>
              <div className="nk-news-box-item-date">
                <span className="fa fa-calendar" /> Sep 18, 2018
              </div>
            </ul>
          </div>

          <div className="p-5 col-md">
            <h4>Szervezet leírása:</h4>
            <p className="lead">Cég leírása Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <div className='d-flex m-30 justify-content-center'><Button2 myFunct={() => navigate('/')} content="Szerkesztés" /></div>
    </div>
  )
}

export default OrganisationProfile