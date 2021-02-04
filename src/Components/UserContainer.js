import React, { Component } from "react";
import UserBox from "./UserBox";
// import users from './data'
// import UserList from './UserList'
// import User from './User'

class UserContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
    };
    // this.nextIndex
  }

  // nextIndex(currentIndex) => {

  render() {
    return (
      <div className="user-container">
        <h1>this is User Container</h1>
        <UserBox />
        {/* <UserList/> */}
      </div>
    );
  }
}

export default UserContainer;
