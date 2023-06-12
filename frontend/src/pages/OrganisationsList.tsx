import React, { useEffect, useState, useContext } from 'react';
import BreadCrumbs from '../ui/BreadCrumbs';
import './_css/reviewOrg.css'
import OrganisationContext from '../_context/OrganisationContext';
import { BeatLoader } from 'react-spinners';
import GoBackButton from '../ui/GoBackButton';

const OrganisationsList = () => {

    const { orgs, getOrganizations } = useContext(OrganisationContext);


    //éppen kiválasztott szervezet
    const [currentlyActiveOrg, setCurrentlyActiveOrg] = useState(null);

    //eltároljuk az aktív szervezeteket az orgs-ból
    const activeOrgs = orgs.filter((myOrg: any) => myOrg.status == 'active');


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


    return (
        <div>
            {/* <BreadCrumbs crumbs={crumbs} /> */}
            <div className='row'>
                <div className="justify-content-start d-flex pl-70">
                    <GoBackButton />
                </div>
            </div>
            <h3 className='nk-decorated-h-2 m-30 mb-30 text-sm-h6'>
                <span className='text-main'>Szervezetek listája</span>
            </h3>
            {
                orgs.length != 0
                    ?
                    <div className='container'>
                        <div className='row'>
                            <div className='d-flex row'>
                                <div className='col-lg-5 p-0'>
                                    <div id='reviewList' className="reviewList lightgreybg">
                                        {
                                            activeOrgs && (
                                                activeOrgs.map((myOrg: any, index: any) => (
                                                    <div onClick={() => { setCurrentOrgDetails(myOrg); setCurrentlyActiveOrg(index); }}
                                                        className={`reviewList_itemcontainer container ${currentlyActiveOrg === index ? 'bg-dark-4' : ''}`}
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
                                                            <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'><span> </span> <span className='lead fw-bold pl-5'></span>
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
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <div className='col d-flex mt-40 justify-content-center'>
                                            <h3 className='text-main'>Válassz ki egy intézményt!</h3>
                                        </div>
                                }


                            </div>
                        </div>
                    </div>
                    :
                    <div className='d-flex justify-content-center'>
                        <BeatLoader color="#dd163b" className='mt-30' />
                    </div>
            }
        </div>
    );
};

export default OrganisationsList;
