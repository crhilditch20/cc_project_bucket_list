import React from 'react';
import { Link } from 'react-router';

class AddEvent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      venue: "",
      mapURL: "",
      date: "",
      imageURL: "",
      success: false
    }
  }

  addToDatabase (event) {
    console.log("event starting")
    const url = "http://localhost:5000/events"
    event.preventDefault();
    const request = new XMLHttpRequest();
      request.open('POST', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = true;
      request.onload = () => {
        if (request.status === 200){
          console.log("Added to database");
          this.setState({success: true});
        }
      }
      const data = {
          event: {
          title: this.state.title,
          description: this.state.description,
          venue: this.state.venue,
          mapURL: this.state.mapURL,
          date: this.state.date,
          imageURL: this.state.imageURL
        }
      }
      request.send(JSON.stringify(data));
    }

  handleOnChangeTitle(event) {
      this.setState({title: event.target.value})
    }

  handleOnChangeDescription(event) {
    this.setState({description: event.target.value})
  }

  handleOnChangeVenue(event) {
    this.setState({venue: event.target.value})
  }

  handleOnChangeMapURL(event) {
    this.setState({mapURL: event.target.value})
  }

  handleOnChangeDate(event) {
    this.setState({date: event.target.value})
  }

  handleOnChangeImageURL(event) {
    this.setState({imageURL: event.target.value})
  }

  render () {
    var addEventDiv = 
      <div>
        <h4>Add a new event to my bucket list</h4>
        <form onSubmit={this.addToDatabase} className='bucketlist-form'>
          <input type="text" onChange={this.handleOnChangeTitle.bind(this)}  placeholder="Title" />
          <input type="text" onChange={this.handleOnChangeDescription.bind(this)}  placeholder="Description" />
          <input type="text" onChange={this.handleOnChangeVenue.bind(this)}  placeholder="Venue" />
          <input type="text" onChange={this.handleOnChangeDate.bind(this)}  placeholder="Date" />
          <input type="text" onChange={this.handleOnChangeMapURL.bind(this)}  placeholder="Map URL" />
          <input type="text" onChange={this.handleOnChangeImageURL.bind(this)}  placeholder="Image URL" />

          <button onClick={this.addToDatabase.bind(this)}>Add to my Bucket List </button>
        </form>
      </div>

      if(this.state.success){
        addEventDiv = <div>
          <h4> {this.state.title} added to your bucket list!</h4>
          <Link className='bucket-list-link' to='/bucketlists'>Return to Bucket List</Link>
        </div>
      }

      return (
        <div>
          { addEventDiv }
        </div>
        );
  }
}

export default AddEvent;