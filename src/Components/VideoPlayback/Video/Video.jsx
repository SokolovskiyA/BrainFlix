
import './Video.scss';
import videoInfo from '../../../assets/Data/video-details.json';

function Video(props) {
    console.log(props.video)
    return (
        <section className="video"> 
            <video className='video__player' controls poster={props.image} src={props.video}>
            </video>
        </section>
    )
}

export default Video;