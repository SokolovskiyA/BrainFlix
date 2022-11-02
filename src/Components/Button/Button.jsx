import './Button.scss'

function Button(props) {
    return(
        <button className={props.className}><img src={props.src}/><span className={props.spanClass}>{props.name}</span></button>
    )
}

export default Button