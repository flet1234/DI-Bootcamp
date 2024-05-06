

export  default function ShowUsers(props) {
    return <ul>
        <li style={{color:'red'}}>{props.name}</li>
        <li>{props.email}</li>
        <li>{props.username}</li>
    </ul>
}
