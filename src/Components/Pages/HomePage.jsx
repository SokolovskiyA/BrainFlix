import React from 'react'
import Video from '../VideoPlayback/Video/Video';
import Comments from '../VideoPlayback/Comments/Comments';
import VideoDescription from '../VideoPlayback/VideoDescription/VideoDescription';
import VideoLibrary from '../VideoLibrary/VideoLibrary'
import { useState } from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function HomePage() {
    const {id} = useParams();
    const API_URL = "http://localhost:5000"
    const [allVideos, setAllVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState({})
    ///ON LOAD SET allVideos => constructs videoLibrary section
    useEffect(()=> {
        axios.get(`${API_URL}/videos`).then(response => {
            setAllVideos(response.data);
            })
            .catch(error => {
                console.log("error")
            });
    }, []);
    /// IF NO VIDEO CHOOSEN LOADS THE FIRST ONE FROM allVideos
    useEffect(()=>{
        if (allVideos.length > 0 && !id) { 
            const activeVideoId = allVideos[0].id
            axios.get(`${API_URL}/videos/${activeVideoId}`).then (response =>{
                setActiveVideo(response.data)
            })
            .catch(error => {
                console.log("error")
            });
        }
    }, [allVideos, id]);
    ////SETS ACTIVE VIDEO BASED ON ID FROM URL
    useEffect (() => {
        if (id) {
            axios.get(`${API_URL}/videos/${id}`).then(response => {
                setActiveVideo(response.data)
            })
            .catch(error => {
                console.log("error")
            });
        }
    }, [id]) 

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
                {activeVideo.comments && <Comments api={API_URL} videoId={activeVideo.id} comments={activeVideo.comments}/>}
            </div>
            <VideoLibrary videos={allVideos} videoId={activeVideo.id}/>
        </div>
    </div>
    )
}

export default HomePage