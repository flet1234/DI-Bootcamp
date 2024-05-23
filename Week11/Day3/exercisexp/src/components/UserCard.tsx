interface UserCardInterface {
    name?:string
    age?:string
}


const UserCard = ({name = 'friend ',age = 'great'}:UserCardInterface) => {
    return (
        <>
            <div>
                <h3> Hi {name}, your age is {age}</h3>
            </div>
        </>
    )
}

export default UserCard