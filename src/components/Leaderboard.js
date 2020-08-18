import React, { Component } from 'react'
import {connect} from 'react-redux'
import UserCard from './UserCard'

 class Leaderboard extends Component {
    render() {
      const {sortedUsers} = this.props
        return (
            <div>
                {sortedUsers.map((uid ,index) => (
                    <UserCard id = {uid} order={index} key={uid}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({users}){
    const sortedUsers = Object.keys(users).sort((a,b)=>{
       const aScore = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
       const bScore = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length

       return aScore > bScore ? -1 : 1
      });
     
      return {
          sortedUsers
      }
}

export default connect(mapStateToProps)(Leaderboard)