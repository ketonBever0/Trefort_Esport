import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlogArticleContext from '../_context/BlogArticleContext';

function BlogArticlePage() {

    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-2.png')")
    }, [])

    const { id } = useParams();

    const {
        isBlogArticleLoading,
        blogArticle,
        getBlogArticle
    } = useContext(BlogArticleContext);

    useEffect(() => {
        id && getBlogArticle(id);
    }, [])


    return (
        <div>

            <div className="nk-main">
                {/* START: Breadcrumbs */}
                <div className="nk-gap-2" />
                <div className="container">
                    <ul className="nk-breadcrumbs">
                        <li>
                            <a href="index.html">Főoldal</a>
                        </li>
                        <li>
                            <span className="fa fa-angle-right" />
                        </li>
                        <li>
                            <a href="#">Hírek</a>
                        </li>
                        <li>
                            <span className="fa fa-angle-right" />
                        </li>
                        <li>
                            <span>{blogArticle?.title}</span>
                        </li>
                    </ul>
                </div>
                <div className='nk-gap-2' />
                {/* END: Breadcrumbs */}
                <div className="container">
                    <div className="row vertical-gap">
                        <div className="col-lg-8">

                            {/* START: Post */}
                            {
                                blogArticle && (
                                    <div className="nk-blog-post nk-blog-post-single">
                                        {/* START: Post Text */}
                                        <div className="nk-post-text mt-0">
                                            <div className="nk-post-img">
                                                <img
                                                    src="assets/images/post-2.jpg"
                                                    alt="Grab your sword and fight the Horde"
                                                />
                                            </div>
                                            <div className="nk-gap-1" />
                                            <h1 className="nk-post-title h4">Grab your sword and fight the Horde</h1>
                                            <div className="nk-post-by">
                                                <img
                                                    src="assets/images/avatar-2.jpg"
                                                    alt="Witch Murder"
                                                    className="rounded-circle"
                                                    width={35}
                                                />{" "}
                                                by <a href="https://nkdev.info">{blogArticle?.author.username}</a> ekkor: {blogArticle.createdAt}
                                                {/* <div className="nk-post-categories">
                                            <span className="bg-main-1">Action</span>
                                            <span className="bg-main-2">Adventure</span>
                                        </div> */}
                                            </div>
                                            <div className="nk-gap" />
                                            <div dangerouslySetInnerHTML={{ __html: blogArticle?.content }} />
                                            <div className="nk-gap" />
                                            <div className="nk-post-share">
                                                <span className="h5">Share Article:</span>
                                                <ul className="nk-social-links-2">
                                                    <li>
                                                        <span
                                                            className="nk-social-facebook"
                                                            title="Share page on Facebook"
                                                            data-share="facebook"
                                                        >
                                                            <span className="fab fa-facebook" />
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span
                                                            className="nk-social-twitter"
                                                            title="Share page on Twitter"
                                                            data-share="twitter"
                                                        >
                                                            <span className="fab fa-twitter" />
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span
                                                            className="nk-social-pinterest"
                                                            title="Share page on Pinterest"
                                                            data-share="pinterest"
                                                        >
                                                            <span className="fab fa-pinterest-p" />
                                                        </span>
                                                    </li>
                                                    {/* Additional Share Buttons
                          <li><span class="nk-social-linkedin" title="Share page on LinkedIn" data-share="linkedin"><span class="fab fa-linkedin"></span></span></li>
                          <li><span class="nk-social-vk" title="Share page on VK" data-share="vk"><span class="fab fa-vk"></span></span></li>
                      */}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* END: Post Text */}
                                        {/* START: Similar Articles */}
                                        <div className="nk-gap-2" />
                                        <h3 className="nk-decorated-h-2">
                                            <span>
                                                <span className="text-main-1">Similar</span> Articles
                                            </span>
                                        </h3>
                                        <div className="nk-gap" />
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/* START: Post */}
                                                <div className="nk-blog-post">
                                                    <a href="blog-article.html" className="nk-post-img">
                                                        <img
                                                            src="assets/images/post-3-mid.jpg"
                                                            alt="We found a witch! May we burn her?"
                                                        />
                                                        <span className="nk-post-comments-count">7</span>
                                                        <span className="nk-post-categories">
                                                            <span className="bg-main-2">Adventure</span>
                                                        </span>
                                                    </a>
                                                    <div className="nk-gap" />
                                                    <h2 className="nk-post-title h4">
                                                        <a href="blog-article.html">We found a witch! May we burn her?</a>
                                                    </h2>
                                                </div>
                                                {/* END: Post */}
                                            </div>
                                            <div className="col-md-6">
                                                {/* START: Post */}
                                                <div className="nk-blog-post">
                                                    <a href="blog-article.html" className="nk-post-img">
                                                        <img
                                                            src="assets/images/post-4-mid.jpg"
                                                            alt="For good, too though, in consequence"
                                                        />
                                                        <span className="nk-post-comments-count">23</span>
                                                        <span className="nk-post-categories">
                                                            <span className="bg-main-3">Strategy</span>
                                                        </span>
                                                    </a>
                                                    <div className="nk-gap" />
                                                    <h2 className="nk-post-title h4">
                                                        <a href="blog-article.html">For good, too though, in consequence</a>
                                                    </h2>
                                                </div>
                                                {/* END: Post */}
                                            </div>
                                        </div>
                                        {/* END: Similar Articles */}
                                        {/* START: Comments */}
                                        <div id="comments" />
                                        <h3 className="nk-decorated-h-2">
                                            <span>
                                                <span className="text-main-1">3</span> Comments
                                            </span>
                                        </h3>
                                        <div className="nk-gap" />
                                        <div className="nk-comments">
                                            {/* START: Comment */}
                                            <div className="nk-comment">
                                                <div className="nk-comment-meta">
                                                    <img
                                                        src="assets/images/avatar-2.jpg"
                                                        alt="Witch Murder"
                                                        className="rounded-circle"
                                                        width={35}
                                                    />{" "}
                                                    by <a href="https://nkdev.info">Witch Murder</a> in 20 September, 2018{" "}
                                                    <a
                                                        href="#"
                                                        className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right"
                                                    >
                                                        Reply
                                                    </a>
                                                </div>
                                                <div className="nk-comment-text">
                                                    <p>
                                                        This sounded nonsense to Alice, so she said nothing, but set off at
                                                        once toward the Red Queen. To her surprise, she lost sight of her in a
                                                        moment, and found herself walking in at the front-door again.
                                                    </p>
                                                </div>
                                                {/* START: Comment */}
                                                <div className="nk-comment">
                                                    <div className="nk-comment-meta">
                                                        <img
                                                            src="assets/images/avatar-1.jpg"
                                                            alt="Hitman"
                                                            className="rounded-circle"
                                                            width={35}
                                                        />{" "}
                                                        by <a href="https://nkdev.info">Hitman</a> in 20 September, 2018{" "}
                                                        <a
                                                            href="#"
                                                            className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right"
                                                        >
                                                            Reply
                                                        </a>
                                                    </div>
                                                    <div className="nk-comment-text">
                                                        <p>
                                                            To her surprise, she lost sight of her in a moment, and found
                                                            herself walking in at the front-door again.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* END: Comment */}
                                            </div>
                                            {/* END: Comment */}
                                            {/* START: Comment */}
                                            <div className="nk-comment">
                                                <div className="nk-comment-meta">
                                                    <img
                                                        src="assets/images/avatar-3.jpg"
                                                        alt="Wolfenstein"
                                                        className="rounded-circle"
                                                        width={35}
                                                    />{" "}
                                                    by <a href="https://nkdev.info">Wolfenstein</a> in 21 September, 2018{" "}
                                                    <a
                                                        href="#"
                                                        className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right"
                                                    >
                                                        Reply
                                                    </a>
                                                </div>
                                                <div className="nk-comment-text">
                                                    <p>
                                                        The sight of the tumblers restored Bob Sawyer to a degree of
                                                        equanimity which he had not possessed since his interview with his
                                                        landlady. His face brightened up, and he began to feel quite
                                                        convivial.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* END: Comment */}
                                        </div>
                                        {/* END: Comments */}
                                        {/* START: Reply */}
                                        <div className="nk-gap-2" />
                                        <h3 className="nk-decorated-h-2">
                                            <span>
                                                <span className="text-main-1">Leave</span> a Reply
                                            </span>
                                        </h3>
                                        <div className="nk-gap" />
                                        <div className="nk-reply">
                                            <form action="#" className="nk-form" noValidate={true}>
                                                <div className="row sm-gap vertical-gap">
                                                    <div className="col-md-4">
                                                        <input
                                                            type="email"
                                                            className="form-control required"
                                                            name="email"
                                                            placeholder="Email *"
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="text"
                                                            className="form-control required"
                                                            name="name"
                                                            placeholder="Name *"
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Website"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="nk-gap-1" />
                                                <textarea
                                                    className="form-control required"
                                                    name="message"
                                                    rows={5}
                                                    placeholder="Message *"
                                                    aria-required="true"
                                                    defaultValue={""}
                                                />
                                                <div className="nk-gap-1" />
                                                <div className="nk-form-response-success" />
                                                <div className="nk-form-response-error" />
                                                <button className="nk-btn nk-btn-rounded nk-btn-color-main-1">
                                                    Post Comment
                                                </button>
                                            </form>
                                        </div>
                                        {/* END: Reply */}
                                    </div>
                                )
                            }

                            {/* END: Post */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BlogArticlePage