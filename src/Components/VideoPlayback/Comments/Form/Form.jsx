import Button from '../../../Button/Button';
import commentLogo from '../../../../assets/Icons/add_comment.svg'
import Avatar from '../../../Avatar/Avatar';
import avatar from '../../../../assets/Images/Mohan-muruge.jpg'
import { useState } from 'react'

function Form({handleSubmit}) {
    
    const [comment, setComment] = useState("")
    const isCommentFormDisabled = comment.length === 0;
    const onSubmit = event => {  
        event.preventDefault();
        handleSubmit(comment);
        setComment("");
    }
    return(
        <div className="comments__form-container">
            <Avatar avatar={avatar}/>
            <form onSubmit={onSubmit} className="comments__form" id="commentForm">
                <label className="comments__label" htmlFor="comment-text">join the concersation</label>
                <textarea 
                className="comments__comment-text" 
                name="comment" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                id="comment-text" 
                rows="5" 
                placeholder="Add a new comment"></textarea>
                <Button disabled={isCommentFormDisabled} className="comments__button button" name='comment' src={commentLogo} spanClass='button__text'/>
            </form>
        </div>
    )
}

export default Form;