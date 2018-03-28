import React from 'react';
import agent from "../../agent";

const Tags = (props) => {
    const tags = props.tags;
    if(tags) {
        return (
            <div className='tag-list'>
                {
                    tags.map(tag => {
                        const handleClick = (event) => {
                            event.preventDefault;
                            props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
                        };
                        return (
                            <a href='' className='tag-default tag-pill' key={tag}
                                onClick={handleClick}>
                                {tag}
                            </a>
                        );
                    })
                } 
            </div>
        );
    } else {
        return <div>Loading tags...</div>
    }
};

export default Tags;