import React, { useContext, useEffect, useState } from 'react'
import BlogArticleContext from '../../_context/BlogArticleContext'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';

function LatestNews() {


    //  active classname: nk-news-box-item-active

    const {
        isPostsLoading,
        posts,
        getArticles
    } = useContext(BlogArticleContext);

    const [selectedPostItem, setSelectedPostItem] = useState(posts[0]);

    useEffect(() => {
        getArticles();
    }, [])

    useEffect(() => {
        posts && setSelectedPostItem(posts[0]);
    }, [posts])

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
            <div className="nk-news-box" style={{ height: "38rem" }}>
                <div className="nk-news-box-list">
                    <div className="nano">
                        <div className="nano-content">

                            {
                                posts.length > 0 ?
                                    posts.slice(0, 5).map((post: any, index: React.Key) => (
                                        <div className={`nk-news-box-item ${selectedPostItem == post && 'nk-news-box-item-active'}`} onClick={() => setSelectedPostItem(post)} key={index}>
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
                                            <h3 className="nk-news-box-item-title" >{post.title}</h3>
                                            {/* <span className="nk-news-box-item-categories">
                                            <span className="bg-main-4">MMO</span>
                                        </span> */}
                                            <div className="nk-news-box-item-text">
                                                <p dangerouslySetInnerHTML={{ __html: post.content.slice(0, 40) }} />
                                            </div>
                                            <a href="blog-article.html" className="nk-news-box-item-url">
                                                Read More
                                            </a>
                                            <div className="nk-news-box-item-date">
                                                <span className="fa fa-calendar" /> {post.createdAt}
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <p className='text-center'>Hírek betöltése nem sikerült!</p>
                            }

                        </div>
                    </div>
                </div>

                {
                    posts.length > 0 &&
                    <div className="nk-news-box-each-info">
                        <div className="nano">
                            <div className="nano-content">
                                {/* There will be inserted info about selected news*/}
                                <div className="nk-news-box-item-image">
                                    <img src="assets/images/post-1.jpg" alt="" />
                                    {/* <span className="nk-news-box-item-categories">
                                    <span className="bg-main-4">MMO</span>
                                </span> */}
                                </div>
                                <h3 className="nk-news-box-item-title" >{selectedPostItem?.title}</h3>
                                <div className="nk-news-box-item-text">
                                    <p dangerouslySetInnerHTML={{ __html: selectedPostItem?.content.slice(0, 300) }} />
                                </div>
                                <Link to={`/post/${selectedPostItem?.id}`} className="nk-news-box-item-more">
                                    Elolvasom...
                                </Link>
                                <div className="nk-news-box-item-date">
                                    <span className="fa fa-calendar" /> Sep 18, 2018
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}

export default LatestNews