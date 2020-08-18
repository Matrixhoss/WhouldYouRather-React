import React, { Component } from 'react'
import {connect} from 'react-redux'

import AnswerdQuestion from './AnswerdQuestion'
import UnnswerdQuestion from './UnanswerdQuestion'
import { Segment ,Grid,Header,Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
  
    
    render() {
        const {question , quser ,authedAnswers, questionFound } = this.props

        if (questionFound === false){return <Redirect to='/notfound'/>}

        const isAnswerd = authedAnswers.includes(question.id) 
       
        return (
            <Segment raised textAlign="left" size="large" padded='very'>
            <Grid>
                <Grid.Column width={4}>
                    <Image src={quser.avatarURL} size='small' circular />
                </Grid.Column>
                <Grid.Column width={12}>
                     <Header dividing >{quser.name}</Header>
                     <Header as="h4" >Would you rather</Header>
                     
                     { isAnswerd ? 
                     <AnswerdQuestion id={question.id} />
                     :
                     <UnnswerdQuestion id={question.id} />
                    }
                
                </Grid.Column>
            </Grid>
            </Segment>
        )
    }
}

function mapStateToProps ({users, questions ,authedUser} , props){
    const id = props.match.params.question_id
    const questionFound =  questions[id] ? true : false
    const question = questionFound ? questions[id] : null 
    const quser =  questionFound ? users[question.author] : null
    const authedAnswers = questionFound ? Object.keys(users[authedUser].answers) : null


    return {
        question,
        authedUser,
        quser,
        authedAnswers,
        questionFound
    }

}

export default connect(mapStateToProps)(QuestionPage)