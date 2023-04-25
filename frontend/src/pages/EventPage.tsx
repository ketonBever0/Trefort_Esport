import { useContext, useEffect } from "react";
import EventContext from "../_context/EventContext";
import { useParams } from "react-router-dom";

function EventPage() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
    }, [])

    const {
        isEventLoading,
        event,
        getEventById
    } = useContext(EventContext);

    const { id } = useParams();

    useEffect(() => {
        id && getEventById(id);
    }, [])


    const formatDate = (date: string) => {


        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);


        return `${year}. ${month}. ${day}.`

    }


    return (
        <>
            {
                !isEventLoading && event &&
                (
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


                        <p>{event.description}</p>


                        <h3 className="nk-decorated-h m-20">
                            <span>
                                <span className="text-main-6">Induló játékok</span>
                            </span>
                        </h3>
                        <div className="nk-info-box text-danger">
                            <div className="nk-info-box-icon">

                            </div>
                            <h3>Valorant</h3>
                            <em>Játék leírása</em>
                            <div className='d-flex justify-content-end'>
                                <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-main-1">
                                    Jelentkezem!
                                </a>
                            </div>



                        </div>
                        <div className="nk-info-box text-warning">
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
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default EventPage