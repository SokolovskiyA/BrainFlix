import Form from "./Form/Form";
import './Comments.scss';
import Comment from "./Comment/Comment";
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';


function Comments(props) {
    const { api, videoId } = props
    const [ comments, setComments ] = useState([])
    

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
        })
        .catch(error => {
            console.log("error")
        });
    }

    const handleDelete = event => {
        const commentId = event.currentTarget.id
        axios.delete(`${api}/videos/${videoId}/comments/${commentId}`).then(response => {
            setComments(comments.filter(comment => comment.id !== commentId))
        })
        .catch(error => {
            console.log("error")
        });
    }
/*
    const handleLike = event => {
        const commentId = event.currentTarget.id
        setLikes(+1)
        console.log(likes)
    }
*/
    return (
        <section className='comments'>
            <h2 className='comments__count'>{props.comments.length} Comments</h2>
            <Form handleSubmit={handleSubmit}/>
            <div className='comments__container'>
                {comments.map((comment)=> (
                <Comment  handleDelete={handleDelete} key={comment.id} comment={comment} />))}
            </div>
        </section>
    )
}

export default Comments;