
import './App.scss';
import { BrowserRouter, Routes, Rout } from 'react-router-dom';
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
            <Comments comments={activeVideo.comments} timeDifference={timeDifference} />
          </div>
          <VideoLibrary handleClick={chooseVideo}videoId={activeVideo.id}/>
        </div>
      </div>
  );
}

export default App;
