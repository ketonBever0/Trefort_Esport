import React from 'react'

function BlogArticleItem(post: any) {
    return (
        <div>
            {/* START: Post */}
            <div className="nk-blog-post">
                <div className="row vertical-gap">
                    <div className="col-md-5 col-lg-6">
                        <a href="blog-article.html" className="nk-post-img">
                            <img
                                src="assets/images/post-1-mid.jpg"
                                alt="Smell magic in the air. Or maybe barbecue"
                            />
                            <span className="nk-post-comments-count">{post.commentCount || 0}</span>
                        </a>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <h2 className="nk-post-title h4">
                            <a href="blog-article.html">
                                {post.title}
                            </a>
                        </h2>
                        <div className="nk-post-text">
                            <p dangerouslySetInnerHTML={{ __html: post.content.slice(0, 220) + '...' }} />
                        </div>
                        <div className="nk-post-by">
                            <img
                                src="assets/images/avatar-1.jpg"
                                alt="Hitman"
                                className="rounded-circle"
                                width={35}
                            />{" "}
                            <a href="https://nkdev.info">{post.author.name}</a> által ekkor: {post.createdAt}
                        </div>
                    </div>
                </div>
            </div>
            {/* END: Post */}
        </div>
    )
}

export default BlogArticleItem