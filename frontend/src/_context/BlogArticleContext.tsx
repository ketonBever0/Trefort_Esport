import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const BlogArticleContext = createContext<any | null>(null);


export const BlogArticleProvider = ({ children }: any) => {



    const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<Array<Object>>([]);

    const getArticles = async () => {
        setIsPostsLoading(true);
        await fetch('http://localhost:8000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
            .finally(() => setIsPostsLoading(false));
    }


    const [isBlogArticleLoading, setIsBlogArticleLoading] = useState<boolean>(false);
    const [blogArticle, setblogArticle] = useState<Object | null>({});

    const getBlogArticle = async (id: number) => {
        setIsBlogArticleLoading(true);
        await fetch(`http://localhost:8000/posts/${id}`)
            .then(res => res.json())
            .then(data => setblogArticle(data))
            .catch(err => console.log(err))
            .finally(() => setIsBlogArticleLoading(false));
    }




    return <BlogArticleContext.Provider value={{

        isPostsLoading,
        posts,

        getArticles,

        isBlogArticleLoading,
        blogArticle,
        getBlogArticle,


    }}>{children}</BlogArticleContext.Provider>

}

export default BlogArticleContext;