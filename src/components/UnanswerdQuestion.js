import React, { Component } from 'react'
import { Segment ,Form,Radio,Button,Loader ,Dimmer } from 'semantic-ui-react'
import {handleAnswerQuestion} from '../actions/shared'
import{connect} from 'react-redux'

class UnanswerdQuestion extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    handleSubmit =() => {
        const {question  , authedUser , dispatch} =this.props
        const qid = question.id
        const answer = this.state.value === 'First' ? 'optionOne' : 'optionTwo'

        dispatch(handleAnswerQuestion(authedUser , qid , answer))
    }
    render() {
        const {question} =this.props
        return (
            <div>
                     <Segment>
                        {this.props.loader === true &&<Dimmer active inverted>
                          <Loader size='large' >Loading</Loader>
                        </Dimmer>}
                        <Form>
                        <Form.Field>
                        Selected question: <b>{this.state.value}</b>
                        </Form.Field>
                        <Form.Field>
                        <Radio
                            label={question.optionOne.text}
                            name='radioGroup'
                            value='First'
                            checked={this.state.value === 'First'}
                            onChange={this.handleChange}
                        />
                        </Form.Field>
                        <Form.Field>
                        <Radio
                            label={question.optionTwo.text}
                            name='radioGroup'
                            value='Second'
                            checked={this.state.value === 'Second'}
                            onChange={this.handleChange}
                        />
                        </Form.Field>
                    </Form>
                    </Segment>
                 <Button color='green' fluid disabled={!this.state.value} onClick={this.handleSubmit}>Submit</Button>
            </div>
        )
    }
}
function mapStateToProps ({loader, questions ,authedUser} , {id}){
    const question = questions[id] ? questions[id] : null 
  

    return {
        question,
        authedUser,
        loader

    }

}
export default connect(mapStateToProps)(UnanswerdQuestion)