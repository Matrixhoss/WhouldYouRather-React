import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'

//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';
import { Tab, Container, Segment } from 'semantic-ui-react'
 class QuestionsList extends Component {

    render() {
      const panes = [
        {
          menuItem: 'Unanswered Questions',
          render: () => <Tab.Pane attached={false}>
            <ul>
               {this.props.answerd.map((id) => (
                <Segment raised textAlign="left" size="large" color='red' padded='very' key ={id}>
                  <Question id ={id} type='U' />
                </Segment>
               ))}
            </ul>
          </Tab.Pane>,
        },
        {
          menuItem: 'Answerd Questions',
          render: () => <Tab.Pane attached={false}>
            <ul>
              {this.props.unanswerd.map((id) => (
                
                <Segment raised textAlign="left" size="large" color='green' padded='very' key = {id}>
                  <Question id ={id} />
                </Segment>
               
              ))}
            </ul>
          </Tab.Pane>,
        }
      ]
        return (
          <Container className="container" >
          <Tab menu={{ pointing: true }} panes={panes}  />
          </Container>
        )
    }
}


function mapStateToProps ({authedUser, questions , users}){
     const logedUser =users[authedUser]
     const questionIDs = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
     const answerd = questionIDs.filter((q) => !Object.keys(logedUser.answers).includes(q)) 
     const unanswerd = questionIDs.filter((q) => Object.keys(logedUser.answers).includes(q)) 
    return {
        answerd ,
        unanswerd
    }
  }
export default connect(mapStateToProps)(QuestionsList);