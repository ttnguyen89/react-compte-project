import { Link } from "react-router-dom";
import React from 'react';
import Actions from "./ArticleActions";

const ArticleMeta = (props) => {
    const article = props.article;
    return (
        <div className='article-meta'>
            <Link to={`@${article.author.username}`}>
                <img src={article.author.username.img}  alt={article.author.username}/>
            </Link>

            <div className='info'>
                <Link to={`@${article.author.username}`} className='author'>
                    {article.author.username}
                </Link>
                <span className='date'>
                    {new Date(article.createdAt).toString()}
                </span>
            </div>

            <Actions canModify={props.canModify} article={article}/>
        </div>
    )
}

export default ArticleMeta;