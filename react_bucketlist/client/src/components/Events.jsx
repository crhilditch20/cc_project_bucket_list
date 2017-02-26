import React from 'react'

class Events extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedEventID: null
    }
  }

  render () {
    var events = this.props.events.map(function(event, index){
      return (
        <div className="bucketlistItem">
        <img className="homepage-pic" src={event.event.imageURL}></img>
          <button className="goToItem" key={index} value={index}>{event.event.title}</button>
        </div>
        );
      }.bind(this));
      return (
      <div id="events">
       
          {events}
    
      </div>
      );
  }
}

export default Events;