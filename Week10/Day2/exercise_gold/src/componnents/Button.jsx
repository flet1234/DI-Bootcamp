const Button = (props) => {

    return <button onClick={()=>props.function(props.task, props.name)}>{props.title}</button>
}

export default Button