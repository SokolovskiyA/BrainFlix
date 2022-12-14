import './Button.scss'


function Button(props) {
    return(
        <button disabled={props.disabled} className={props.className}><img alt='button-logo' src={props.src}/><span className={props.spanClass}>{props.name}</span></button>
    )
}

export default Button;