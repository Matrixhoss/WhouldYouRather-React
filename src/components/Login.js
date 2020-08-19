import React, { Component } from 'react'
import {connect} from 'react-redux'
import {receiveAuthedUser} from '../actions/authedUser'
import {Segment ,Dropdown, Button ,Grid,Header } from 'semantic-ui-react'




class Login extends Component {
    state = {
        selectedUser : ''
    }
    handleSelectUser (e , data){
      this.setState({selectedUser : data.value})
    }
    handleLogin(dispatch){
        
         dispatch(receiveAuthedUser(this.state.selectedUser))
        

        
    }
    render() {
        const {users ,dispatch} = this.props
        const options = Object.keys(users).map((key) => {
            return {
                key: key,
                text: key,
                value: key,
                image: { avatar: true, src: users[key].avatarURL },
            }
        })
        return (
            <Segment padded>
                <Grid>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                     <Header as='h1' block attached='top'>Welcome to Would You Rather App</Header>
                    </Grid.Column>
                   
                </Grid.Row>
                 <Grid.Row>
                  <h2>Login :</h2>
                  <Dropdown
                    placeholder='Select User'
                    fluid
                    selection
                    onChange={(e,data) =>this.handleSelectUser(e , data)}
                    options={options}
                    />
                    </Grid.Row>
                    <Grid.Row>
                      
                        <Grid.Column textAlign="center">
                          
                            <Button 
                            onClick={() =>this.handleLogin(dispatch) } 
                            color='green'
                            disabled={this.state.selectedUser===""}
                            > Login
                            </Button>
                         

                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                  
            </Segment>
        )
    }
}

function mapStateToProps({users}){
    return {
        users
    }
}
export default connect(mapStateToProps)(Login)