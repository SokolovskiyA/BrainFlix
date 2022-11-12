import React from 'react'
import likeButton from '../../../../assets/Icons/like.png'
import deleteButton from '../../../../assets/Icons/delete.png'
import { useState } from 'react'
import axios from 'axios'


function LikeDelete(props) {
    const API_URL = "https://project-2-api.herokuapp.com"
    const API_KEY = "?api_key=4e1230d3-9594-4666-9687-f225bd49bfd7"
    const commentId = props.id;

    let [likeCount, setLikeCount] = useState(0)

    function handleLikeClick() {
        setLikeCount(likeCount + 1)
    }
    function handleDeleteClick(commentId, API_KEY, API_URL) {
        console.log('Delete this comment')
        axios.delete("`${API_URL}/videos/comments/:id${API_KEY}`")
    }

    return (
        <div className="comments__like-delete">
            <img id={props.id} onClick={handleLikeClick} className="comments__like-button" src={likeButton} alt='like button'/>
            <p className="comments__like count">{likeCount}</p>
            <img id={props.id}  onClick={handleDeleteClick} className="comments__delete-button" src={deleteButton} alt='delete button'/>
        </div>
    )
}

export default LikeDelete