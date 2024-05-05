import React from 'react'

class UserFavoriteAnimals extends React.Component{
    render() {
        const {favAnimals} = this.props

        return <>
                <h2>User's favorite Animals</h2>
                <ul>
                    {favAnimals.map((item,i)=>{
                       return <li key={i}>{item}</li>
                    })}
                </ul>
                </>
    }
}

export default UserFavoriteAnimals