import Comments from "../Comments";

function CommentsContainer(props) {
    console.log(props)
    return (
        <div className='comments__container'>
            {props.comments.map((comment)=> (
            <div className='comments__article' key={comment.id}>
                <div className="comments__avo">
                    <img></img>
                </div>
                <div className="comments__comment">
                    <p className="comments__name">{comment.name}</p>
                    <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                    <p className="comments__text">{comment.comment}</p>
                </div>
            </div>
            )
            )}
            
        </div>
    );
}
export default CommentsContainer;