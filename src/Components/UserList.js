import React from 'react'
import User from './User'

function UserList(props){

    const mappedUsers=props.users.map((element,index) => {
        return <User handleChangeIndex={props.handleChangeIndex} product={element} index={index}/>
    })

    return <div classname='user-list'>{mappedUsers}</div>
}

export default UserList