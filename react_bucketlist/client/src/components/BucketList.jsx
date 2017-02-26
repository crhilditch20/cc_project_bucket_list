import React from 'react'
import { Link, browserHistory } from 'react-router'

class BucketList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bucketlistItems: []
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
        console.log(data[0][0].country.name)
       } else{
        console.log("Not logged in")
        browserHistory.goBack()
       }
    }
    request.send(null)

  }


  render () {
    return <div className="bucketlist-homepage">
      



    </div>
  }

}

export default BucketList