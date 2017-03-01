import React from 'react';
import { Link } from 'react-router';

class ArchiveCountry extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      country_id: this.props.location.query.id,
      best_memory: "",
      best_photo: "",
      success: false
    }
  }

  addToDatabase (event) {
    const url = "http://localhost:5000/archivedcountries"
    event.preventDefault();
    const request = new XMLHttpRequest();
      request.open('POST', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = true;
      request.onload = () => {
        if (request.status === 200){
          this.setState({success: true});
        }
      }
      const data = {
          archivedcountry: {
          country_id: this.state.country_id,
          best_memory: this.state.best_memory,
          best_photo: this.state.best_photo
        }
      }
      console.log(data);
      request.send(JSON.stringify(data));
    }

  handleOnChangeMemory(event) {
      this.setState({best_memory: event.target.value})
    }

  handleOnChangePhoto(event) {
    this.setState({best_photo: event.target.value})
  }

 

  render () {
    var archiveCountryDiv = 
      <div>
        <h4>Add this country to my archive</h4>
        <form onSubmit={this.addToDatabase} className='bucketlist-form'>
          <input type="text" readOnly={this.props.location.query.name} />
          <input type="text" onChange={this.handleOnChangeMemory.bind(this)}  placeholder="What's your best memory?" />
          <input type="text" onChange={this.handleOnChangePhoto.bind(this)}  placeholder="Add a URL to your favourite photo" />
          

          <button onClick={this.addToDatabase.bind(this)}>Archive this country </button>
        </form>
      </div>

      if(this.state.success){
        archiveCountryDiv = <div>
          <h4> {this.state.country} added to your archive!</h4>
          <Link className='bucket-list-link' to='/bucketlists'>Return to Bucket List</Link>
        </div>
      }

      return (
        <div>
          { archiveCountryDiv }
        </div>
        );
  }
}

export default ArchiveCountry;