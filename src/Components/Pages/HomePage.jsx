import React from 'react'
import Video from '../VideoPlayback/Video/Video';
import Comments from '../VideoPlayback/Commets/Comments';
import VideoDescription from '../VideoPlayback/VideoDescription/VideoDescription';
import VideoLibrary from '../VideoLibrary/VideoLibrary'
import videoInfo from '../../assets/Data/video-details.json'
import { useState } from 'react';

function HomePage() {
    const [activeVideo, setActiveVideo] = useState(videoInfo[0]);

    const chooseVideo = (event) => {
        const chosenVideo = videoInfo.find(x => x.id === event);
        setActiveVideo(chosenVideo);
    }
    return (
    <div>
        <Video image={activeVideo.image} video={activeVideo.video}/>
        <div className='main'>
            <div className='description'>
                <VideoDescription 
                title={activeVideo.title} 
                channel={activeVideo.channel} 
                description={activeVideo.description} 
                timestamp={activeVideo.timestamp} 
                likes={activeVideo.likes} 
                views={activeVideo.views}
                />
                <Comments comments={activeVideo.comments}/>
            </div>
            <VideoLibrary handleClick={chooseVideo}videoId={activeVideo.id}/>
        </div>
    </div>
    )
}

export default HomePage