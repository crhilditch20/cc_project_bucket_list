import React from 'react'
import { Link, browserHistory } from 'react-router'
import Countries from './Countries'
import Experiences from './Experiences'
import Events from './Events'
import IndividualItem from './IndividualItem'

class BucketList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bucketlistItems: [],
      bucketlistCountries: [],
      bucketlistExperiences: [],
      bucketlistEvents: [],
      selectedItem: null,
      selectedItemType: ""
    }
  }

  componentDidMount(){
    var data = []
    var url = 'http://localhost:5000/bucketlists'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        data = JSON.parse(request.responseText)
        this.setState( { bucketlistItems: data } )
        this.splitOutCategories();
       } else{
        console.log("Not logged in")
        browserHistory.goBack()
       }
    }
    request.send(null)

  }

    splitOutCategories () {
      const countries = this.state.bucketlistItems[0];
      this.setState({bucketlistCountries: countries})

      const experiences = this.state.bucketlistItems[1];
      this.setState({bucketlistExperiences: experiences})

      const events = this.state.bucketlistItems[2];
      this.setState({bucketlistEvents: events})
    }

    loadIndividualCountry (countryID) {
      console.log(countryID);
      var url = 'http://localhost:5000/countries/' + countryID;
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          this.setState({selectedItem: data})
          this.setState({selectedItemType: "country"})
         } else{
          console.log("object not found")
         }
      }
      request.send(null)
    }

    loadIndividualExperience (experienceID) {
      var url = 'http://localhost:5000/experiences/' + experienceID;
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          this.setState({selectedItem: data})
          this.setState({selectedItemType: "experience"})
         } else{
          console.log("object not found")
         }
      }
      request.send(null)
    }

    loadIndividualEvent (eventID) {
      var url = 'http://localhost:5000/events/' + eventID;
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          this.setState({selectedItem: data})
          this.setState({selectedItemType: "event"})
         } else{
          console.log("object not found")
         }
      }
      request.send(null)
    }

    // pageRefresh () {
    //   this.setState({selectedItem: null});
    // }


  render () {
    var mainDiv = 
    <div className="bucketlist-homepage">
    <div className="title-div"> <img className='icon' src="./images/bucket.png"></img> <h2>Welcome to My Bucket List!</h2> 
    <Link to='/'>Sign out</Link>
    </div>
    <div className="category-div">
      <Countries countries={this.state.bucketlistCountries} loadCountry={this.loadIndividualCountry.bind(this)}/>
        <Experiences experiences={this.state.bucketlistExperiences} loadExperience={this.loadIndividualExperience.bind(this)}/>
          <Events events={this.state.bucketlistEvents} loadEvent={this.loadIndividualEvent.bind(this)}/>

    </div>
    </div>

    if (this.state.selectedItem){
      mainDiv = 
      <div className="individual-item">
        <IndividualItem item={this.state.selectedItem} category={this.state.selectedItemType} reload={this.loadIndividualCountry.bind(this)} />
      </div>
    }

    return (
      <div>
      {mainDiv}
      </div>
      );
    }
}
//pageRefresh={this.pageRefresh.bind(this)}

export default BucketList