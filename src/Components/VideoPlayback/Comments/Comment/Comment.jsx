import React from 'react'
import Avatar from '../../../Avatar/Avatar'
import likeButton from '../../../../assets/Icons/like.png'
import deleteButton from '../../../../assets/Icons/delete.png'
import { useState } from 'react'
//import axios from 'axios'


function Comment(props) {
    let {handleDelete, comment} = props
    let [likes, setLikes] = useState(comment.likes)

    const handleLike = event => {
        likes = likes + 1
        setLikes(likes)
        /*
        axios.put(`${api}/videos/${videoId}/comments/${event.target.id}`, likes  ).then(response => {
        })
        .catch(error => {
            console.log("error")
        });
        */
    }
    function timeDifference(current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
            return 'just now';   
        }
    
        else if (elapsed < msPerHour) {
            return Math.round(elapsed/msPerMinute) + ' minutes ago';   
        }
    
        else if (elapsed < msPerDay ) {
            return Math.round(elapsed/msPerHour ) + ' hours ago';   
        }
    
        else if (elapsed < msPerMonth) {
            return 'Posted ' + Math.round(elapsed/msPerDay) + ' days ago';   
        }
    
        else if (elapsed < msPerYear) {
            return 'Posted ' + Math.round(elapsed/msPerMonth) + ' months ago';   
        }
    
        else {
            return 'Posted ' + Math.round(elapsed/msPerYear ) + ' years ago';   
        }
    }
    return (
        <div className='comments__article' key={comment.id}>
            <Avatar />
            <div className="comments__comment">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__date">{timeDifference(Date.now(), comment.timestamp)/*to display just a regular date option --> new Date(comment.timestamp).toLocaleDateString()*/}</p>
                <p className="comments__text">{comment.comment}</p>
            </div>
            <div className="comments__like-delete">
                <img onClick={handleLike} id={comment.id}  className="comments__like-button" src={likeButton} alt='like button'/>
                <p className="comments__like count">{likes}</p>
                <img onClick={handleDelete} id={comment.id} className="comments__delete-button" src={deleteButton} alt='delete button'/>
            </div> 
        </div>
    )
}

export default Comment