import React , {Component} from 'react';
import {connect} from 'react-redux'
import QuestionsList from './QuestionsList'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import {handleInitialData} from "../actions/shared"
import './App.css';
import AddNewQuestion from './AddNewQuestion'
import LoadingBar from 'react-redux-loading-bar'
import {Grid} from 'semantic-ui-react'
import Login from './Login';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom' 
import QuestionPage from './QuestionPage';
import NotFound from './NotFoundPage'
//TODO : add router

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())

   
  }
  render(){
  return (
    <Router>
      <div className="App">
        {this.props.loading ? 
          <LoadingBar />: 
          <TheContainer>
            {this.props.authedUser === "" ? <Route component={Login} /> : 
            <div>
              <Nav />
              <Switch>
                <Route path='/' exact component={QuestionsList} />
                <Route path='/new' component={AddNewQuestion}/>
                <Route path='/leaderboard' component={Leaderboard}  />
                <Route path="/questions/:question_id" component={QuestionPage} />
                <Route path='*' exact={true} component={NotFound} />
              </Switch>
            </div>
            }
          </TheContainer>
          
        }
      </div>
    </Router>
  );
  }
}
const TheContainer = ({ children }) => (
  <Grid padded centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 800 }}>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps ({loadingBar ,authedUser}){
  return {
    loading : loadingBar.default === 1,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
