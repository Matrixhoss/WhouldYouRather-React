import React, { Component } from 'react'
import { Grid, Image ,Header, Segment ,Button ,Divider } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Question extends Component {

    render() {
        const {question ,quser ,type} =this.props
        const color =  type === 'U' ? 'red' : 'green'
        const buttonText = type==='U' ? 'Answer' : 'View Poll'
        return (
           
            <Grid>
                <Grid.Column width={4}>
                    <Image src={quser.avatarURL} size='small' circular />
                </Grid.Column>
                <Grid.Column width={12}>
                     <Header dividing >{quser.name}</Header>
                     <Header as="h4" >Would you rather</Header>
                     <Segment>
                            <Grid columns={2} stackable textAlign='center'>
                            <Divider vertical>Or</Divider>
                            <Grid.Row verticalAlign='middle'>
                                <Grid.Column>
                                <p>{question.optionOne.text}</p>
                                </Grid.Column>
                                <Grid.Column>
                                <p>{question.optionTwo.text}</p>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                        </Segment>
                        <Link to={`/questions/${question.id}`}>
                            <Button color={color} fluid >{buttonText}</Button>
                        </Link>
                </Grid.Column>
            </Grid>
           // </Segment>
        )
    }
}

function mapStateToProps ({ questions ,users} , {id ,type}){
    const question = questions[id] ? questions[id] : null 
    const quser =  users[question.author] ? users[question.author] : null
   
    return {
        question,
        quser,
        type
    }
}
export default connect(mapStateToProps)(Question)