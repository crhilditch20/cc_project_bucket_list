import React from 'react'
import { Link, browserHistory } from 'react-router'
import Countries from './Countries'

class BucketList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bucketlistItems: [],
      bucketlistCountries: [],
      bucketlistExperiences: [],
      bucketlistEvents: []
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
        console.log(data[0])
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


  render () {
    return <div className="bucketlist-homepage">
      <Countries countries={this.state.bucketlistCountries}/>



    </div>
  }

}


export default BucketList