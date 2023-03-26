import React from 'react'

function Main() {
    return (
        <div>
            <>
                {/* START: Image Slider */}
                <div className="nk-image-slider" data-autoplay={8000}>
                    <div className="nk-image-slider-item">
                        <div className=''>Images</div>

                    </div>
                </div>
                {/* END: Image Slider */}
            </>


            <div className="nk-blog-grid">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        {/* START: Post */}
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
                                    Just then her head struck against the roof of the hall: in fact she
                                    was now more than nine feet high, and she at once took up the little
                                    golden key and hurried off to the garden door...
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
                    <div className="col-md-6 col-lg-3">
                        {/* START: Post */}
                        <div className="nk-blog-post">
                            <a href="blog-article.html" className="nk-post-img">
                                <img
                                    src="assets/images/post-6-mid.jpg"
                                    alt="At first, for some time, I was not able to answer"
                                />
                                <span className="nk-post-comments-count">0</span>
                                <span className="nk-post-categories">
                                    <span className="bg-main-5">Racing</span>
                                </span>
                            </a>
                            <div className="nk-gap" />
                            <h2 className="nk-post-title h4">
                                <a href="blog-article.html">
                                    At first, for some time, I was not able to answer
                                </a>
                            </h2>
                            <div className="nk-post-text">
                                <p>
                                    This little wandering journey, without settled place of abode, had
                                    been so unpleasant to me, that my own house, as I called it to
                                    myself, was a perfect settlement to me compared to that...
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
                                <span className="fa fa-calendar" /> Jul 3, 2018
                            </div>
                        </div>
                        {/* END: Post */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        {/* START: Post */}
                        <div className="nk-blog-post">
                            <a href="blog-article.html" className="nk-post-img">
                                <img
                                    src="assets/images/post-7-mid.jpg"
                                    alt="At length one of them called out in a clear"
                                />
                                <span className="nk-post-comments-count">0</span>
                                <span className="nk-post-categories">
                                    <span className="bg-main-6">MOBA</span>
                                </span>
                            </a>
                            <div className="nk-gap" />
                            <h2 className="nk-post-title h4">
                                <a href="blog-article.html">
                                    At length one of them called out in a clear
                                </a>
                            </h2>
                            <div className="nk-post-text">
                                <p>
                                    TJust then her head struck against the roof of the hall: in fact she
                                    was now more than nine feet high, and she at once took up the little
                                    golden key and hurried off to the garden door...
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
                                <span className="fa fa-calendar" /> Jul 3, 2018
                            </div>
                        </div>
                        {/* END: Post */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        {/* START: Post */}
                        <div className="nk-blog-post">
                            <a href="blog-article.html" className="nk-post-img">
                                <img
                                    src="assets/images/post-8-mid.jpg"
                                    alt="For good, too though, in consequence"
                                />
                                <span className="nk-post-comments-count">0</span>
                                <span className="nk-post-categories">
                                    <span className="bg-main-2">Adventure</span>
                                </span>
                            </a>
                            <div className="nk-gap" />
                            <h2 className="nk-post-title h4">
                                <a href="blog-article.html">For good, too though, in consequence</a>
                            </h2>
                            <div className="nk-post-text">
                                <p>
                                    This little wandering journey, without settled place of abode, had
                                    been so unpleasant to me, that my own house, as I called it to
                                    myself, was a perfect settlement to me compared to that...
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
                                <span className="fa fa-calendar" /> Jul 3, 2018
                            </div>
                        </div>
                        {/* END: Post */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main