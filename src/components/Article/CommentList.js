import Comment from "./Comment";
import React from "react";

const CommentList = (props) => {
    return (
        <div>
            {
                props.comments.map((comment) => {
                    return (
                        <Comment comment={comment}
                            key={comment.id}
                            currentUser = {props.currentUser}
                            slug={props.slug}/>
                    )
                })
            }
        </div>
    );
}

export default CommentList;