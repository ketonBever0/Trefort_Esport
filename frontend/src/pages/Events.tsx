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


    useEffect(() => {
        getEvents();
    }, [])

    const myFunction = (param: any) => {
        console.log(param)
    }

    return (
        <div>
            <div className="nk-blog-fullwidth">
            <div className='d-flex justify-content-start'>
            <GoBackButton/>
            </div>

                {
                    !isEventsLoading && events.length > 0 && (
                        events.map((event: any, index: React.Key) => (
                            <div className="nk-blog-post" key={index}>
                                <Link to={`/events/${event.id}`} className="nk-post-img">
                                    <img
                                        src={event.image || 'assets/images/post-1-fw.jpg'}
                                        alt="Smell magic in the air. Or maybe barbecue"
                                    />
                                    <span className="nk-post-comments-count">0</span>
                                </Link>
                                <div className="nk-gap-2" />
                                <div className="row vertical-gap">
                                    <div className="col-md-8 col-lg-9">
                                        <h2 className="nk-post-title h4">
                                            <Link to={`/events/${event.id}`}>
                                                {event.name}
                                            </Link>
                                        </h2>
                                        <div className="nk-gap" />
                                        <div className="nk-post-text">
                                            <p>{event.description.slice(0, 500)}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <div className="nk-post-by">
                                            <img
                                                src="assets/images/avatar-1.jpg"
                                                alt="Hitman"
                                                className="rounded-circle"
                                                width={60}
                                            />
                                            by <button onClick={() => Notify.tPromise(myFunction("szia"), "betöltés", "sikeres", "nem sikerült")}>{event.organizers?.representative?.username}</button>
                                            <br /> {event.startDate} <br /> Helyszín:<br />
                                            <p title={event.organizers?.location}>{event.organizers?.name}</p>
                                        </div>
                                        <div className="nk-gap-3" />
                                        <div className="text-right">
                                            <Link to={`/events/${event.id}`}
                                                className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }

            </div>


        </div>
    )
}

export default Events