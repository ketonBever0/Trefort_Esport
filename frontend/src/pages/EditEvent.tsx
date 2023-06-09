import { useState, useEffect } from 'react';
import Button2 from '../ui/Button2';
import './_css/editEvent.css';
import GoBackButton from '../ui/GoBackButton';


function EditEvent() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
    }, []);

    const [item, setItem] = useState(['div']);

    function addGame() {
        const current = [...item];
        current.push('newDiv');
        setItem(current);
    }

    return (
        <div className='m-20'>
            <div className='d-flex justify-content-start'>
            <GoBackButton/>
            </div>
            <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Esemény adatainak módosítása<span> </span></div>
            <div className="row vertical-gap text-white">
                <div className="col-lg-6">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                        <label className='h4 p-10 border-main-left text-sm-h6'>Esemény neve:</label><br></br>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 p-10 border-main-left text-sm-h6'>Megrendező:</label><br></br>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 p-10 border-main-left text-sm-h6'>Szponzor:</label><br></br>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 p-10 border-main-left text-sm-h6'>Esemény leírása:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>

                </div>

                <div className="col-lg-6  myColor2">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                        <label className='h4 p-10 border-main-left text-sm-h6'>Esemény helyszíne:</label><br></br>
                        <label className='ml-10'>(Város, utca, házszám)</label>
                        <input className="form-control required bg-dark m-10" ></input>
                        <label className='h4 p-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                        <label className='h4 p-10 border-main-left text-sm-h6'>Esemény kezdési időpontja:</label><br></br>
                        <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 p-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                        <label className='h4 p-10 border-main-left text-sm-h6'>Esemény vége:</label><br></br>
                        <p className='opacity-50 p-10'>Kizárólag a verseny végén töltendő ki.</p>
                        <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                        <input className="form-control required bg-dark m-10"></input>
                        <label className='h4 p-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                        <textarea className="form-control required bg-dark m-10"></textarea>
                    </div>
                </div>
            </div>
            <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Versenyszámok adatainak módosítása<span> </span></div>
            <span style={{ zIndex: '100' }}>
                <button onClick={() => addGame()} id='addBtn' className='nk-btn nk-btn-rounded nk-btn-color-main-1'>+ játék <br /> hozzáadása</button>
            </span>

            {
                item?.map((currentitem, index) => {
                    return <div key={currentitem} id={`expense-`}>
                        <div className='mb-40' id='gameDetailsCard'>
                            <div className="p-30 text-danger d-flex bg-dark-3 border-top-btm-main">
                                <div className='col-12'>
                                    <div className='d-flex'>
                                        <img style={{ width: '150px' }} className='border-main ' src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='></img>
                                        <div className='m-20 darkInputs'>
                                            <label className='h4 m-10'>Játék neve</label><br />
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <hr className='mt-40 mb-40' />
                                    <div className='container darkInputs'>
                                        <form className='d-flex row fw-normal jatekAdatok'>
                                            <div className='col-lg-3 col-sm-6 col'>
                                                <div className='m-10'>
                                                    <label htmlFor="">Tervezett kezdés:</label><br />
                                                    <input type="date" />
                                                </div>
                                                <div className='m-10'>
                                                    <label htmlFor="">Aktuális kezdés:</label><br />
                                                    <input type="date" />
                                                </div>
                                                <div className='m-10'>
                                                    <label htmlFor="">Verseny vége:</label><br />
                                                    <input type="date" />
                                                </div>
                                            </div>

                                            <div className='col-lg-3 col-sm-6'>
                                                <div className='m-10'>
                                                    <label htmlFor="">Regisztráció kezdete:</label><br />
                                                    <input type="date" />
                                                </div>

                                                <div className='m-10'>
                                                    <label htmlFor="">Regisztráció vége:</label><br />
                                                    <input type="date" />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6'>
                                                <div className='m-10'>
                                                    <label htmlFor="">Verseny típusa:</label> <br />
                                                    <input type="text" />
                                                </div>
                                                <div className='m-10'>
                                                    <label htmlFor="">Játék:</label><br />
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 p-10'>
                                                <label>Platformok:</label>
                                                <div className='d-flex align-items-center'>
                                                    <input className="form-check-input" type="checkbox" value="" id='platformCheck' />
                                                    <label className="form-check-label fw-normal ml-10 cursor-pointer" htmlFor="platformCheck">
                                                        platform 1
                                                    </label>
                                                </div>
                                                <div className='m-10'>
                                                    <label htmlFor="leiras">Leírás</label> <br />
                                                    <textarea name="" id="leiras"></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }
            <Button2 content="Változtatások mentése" />
        </div>
    )
}

export default EditEvent