import React, { useContext, useEffect, useState } from 'react'
import EventContext from '../_context/EventContext';
import { useParams } from 'react-router';
import Notify from '../ui/Toasts';
import CompetitionContext from '../_context/CompetitionContext';
import Button2 from '../ui/Button2';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function AddCompetitions() {
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

    const [competitions, setCompetitions] = useState<any>([]);

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

    interface FormDataType {
        eventId: number,
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
        getAllCompetitionsByEventId(id);
        if (eventCompetitions.length != 0) setCompetitions(eventCompetitions);
    }, [])


    useEffect(() => {
        if (!isEventLoading && event != null) {

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

    const formObjectsArray: any = [];

    const [areAllFilled, setareAllFilled] = useState<boolean>(false)






    const addCompetition = () => {

        setCompetitions((prev: any) => [
            ...prev,
            {
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
            }
        ])

    }

    const deleteCompetition = (index: any) => {

        setCompetitions((prev: any) => [
            ...prev.slice(0, index),
            ...prev.slice(index + 1)
        ])

    }

    const writeCompetitionData = (e: any, index: any) => {


        setCompetitions((prev: any) => [
            ...prev.slice(0, index),
            {
                ...prev[index],
                [e.target.name]: e.target.value
            },
            ...prev.slice(index + 1)
        ])

    }



    const onSubmit = (e: any) => {
        // e.preventDefault();
        competitionAdatKuldes(competitionformData, 'POST');

        //        formDatas.forEach(dataObj => {
        //          competitionAdatKuldes(dataObj, 'POST');
        //        });

    }

    const {
        getAllCompetitionsByEventId,
        eventCompetitions,
        isEventCompetitionsLoading
    } = useContext(CompetitionContext);




    // const [formDatas, setFormDatas] = useState<any>([]);

    // function handleFormDataChange(index:any, field:any, value:any) {
    //   const updatedFormDatas = [...formDatas];
    //   if (!updatedFormDatas[index]) {
    //     updatedFormDatas[index] = new FormData();
    //   }
    //   updatedFormDatas[index].set(field, value);
    //   setFormDatas(updatedFormDatas);
    // }

    return (
        <>
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
                <button
                    onClick={() => addCompetition()}
                    id='addBtn' className='nk-btn nk-btn-rounded nk-btn-color-main-1'>+ játék <br /> hozzáadása</button>
            </span>

            {
                competitions?.map((competition: any, index: React.Key) => {
                    return (
                        <div key={index} id={`compdiv${index}`}>

                            <div className='mb-40' id='gameDetailsCard'>
                                <div className="p-30 text-danger d-flex bg-dark-3 border-top-btm-main">
                                    <div className='col-11 container'>
                                        <div className='d-flex justify-content-end'>
                                            <button className='nk-btn nk-btn-sm nk-btn-color-main-1' onClick={() => deleteCompetition(index)}>X</button>
                                        </div>
                                        <div className='d-flex container row'>
                                            <div className='darkInputs col-12 col-md'>
                                                <label className='h4 m-10'>Versenyszám neve (Játék, játékmód stb)</label><br />
                                                <input
                                                    style={{ width: "35rem" }}
                                                    value={competition.game}
                                                    onChange={(e: any) => writeCompetitionData(e, index)}

                                                    required id='name' name='name' type="text" />
                                            </div>
                                            <div className='darkInputs col-12 col-md'>
                                                <label htmlFor="" className='h4 m-10'>Egy csapat létszáma:</label><br />
                                                <input
                                                    value={competition.maxMemberCount}
                                                    min={1}
                                                    onChange={(e: any) => writeCompetitionData(e, index)}
                                                    required id='maxMemberCount' name='maxMemberCount' type="text" />
                                            </div>
                                        </div>

                                        <hr className='mt-40 mb-40' />
                                        <div className='container darkInputs'>
                                            <div className='d-flex row fw-normal jatekAdatok'>
                                                <div className='col-lg-3 col-sm-6 col'>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Tervezett kezdés:</label><br />
                                                        <input
                                                            value={competition.plannedStartDate}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}

                                                            required id='plannedStartDate' name='plannedStartDate' type="date" />
                                                    </div>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Aktuális kezdés:<br /><sub>(Kezdéskor kitöltendő)</sub></label><br />
                                                        <input
                                                            value={competition.startDate}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}
                                                            required id='startDate' name='startDate' type="date" />
                                                    </div>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Verseny vége:<br /><sub>(Végekor kitöltendő)</sub></label><br />
                                                        <input
                                                            value={competition.endDate}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}
                                                            required id='endDate' name='endDate' type="date" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6'>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Regisztráció kezdete:</label><br />
                                                        <input
                                                            value={competition.registrationStart}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}
                                                            required id='registrationStart' name='registrationStart' type="date" />
                                                    </div>

                                                    <div className='m-10'>
                                                        <label htmlFor="">Regisztráció határideje:</label><br />
                                                        <input
                                                            value={competition.registrationEnd}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}
                                                            required id='registrationEnd' name='registrationEnd' type="date" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6'>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Verseny típusa:</label> <br />
                                                        <input
                                                            value={competition.competitionType}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}
                                                            required id='competitionType' name='competitionType' type="text" />
                                                    </div>
                                                    <div className='m-10'>
                                                        <label htmlFor="">Játék:</label><br />
                                                        <input
                                                            value={competition.game}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}
                                                            required id='game' name='game' type="text" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6 p-10'>
                                                    <label>Platformok:</label>
                                                    <input
                                                        value={competition.platform}
                                                        onChange={(e: any) => writeCompetitionData(e, index)}
                                                        id='platform' name='platform' type="text" />
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
                                                        <textarea
                                                            value={competition.description}
                                                            onChange={(e: any) => writeCompetitionData(e, index)}
                                                            required id="description" name="description" />
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
            <Button2 content="Beküldés" myFunct={onSubmit}
            //myFunct={modalOpener} 
            />

        </>
    )
}

export default AddCompetitions