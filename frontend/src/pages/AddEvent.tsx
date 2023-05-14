import { useState, useContext, useEffect } from 'react';
import Button2 from '../ui/Button2';
import './_css/editEvent.css';
import GoBackButton from '../ui/GoBackButton';
import Notify from '../ui/Toasts';

function AddEvent() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
    }, [])

    const token = localStorage.getItem('usertoken');

    const [myeventID, setMyEventID] = useState();

    const [eventformData, seteventFormData] = useState({
        name: "",
        startDate: "",
        endDate: "",
        location: 0,
        description: ""
    });

    const eventAdatKuldes = (adat: any, method: any) => {
        fetch('http://localhost:3333/api/events', {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(adat)
        })
            .then(res => res.json())
            .then(data => {
                if (data.exists) Notify.tError(data.message);
                else Notify.tSuccess(data.message);
                setMyEventID(data.event.id)
            })
            .catch(err => console.log(err));
    }

    const writeEventData = (e: any) => {
        seteventFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        console.log(e.target.value, e.target.type);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        eventAdatKuldes(eventformData, 'POST');
    }

    // async function postMyData() {
    //     try {
    //         const eventDataResponse = await fetch('http://localhost:3333/api/events', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             },
    //             body: JSON.stringify(eventformData)
    //         });
    //         const eventDataResult = await eventDataResponse.json();

    //         setMyEventID(eventDataResult.id);

    //         console.log("ez az eventID:",myeventID);

    //         const competitionDataResponse = await fetch('http://localhost:3333/api/competitions', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             },
    //             body: JSON.stringify(competitionformData)
    //         });
    //         const competitionDataResult = await competitionDataResponse.json();
    //         console.log(competitionDataResult);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    function handleFileChange(e: any) {
        console.log(e.target.files);
    }


    return (
        <div>
            <div className='d-flex justify-content-start'>
                <GoBackButton />
            </div>
            <form onSubmit={onSubmit}>
                <div className='nk-decorated-h-2 h3 p-15 text-sm-h6'><span> </span>Esemény adatai<span> </span></div>
                <div className="row vertical-gap text-white">

                    <div className="col-lg-6">
                        <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                            <label className='h4 m-10 border-main-left text-sm-h6'>Esemény neve:</label><br></br>
                            <input onChange={writeEventData} required id='name' className="form-control required bg-dark m-10"></input>

                            <label className='h4 m-10 border-main-left text-sm-h6'>Megrendező:</label><br></br>
                            <input className="form-control bg-dark m-10"></input>
                            <label className='h4 m-10 border-main-left text-sm-h6'>Szponzor:</label><br></br>
                            <input className="form-control bg-dark m-10"></input>

                            <label className='h4 m-10 border-main-left text-sm-h6'>Esemény leírása:</label>
                            <textarea onChange={writeEventData} required id='description' className="form-control bg-dark m-10"></textarea>
                        </div>

                    </div>

                    <div className="col-lg-6  myColor2">
                        <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">

                            <label className='h4 m-10 border-main-left text-sm-h6'>Esemény helyszíne:</label><br></br>
                            <label className='ml-10'>(Város, utca, házszám)</label>
                            <input onChange={writeEventData} required id='location' className="form-control required bg-dark m-10" ></input>

                            <label className='h4 m-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                            <textarea className="form-control bg-dark m-10"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">

                            <label className='h4 m-10 border-main-left text-sm-h6'>Esemény kezdési időpontja:</label><br></br>
                            <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                            <input onChange={writeEventData} required id='startDate' type='date' className="form-control cursor-text required bg-dark m-10"></input>

                            <label className='h4 m-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                            <textarea className="form-control bg-dark m-10"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">

                            <label className='h4 m-10 border-main-left text-sm-h6'>Esemény vége:</label><br></br>
                            <p className='opacity-50 p-10'>Kizárólag a verseny végén töltendő ki.</p>
                            <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                            <input onChange={writeEventData} required id='endDate' type='date' className="form-control cursor-text required bg-dark m-10"></input>

                            <label className='h4 m-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                            <textarea className="form-control bg-dark m-10"></textarea>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'><button type='submit' style={{fontSize:'1.2rem',padding:'15px'}} className='nk-btn nk-btn-rounded nk-btn-color-main-1 mt-40'>Beküldés</button></div>
                
            </form>
        </div>
    )
}

export default AddEvent