import './VideoLibrary.scss'

import videos from '../../assets/Data/videos.json'

function VideoLibrary() {
    return (
        <section className='videoLibrary'>
        <h2 className='videoLibrary__header'>Next Videos</h2>
        {videos.filter(video => video).map((video)=>(
            <div className='videoLibrary__item' key={video.id}>
                <div className='videoLibrary__video'>
                    <img className='videoLibrary__video-img' src={video.image} alt='video-placeholder'/>
                </div>
                <div className='videoLibrary__text'>
                    <p className='videoLibrary__title'>{video.title}</p>
                    <p className='videoLibrary__author'>{video.channel}</p>
                </div>
            </div> 
        ))}
        </section>
    )
}
export default VideoLibrary;