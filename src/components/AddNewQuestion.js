import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/shared'
import {Segment ,Header ,Input ,Button  ,Grid ,Form ,Loader ,Dimmer} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'


 class AddNewQuestion extends Component {
     state = {
         option1: '' ,
         option2:'' ,
         option1Error : false,
         option2Error : false,
         toHome : false
         
     }

     handleAddQuestion = () => {
         const {authedUser , dispatch} =this.props 
         const {option1 ,option2} = this.state
         dispatch(handleAddQuestion(option1 ,option2 ,authedUser))
         this.setState({
             toHome : true
         })
      
     }
     handleOption1Input= (value) =>{
         this.setState({
             option1 : value
         })
     }
     handleOption2Input= (value) =>{
         this.setState({
             option2 : value
         })
     }
    render() {
       
        if (this.state.toHome === true && this.props.loader === false) return <Redirect to='/' />
        return (
            <Segment.Group>
                {this.props.loader === true &&<Dimmer active inverted>
                    <Loader size='large' >Loading</Loader>
                </Dimmer>}
             <Header as='h1' block  attached='top'>Create new poll</Header>
             <Grid padded>
                <Grid.Column>
                 <Header as='h3'>Would you rather</Header>
                 <Form>
                    <Form.Field>
                        <label>First Question</label>
                        <Input 
                        placeholder='First Question'
                        value = {this.state.option1}
                        onChange = {(e) => this.handleOption1Input(e.target.value)}
                        
                         />
                       
                    </Form.Field>
                    <Form.Field>
                        <label>Last Question</label>
                        <Input 
                        placeholder='Last Question' 
                        value = {this.state.option2}
                        onChange = {(e) => this.handleOption2Input(e.target.value)}
                        />
                      
                    </Form.Field>
                    <Form.Field>
                        <Button 
                        color='green' 
                        type='submit' 
                        fluid 
                        onClick={this.handleAddQuestion} 
                        
                        disabled={this.state.option1==='' || this.state.option2===''}>
                             Add Poll
                        </Button>
                    </Form.Field>
                   
              </Form>
                </Grid.Column>
              </Grid>
            </Segment.Group>
            
            
        )
    }
}



function mapstateToProps ({authedUser ,loader}){
    return{
        authedUser,
        loader
    }
}
export default connect(mapstateToProps)(AddNewQuestion)