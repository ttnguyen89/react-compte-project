import React from "react";
import agent from '../../agent';
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constant/actionTypes";

const mapDispatchToProps = (dispatch) => ({
    onSubmit: payload => {
        dispatch({ type: ADD_COMMENT, payload})
    }
});

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
    }
    setBody = (event) => {
        this.setState({body: event.target.value});
    }
    createComment = (event) => {
        event.preventDefault();
        const payload = agent.Comments.create(this.props.slug, {body: this.state.body});
        this.setState({body: ''});
        this.props.onSubmit(payload);
    }

    render() {
        return (
            <form className='card comment-form' onSubmit={this.createComment}>
                <div className='card-block'>
                    <textarea className='form-control' 
                    placeholder='Write a comment...'
                    value = {this.state.body} 
                    onChange = {setBody}
                    rows='3'/>
                </div>

                <div className='card-footer'>
                    <img 
                        src={this.props.currenUser.image}
                        className='comment-author-img'
                        alt ={this.props.currenUser.username}/>
                    <button 
                        className='btn btn-sm btn-primary'
                        type="submit">Post Comment</button>
                </div>
            </form>
        )
    };
}

export default connect(mapDispatchToProps)(CommentInput);