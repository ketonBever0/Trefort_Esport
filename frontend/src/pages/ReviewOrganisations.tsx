import React, { useEffect, useState, useContext } from 'react';
import BreadCrumbs from '../ui/BreadCrumbs';
import './_css/reviewOrg.css'
import OrganisationContext from '../_context/OrganisationContext';

const ReviewOrganisations = () => {

  const { orgs, getOrganizations, acceptOrg, rejectOrg } = useContext(OrganisationContext);


  //éppen kiválasztott szervezet
  const [activeOrg, setactiveOrg] = useState(null);

  //függőben és elutasítva fülek
  const [activeTab, setActiveTab] = useState(0);

  //eltároljuk a függőben lévő és elutasított szervezeteket. orgs-ból jönnek a pendingOrgs
  const pendingOrgs = orgs.filter((myOrg: any) => myOrg.status == 'függőben');

  const rejectedOrgs = orgs.filter((myOrg: any) => myOrg.status == 'deleted');


  //kiválasztott szervezet adatai, amelyeket betöltünk a jobb oldali div-be
  //akkor állítódik be, mikor rákattintunk a listában az egyik szervezetre
  const [currentOrgDetails, setCurrentOrgDetails] = useState(
    {
      id: null,
      name: "",
      type: "",
      location: "",
      phoneNumber: "",
      email: "",
      description: ""
    }
  );

  useEffect(() => {
    const pageBG: Element = document.querySelector('.full-page')!;
    pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')");

    getOrganizations();
    console.log(orgs)

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
                            <p>{myOrg.type}</p>
                            {/* <div className="">
                              <span className="fa fa-calendar" /> 2022.02.02.
                            </div> */}
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
          {
            currentOrgDetails.id != null
              ?
              <>
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
                      <p className="lead">{currentOrgDetails.description}</p>
                    </div>

                    <div className="m-20 d-flex justify-content-around gap-5">
                      <button
                        onClick={() => { acceptOrg(currentOrgDetails.id) }}
                        id="reviewAcceptBtn" className="button2">Szervezet elfogadása</button>
                      <button onClick={() => {rejectOrg(currentOrgDetails.id); console.log('hello',currentOrgDetails.id)}} id="reviewDeclineBtn" className="button2 bg-dark-4">Szervezet elutasítása</button>
                    </div>
                  </div>
                </div>
              </>
              :
              <div className='col d-flex mt-40 justify-content-center'>
                <h3 className='text-main'>Válassz ki egy szervezetet!</h3>
              </div>
          }


        </div>
    },
    {
      title: 'Elutasítva', content:

        <div className='d-flex row'>
          <div className='col-lg-5 p-0'>
            <div id='reviewList' className="reviewList lightgreybg">

              {

                //myOrg: mapen belüli változó a pendingOrgs-re
                //orgs contextből -> pendingOrgs (filterezett orgs) -> myOrg (map)
                rejectedOrgs && (
                  rejectedOrgs.map((myOrg: any, index: any) => (
                    <div onClick={() => { setCurrentOrgDetails(myOrg); setactiveOrg(index); }}
                      className={`reviewList_itemcontainer container ${activeOrg === index ? 'bg-dark-4' : ''}`}
                    >
                      <div className='reviewList_item row gap-1 justify-content-between'>
                        <div className='col-md-3 col-3 p-10'>
                        </div>
                        <div className='col-md-5 col-5'>
                          <h3 className="reviewList_item_title" >{myOrg.name}</h3>
                          <div className="">
                            <p>{myOrg.type}</p>
                            {/* <div className="">
                              <span className="fa fa-calendar" /> 2022.02.02.
                            </div> */}
                          </div>
                        </div>
                        <p className='col-md-3 col-3 text-center d-flex align-items-center text-danger fw-bold'>elutasítva <span> </span> <span className='lead fw-bold pl-5'> &#10007;</span>
                        </p>
                      </div>
                    </div>
                  )
                  )
                )
              }

            </div>
          </div>
          {
            currentOrgDetails.id != null
              ?
              <>
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
                      <p className="lead">{currentOrgDetails.description}</p>
                    </div>

                    <div className="m-20 d-flex justify-content-around gap-5">
                      <button
                        onClick={() => { acceptOrg(currentOrgDetails.id); update() }}
                        id="reviewAcceptBtn" className="button2">Szervezet elfogadása</button>
                    </div>
                    {/* <div className="nk-news-box-item-date text-end">
                      <span className="fa fa-calendar" /> Sep 18, 2018
                    </div> */}
                  </div>
                </div>
              </>
              :
              <div className='col d-flex mt-40 justify-content-center'>
                <h3 className='text-main'>Válassz ki egy szervezetet!</h3>
              </div>

          }
        </div>
    }
          ];

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const crumbs = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/' },
    { title: 'Category', path: '/' }
  ];

  return (
    <div>
                  <h3 className='nk-decorated-h-2 m-30 mb-30 text-sm-h6'>
                <span className='text-main'>Szervezetek kezelése</span>
              </h3>
      {/* <BreadCrumbs crumbs={crumbs} /> */}
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

export default ReviewOrganisations;
