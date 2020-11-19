import React, {Component} from 'react'
import UserDetail from './UserDetail'
// import UserList from './UserList'
// import User from './User'

class UserContainer extends Component {
    constructor(){
        super()
    }

    render(){
        return( <div className='user-container'>
            <h1>This Is the User Container</h1>
            <UserDetail/>
            {/* <UserList/> */}
        </div>)
    }
}

export default UserContainer