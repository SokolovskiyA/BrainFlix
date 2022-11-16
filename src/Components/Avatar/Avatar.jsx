import './Avatar.scss'

function Avatar(props) {
    return (
        <div className='avo-container'>
        {props.avatar !== undefined?
            <img className="avo-img" alt="avo"  src={props.avatar}/>
            : null
        }
        </div>
    )
}

export default Avatar;