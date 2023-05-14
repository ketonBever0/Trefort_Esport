import { useContext, useEffect, useState } from "react";
import EventContext from "../_context/EventContext";
import { Link, useParams } from "react-router-dom";
import Notify from '../ui/Toasts';
import CompetitionContext from "../_context/CompetitionContext";

function EventPage() {
    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
    }, [])

    useEffect(() => {
        id && getEventById(id, token);
        console.log()
    }, [])


    const {
        isEventLoading,
        event,
        getEventById
    } = useContext(EventContext);

    const token = localStorage.getItem('usertoken');

    const [competitionformDataArray, setcompetitionFormDataArray] = useState(['div']);

    const { id } = useParams();



    const [competitionformData, setcompetitionFormData] = useState({
        eventId: event?.id,
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


    type FormDataType = {
        eventId: number,        //?
        plannedStartDate: string,
        startDate: string,
        endDate: string,
        name: string,
        maxMemberCount: number,
        game: string,
        platform: string,
        registrationStart: string,
        registrationEnd: string,
        competitionType: string,
        description: string
    };

    useEffect(() => {
        if (!isEventLoading && event != null) {
            setcompetitionFormData({
                eventId: event?.id,
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
            })
        }
    }, [event])


    const competitionAdatKuldes = (adat: any, method: any) => {
        fetch('http://localhost:3333/api/competitions', {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(adat)
        })
            .then(response => { response.json(); Notify.tSuccess("Sikeres verseny feltöltés!") })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
                Notify.tError("Valami hiba történt.")
            });
    }

    const formatDate = (date: string) => {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);

        return `${year}. ${month}. ${day}.`
    }

    const [item, setItem] = useState(['div']);

    const current = [...item];

    const [counter, setCounter] = useState(0);

    const [compDivID, setcompDivID] = useState(0);

    const [currentDiv, setcurrentDiv] = useState();

    const [formDatas, setformDatas] = useState<FormDataType[]>([]);

    const [areAllFilled, setareAllFilled] = useState<boolean>(false)

    function addGame() {

        //setformDatas([...formDatas, competitionformData]);

        

        var actualDiv: any = document.getElementById(`compdiv${compDivID}`);

        console.log(actualDiv.id)

        const actualDivInputs = actualDiv.querySelectorAll('input');


        actualDivInputs.forEach((actualInput: any) => {
            if (actualInput.value != '') {
                setareAllFilled(false);
            } else {
                setareAllFilled(true);
            }

            // do something with each input here
        });

        if (areAllFilled == true) {
            current.push(`newDiv${counter}`);
            setcompDivID(prevcompDivID => prevcompDivID + 1);
            setCounter(counter + 1);
            setItem(current);
        } else {
            alert("Ki kell tölteni az összes mezőt!")
        }
    }





















    const writeCompetitionData = (e: any, fieldName: any) => {
        //console.log(e.target.value); console.log(competitionformData)

        setcompetitionFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        //competitionAdatKuldes(competitionformData, 'POST');

    }

    const {
        getAllCompetitionsByEventId,
        eventCompetitions,
        isEventCompetitionsLoading
    } = useContext(CompetitionContext);


    useEffect(() => {
        getAllCompetitionsByEventId(id);
    }, [])


    // const [formDatas, setFormDatas] = useState<any>([]);

    // function handleFormDataChange(index:any, field:any, value:any) {
    //   const updatedFormDatas = [...formDatas];
    //   if (!updatedFormDatas[index]) {
    //     updatedFormDatas[index] = new FormData();
    //   }
    //   updatedFormDatas[index].set(field, value);
    //   setFormDatas(updatedFormDatas);
    // }

    function logger() {

        console.log(current);
    }



    return (
        <>
            <button onClick={logger}>gonb</button>
            <div className='nk-decorated-h-2 h3 p-15 text-sm-h6'><span> </span>Esemény adatai<span> </span></div>
            <div className="row vertical-gap text-white">

                <div className="col-lg-6">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Esemény neve:</label><br />
                        <p className="lead text-center">{event?.name}</p>
                        <hr />
                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Megrendező:</label><br />
                        <p className="lead text-center"></p>
                        <hr />
                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Szponzor:</label><br />
                        <p className="lead text-center"></p>
                        <hr />
                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Esemény leírása:</label>
                        <p className="lead text-center">{event?.description}</p>
                        <hr />
                    </div>

                </div>

                <div className="col-lg-6  myColor2">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">

                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Esemény helyszíne:</label><br />
                        <p className="lead text-center">{event?.location}</p>
                        <hr />
                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Egyéb információ:</label>
                        <p className="lead text-center"></p>
                        <hr />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">

                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Esemény kezdési időpontja:</label><br />
                        <p className="lead text-center">{event?.startDate}</p>
                        <hr />
                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Egyéb információ:</label>
                        <p className="lead text-center"></p>
                        <hr />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">

                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Esemény vége:</label><br />
                        <p className="lead text-center">{event?.endDate}</p>
                        <hr />
                        <label className='h4 m-10 border-main-left text-sm-h6 mt-20'>Egyéb információ:</label>
                        <p className="lead text-center"></p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Versenyszámok adatai<span> </span></div>
            <span style={{ zIndex: '100' }}>
                <button onClick={() => addGame()} id='addBtn' className='nk-btn nk-btn-rounded nk-btn-color-main-1'>+ játék <br /> hozzáadása</button>
            </span>
            <form onSubmit={onSubmit}>
                {
                    item?.map((currentitem, index) => {
                        return (
                            <div key={currentitem} id={`compdiv${index}`}>
                                <div className='mb-40' id='gameDetailsCard'>
                                    <div className="p-30 text-danger d-flex bg-dark-3 border-top-btm-main">
                                        <div className='col-11 container'>
                                            <div className='d-flex container row'>
                                                <div className='darkInputs col-12 col-md'>
                                                    <label className='h4 m-10'>Játék neve</label><br />
                                                    <div></div>
                                                    <input onChange={(event) => writeCompetitionData(event, { index })} required id='name' type="text" />
                                                </div>
                                            </div>

                                            <hr className='mt-40 mb-40' />
                                            <div className='container darkInputs'>
                                                <div className='d-flex row fw-normal jatekAdatok'>
                                                    <div className='col-lg-3 col-sm-6 col'>
                                                        <div className='m-10'>
                                                            <label htmlFor="">Tervezett kezdés:</label><br />
                                                            <input onChange={(event) => writeCompetitionData(event, { index })} required id='plannedStartDate' type="date" />
                                                        </div>
                                                        <div className='m-10'>
                                                            <label htmlFor="">Aktuális kezdés:</label><br />
                                                            <input onChange={(event) => writeCompetitionData(event, { index })} required id='startDate' type="date" />
                                                        </div>
                                                        <div className='m-10'>
                                                            <label htmlFor="">Verseny vége:</label><br />
                                                            <input onChange={(event) => writeCompetitionData(event, { index })} required id='endDate' type="date" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-3 col-sm-6'>
                                                        <div className='m-10'>
                                                            <label htmlFor="">Regisztráció kezdete:</label><br />
                                                            <input onChange={(event) => writeCompetitionData(event, { index })} required id='registrationStart' type="date" />
                                                        </div>

                                                        <div className='m-10'>
                                                            <label htmlFor="">Regisztráció vége:</label><br />
                                                            <input onChange={(event) => writeCompetitionData(event, { index })} required id='registrationEnd' type="date" />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6'>
                                                        <div className='m-10'>
                                                            <label htmlFor="">Verseny típusa:</label> <br />
                                                            <input onChange={(event) => writeCompetitionData(event, { index })} required id='competitionType' type="text" />
                                                        </div>
                                                        <div className='m-10'>
                                                            <label htmlFor="">Játék:</label><br />
                                                            <input onChange={(event) => writeCompetitionData(event, { index })} required id='game' type="text" />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 p-10'>
                                                        <label>Platformok:</label>
                                                        <input id='platform' onChange={(event) => writeCompetitionData(event, { index })} type="text" />
                                                        {/* <div className='d-flex align-items-center'>
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
                                                    </div> */}
                                                        <div className='m-10'>
                                                            <label htmlFor="leiras">Leírás</label> <br />
                                                            <textarea onChange={(event) => writeCompetitionData(event, { index })} required name="" id="description"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
                <div className='d-flex justify-content-center'><button type='submit' style={{ fontSize: '1.2rem', padding: '15px' }} className='nk-btn nk-btn-rounded nk-btn-color-main-1'>Beküldés</button></div>
            </form>
        </>
    )
}

export default EventPage