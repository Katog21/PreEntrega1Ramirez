
const Button = (props) => {
    return <button onClick={props.callback} style={{ color: props.textColor, background: props.back}} className= {props.className}>{props.text}</button>

}
export default Button