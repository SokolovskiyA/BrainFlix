import Form from "./Form/Form";
import './Comments.scss';
import Comment from "./Comment/Comment";
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';


function Comments(props) {
    const { api, apiKey, videoId } = props
    const [ comments, setComments ] = useState([])

    useEffect (()=> {
        axios.get(`${api}/videos/${videoId}${apiKey}`).then(response => {
            const comments = response.data.comments
            comments.sort(function(x, y){
                return y.timestamp - x.timestamp;
            })
            setComments(comments)
            })
            .catch(error => {
                console.log("error")
            });
    },[videoId, api, apiKey])
    function handleSubmit(comment)  {
        const postbody = {
            name: "User",
            comment: comment
        }
        axios.post(`${api}/videos/${videoId}/comments${apiKey}`, postbody)
        .then(response => {
            setComments ([response.data, ...comments])
        })
        .catch(error => {
            console.log("error")
        });
    }
    const handleDelete = event => {
        const commentId = event.currentTarget.id
        axios.delete(`${api}/videos/${videoId}/comments/${commentId}${apiKey}`).then(response => {
            setComments(comments.filter(comment => comment.id !== commentId))
        })
        .catch(error => {
            console.log("error")
        });
    }

    /*
    const handleLike = event => {
        let like = 0; 
        if (event) {
            like = +1;
        }
        console.log(event.currentTarget.id)
        const commentId = event.currentTarget.id
        axios.put(`${api}/videos/${videoId}/comments/${commentId}${apiKey}`, like).then(result => {
            console.log(result)
        })
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