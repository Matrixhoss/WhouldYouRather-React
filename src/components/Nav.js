import React, { Component } from 'react'
import {Menu, Image} from 'semantic-ui-react'
import {connect } from 'react-redux'
import {authedUserLogout} from '../actions/authedUser'
import {NavLink } from 'react-router-dom'

 class Nav extends Component {
    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })

        switch(name){
            case 'logout' : 
                this.props.dispatch(authedUserLogout())
                break
            default : 
        }
    }
    render() {
      const {authedUser ,users} = this.props
      const avatar = users[authedUser] ? users[authedUser].avatarURL : ''
      const name = users[authedUser] ? users[authedUser].name : ''
      
      const {activeItem} = this.state
      
        return (
         
            <Menu stackable>

                <Menu.Item>
                    <Image circular size='mini' src={avatar} />

                    <strong>{name}</strong>
                </Menu.Item>

                <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as={NavLink}
                exact to="/"
                >
                Home
                </Menu.Item>
                
                <Menu.Item
                name='add-pull'
                active={activeItem === 'add-poll'}
                onClick={this.handleItemClick}
                as={NavLink}
                exact to="/new"
                >
                Add Poll
                </Menu.Item>

                <Menu.Item
                name='leaderboard'
                active={activeItem === 'leaderboard'}
                onClick={this.handleItemClick}
                as={NavLink}
                exact to="/leaderboard"
                >
                Leaderboard
                </Menu.Item>




                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
                as={NavLink}
                exact to="/"
                position='right'
                >
                Logout
                </Menu.Item>

            </Menu>
        )
    }
}

function mapStateToProps({authedUser , users}){
    return {
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(Nav)