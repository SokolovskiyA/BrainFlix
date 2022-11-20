import viewsLogo from '../../../assets/Icons/views.svg';
import likesLogo from '../../../assets/Icons/likes.svg';
import './VideoDescription.scss';

function VideoDescription(props) {
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
        <section className="videoDescription">
            <h2 className="videoDescription__title">{props.title}</h2>
            <div className='videoDescription__stats'>
                <p className='videoDescription__channel'>By {props.channel}</p>
                <p className='videoDescription__likes-views'><img className='videoDescription__icon' alt='views-logo' src={viewsLogo}/>{props.views}</p>
                <p className='videoDescription__date'>{timeDifference(Date.now(),props.timestamp)}</p>
                <p className='videoDescription__likes-views'><img className='videoDescription__icon' alt='likes-logo' src={likesLogo}/>{props.likes}</p>
            </div>
            <p className='videoDescription__description'>{props.description}</p>
        </section>
    )
}

export default VideoDescription;

