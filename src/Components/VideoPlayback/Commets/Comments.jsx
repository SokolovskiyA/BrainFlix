import Form from "./Form/Form";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
import './Comments.scss';

function Comments(props) {
    return (
        <section className='comments'>
            <h2 className='comments__count'>{props.comments.length} Comments</h2>
            <Form />
            <CommentsContainer comments={props.comments}/>
        </section>
    )
}

export default Comments;