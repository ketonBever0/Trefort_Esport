import React from 'react'

function UpComingEvents() {
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
                    <div className="col-md-6 col-lg-3">



                        <div className="nk-blog-post">
                            <a href="blog-article.html" className="nk-post-img">
                                <img
                                    src="assets/images/post-5-mid.jpg"
                                    alt="He made his passenger captain of one"
                                />
                                <span className="nk-post-comments-count">13</span>
                                <span className="nk-post-categories">
                                    <span className="bg-main-5">Indie</span>
                                </span>
                            </a>
                            <div className="nk-gap" />
                            <h2 className="nk-post-title h4">
                                <a href="blog-article.html">He made his passenger captain of one</a>
                            </h2>
                            <div className="nk-post-text">
                                <p>
                                    Just then her head struck against the roof of the hall: in fact
                                    she was now more than nine feet high, and she at once took up the
                                    little golden key and hurried off to the garden door...
                                </p>
                            </div>
                            <div className="nk-gap" />
                            <a
                                href="blog-article.html"
                                className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                            >
                                Read More
                            </a>
                            <div className="nk-post-date float-right">
                                <span className="fa fa-calendar" /> Jul 23, 2018
                            </div>
                        </div>
                        {/* END: events */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpComingEvents