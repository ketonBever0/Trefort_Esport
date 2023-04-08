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
                            <span>Grab your sword and fight the Horde</span>
                        </li>
                    </ul>
                </div>
                <div className='nk-gap-2'/>
                {/* END: Breadcrumbs */}
                <div className="container">
                    <div className="row vertical-gap">
                        <div className="col-lg-8">
                        
                            {/* START: Post */}
                            <div className="nk-blog-post nk-blog-post-single">
                                {/* START: Post Text */}

                                <div className="nk-post-text mt-0" dangerouslySetInnerHTML={{ __html: blogArticle.content }} />

                                <div className='nk-gap-4'/>

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
                                                src="/assets/images/avatar-2.jpg"
                                                alt="Witch Murder"
                                                className="rounded-circle"
                                                width={35}
                                            />{" "}
                                            by <a href="https://nkdev.info">Witch Murder</a> in 20
                                            September, 2018{" "}
                                            <a
                                                href="#"
                                                className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right"
                                            >
                                                Reply
                                            </a>
                                        </div>
                                        <div className="nk-comment-text">
                                            <p>
                                                This sounded nonsense to Alice, so she said nothing, but set
                                                off at once toward the Red Queen. To her surprise, she lost
                                                sight of her in a moment, and found herself walking in at the
                                                front-door again.
                                            </p>
                                        </div>
                                        {/* START: Comment */}
                                        <div className="nk-comment">
                                            <div className="nk-comment-meta">
                                                <img
                                                    src="/assets/images/avatar-1.jpg"
                                                    alt="Hitman"
                                                    className="rounded-circle"
                                                    width={35}
                                                />{" "}
                                                by <a href="https://nkdev.info">Hitman</a> in 20 September,
                                                2018{" "}
                                                <a
                                                    href="#"
                                                    className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right"
                                                >
                                                    Reply
                                                </a>
                                            </div>
                                            <div className="nk-comment-text">
                                                <p>
                                                    To her surprise, she lost sight of her in a moment, and
                                                    found herself walking in at the front-door again.
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
                                                src="/assets/images/avatar-3.jpg"
                                                alt="Wolfenstein"
                                                className="rounded-circle"
                                                width={35}
                                            />{" "}
                                            by <a href="https://nkdev.info">Wolfenstein</a> in 21 September,
                                            2018{" "}
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
                                                equanimity which he had not possessed since his interview with
                                                his landlady. His face brightened up, and he began to feel
                                                quite convivial.
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
                            {/* END: Post */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BlogArticlePage