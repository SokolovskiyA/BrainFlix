
import './App.scss';
import VideoPlayback from './Components/VideoPlayback/VideoPlayback'
import Header from './Components/Header/Header'
import VideoLibrary from './Components/VideoLibrary/VideoLibrary';
import videoData from './assets/Data/video-details.json'
import videos from './assets/Data/videos.json'



function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayback />
      <VideoLibrary />
    </div>
  );
}

export default App;
