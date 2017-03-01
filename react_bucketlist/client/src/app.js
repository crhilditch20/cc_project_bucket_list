import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import Main from './components/Main'
import BucketList from './components/BucketList'
import AddCountry from './components/AddCountry'
import AddExperience from './components/AddExperience'
import AddEvent from './components/AddEvent'
import ArchiveCountry from './components/ArchiveCountry'
import ArchiveExperience from './components/ArchiveExperience'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      selectedItem: "test"
    }
  }

  handleSelection (item) {
    this.setState({selectedItem: item});
  }

  componentWillUpdate () {
    console.log("state updated");
  }

  componentDidUpdate () {
    console.log("state really really updated");
  }

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/bucketlists' component={BucketList} handleSelection={this.handleSelection.bind(this)} />
          <Route path='/countries' component={AddCountry} />
          <Route path='/experiences' component={AddExperience} />
          <Route path='/events' component={AddEvent} />
          <Route path='/archivedcountries' component={ArchiveCountry}/>
          <Route path='/archivedexperiences' component={ArchiveExperience}/>
          
          
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
