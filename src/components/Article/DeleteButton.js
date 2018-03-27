import { React } from "react";
import { agent } from "../../agent";
import { connect } from "react-redux";
import { DELETE_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = dispatch => ({
    onClick: (payload, commentId) => {
        dispatch({type: DELETE_COMMENT, payload, commentId});
    }
});

const DeleteButton = props => {
    const del = () => {
        const payload = agent.Comments.delete(props.log, props.commentId);
        props.onClick(payload, props.commentId);
    }
}