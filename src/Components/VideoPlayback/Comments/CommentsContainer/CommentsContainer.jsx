
import Avatar from '../../../Avatar/Avatar';
import LikeDelete from '../LikeDelete/LikeDelete';


function CommentsContainer(props) {

    function timeDifference(current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
            return Math.round(elapsed/1000) + ' seconds ago';   
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
        <div className='comments__container'>
            {props.comments.map((comment)=> (
            <div className='comments__article' key={comment.id}>
                <Avatar />
                <div className="comments__comment">
                    <p className="comments__name">{comment.name}</p>
                    <p className="comments__date">{timeDifference(Date.now(), comment.timestamp)/*to display just a regular date option --> new Date(comment.timestamp).toLocaleDateString()*/}</p>
                    <p className="comments__text">{comment.comment}</p>
                </div>
                <LikeDelete id={comment.id} />
            </div>
            )
            )}
        </div>
    );
}
export default CommentsContainer;