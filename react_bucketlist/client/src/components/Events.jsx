import React from 'react';
import { Link } from 'react-router';

class Events extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedEventID: null
    }
  }
  goToEvent (browserEvent) {
  var eventID = browserEvent.target.value;
  this.props.loadEvent(eventID);
}

  render () {
    var events = this.props.events.map(function(event, index){
      return (
        <div key={index} className="bucketlistItem">
        <img className="homepage-pic" src={event.event.imageURL}></img>
          <button className="goToItem" key={index} value={event.id} onClick={this.goToEvent.bind(this)}>{event.event.title}</button>
        </div>
        );
      }.bind(this));
      return (
      <div id="events">
      <h4>Events</h4>
      <Link className="add-new" to='/events'>Add new</Link>
       
          {events}
    
      </div>
      );
  }
}

export default Events;