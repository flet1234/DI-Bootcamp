

const Parent = (props) => {
    console.log(props);
    // return (
    //     <h2>Parent</h2>
    // )
    if(props.auth === 'admin'){
        return props.children
    }
    return <h2>unatorized to see this</h2>
}
export default Parent