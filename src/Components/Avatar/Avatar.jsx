import avatar from '../../assets/Images/Mohan-muruge.jpg'
import './Avatar.scss'

function Avatar() {
    return (
        <div className='comments__avo'>
            <img className="comments__avo-img" alt="avo" src={avatar}></img>
        </div>
    )
}

export default Avatar;