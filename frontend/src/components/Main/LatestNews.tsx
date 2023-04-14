import React, { useContext } from 'react'
import BlogArticleContext from '../../_context/BlogArticleContext'

function LatestNews() {


    //  active classname: nk-news-box-item-active

    const {
        isPostsLoading,
        posts
    } = useContext(BlogArticleContext);


    return (
        <div>
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

                            {
                                posts.length > 1 &&
                                <div className="nk-news-box-item">
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
                            }


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
        </div>
    )
}

export default LatestNews