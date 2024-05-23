interface NavLinks {
    name:any
    address:string  
    onClick?():void
}

const Navlinks = (props:NavLinks) => {
    return <a href={props.address} onClick={props.onClick}>{props.name}</a>
}

export default Navlinks


