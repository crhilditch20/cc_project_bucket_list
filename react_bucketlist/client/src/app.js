import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import Main from './components/Main'
import BucketList from './components/BucketList'
import AddCountry from './components/AddCountry'
import AddExperience from './components/AddExperience'
import AddEvent from './components/AddEvent'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/bucketlists' component={BucketList} />
          <Route path='/countries' component={AddCountry} />
          <Route path='/experiences' component={AddExperience} />
          <Route path='/events' component={AddEvent} />
          
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
