import { useState } from 'react';
import Button2 from '../ui/Button2';
import './_css/editEvent.css';


function EditEvent() {
    // const [gameDataList, setGameDataList] = useState([]);

    // const addGame = () => {
    //     gameDataList.push()
    // }



    return (
        <div className='m-20'>
            <h3 className="nk-decorated-h">
                <span>
                    <span className="text-main-1">Esemény adatai</span>
                </span>
            </h3>
            <div className="row vertical-gap text-white">
                <div className="col-lg-6">
                    <div style={{borderTop:"2px solid #dd163b"}} className="nk-box-2 bg-dark-2">
                        <label className='h4 m-10 pl-10 border-main-left'>Esemény neve:</label><br></br>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 m-10'>Megrendező:</label><br></br>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 m-10'>Szponzor:</label><br></br>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 m-10'>Esemény leírása:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                    
                </div>

                <div className="col-lg-6  myColor2">
                    <div style={{borderTop:"2px solid #dd163b"}} className="nk-box-2 bg-dark-2">
                        <label className='h4 m-10'>Esemény helyszíne:</label><br></br>
                        <label className='ml-10'>(Város, utca, házszám)</label>
                        <input className="form-control required bg-dark m-10" ></input>
                        <label className='h4 m-10'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{borderTop:"2px solid #dd163b"}} className="nk-box-2 bg-dark-2">
                        <label className='h4 m-10'>Esemény kezdési időpontja:</label><br></br>
                        <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 m-10'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{borderTop:"2px solid #dd163b"}} className="nk-box-2 bg-dark-2">
                        <label className='h4 m-10'>Esemény vége:</label><br></br>
                        <p className='opacity-50 p-10'>Kizárólag a verseny végén töltendő ki.</p>
                        <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 m-10'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
            </div>
            <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Versenyszámok adatainak módosítása<span> </span></div>
            <span className='position-fixed bottom-0 end-0' style={{ zIndex: '100' }}>
                <Button2 content={<i className="fa-solid fa-plus px-2" />} />
            </span>


            {/* <div className="position-fixed bottom-0 end-0 m-50" style={{ zIndex: '100' }}>
                <button 
                // onClick={addGame} 
                className='nk-btn nk-btn-rounded nk-btn-color-main-1 '>
                    <h4 className=' m-0'>
                        <i className="fa-solid fa-plus px-2" />
                        Játék <br /> hozzáadása
                    </h4>
                </button>
            </div> */}
            <div className=''>
                <div className="p-10 text-danger d-flex ">
                    <div className=' col-2'>
                        <img style={{ width: '100px' }} src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='></img>
                    </div>
                    <div className='col border'>
                        <label className='h4 m-10'>Játék neve</label><br></br>
                        <hr></hr>
                        <div className='container m-20'>
                        <div className='d-flex row'>
                            <div className='col-lg-3 border'>
                                <label htmlFor="">Tervezett kezdés:</label>
                                <input type="date" />
                                <label htmlFor="">Aktuális kezdés:</label>
                                <input type="date" />
                                <label htmlFor="">Verseny vége::</label>
                                <input type="date" />
                            </div>
                            <div className='col-lg-3 border'>
                                <label htmlFor="">Verseny típusa:</label>
                                <input type="text" />
                                <label htmlFor="">Játék:</label>
                                <input type="text" />
                            </div>
                            <div className='col-lg-3 border'>
                            <label htmlFor="">Regisztráció kezdete:</label>
                                <input type="date" />
                                <label htmlFor="">Regisztráció vége::</label>
                                <input type="date" />
                            </div>
                            <div className='col-lg-3 border'>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                                        platform 4
                                    </label>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                                        platform 4
                                    </label>
                            </div>

                        </div>
                        </div>


                    </div>

                </div>
            </div>
            {/* 
            {gameDataList} */}


        </div>
    )
}

export default EditEvent