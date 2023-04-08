import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import BlogArticleContext from '../_context/BlogArticleContext';
import BlogArticleItem from '../components/BlogArticles/BlogArticleItem';
// import './_css/BlogArticles.css'

function BlogArticles() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-2.png')")
    }, [])

    const {
        isPostsLoading,
        posts,
        getArticles
    } = useContext(BlogArticleContext);

    useEffect(() => {
        getArticles();
    }, [])


    const [maxPostItems, setMaxPostItems] = useState<number>(1);

    return (
        <div>

            <div className="nk-main">
                {/* START: Breadcrumbs */}
                <div className="nk-gap-1" />
                <div className="container">
                    <ul className="nk-breadcrumbs">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <span className="fa fa-angle-right" />
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <span className="fa fa-angle-right" />
                        </li>
                        <li>
                            <span>Friss Híreink</span>
                        </li>
                    </ul>
                </div>
                <div className="nk-gap-1" />
                {/* END: Breadcrumbs */}
                <div className="container">
                    <div className="row vertical-gap">
                        <div className="col-lg-8">
                            {/* START: Posts List */}
                            <div className="nk-blog-list">

                                {/* Blog List */}

                                {
                                    isPostsLoading ?
                                        <>Betöltés...</>
                                        :
                                        (
                                            posts.length > 0 ?
                                                posts
                                                    .slice(0, maxPostItems)
                                                    .map((post: React.Attributes, index: React.Key) => (
                                                        <BlogArticleItem {...post} key={index} />
                                                    ))
                                                :
                                                <></>
                                        )

                                }
                                {/* <>{posts.length}</><br /> */}
                                {posts.length > maxPostItems && <button className='mx-auto' onClick={() => setMaxPostItems((prev: number) => prev + 1)}>Továbbiak...</button>}


                                {/* START: Pagination */}
                                <div className="nk-pagination nk-pagination-center">
                                    <a href="#" className="nk-pagination-prev">
                                        <span className="ion-ios-arrow-back" />
                                    </a>
                                    <nav>
                                        <a className="nk-pagination-current" href="#">
                                            1
                                        </a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">4</a>
                                        <span>...</span>
                                        <a href="#">14</a>
                                    </nav>
                                    <a href="#" className="nk-pagination-next">
                                        <span className="ion-ios-arrow-forward" />
                                    </a>
                                </div>
                                {/* END: Pagination */}
                            </div>
                            {/* END: Posts Grid */}
                        </div>

                        <div className="col-lg-4">
                            <Sidebar />
                        </div>

                    </div>
                </div>
                <div className="nk-gap-2" />
                {/* START: Footer */}
                <footer className="nk-footer">
                    <div className="container">
                        <div className="nk-gap-3" />
                        <div className="row vertical-gap">
                            <div className="col-md-6">
                                <div className="nk-widget">
                                    <h4 className="nk-widget-title">
                                        <span className="text-main-1">Contact</span> With Us
                                    </h4>
                                    <div className="nk-widget-content">
                                        <form
                                            action="php/ajax-contact-form.php"
                                            className="nk-form nk-form-ajax"
                                        >
                                            <div className="row vertical-gap sm-gap">
                                                <div className="col-md-6">
                                                    <input
                                                        type="email"
                                                        className="form-control required"
                                                        name="email"
                                                        placeholder="Email *"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control required"
                                                        name="name"
                                                        placeholder="Name *"
                                                    />
                                                </div>
                                            </div>
                                            <div className="nk-gap" />
                                            <textarea
                                                className="form-control required"
                                                name="message"
                                                rows={5}
                                                placeholder="Message *"
                                                defaultValue={""}
                                            />
                                            <div className="nk-gap-1" />
                                            <button className="nk-btn nk-btn-rounded nk-btn-color-white">
                                                <span>Send</span>
                                                <span className="icon">
                                                    <i className="ion-paper-airplane" />
                                                </span>
                                            </button>
                                            <div className="nk-form-response-success" />
                                            <div className="nk-form-response-error" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="nk-widget">
                                    <h4 className="nk-widget-title">
                                        <span className="text-main-1">Latest</span> Posts
                                    </h4>
                                    <div className="nk-widget-content">
                                        <div className="row vertical-gap sm-gap">
                                            <div className="col-lg-6">
                                                <div className="nk-widget-post-2">
                                                    <a href="blog-article.html" className="nk-post-image">
                                                        <img src="assets/images/post-1-sm.jpg" alt="" />
                                                    </a>
                                                    <div className="nk-post-title">
                                                        <a href="blog-article.html">
                                                            Smell magic in the air. Or maybe barbecue
                                                        </a>
                                                    </div>
                                                    <div className="nk-post-date">
                                                        <span className="fa fa-calendar" /> Sep 18, 2018{" "}
                                                        <span className="fa fa-comments" /> <a href="#">4</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="nk-widget-post-2">
                                                    <a href="blog-article.html" className="nk-post-image">
                                                        <img src="assets/images/post-2-sm.jpg" alt="" />
                                                    </a>
                                                    <div className="nk-post-title">
                                                        <a href="blog-article.html">
                                                            Grab your sword and fight the Horde
                                                        </a>
                                                    </div>
                                                    <div className="nk-post-date">
                                                        <span className="fa fa-calendar" /> Sep 5, 2018{" "}
                                                        <span className="fa fa-comments" /> <a href="#">7</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-widget">
                                    <h4 className="nk-widget-title">
                                        <span className="text-main-1">In</span> Twitter
                                    </h4>
                                    <div className="nk-widget-content">
                                        <div className="nk-twitter-list" data-twitter-count={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nk-gap-3" />
                    </div>
                    <div className="nk-copyright">
                        <div className="container">
                            <div className="nk-copyright-left">
                                {" "}
                                Copyright © 2018{" "}
                                <a href="https://1.envato.market/nk-profile" target="_blank">
                                    nK
                                </a>
                            </div>
                            <div className="nk-copyright-right">
                                <ul className="nk-social-links-2">
                                    <li>
                                        <a className="nk-social-rss" href="#">
                                            <span className="fa fa-rss" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nk-social-twitch" href="#">
                                            <span className="fab fa-twitch" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nk-social-steam" href="#">
                                            <span className="fab fa-steam" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nk-social-facebook" href="#">
                                            <span className="fab fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nk-social-google-plus" href="#">
                                            <span className="fab fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="nk-social-twitter"
                                            href="https://twitter.com/nkdevv"
                                            target="_blank"
                                        >
                                            <span className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nk-social-pinterest" href="#">
                                            <span className="fab fa-pinterest-p" />
                                        </a>
                                    </li>
                                    {/* Additional Social Buttons
                  <li><a class="nk-social-behance" href="#"><span class="fab fa-behance"></span></a></li>
                  <li><a class="nk-social-bitbucket" href="#"><span class="fab fa-bitbucket"></span></a></li>
                  <li><a class="nk-social-dropbox" href="#"><span class="fab fa-dropbox"></span></a></li>
                  <li><a class="nk-social-dribbble" href="#"><span class="fab fa-dribbble"></span></a></li>
                  <li><a class="nk-social-deviantart" href="#"><span class="fab fa-deviantart"></span></a></li>
                  <li><a class="nk-social-flickr" href="#"><span class="fab fa-flickr"></span></a></li>
                  <li><a class="nk-social-foursquare" href="#"><span class="fab fa-foursquare"></span></a></li>
                  <li><a class="nk-social-github" href="#"><span class="fab fa-github"></span></a></li>
                  <li><a class="nk-social-instagram" href="#"><span class="fab fa-instagram"></span></a></li>
                  <li><a class="nk-social-linkedin" href="#"><span class="fab fa-linkedin"></span></a></li>
                  <li><a class="nk-social-medium" href="#"><span class="fab fa-medium"></span></a></li>
                  <li><a class="nk-social-odnoklassniki" href="#"><span class="fab fa-odnoklassniki"></span></a></li>
                  <li><a class="nk-social-paypal" href="#"><span class="fab fa-paypal"></span></a></li>
                  <li><a class="nk-social-reddit" href="#"><span class="fab fa-reddit"></span></a></li>
                  <li><a class="nk-social-skype" href="#"><span class="fab fa-skype"></span></a></li>
                  <li><a class="nk-social-soundcloud" href="#"><span class="fab fa-soundcloud"></span></a></li>
                  <li><a class="nk-social-slack" href="#"><span class="fab fa-slack"></span></a></li>
                  <li><a class="nk-social-tumblr" href="#"><span class="fab fa-tumblr"></span></a></li>
                  <li><a class="nk-social-vimeo" href="#"><span class="fab fa-vimeo"></span></a></li>
                  <li><a class="nk-social-vk" href="#"><span class="fab fa-vk"></span></a></li>
                  <li><a class="nk-social-wordpress" href="#"><span class="fab fa-wordpress"></span></a></li>
                  <li><a class="nk-social-youtube" href="#"><span class="fab fa-youtube"></span></a></li>
              */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* END: Footer */}
            </div>


        </div>
    )
}

export default BlogArticles