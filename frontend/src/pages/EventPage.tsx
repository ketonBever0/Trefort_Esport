import { useContext, useEffect, useState } from "react";
import EventContext from "../_context/EventContext";
import { Link, useParams } from "react-router-dom";
import CompetitionContext from "../_context/CompetitionContext";
import { BeatLoader } from "react-spinners";
import GoBackButton from "../ui/GoBackButton";

function EventPage() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
    }, []);

    const eventByIdStringified: any = sessionStorage.getItem("eventByIdSSN");
    const SSNEventByIdParsed = JSON.parse(eventByIdStringified);


    const [isEditing, setIsEditing] = useState(false);

    const {
        updateEvent,
        isEventLoading,
        event,
        getEventById
    } = useContext(EventContext);

    const [eventDataToSend, setEventDataToSend] = useState(
        {
            name: SSNEventByIdParsed.name,
            startDate: SSNEventByIdParsed.startDate,
            endDate: SSNEventByIdParsed.endDate,
            location: SSNEventByIdParsed.location,
            description: SSNEventByIdParsed.description
        });

    const { id } = useParams();

    useEffect(() => {
        id && getEventById(id);

        console.log('ID, EVENT, SSNEVENT', id, event, SSNEventByIdParsed.name)
    }, []);


    const formatDate = (date: string) => {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);
        return `${year}. ${month}. ${day}.`
    }

    const {
        getAllCompetitionsByEventId,
        eventCompetitions,
        isEventCompetitionsLoading
    } = useContext(CompetitionContext);



    useEffect(() => {
        getAllCompetitionsByEventId(id);

    }, [])

    const addLeadingZero = (digit: any) => {
        var intDigit = parseInt(digit);
        if (intDigit < 10) {
            return ('0' + intDigit)
        } else {
            return (digit)
        }
    }

    const stringToDate = (toBeParsedString: any) => {
        const myDate = new Date(toBeParsedString);
        const myYear = myDate.getFullYear();
        const myMonth = myDate.getMonth() + 1;
        const myDay = myDate.getDate();
        return (myYear + '-' + addLeadingZero(myMonth) + '-' + addLeadingZero(myDay));
    }



    const writeData = (e: any) => {
        setEventDataToSend((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        updateEvent(id, eventDataToSend)
    }



    return (
        <>
            <div className='d-flex justify-content-start mb-40'>
                <GoBackButton />
            </div>
            {

                //MÓDOSÍTÓ FELÜLET:
                isEditing
                    ?
                    <>
                        <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>Esemény adatainak módosítása<span> </span></div>
                        <form className="row vertical-gap text-white">
                            <div className="col-lg-6">
                                <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Esemény neve:</label><br></br>

                                    <input
                                        id="name"
                                        name="name"
                                        onChange={writeData}
                                        defaultValue={event.name}
                                        className="form-control required bg-dark m-10" />

                                    {/* <label className='h4 p-10 border-main-left text-sm-h6'>Megrendező:</label><br></br>
                                    <input className="form-control required bg-dark m-10"/>
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Szponzor:</label>
                                    <br></br>
                                    <input className="form-control required bg-dark m-10"/> */}
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Esemény leírása:</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        onChange={writeData}
                                        defaultValue={event.description}
                                        className="form-control required bg-dark m-10">

                                    </textarea>
                                </div>

                            </div>

                            <div className="col-lg-6  myColor2">
                                <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Esemény helyszíne:</label><br></br>
                                    <label className='ml-10'>(Város, utca, házszám)</label>
                                    <input
                                        id="location"
                                        name="location"
                                        onChange={writeData}
                                        defaultValue={event.location}
                                        className="form-control required bg-dark m-10" />
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                                    <textarea className="form-control required bg-dark m-10"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Esemény kezdési időpontja:</label><br></br>
                                    <label className='ml-10'>(év-hónap-nap)</label>
                                    <input
                                        id="startDate"
                                        name="startDate"
                                        onChange={writeData}
                                        defaultValue={stringToDate(event.startDate)}
                                        className="form-control required bg-dark m-10" />
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                                    <textarea className="form-control required bg-dark m-10"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ borderTop: "2px solid #dd163b" }} className="nk-box-2 bg-dark-2">
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Esemény vége:</label><br></br>
                                    <p className='opacity-50 p-10'>Kizárólag a verseny végén töltendő ki.</p>
                                    <label className='ml-10'>(év-hónap-nap)</label>
                                    <input
                                        id="endDate"
                                        name="startDate"
                                        onChange={writeData}
                                        defaultValue={stringToDate(event.endDate)}
                                        className="form-control required bg-dark m-10" />
                                    <label className='h4 p-10 border-main-left text-sm-h6'>Egyéb információ:</label>
                                    <textarea className="form-control required bg-dark m-10"></textarea>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end row gap-4 p-20'>
                                <button onClick={() => { setIsEditing(false); }} className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'>Kilépés</button>
                                <button className='col-sm-4 col-lg-3 nk-btn nk-btn-rounded text-dark'
                                    type="reset" value="reset">Alaphelyzet</button>
                                <button className='col-sm-4 col-lg-2 nk-btn nk-btn-rounded nk-btn-color-main-1'
                                    onClick={onSubmit}>Módosítás</button>
                            </div>
                        </form>
                    </>
                    :
                    //DINAMIKUS FELÜLET:
                    <>
                        {
                            !isEventLoading && event
                                ?

                                <div className='m-20 p-50'>
                                    <h3 className="nk-decorated-h">
                                        <span>
                                            <span className="text-main-6">Esemény adatai</span>
                                        </span>
                                    </h3>

                                    <div className="row vertical-gap text-white">
                                        <div className="col-lg-6">
                                            <div className="nk-box-2 bg-dark-2">
                                                <h4>{event.address}</h4>
                                                {/* Az épületen belüli helyszínek az eseményen lesznek elmondva. */}
                                                <h4><span className="text-main-1">Helyszín:</span></h4>
                                                {event.location}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="nk-box-2 bg-dark-2">
                                                {/* <h4>2023. 02. 12-15.</h4> */}
                                                <h4><span className="text-main-1">Kezdés:</span> {formatDate(event.startDate)}</h4>
                                                <h4><span className="text-main-1">Vége:</span> {formatDate(event.endDate)}</h4>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="nk-gap-6" />

                                    <p className="text-center">{event.description}</p>

                                    <div className='d-flex justify-content-center'>
                                        <button type='submit' style={{ fontSize: '1.2rem', padding: '15px' }} className='nk-btn nk-btn-rounded nk-btn-color-main-1 mt-40'
                                            onClick={() => setIsEditing(true)}
                                        >
                                            Esemény szerkesztése
                                        </button>
                                    </div>

                                    <div className="nk-gap-4" />

                                    <h3 className="nk-decorated-h m-20">
                                        <span>
                                            <span className="text-main-6">Induló játékok</span>
                                        </span>
                                    </h3>
                                    {
                                        !isEventCompetitionsLoading &&
                                        eventCompetitions?.length > 0 && (
                                            eventCompetitions.map((competition: any, index: React.Key) => (
                                                <div className="nk-info-box text-danger" key={index}>
                                                    <div className="nk-info-box-icon">

                                                    </div>
                                                    <h3>{competition.name}</h3>
                                                    <em>{competition.description}</em>
                                                    <div className='d-flex justify-content-end'>
                                                        <Link to={`/events/${id}/register/${competition.id}`} className="nk-btn nk-btn-rounded nk-btn-color-main-1">Jelentkezem!</Link>
                                                    </div>


                                                </div>
                                            ))
                                        )
                                    }


                                    {/* <div className="nk-info-box text-warning">
                            <div className="nk-info-box-icon">

                            </div>
                            <h3>Rocket League</h3>
                            <em>
                                Játék leírása
                            </em>
                        </div>
                        <div className="nk-info-box text-light">
                            <div className="nk-info-box-icon">

                            </div>
                            <h3>League Of Legends</h3>
                            <em>
                                Játék leírása
                            </em>
                        </div> */}
                                </div>
                                :
                                <div className='d-flex justify-content-center'>
                                    <BeatLoader color="#dd163b" className='mt-30' />
                                </div>
                        }
                    </>
            }

        </>
    )
}

export default EventPage