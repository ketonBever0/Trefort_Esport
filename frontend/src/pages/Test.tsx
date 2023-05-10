import React, { useEffect } from 'react'
import GoBackButton from '../ui/GoBackButton';

function Test() {

  useEffect(() => {

    var reviewDetails: any = document.getElementById('reviewDetails');
    var reviewList: any = document.getElementById('reviewList');

    reviewList.style.maxHeight = reviewDetails.style.height;


  }, [])

  return (
    <div>
      <div className='d-flex justify-content-start mb-40'>
        <GoBackButton />
      </div>
      <h3 className="nk-decorated-h-2 text-sm-h6">

        <span>
          Beküldött <span className="text-main-1">szervezetek</span>
        </span>
      </h3>
      <div className="nk-gap" />
      <div className='container'>
        <div className='d-flex row'>
          <div className='col-lg-5 lightgreybg'>
            <div id='reviewList' className="reviewList ">
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
              <div className='reviewList_itemcontainer container'>
                <div className='reviewList_item row gap-1 justify-content-between'>


                  <div className='col-md-3 col-3 p-10'>

                  </div>


                  <div className='col-md-5 col-5'>
                    <h3 className="reviewList_item_title" >Szervezet neve</h3>
                    <div className="">
                      <p>Intézmény</p>
                      <div className="">
                        <span className="fa fa-calendar" /> 2022.02.02.
                      </div>
                    </div>
                  </div>
                  <p className='col-md-3 col-3 text-center d-flex align-items-center text-warning fw-bold'>Függőben <span> </span> <span className='lead fw-bold'> &#10710;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div id='reviewDetails' className='col reviewDetails bg-dark-4'>
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
                <button id="reviewAcceptBtn" className="button2">Intézmény elfogadása</button>
                <button id="reviewDeclineBtn" className="button2">Intézmény elutasítása</button>
              </div>
              <div className="nk-news-box-item-date text-end">
                <span className="fa fa-calendar" /> Sep 18, 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Test