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
      selectedItem: null
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
      var url = 'http://localhost:5000/countries/' + countryID;
      console.log(url);
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          this.setState({selectedItem: data})
          console.log(data)
         } else{
          console.log("object not found")
         }
      }
      request.send(null)
    }

    loadIndividualExperience (experienceID) {
      var url = 'http://localhost:5000/experiences/' + experienceID;
      console.log(url);
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          this.setState({selectedItem: data})
          console.log(data)
         } else{
          console.log("object not found")
         }
      }
      request.send(null)
    }

    loadIndividualEvent (eventID) {
      var url = 'http://localhost:5000/events/' + eventID;
      console.log(url);
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          this.setState({selectedItem: data})
          console.log(data)
         } else{
          console.log("object not found")
         }
      }
      request.send(null)
    }

  render () {
    var mainDiv = 
    <div className="bucketlist-homepage">
      <Countries countries={this.state.bucketlistCountries} loadCountry={this.loadIndividualCountry.bind(this)}/>
        <Experiences experiences={this.state.bucketlistExperiences} loadExperience={this.loadIndividualExperience.bind(this)}/>
          <Events events={this.state.bucketlistEvents} loadEvent={this.loadIndividualEvent.bind(this)}/>
    </div>

    if (this.state.selectedItem){
      mainDiv = 
      <div className="individual-item">
        <IndividualItem item={this.state.selectedItem}/>
      </div>
    }

    return (
      <div>
      {mainDiv}
      </div>
      );
    }
}

export default BucketList