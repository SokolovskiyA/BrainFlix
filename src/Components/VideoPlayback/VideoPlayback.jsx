import Comments from './Commets/Comments';
import VideoDescription from './VideoDescription/VideoDescription';
import Video from './Video/Video'
import videoInfo from '../../assets/Data/video-details.json';

function VideoPlayback() {
    const props = videoInfo[2];
    console.log(props);
    return (
        <section className='video-playback'>
            <Video image={props.image} video={props.video}/>
            <VideoDescription 
                title={props.title} 
                channel={props.channel} 
                description={props.description} 
                timestamp={props.timestamp} 
                likes={props.likes} 
                views={props.views}
                />
            <Comments comments={props.comments} />
        </section>
    )
}
export default VideoPlayback;