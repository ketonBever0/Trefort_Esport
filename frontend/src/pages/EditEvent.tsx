import { useState } from 'react';
import Button2 from '../ui/Button2';


function EditEvent() {
    // const [gameDataList, setGameDataList] = useState([]);

    // const addGame = () => {
    //     gameDataList.push()
    // }



    return (
        <div className='m-20'>
            <h3 className="nk-decorated-h">
                <span>
                    <span className="text-main-6">Esemény adatai</span>
                </span>
            </h3>
            <div className="row vertical-gap text-white">
                <div className="col-lg-6  myColor2">
                    <div className="nk-box-2 bg-dark-2">
                        <label className='h4 m-10'>Esemény helyszíne:</label><br></br>
                        <label className='ml-10'>(Város, utca, házszám)</label>
                        <input className="form-control required bg-dark m-10" ></input>
                        <label className='h4 m-10'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="nk-box-2 bg-dark-2">
                        <label className='h4 m-10'>Esemény időpontja:</label><br></br>
                        <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 m-10'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
            </div>
            <h3 className="nk-decorated-h m-20">
                <span>
                    <span className="text-main-6">Játékok adatainak módosítása:</span>
                </span>
            </h3>
            <span className='position-fixed bottom-0 end-0' style={{ zIndex: '100' }}>
                <Button2 content={<i className="fa-solid fa-plus px-2" /> }/>
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
            <div className='p-50'>
                <div className="nk-info-box text-danger">


                    <div className="nk-info-box-icon">
                    </div>
                    <label className='h4 m-10'>Játék neve</label><br></br>
                    <div className='w-25'>
                        <select className="form-control m-20 required bg-dark h-50">
                            <option>Játéknév</option>
                            <option>Játéknév</option>
                            <option>Játéknév</option>
                        </select>
                    </div>
                    <textarea className="form-control required bg-dark m-20 w-25"></textarea>
                </div>
            </div>
{/* 
            {gameDataList} */}


        </div>
    )
}

export default EditEvent