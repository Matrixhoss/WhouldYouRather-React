import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Segment ,Label ,Progress} from 'semantic-ui-react'

 class AnswerdQuestion extends Component {
    render() {
        const {question ,authedAnswer } =this.props
        const option1Votes = Object.keys(question.optionOne.votes).length
        const option2Votes = Object.keys(question.optionTwo.votes).length
        const option1percent = ((option1Votes / (option1Votes+option2Votes))*100).toFixed()
        const option2percent = ((option2Votes / (option1Votes+option2Votes))*100).toFixed()
        const winner = option1Votes > option2Votes ? 'one' : option1Votes === option2Votes ? 'both' : 'two'
        
        return (
            <Segment>
                     <Segment color={winner==='one' ? 'green' : 'grey'}>
                        {authedAnswer === 'optionOne' &&
                        <Label as='a' color='orange' ribbon='right'>
                           Your Vote
                        </Label>
                        }
                        <p>{question.optionOne.text}</p>
                        <Progress percent={option1percent} progress color={winner==='one' ? 'green' : 'grey'}/>
                        <p><strong>Votes : {option1Votes}</strong></p>
                     </Segment>
                     
                     <Segment color={winner==='two' ? 'green' : 'grey'}>
                     {authedAnswer === 'optionTwo' &&
                        <Label as='a' color='orange' ribbon='right'>
                           Your Vote
                        </Label>
                        }
                        <p>{question.optionTwo.text}</p>
                        <Progress percent={option2percent} progress color={winner==='two' ? 'green' : 'grey'}/>
                        <p><strong>Votes : {option2Votes}</strong></p>
                     </Segment>
            </Segment>
        )
    }
}

function mapStateToProps({authedUser ,users, questions}, {id}){
    const question = questions[id] ? questions[id] : null 
    const authedAnswer = users[authedUser].answers[question.id] ? users[authedUser].answers[question.id] : null
    return {
        
        authedAnswer,
        question
    }
}
export default connect(mapStateToProps)(AnswerdQuestion)