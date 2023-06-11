import React, { useEffect, useState, useContext } from 'react';
import BreadCrumbs from '../ui/BreadCrumbs';
import './_css/reviewOrg.css'
import OrganisationContext from '../_context/OrganisationContext';

const Test = () => {

  const { orgs, getOrganizations, acceptOrg } = useContext(OrganisationContext);

  //kiválasztott szervezet adatai, amelyeket betöltünk a jobb oldali div-be
  //akkor állítódik be, mikor rákattintunk a listában az egyik szervezetre

 

  //éppen kiválasztott szervezet
  const [activeOrg, setactiveOrg] = useState(0);

  //függőben és elutasítva fülek
  const [activeTab, setActiveTab] = useState(0);

  //eltároljuk a függőben lévő és elutasított szervezeteket. orgs-ból jönnek a pendingOrgs
  const pendingOrgs = orgs.filter((myOrg: any) => myOrg.status == 'pending');

  //const rejectedOrganisations = orgs.filter((myOrg: any) => myOrg.status == 'pending');

 const [currentOrgDetails, setCurrentOrgDetails] = useState(pendingOrgs[0]);
 
  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')");

    getOrganizations();

  }, []);

  const logging = () => {
    console.log(currentOrgDetails);
  }

  const update = () => {

  }

  const tabs = [
    {
      title: 'Függőben', content:
        <div className='d-flex row'>
          <div className='col-lg-5 p-0'>
            <div id='reviewList' className="reviewList lightgreybg">

              {

                //myOrg: mapen belüli változó a pendingOrgs-re
                //orgs contextből -> pendingOrgs (filterezett orgs) -> myOrg (map)
                pendingOrgs && (
                  pendingOrgs.map((myOrg: any, index: any) => (
                    <div onClick={() => { setCurrentOrgDetails(myOrg); setactiveOrg(index); }}
                      className={`reviewList_itemcontainer container ${activeOrg === index ? 'bg-dark-4' : ''}`}
                    >
                      <div className='reviewList_item row gap-1 justify-content-between'>
                        <div className='col-md-3 col-3 p-10'>
                        </div>
                        <div className='col-md-5 col-5'>
                          <h3 className="reviewList_item_title" >{myOrg.name}</h3>
                          <div className="">
                            <p>Intézmény</p>
                            <div className="">
                              <span className="fa fa-calendar" /> 2022.02.02.
                            </div>
                          </div>
                        </div>
                        <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>{myOrg.status} <span> </span> <span className='lead fw-bold pl-5'> &#10710;</span>
                        </p>
                      </div>
                    </div>
                  )
                  )
                )
              }

            </div>
          </div>

          <div id='reviewDetails' className='col reviewDetails bg-dark-4'>
            <div className="nano-content p-50">
              <div className="nk-news-box-item-image">
              </div>
              <div className="p-5">
                <h4>Szervezet neve:</h4>
                <h3 className="nk-news-box-item-title fw-normal">{currentOrgDetails.name}</h3>
              </div>

              <hr />
              <div className="p-5">
                <h4>Szervezet adatai:</h4>
                <ul>
                  <li className="text-lg">Típus: <span className="text-white text-lg">{currentOrgDetails.type}</span></li>
                  {/* <li className="text-lg">Képviselő személy:<span className="text-white text-lg"></span></li> */}
                  <li className="text-lg">Cím: <span className="text-white text-lg">{currentOrgDetails.location}</span></li>
                  <li className="text-lg">E-mail cím: <span className="text-white text-lg">{currentOrgDetails.email}</span></li>
                  <li className="text-lg">Telefonszám:<span className="text-white text-lg">{currentOrgDetails.phoneNumber}</span></li>
                  {/* <li className="text-lg">Adószám:<span className="text-white text-lg"></span></li> */}

                </ul>
              </div>

              <hr />
              <div className="p-5">
                <h4>Szervezet leírása:</h4>
                <p className="lead">...</p>
              </div>

              <div className="m-20 d-flex justify-content-around gap-5">
                <button
                  onClick={() => { acceptOrg(currentOrgDetails.id); update() }}
                  id="reviewAcceptBtn" className="button2">Intézmény elfogadása</button>
                <button id="reviewDeclineBtn" className="button2">Intézmény elutasítása</button>
              </div>
              <div className="nk-news-box-item-date text-end">
                <span className="fa fa-calendar" /> Sep 18, 2018
              </div>
            </div>
          </div>
        </div>
    },
    {
      title: 'Elutasítva', content:

        <div className='d-flex row'>
          <div className='col-lg-5 p-0 overflow-y-auto'>
            <div id='reviewList' className="reviewList lightgreybg">
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>
                  <div className='col-md-3 col-3 p-10'>

                  </div>
                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div>
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-danger fw-bold'>Elutasítva <span> </span> <span className='lead fw-bold pl-5'> &#10007;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='reviewDetails' className='col reviewDetails bg-dark-4 overflow-y-auto'>
            <div className="nano-content p-50">
              <div className="nk-news-box-item-image">
              </div>
              <div className="p-5">
                <h4>Szervezet neve:</h4>
                <h3 className="nk-news-box-item-title fw-normal">Trefort Ágoston Technikum, Szakképző Iskola és Kollégium</h3>
              </div>

              <hr />
              <div className="p-5">
                <h4>Szervezet adatai:</h4>
                <ul>
                  <li className="text-lg">Típus: <span className="text-white text-lg"> Iskola</span></li>
                  <li className="text-lg">Képviselő személy:<span className="text-white text-lg">  John Doe</span></li>
                  <li className="text-lg">Cím:<span className="text-white text-lg">  5600 Békéscsaba, Gyulai út 32.</span></li>
                  <li className="text-lg">E-mail cím:<span className="text-white text-lg"> user@outlook.com</span></li>
                  <li className="text-lg">Telefonszám:<span className="text-white text-lg"> +36 (20) 476-2340</span></li>
                  <li className="text-lg">Adószám:<span className="text-white text-lg"> 12345678-2-10</span></li>

                </ul>
              </div>

              <hr />
              <div className="p-5">
                <h4>Szervezet leírása:</h4>
                <p className="lead">Cég leírása Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <div className="m-20 d-flex justify-content-around gap-5">
                <button onClick={() => { acceptOrg() }} id="reviewAcceptBtn" className="button2">Intézmény elfogadása</button>
                <button id="reviewDeclineBtn" className="button2">Intézmény elutasítása</button>
              </div>
              <div className="nk-news-box-item-date text-end">
                <span className="fa fa-calendar" /> Sep 18, 2018
              </div>
            </div>
          </div>
        </div>
    }
  ];

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div>
      <button onClick={logging}>hiii</button>
      <BreadCrumbs />
      <div className='container'>
        <div className='row'>
          <ul className="tabs d-flex p-0">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={index === activeTab ? 'active p-15 nk-btn nk-btn-color-main-1' : 'p-15 nk-btn nk-btn-color-main-1'}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
