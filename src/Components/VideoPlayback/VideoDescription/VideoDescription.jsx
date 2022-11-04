import viewsLogo from '../../../assets/Icons/views.svg';
import likesLogo from '../../../assets/Icons/likes.svg';
import './VideoDescription.scss';

function VideoDescription(props) {
    return (
        <section className="videoDescription">
            <h2 className="videoDescription__title">{props.title}</h2>
            <div className='videoDescription__stats'>
                <p className='videoDescription__channel'>{props.channel}</p>
                <p className='videoDescription__likes-views'><img alt='views-logo' src={viewsLogo}/>{props.views}</p>
                <p className='videoDescription__date'>{new Date(props.timestamp).toLocaleDateString()}</p>
                <p className='videoDescription__likes-views'><img alt='likes-logo' src={likesLogo}/>{props.likes}</p>
            </div>
            <p className='videoDescription__description'>{props.description}</p>
        </section>
    )
}

export default VideoDescription;

