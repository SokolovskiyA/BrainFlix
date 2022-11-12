import avatar from '../../assets/Images/Mohan-muruge.jpg'
import './Avatar.scss'

function Avatar(props) {
    return (
        <div className='avo-container'>
            <img className="avo-img" alt="avo" src={props.avatar}/>
        </div>
    )
}

export default Avatar;