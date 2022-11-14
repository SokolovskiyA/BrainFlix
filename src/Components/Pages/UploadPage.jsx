import React from 'react'
import Button from '../Button/Button'
import './UploadPage.scss'
import thumbnail from '../../assets/Images/thumbnail.jpg'
import publish from '../../assets/Icons/publish.svg'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

function UploadPage() {
    
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        swal("Thank you", "Your video has ben submitted", 'success')
        navigate('/');
    };
    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload Video</h1>
            <form onSubmit={handleSubmit} className='upload__form'>
                <div className='upload__thumbnail-div'> 
                    <label className='upload__label'>video thumbnail</label>
                    <img src={thumbnail} alt='thumbnail' className='upload__thumbnail'/>
                </div>
                <div className='upload__form-div'>
                    <label className='upload__label'>title your video</label>
                    <input className="upload__title" type="text" placeholder="Add title to your video" ></input>
                    <label className='upload__label'>add a video description</label>
                    <textarea className="upload__description" name="comment" rows="5" placeholder="Add a description to your video"></textarea>
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