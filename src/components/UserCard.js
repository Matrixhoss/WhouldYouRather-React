import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Grid ,Image ,Label ,Segment, Header } from 'semantic-ui-react'


class UserCard extends Component {
    render() {
        const {avatar ,name ,aScore ,qScore ,totalScore ,order} = this.props
        let color = 'white'
        switch(order){
            case 0 : color = 'yellow' 
                break
            case 1 : color = 'grey'
                break
            case 2 : color = 'brown'
                break
            default : color = 'white'
              
        }
        return (
            <Segment.Group>
               
                <Label as='a' color={color} corner='right' icon='trophy'/>
                
                <Grid padded verticalAlign='middle' columns={3} >
                    <Grid.Column width={5} >
                        <Image src={avatar} circular size='small'/>
                    </Grid.Column>
                    
                    <Grid.Column width={6 } >
                        <Header dividing >{name}</Header>
                        <p>Question Asked : {qScore}</p>
                        <p>Question Answered : {aScore}</p>
                    </Grid.Column>
                
                    <Grid.Column width={5} textAlign='center'>
                        <Label circular color={color} key={color} size='huge'>
                            <p className="score">{totalScore}</p>
                        </Label>
                    </Grid.Column>
                 </Grid>
            </Segment.Group>
        )
    }
}

function mapStateToProps({users},{id ,order}){
    const aScore =  Object.keys(users[id].answers).length
    const qScore =  Object.keys(users[id].questions).length
    const totalScore = aScore + qScore
    const name = users[id].name
    const avatar = users[id].avatarURL


    return {
        
        aScore,
        qScore,
        totalScore,
        name,
        avatar,
        order
    }
}

export default connect(mapStateToProps)(UserCard)