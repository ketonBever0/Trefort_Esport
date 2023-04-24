import React, { useContext, useEffect } from 'react';
import EventContext from '../../_context/EventContext';

function UpComingEvents() {


    const {
        isEventsLoading,
        events,
        getEvents
    } = useContext(EventContext);

    useEffect(() => {
        getEvents();
    }, [])



    return (
        <div>
            <h3 className="nk-decorated-h-2">
                <span>
                    <span className="text-main-1">Közelgő</span> Események
                </span>
            </h3>

            <div className="nk-gap-1" />
            {/* START: events */}
            <div className="nk-blog-grid">
                <div className="row">

                    {
                        !isEventsLoading && (
                            events.length > 0 ?
                                events.map((event: any, index: React.Key) => (
                                    (
                                        <div key={index}>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="nk-blog-post">
                                                    <a href="blog-article.html" className="nk-post-img">
                                                        <img
                                                            src="assets/images/post-5-mid.jpg"
                                                            alt={event.name}
                                                        />
                                                        <span className="nk-post-comments-count">0</span>
                                                        {/* <span className="nk-post-categories">
                                                            <span className="bg-main-5">{ }</span>
                                                        </span> */}
                                                    </a>
                                                    {/* <div className="nk-gap" /> */}
                                                    <div>
                                                        <p style={{
                                                            whiteSpace: "nowrap",
                                                            textOverflow: "ellipsis",
                                                            overflow: "hidden"

                                                        }}>
                                                            {event.organizers?.name}
                                                        </p>

                                                    </div>
                                                    {/* <div className="nk-gap" /> */}
                                                    <h2 className="nk-post-title h4">
                                                        <a href="blog-article.html">{event.name}</a>
                                                    </h2>
                                                    <div className="nk-post-text">
                                                        <p>{
                                                            event.description && (
                                                                event.description.length > 250 ?
                                                                    <>{event.description.slice(0, 250)}...</>
                                                                    :
                                                                    event.description
                                                            )
                                                        }</p>
                                                    </div>
                                                    <div className="nk-gap" />
                                                    <a
                                                        href="blog-article.html"
                                                        className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                                                    >
                                                        Tovább
                                                    </a>
                                                    <div className="nk-post-date float-right">
                                                        <span className="fa fa-calendar" /> {event.startDate}
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    )
                                ))
                                :
                                <div>Events not found!</div>
                        )

                    }




                </div>
            </div>
            {/* END: events */}
        </div >
    )
}

export default UpComingEvents