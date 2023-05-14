import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import EventContext from '../_context/EventContext'
import { Link } from 'react-router-dom';
import Notify from '../ui/Toasts';
import GoBackButton from '../ui/GoBackButton';

function Events() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-4.png')")
    }, [])

    const {
        isEventsLoading,
        events,
        getEvents
    } = useContext(EventContext);


    const token = localStorage.getItem('usertoken');

    useEffect(() => {
        getEvents(token);
    }, [])

    const myFunction = (param: any) => {
        console.log(param)
    }

    const formatDate = (date: string) => {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);

        return `${year}. ${month}. ${day}.`
    }

    

    return (
        <div>
            <div className="nk-blog-fullwidth">
            <div className='d-flex justify-content-start mb-40'>
            <GoBackButton/>
            </div>

                {
                    !isEventsLoading && events.length > 0 && (
                        events.map((event: any, index: React.Key) => (
                            <div className="nk-blog-post container" key={index}>
                                <Link to={`/events/${event.id}`} className="nk-post-img">
                                    <img
                                    style={{width:"rem"}}
                                        src={event.image || 'assets/images/post-1-fw.jpg'}
                                    />
                                    <span className="nk-post-comments-count">0</span>
                                </Link>
                                <div className="nk-gap-2" />
                                <div className="row vertical-gap">
                                    <div className="col-md-8 col-lg-9">
                                        <h2 className="nk-post-title h3">
                                            <Link to={`/events/${event.id}`}>
                                                {event.name}
                                            </Link>
                                        </h2>
                                        <hr />
                                        <div className="nk-gap" />
                                        <div className="nk-post-text">
                                            <p>{event.description.slice(0, 500)}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <div className="nk-post-by text-start">
                                            {/* <img
                                                src="assets/images/avatar-1.jpg"
                                                className="rounded-circle"
                                                width={60}
                                            /> */}
                                            {/* <button onClick={() => Notify.tPromise(myFunction("szia"), "betöltés", "sikeres", "nem sikerült")}>{event.organizers?.representative?.username}</button> */}
                                            <br /> Időpont: <span className='text-white'> {formatDate(event.startDate)} </span> <br /> Helyszín: <span className='text-white'>{event.location}</span>  <br />
                                            <p title={event.organizers?.location}>{event.organizers?.name}</p>
                                        </div>


                                    </div>
                                    <div className="text-right d-flex justify-content-center">
                                            <div>
                                                <Link to={`/events/${event.id}`}
                                                    className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                                                >
                                                    Megnézem
                                                </Link>                                                
                                            </div>
                                        </div>
                                </div>
                                <div className="nk-gap-3" style={{borderBottom:'4px solid #dd163b'}} />
                                
                            </div>
                        ))
                    )
                }

            </div>


        </div>
    )
}

export default Events