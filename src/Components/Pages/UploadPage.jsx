import React from 'react'
import Button from '../Button/Button'
import './UploadPage.scss'
import thumbnail from '../../assets/Images/thumbnail.jpg'
import publish from '../../assets/Icons/publish.svg'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
const API_URL = "http://localhost:5000"


function UploadPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState({preview: thumbnail, data: '' })
    const navigate = useNavigate();
    ///HANDLE SUBMIT FORM

    const handleImageChoice = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
            }
        setImage(img)
    }
    const handleSubmit = e => {
    if (title === "" || description === "" || image.preview === thumbnail) {
        e.preventDefault();
        swal("Sorry", "Please provide video name, description and thumbnail", "error")
    }
    else {
        e.preventDefault();
        const newVideo = new FormData();
        newVideo.append("title", `${title}`);
        newVideo.append("description", `${description}`);
        newVideo.append("image", image.data)
        axios.post(`${API_URL}/videos`, newVideo)
        .then(response => {
            swal("Thank you", "Video upload successful", "success")
            navigate('/')
        })
        .catch(error => {
            console.log("error")
        });
    }
} 

    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload Video</h1>
            <form onSubmit={handleSubmit} className='upload__form' encType="multipart/form-data" method="POST" action="/videos">
                <div className='upload__thumbnail-div'> 
                    <label className='upload__label'>video thumbnail</label>
                    {image.preview && <img src={image.preview} className='upload__thumbnail' alt='thumbnail' width='100' height='100' />}
                </div>
                <div className='upload__form-div'>
                    <label className='upload__label' labelfor="name">title your video</label>
                    <input className="upload__title" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add title to your video" ></input>
                    <label className='upload__label' labelfor="description">add a video description</label>
                    <textarea className="upload__description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="5" placeholder="Add a description to your video"></textarea>
                    <label labelfor="image" className="upload__file-picker button">
                        <img alt='button-logo' src={publish}/><span className="button__text">upload thumbnail</span>
                        <input className="upload__image" type='file' name='image' onChange={handleImageChoice}/>
                    </label>
                </div>
                <div className='upload__button-div'>
                    <Button type='submit' className='button upload__button' name='publish' src={publish} spanClass ='button__text'/>
                    <button disabled={true} className='upload__cancel'>cancel</button>
                </div>
            </form>
        </section>
    )
}

export default UploadPage