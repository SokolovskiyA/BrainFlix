import React from 'react'
import Video from '../VideoPlayback/Video/Video';
import Comments from '../VideoPlayback/Commets/Comments';
import VideoDescription from '../VideoPlayback/VideoDescription/VideoDescription';
import VideoLibrary from '../VideoLibrary/VideoLibrary'
import videoInfo from '../../assets/Data/video-details.json'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
    /* 
    1 const {id} = useParams();
    2 const [currentGame, setCurrentGame] = useState(null);
    3 const [allGames, setAllGames] = useState([]);
    4 const API_URL = "https://board-game-api.onrender.com/items";
    5 useEffect(()=> {
    6     axios.get(API_URL).then(response => {
    7         setAllGames(response.data);
    8     });
    9 }, []);

    useEffect(() => {
        let gameId = id || allGames[0]?.id;
        if (gameId) {
            axios.get(`${API_URL}/${gameId}`).then(response => {
                setCurrentGame(response.data);
            });
        }
    }, [id, allGames]); */


    const {id} = useParams();

    const [activeVideo, setActiveVideo] = useState(videoInfo[0]);

    const [allVideos, setAllVideos] = useState([]);
    const API_URL = "https://project-2-api.herokuapp.com"
    const API_KEY = "?api_key=4e1230d3-9594-4666-9687-f225bd49bfd7"
    useEffect(()=> {
            axios.get(`${API_URL}/videos${API_KEY}`).then(response => {
                setAllVideos(response.data);
                console.log(response)
            });
        }, []);
        
        useEffect(() => {
            let videoId = id || allVideos[0]?.id;
            console.log(videoId)
            if (videoId) {
                axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=ccce1d03-b071-4f09-b425-c401afa0ed38`)
                    .then(response => {
                        setActiveVideo(response.data);
                    });
            }
        }, [id, allVideos]);
    
    
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
            <VideoLibrary videos={allVideos} handleClick={chooseVideo} videoId={activeVideo.id}/>
        </div>
    </div>
    )
}

export default HomePage