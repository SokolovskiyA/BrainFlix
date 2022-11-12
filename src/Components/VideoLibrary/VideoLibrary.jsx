import './VideoLibrary.scss'
import {Link} from 'react-router-dom'

function VideoLibrary(props) {
    const videos = props.videos;
    return (

        <section className='videoLibrary'>
        <h2 className='videoLibrary__header'>Next Videos</h2>
        {videos.filter(video => video.id !== props.videoId).map((video)=>(
            <Link to={`/video/${video.id}`} className='videoLibrary__item' key={video.id}>
                <img className='videoLibrary__video' src={video.image} alt='video-placeholder'/>
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