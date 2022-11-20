import Form from "./Form/Form";
import './Comments.scss';
import Comment from "./Comment/Comment";
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';


function Comments(props) {
    const { api, videoId } = props
    const [ comments, setComments ] = useState (props.comments)
    const [ commentCount, setCount ] = useState (props.comments.length)
    useEffect (()=> {
        axios.get(`${api}/videos/${videoId}`).then(response => {
            const comments = response.data.comments
            comments.sort(function(x, y){
                return y.timestamp - x.timestamp;
            })
            setComments(comments)
            })
            .catch(error => {
                console.log("error")
            });
    },[videoId, api])
    ///COMMENT FORM SUBMIT HANDLER
    function handleSubmit(comment)  {
        const postbody = {
            name: "User",
            comment: comment
        }
        axios.post(`${api}/videos/${videoId}/comments`, postbody)
        .then(response => {
            const newComments = response.data
            newComments.sort(function(x, y){
                return y.timestamp - x.timestamp;
            })
            setComments(newComments)
            setCount(newComments.length)
        })
        .catch(error => {
            console.log("error")
        });
    }
    ///COMMENT DELETE HANDLER
    const handleDelete = event => {
        const commentId = event.currentTarget.id
        axios.delete(`${api}/videos/${videoId}/comments/${commentId}`).then(response => {
            setComments(comments.filter(comment => comment.id !== commentId))
            setCount (commentCount -1)
        })
        .catch(error => {
            console.log("error")
        });
    }
    return (
        <section className='comments'>
            <h2 className='comments__count'>{commentCount} Comments</h2>
            <Form handleSubmit={handleSubmit}/>
            <div className='comments__container'>
                {comments.map((comment)=> (
                <Comment handleDelete={handleDelete} api={api} videoId={videoId} key={comment.id} comment={comment} />))}
            </div>
        </section>
    )
}

export default Comments;