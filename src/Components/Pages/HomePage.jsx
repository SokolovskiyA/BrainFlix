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
    const API_URL = "https://project-2-api.herokuapp.com"
    const API_KEY = "?api_key=4e1230d3-9594-4666-9687-f225bd49bfd7"
    const [allVideos, setAllVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState({})
    useEffect(()=> {
        axios.get(`${API_URL}/videos${API_KEY}`).then(response => {
            setAllVideos(response.data);
            })
            .catch(error => {
                console.log("error")
            });
    }, []);
    useEffect(()=>{
        if (allVideos.length > 0 && !id) { 
            const activeVideoId = allVideos[0].id
            // console.log(activeVideoId)
            axios.get(`${API_URL}/videos/${activeVideoId}${API_KEY}`).then (response =>{
                setActiveVideo(response.data)
            })
            .catch(error => {
                console.log("error")
            });
        }
    }, [allVideos, id]);
    useEffect (() => {
        if (id) {
            axios.get(`${API_URL}/videos/${id}${API_KEY}`).then(response => {
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
                {activeVideo.comments && <Comments apiKey={API_KEY} api={API_URL} videoId={activeVideo.id} comments={activeVideo.comments}/>}
            </div>
            <VideoLibrary videos={allVideos} videoId={activeVideo.id}/>
        </div>
    </div>
    )
}

export default HomePage