
import './App.scss';

import Header from './Components/Header/Header'
import VideoLibrary from './Components/VideoLibrary/VideoLibrary';
import videoInfo from './assets/Data/video-details.json';
import { useState } from 'react';
import Video from './Components/VideoPlayback/Video/Video'
import Comments from './Components/VideoPlayback/Commets/Comments';
import VideoDescription from './Components/VideoPlayback/VideoDescription/VideoDescription';

function App() {
  const [activeVideo, setActiveVideo] = useState(videoInfo[0]);
  
  const chooseVideo = (event) => {
    const chosenVideo = videoInfo.find(x => x.id === event);
    setActiveVideo(chosenVideo);
  }
  
  return (
    <div className="App">
      <Header />
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
          <Comments comments={activeVideo.comments} />
        </div>
        <VideoLibrary handleClick={chooseVideo}videoId={activeVideo.id}/>
      </div>
    </div>
  );
}

export default App;
