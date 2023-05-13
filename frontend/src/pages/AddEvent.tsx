import { useState } from 'react';
import Button2 from '../ui/Button2';
import './_css/editEvent.css';
import GoBackButton from '../ui/GoBackButton';


function AddEvent() {

    const token = localStorage.getItem('usertoken');

    const [item, setItem] = useState(['div']);

    const [myeventID, seteventID] = useState();

    const [eventformData, seteventFormData] = useState({
        name: "",
        startDate: "",
        endDate: "",
        location: 0,
        description: ""
    });

    // const eventAdatKuldes = (adat: any, method: any) => {
    //     fetch('http://localhost:3333/api/events', {
    //         method: method,
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${token}`

    //         },
    //         body: JSON.stringify(adat)
    //     })
    //         .then(res => res.json())
    //         .then(data => { seteventID(data.event.id); console.log('siker', myeventID) })
    //         .catch(err => console.log(err));
    // }

    const [competitionformData, setcompetitionFormData] = useState({
        eventId: 33,
        plannedStartDate: "",
        startDate: "",
        endDate: "",
        name: "",
        maxMemberCount: 5,
        game: "",
        platform: "",
        registrationStart: "",
        registrationEnd: "",
        competitionType: "",
        description: ""
    });

    // const competitionAdatKuldes = (adat: any, method: any) => {
    //     fetch('http://localhost:3333/api/competitions', {
    //         method: method,
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify(adat)
    //     })
    //         .then(res => { res.json(); })
    //         .then(data => { console.log(data); console.log(data) })
    //         .catch(err => { console.log(err) });
    // }

    const writeEventData = (e: any) => {
        seteventFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        console.log(e.target.value, e.target.type);
    }

    const writeCompetitionData = (e: any) => {
        setcompetitionFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log(eventformData);
        console.log(competitionformData);
        // await eventAdatKuldes(eventformData, 'POST');
        // await competitionAdatKuldes(competitionformData, 'POST');
        postMyData();

    }

    async function postMyData() {
        try {
            const firstResponse = await fetch('http://localhost:3333/api/events', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(eventformData)
            });

            const firstResult = await firstResponse.json();
            seteventID(firstResult.id);
            console.log("hello");
            const secondResponse = await fetch('http://localhost:3333/api/competitions', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(competitionformData)
            });

            const secondResult = await secondResponse.json();
            console.log(secondResult);
        } catch (error) {
            console.error(error);
        }
    }

    function addGame() {
        const current = [...item];
        current.push('newDiv');
        setItem(current);
    }

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
                            <input onChange={writeEventData} required id='startDate' type='date' className="form-control required bg-dark m-10"></input>

                            <label className='h4 m-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                            <textarea className="form-control bg-dark m-10"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">

                            <label className='h4 m-10 border-main-left text-sm-h6'>Esemény vége:</label><br></br>
                            <p className='opacity-50 p-10'>Kizárólag a verseny végén töltendő ki.</p>
                            <label className='ml-10'>(Év, hónap, nap, óra, perc)</label>
                            <input onChange={writeEventData} required id='endDate' type='date' className="form-control required bg-dark m-10"></input>

                            <label className='h4 m-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                            <textarea className="form-control bg-dark m-10"></textarea>
                        </div>
                    </div>
                </div>
                <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Versenyszámok adatai<span> </span></div>
                <span style={{ zIndex: '100' }}>
                    <button onClick={() => addGame()} id='addBtn' className='nk-btn nk-btn-rounded nk-btn-color-main-1'>+ játék <br /> hozzáadása</button>
                </span>
                {
                    item?.map((currentitem, index) => {
                        return <div key={currentitem} id={``}>
                            <div className='mb-40' id='gameDetailsCard'>
                                <div className="p-30 text-danger d-flex bg-dark-3 border-top-btm-main">
                                    <div className='col-11 container'>
                                        <div className='d-flex container row'>
                                            <div className='darkInputs col-12 col-md'>
                                                <label className='h4 m-10'>Játék neve</label><br />
                                                <input onChange={writeCompetitionData} required id='name' type="text" />
                                            </div>
                                        </div>

                                        <hr className='mt-40 mb-40' />
                                        <div className='container darkInputs'>
                                            <div className='d-flex row fw-normal jatekAdatok'>
                                                <div className='col-lg-3 col-sm-6 col'>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Tervezett kezdés:</label><br />
                                                        <input onChange={writeCompetitionData} required id='plannedStartDate' type="date" />
                                                    </div>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Aktuális kezdés:</label><br />
                                                        <input onChange={writeCompetitionData} required id='startDate' type="date" />
                                                    </div>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Verseny vége:</label><br />
                                                        <input onChange={writeCompetitionData} required id='endDate' type="date" />
                                                    </div>
                                                </div>

                                                <div className='col-lg-3 col-sm-6'>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Regisztráció kezdete:</label><br />
                                                        <input onChange={writeCompetitionData} required id='registrationStart' type="date" />
                                                    </div>

                                                    <div className='m-10'>
                                                        <label htmlFor="">Regisztráció vége:</label><br />
                                                        <input onChange={writeCompetitionData} required id='registrationEnd' type="date" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6'>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Verseny típusa:</label> <br />
                                                        <input onChange={writeCompetitionData} required id='competitionType' type="text" />
                                                    </div>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Játék:</label><br />
                                                        <input onChange={writeCompetitionData} required id='game' type="text" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6 p-10'>
                                                    <label>Platformok:</label>
                                                    <input id='platform' onChange={writeCompetitionData} type="text" />
                                                    <div className='d-flex align-items-center'>
                                                        <input className="form-check-input" type="checkbox" value="" id='platformCheck' />
                                                        <label className="form-check-label fw-normal ml-10 cursor-pointer" htmlFor="platformCheck">
                                                            platform 1
                                                        </label>

                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <input className="form-check-input " type="checkbox" value="" id="platformCheck" />
                                                        <label className="form-check-label fw-normal ml-10 cursor-pointer" htmlFor="platformCheck">
                                                            platform 2
                                                        </label>
                                                    </div>
                                                    <div className='m-10'>
                                                        <label htmlFor="leiras">Leírás</label> <br />
                                                        <textarea onChange={writeCompetitionData} required name="" id="description"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })
                }
                <button type='submit'>hello</button>
                <Button2 content="Mentés" />
            </form>
        </div>
    )
}

export default AddEvent