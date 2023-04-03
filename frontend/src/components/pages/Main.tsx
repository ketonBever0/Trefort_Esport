import React from 'react'

function Main() {
    return (
        <div>
            <div className="nk-gap" />
            <div className='m-10'>
                {/* START: Image Slider */}
                <div className="nk-image-slider" data-autoplay={8000}>
                    <div className="nk-image-slider-item">
                        <div className=''>Images</div>
                    </div>
                </div>
            </div>
            {/* END: Image Slider */}

            {/* START: Categories */}
            {/* <div className="nk-gap-2" />
                <div className="row vertical-gap">
                    <div className="col-lg-4">
                        <div className="nk-feature-1">
                            <div className="nk-feature-icon">
                                <img src="assets/images/icon-mouse.svg" alt="" />
                            </div>
                            <div className="nk-feature-cont">
                                <h3 className="nk-feature-title">
                                    <a href="#">PC</a>
                                </h3>
                                <h4 className="nk-feature-title text-main-1">
                                    <a href="#">View Games</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="nk-feature-1">
                            <div className="nk-feature-icon">
                                <img src="assets/images/icon-gamepad.svg" alt="" />
                            </div>
                            <div className="nk-feature-cont">
                                <h3 className="nk-feature-title">
                                    <a href="#">PS4</a>
                                </h3>
                                <h4 className="nk-feature-title text-main-1">
                                    <a href="#">View Games</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="nk-feature-1">
                            <div className="nk-feature-icon">
                                <img src="assets/images/icon-gamepad-2.svg" alt="" />
                            </div>
                            <div className="nk-feature-cont">
                                <h3 className="nk-feature-title">
                                    <a href="#">Xbox</a>
                                </h3>
                                <h4 className="nk-feature-title text-main-1">
                                    <a href="#">View Games</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div> */}

            <div className="nk-gap-2" />

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
                        {/* END: Post */}
                    </div>

                </div>
            </div>


            {/* START: Upcoming Matches */}
            <h3 className="nk-decorated-h-2">
                <span><span className="text-main-1">Ütemezett</span> Meccsek</span>
            </h3>
            <div className="nk-gap" />
            <div className="nk-match">
                <p>Itt máshogy lesz megoldva (pl fekvő gridbox)</p>
            </div>

            {/* END: Upcoming Matches */}

            <div className='nk-gap-3' />

            {/* START: Now Playing */}
            <div className="row">
                <div className="col-md-4">
                    <div className="nk-match-score bg-dark-3"> ÉLŐ </div>
                    <div className="nk-gap-2" />
                    <div className="nk-widget-match p-0">
                        <div className="nk-widget-match-teams">
                            <div className="nk-widget-match-team-logo">
                                <img src="assets/images/team-1.jpg" alt="" />
                            </div>
                            <div className="nk-widget-match-vs">VS</div>
                            <div className="nk-widget-match-team-logo">
                                <img src="assets/images/team-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="nk-gap-2" />
                    <p>
                        As she said this she looked down at her hands and was surprised to see.
                    </p>
                    <a
                        href="tournaments.html"
                        className="nk-btn nk-btn-rounded nk-btn-color-main-1"
                    >
                        Match Details
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="responsive-embed responsive-embed-16x9">
                        <iframe
                            src="https://player.twitch.tv/?channel=lirik&autoplay=false"
                            frameBorder={0}
                            allowFullScreen={true}
                            scrolling="no"
                            height={378}
                            width={620}
                        />
                    </div>
                </div>
            </div>
            {/* END: Now Playing */}

            <div className="nk-gap-2" />

            {/* START: Latest Matches */}
            <h3 className="nk-decorated-h-2">
                <span><span className="text-main-1">Latest</span> Matches</span>
            </h3>
            <div className="nk-gap" />
            <div className="nk-match">
                <div className="nk-match-team-left">
                    <a href="#">
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                        </span>
                        <span className="nk-match-team-name"> SK Telecom T1 </span>
                    </a>
                </div>
                <div className="nk-match-status">
                    <a href="#">
                        <span className="nk-match-status-vs">VS</span>
                        <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                        <span className="nk-match-score bg-danger"> 2 : 17 </span>
                    </a>
                </div>
                <div className="nk-match-team-right">
                    <a href="#">
                        <span className="nk-match-team-name"> Cloud 9 </span>
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-2.jpg" alt="" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="nk-match">
                <div className="nk-match-team-left">
                    <a href="#">
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-3.jpg" alt="" />
                        </span>
                        <span className="nk-match-team-name"> Counted logic gaming </span>
                    </a>
                </div>
                <div className="nk-match-status">
                    <a href="#">
                        <span className="nk-match-status-vs">VS</span>
                        <span className="nk-match-status-date">Apr 15, 2018 9:00 pm</span>
                        <span className="nk-match-score bg-success"> 28 : 19 </span>
                    </a>
                </div>
                <div className="nk-match-team-right">
                    <a href="#">
                        <span className="nk-match-team-name"> SK Telecom T1 </span>
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="nk-match">
                <div className="nk-match-team-left">
                    <a href="#">
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-4.jpg" alt="" />
                        </span>
                        <span className="nk-match-team-name"> Team SoloMid </span>
                    </a>
                </div>
                <div className="nk-match-status">
                    <a href="#">
                        <span className="nk-match-status-vs">VS</span>
                        <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                        <span className="nk-match-score bg-dark-1"> 13 : 13 </span>
                    </a>
                </div>
                <div className="nk-match-team-right">
                    <a href="#">
                        <span className="nk-match-team-name"> SK Telecom T1 </span>
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                        </span>
                    </a>
                </div>
            </div>

            <div className="nk-gap-2" />
            <a
                href="tournaments.html"
                className="nk-btn nk-btn-rounded nk-btn-color-main-1 ms-5"
            >
                Továbbiak
            </a>
            {/* END: Latest Matches */}




            {/* START: Latest News */}
            <div className="nk-gap-2" />
            <h3 className="nk-decorated-h-2">
                <span>
                    <span className="text-main-1">Friss</span> Híreink
                </span>
            </h3>
            <div className="nk-gap" />
            <div className="nk-news-box" style={{ height: "34rem" }}>
                <div className="nk-news-box-list">
                    <div className="nano">
                        <div className="nano-content">
                            <div className="nk-news-box-item nk-news-box-item-active">
                                <div className="nk-news-box-item-img">
                                    <img
                                        src="assets/images/post-1-sm.jpg"
                                        alt="Smell magic in the air. Or maybe barbecue"
                                    />
                                </div>
                                <img
                                    src="assets/images/post-1.jpg"
                                    alt="Smell magic in the air. Or maybe barbecue"
                                    className="nk-news-box-item-full-img"
                                />
                                <h3 className="nk-news-box-item-title">
                                    Smell magic in the air. Or maybe barbecue
                                </h3>
                                <span className="nk-news-box-item-categories">
                                    <span className="bg-main-4">MMO</span>
                                </span>
                                <div className="nk-news-box-item-text">
                                    <p>
                                        With what mingled joy and sorrow do I take up the pen to write
                                        to my dearest friend! Oh, what a change between to-day and
                                        yesterday! Now I am friendless and alone...
                                    </p>
                                </div>
                                <a href="blog-article.html" className="nk-news-box-item-url">
                                    Read More
                                </a>
                                <div className="nk-news-box-item-date">
                                    <span className="fa fa-calendar" /> Sep 18, 2018
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="nk-news-box-each-info">
                    <div className="nano">
                        <div className="nano-content">
                            {/* There will be inserted info about selected news*/}
                            <div className="nk-news-box-item-image">
                                <img src="assets/images/post-1.jpg" alt="" />
                                <span className="nk-news-box-item-categories">
                                    <span className="bg-main-4">MMO</span>
                                </span>
                            </div>
                            <h3 className="nk-news-box-item-title">
                                Smell magic in the air. Or maybe barbecue
                            </h3>
                            <div className="nk-news-box-item-text">
                                <p>
                                    With what mingled joy and sorrow do I take up the pen to write to
                                    my dearest friend! Oh, what a change between to-day and yesterday!
                                    Now I am friendless and alone...
                                </p>
                            </div>
                            <a href="blog-article.html" className="nk-news-box-item-more">
                                Read More
                            </a>
                            <div className="nk-news-box-item-date">
                                <span className="fa fa-calendar" /> Sep 18, 2018
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-gap-3" />




        </div >
    )
}

export default Main