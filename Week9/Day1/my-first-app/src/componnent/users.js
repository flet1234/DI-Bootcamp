import './users.css'


export  default function ShowUsers(props) {
    let style ={
        display:'inline-block',
        border:'1px solid #000',
        margin:'20px',
        textAlign:'center',
        padding:'20px',
        backgroundColor:'cyan'
        }
    return <ul className='userinfo'>
        <li style={{color:'red'}}>{props.info.name}</li>
        <li>{props.info.email}</li>
        <li>{props.info.username}</li>
    </ul>
}
