import './VideoLibrary.scss'
import videos from '../../assets/Data/videos.json'
import {Link} from 'react-router-dom'

function VideoLibrary(props) {
    return (
        <section className='videoLibrary'>
        <h2 className='videoLibrary__header'>Next Videos</h2>
        {videos.filter(video => video.id !== props.videoId).map((video)=>(
            <Link to={`/video/:${video.id}`} className='videoLibrary__item' key={video.id} onClick={() => {
                props.handleClick(video.id);
                }}>
                <div className='videoLibrary__video'>
                    <img className='videoLibrary__video-img' src={video.image} alt='video-placeholder'/>
                </div>
                <div className='videoLibrary__text'>
                    <p className='videoLibrary__title'>{video.title}</p>
                    <p className='videoLibrary__author'>{video.channel}</p>
                </div>
            </Link> 
        ))}
        </section>
    )
}
export default VideoLibrary;